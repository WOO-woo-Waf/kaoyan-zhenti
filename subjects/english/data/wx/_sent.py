# -*- coding: utf-8 -*-
"""逐句精读：给阅读/完形的每个段落加上「句级」数据

每句产出：
  { en, zh, main, chunks:[{t, r}] }
    main   : 一句话点破主干（主语 + 谓语 + 核心宾语）
    chunks : 意群切分，每块带功能标签（主语/谓语/状语从句/定语从句/分词短语…）

做法：
  1. 英文按句切（保护 [[n]] 空位、引号、缩写）
  2. 中文译文按 。！？； 切
  3. 英文句与中文句用「累计长度比例」做 DP 对齐，数量相等时直接 1:1
  4. 意群切分：在连词 / 关系词 / 介词短语 / 不定式 / 分词 前切
  5. 功能标注：按块首词 + 是否含限定动词判定
"""
import json, re, sys, os, glob

sys.stdout.reconfigure(encoding='utf-8')

ABBR = ('Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Prof.', 'St.', 'Jr.', 'Sr.', 'etc.', 'e.g.',
        'i.e.', 'vs.', 'No.', 'U.S.', 'U.K.', 'Fig.', 'cf.', 'al.')

# 句首起「切分」作用的词
CONJ = ('But', 'However', 'Yet', 'Moreover', 'Therefore', 'Thus', 'Instead', 'Indeed',
        'Also', 'Still', 'Even', 'And', 'So', 'Then', 'Meanwhile', 'Nevertheless',
        'Nonetheless', 'Consequently', 'Accordingly', 'Besides', 'Furthermore',
        'Similarly', 'Likewise', 'Otherwise', 'Rather', 'Rather than', 'In addition',
        'In contrast', 'As a result', 'For example', 'For instance', 'In fact',
        'In short', 'In other words', 'On the contrary', 'By contrast', 'Above all',
        'After all', 'At first', 'Now', 'Today', 'Recently')

SUBORD = ('that', 'which', 'who', 'whom', 'whose', 'when', 'where', 'while',
          'although', 'though', 'because', 'since', 'if', 'unless', 'as', 'whether',
          'what', 'how', 'why', 'before', 'after', 'until', 'once', 'whereas')

PREP = ('in', 'on', 'at', 'by', 'for', 'with', 'without', 'from', 'to', 'of', 'about',
        'after', 'before', 'during', 'through', 'despite', 'across', 'among', 'against',
        'between', 'into', 'onto', 'upon', 'within', 'beyond', 'toward', 'towards',
        'according to', 'as for', 'thanks to', 'due to', 'instead of', 'rather than',
        'in spite of', 'because of', 'in terms of', 'along with', 'apart from')

FINITE_AUX = {'is', 'are', 'was', 'were', 'be', 'been', 'am', 'has', 'have', 'had',
               'do', 'does', 'did', 'can', 'could', 'will', 'would', 'shall', 'should',
               'may', 'might', 'must'}
SPEECH_V = {'say', 'says', 'said', 'argue', 'argues', 'argued', 'find', 'finds', 'found',
            'believe', 'believes', 'believed', 'suggest', 'suggests', 'suggested',
            'think', 'thinks', 'thought', 'note', 'notes', 'noted', 'show', 'shows',
            'showed', 'shown', 'claim', 'claims', 'claimed', 'report', 'reports',
            'reported', 'reveal', 'reveals', 'revealed', 'add', 'adds', 'added',
            'explain', 'explains', 'explained', 'point', 'points', 'pointed', 'warn',
            'warns', 'warned', 'insist', 'insists', 'insisted', 'admit', 'admits',
            'concede', 'concedes', 'concluded', 'conclude', 'concludes'}


def protect(text):
    text = re.sub(r'\[\[(\d{1,2})\]\]', lambda m: '\x01%s\x02' % m.group(1), text)
    return text


def unprotect(text):
    return text.replace('\x01', '[[').replace('\x02', ']]')


def split_en(text):
    t = protect(text)
    for a in ABBR:
        t = t.replace(a, a.replace('.', '\x03'))
    t = re.sub(r'\b([A-Z])\.', lambda m: m.group(1) + '\x03', t)  # 人名缩写 Claire C. / John F.
    # 句末标点后跟空格 + 大写/引号/括号 → 切
    parts = re.split(r'(?<=[.!?])[\'"”’]?\s+(?=[A-Z"\u201c(\[]|\x01)', t)
    out = []
    for p in parts:
        p = p.replace('\x03', '.').strip()
        if p:
            out.append(unprotect(p))
    return out


def split_zh(text):
    parts = re.split(r'(?<=[。！？；])', text)
    return [p.strip() for p in parts if p.strip()]


def align(en_s, zh_s):
    """累计长度比例 DP 对齐（保序、可多对一）"""
    n, m = len(en_s), len(zh_s)
    if n == 0:
        return []
    if m == 0:
        return [(e, '') for e in en_s]
    if n == m:
        return list(zip(en_s, zh_s))
    le = [0.0]
    for e in en_s:
        le.append(le[-1] + len(e))
    lz = [0.0]
    for z in zh_s:
        lz.append(lz[-1] + len(z))
    te, tz = le[-1] or 1, lz[-1] or 1
    INF = float('inf')
    dp = [[INF] * (m + 1) for _ in range(n + 1)]
    bk = [[None] * (m + 1) for _ in range(n + 1)]
    dp[0][0] = 0.0
    for i in range(n + 1):
        for j in range(m + 1):
            if dp[i][j] == INF:
                continue
            for di in (1, 2):
                for dj in (1, 2):
                    ni, nj = i + di, j + dj
                    if ni > n or nj > m:
                        continue
                    cost = abs(le[ni] / te - lz[nj] / tz)
                    if dp[i][j] + cost < dp[ni][nj]:
                        dp[ni][nj] = dp[i][j] + cost
                        bk[ni][nj] = (i, j)
    pairs, i, j = [], n, m
    while (i, j) != (0, 0):
        b = bk[i][j]
        if b is None:                      # 兜底：逐格回退，绝不中断
            if i > 0:
                pairs.append((en_s[i - 1], ''))
                i -= 1
            elif j > 0:
                j -= 1
            continue
        pi, pj = b
        pairs.append((' '.join(en_s[pi:i]), ' '.join(zh_s[pj:j])))
        i, j = pi, pj
    pairs.reverse()
    return pairs


def split_commas(sent):
    """按逗号切意群（保护括号/引号内的逗号）"""
    out, buf, depth = [], [], 0
    for ch in sent:
        if ch in '([{“"':
            depth += 1
        elif ch in ')]}”"':
            depth = max(0, depth - 1)
        if ch in ',;:–—' and depth == 0:
            out.append(''.join(buf))
            buf = []
        else:
            buf.append(ch)
    out.append(''.join(buf))
    return [c.strip() for c in out if c.strip()]


CLAUSE_START = re.compile(
    r'(?<=\w)\s+(?=(?:that|which|who|whom|whose|when|where|because|since|although|'
    r'though|while|whereas|if|unless|whether|so that|such that|even if|in case|'
    r'as if|now that)\b)', re.I)


PREPS = set(PREP) | {'ago', 'than', 'that', 'as', 'to', 'per', 'via', 'up'}


def first_verb_pos(t):
    """返回第一个限定动词的字符位置。优先级：助动词 > -ed > -s > -ing"""
    toks = [(m.group(0), m.start()) for m in re.finditer(r"[A-Za-z']+", t)]

    def nxt(i):
        return toks[i + 1][0].lower().strip("'") if i + 1 < len(toks) else ''

    for i, (w, p) in enumerate(toks):
        wl = w.lower()
        if wl in FINITE_AUX:
            return p
        if wl in NOT_VERB:
            continue
        if len(wl) > 3 and wl.endswith('ed'):
            return p
        if len(wl) > 3 and wl.endswith('s') and not wl.endswith(('ss', 'us', 'is', 'ous')):
            if nxt(i) not in PREPS:
                return p
    return -1


CLAUSE_WORDS = ('that', 'which', 'who', 'whom', 'whose', 'when', 'where', 'because',
                'since', 'although', 'though', 'while', 'whereas', 'if', 'unless',
                'whether', 'so', 'such')


def cat_of(b, k):
    """块类别：prep / part / clause / advcl / inf / vp / np"""
    lw = b.lower()
    f = re.match(r"^[A-Za-z']+", lw)
    f = f.group(0) if f else ''
    wds = b.split()

    if f in CLAUSE_WORDS:
        if f in ('so', 'such') and len(wds) > 1 and wds[1].lower() != 'that':
            pass
        elif k > 0:
            pv = re.findall(r"[A-Za-z']+", ' '.join(wds[-3:]).lower())
            if f in ('that',) and pv and pv[-1] in SPEECH_V:
                return 'clause_obj'
            if f in ('because', 'since', 'although', 'though', 'while', 'whereas',
                      'if', 'unless', 'whether', 'so', 'such', 'whereas'):
                return 'advcl'
            return 'clause'
        elif f in ('that', 'which', 'who', 'whom', 'whose'):
            return 'np'

    # 连词开头：剥掉连词再判类别
    if f in ('but', 'yet', 'and', 'or', 'nor', 'so', 'for') and len(wds) > 1:
        rest = ' '.join(wds[1:])
        nf = re.match(r"^[A-Za-z']+", rest.lower())
        nf = nf.group(0) if nf else ''
        if nf in PREPS:
            return 'prep'
        return 'advcl' if first_verb_pos(rest) >= 0 else 'np'

    if f == 'to' and len(wds) > 1 and re.match(r'^[a-z]+', wds[1].lower()):
        return 'inf'
    if re.match(r'^[a-z]{4,}ing\b', lw):
        return 'part'
    if re.match(r'^[a-z]{4,}ed\b', lw) and f not in ('need', 'indeed', 'hundred', 'thousand'):
        nxtw = wds[1].lower() if len(wds) > 1 else ''
        return 'part' if nxtw in ('by', 'in', 'with', 'to') else 'vp'
    if f in PREPS:
        return 'prep'
    if first_verb_pos(b) >= 0:
        return 'vp'
    return 'np'


ROLE_TEXT = {
    'prep': '介词短语（状语/定语）',
    'part': '分词短语（插入语/定语）',
    'clause': '定语从句',
    'clause_obj': '宾语从句（that 引导）',
    'advcl': '状语从句',
    'inf': '不定式（目的/结果）',
    'vp': '谓语 + 宾语/表语',
    'np': '主语',
}


def chunk(sent):
    """意群切分 + 功能标注：先按逗号/破折号，再在从句引导词前二次切"""
    raw = []
    for seg in split_commas(sent):
        raw.extend([x.strip() for x in CLAUSE_START.split(seg) if x.strip()])
    if not raw:
        return [{'t': sent, 'r': '整句'}], sent

    # 把「主语 + 谓语」黏在一起的块拆开
    blocks, has_subj = [], False
    for b in raw:
        c = cat_of(b, len(blocks))
        pos = first_verb_pos(b)
        if not has_subj and c == 'vp' and pos > 0:
            subj = b[:pos].strip().rstrip(',')
            if subj:
                blocks.append(subj)
                has_subj = True
            blocks.append(b[pos:].strip())
        else:
            blocks.append(b)
            if c == 'np':
                has_subj = True

    roles, subj_seen, pred_seen = [], False, False
    for k, b in enumerate(blocks):
        c = cat_of(b, k)
        if c == 'np':
            r = '主语' if not subj_seen else '补充说明（同位/修饰）'
            subj_seen = subj_seen or r == '主语'
        elif c == 'vp':
            r = '并列谓语' if pred_seen else '谓语 + 宾语/表语'
            pred_seen = True
        else:
            r = ROLE_TEXT[c]
        roles.append(r)

    out = [{'t': b, 'r': r} for b, r in zip(blocks, roles)]
    subj = next((b for b, r in zip(blocks, roles) if r == '主语'), '')
    pred = next((b for b, r in zip(blocks, roles) if r.startswith('谓语')), '')
    main = (subj + ' ' + pred).strip() if pred else (subj or blocks[0])
    return out, main


NOT_VERB = {'always', 'perhaps', 'towards', 'besides', 'unless', 'whereas', 'across',
            'its', 'this', 'his', 'hers', 'ours', 'yours', 'theirs', 'as', 'was',
            'is', 'has', 'does', 'us', 'thus', 'yes', 'news', 'means', 'series',
            'species', 'physics', 'politics', 'economics', 'mathematics', 'ethics',
            'sometimes', 'nowadays', 'overseas', 'nevertheless', 'nonetheless'}


def has_finite(t):
    words = re.findall(r"[A-Za-z']+", t.lower())
    for w in words:
        if w in FINITE_AUX:
            return True
        if w in NOT_VERB:
            continue
        if len(w) > 3 and (w.endswith('ed') or w.endswith('ing')):
            return True
        if len(w) > 3 and w.endswith('s') and not w.endswith(('ss', 'us', 'is', 'ous')):
            return True
    return False


def role_of(c, k, allc):
    lw = c.lower()
    f = (re.match(r"^[A-Za-z']+", lw) or [None, ''])[0] if re.match(r"^[A-Za-z']+", lw) else ''

    # 从句引导词优先
    if f in ('that', 'which', 'who', 'whom', 'whose'):
        pv = re.findall(r"[A-Za-z']+", allc[k - 1].lower()) if k else []
        if pv and pv[-1] in SPEECH_V:
            return '宾语从句（that 引导）'
        return '定语从句'
    if f in ('because', 'since', 'as', 'although', 'though', 'while', 'whereas',
             'even', 'if', 'unless', 'whether', 'once', 'now'):
        return '状语从句'
    if f in ('when', 'before', 'after', 'until'):
        return '时间状语从句'
    if f == 'so' or lw.startswith('so that') or lw.startswith('such that'):
        return '结果状语从句'

    # 分词短语
    if re.match(r'^[a-z]+ing\b', lw) and k > 0:
        return '现在分词短语（状语/定语）'
    if re.match(r'^[a-z]+ed\b', lw) and f not in ('need', 'indeed', 'hundred', 'thousand'):
        return '过去分词短语（插入语）'
    if f == 'to' and re.match(r"^to\s+[a-z]+", lw):
        return '不定式（目的/结果）'

    # 介词短语
    if f in ('in', 'on', 'at', 'by', 'for', 'with', 'without', 'from', 'of', 'about',
             'after', 'before', 'during', 'through', 'despite', 'among', 'between',
             'according', 'due', 'instead', 'rather', 'along', 'apart', 'thanks',
             'as', 'like', 'unlike', 'beyond', 'within', 'upon', 'toward', 'towards'):
        return '介词短语（状语/定语）'

    # 无动词的短块 → 主语
    if not has_finite(c):
        if k == 0 or all(not has_finite(x) for x in allc[:k]):
            return '主语'
        return '补充说明（同位/修饰）'

    # 含限定动词
    if k == 0 or all(not has_finite(x) for x in allc[:k]):
        return '谓语 + 宾语/表语'
    return '并列谓语'


def para_sentences(en, zh):
    es = split_en(en)
    zs = split_zh(zh)
    pairs = align(es, zs)
    out = []
    for i, (e, z) in enumerate(pairs, 1):
        chunks, main = chunk(e)
        out.append({'i': i, 'en': e, 'zh': z, 'main': main, 'chunks': chunks})
    return out


def do_file(path):
    d = json.load(open(path, encoding='utf-8'))
    for t in d.get('reading', []):
        for p in t['paras']:
            p['sentences'] = para_sentences(p['en'], p['zh'])
    for p in d.get('partB', {}).get('paras', []):
        p['sentences'] = para_sentences(p['en'], p['zh'])
    for p in d.get('partC', {}).get('paras', []):
        p['sentences'] = para_sentences(p['en'], p['zh'])
    return d


def main():
    root = r'D:\buff\考研\英语\精读系统\data\paper'
    tot = 0
    for p in sorted(glob.glob(os.path.join(root, '*.json'))):
        y = os.path.basename(p)[:4]
        d = do_file(p)
        with open(p, 'w', encoding='utf-8') as f:
            json.dump(d, f, ensure_ascii=False, indent=1)
        with open(os.path.join(root, f'{y}.js'), 'w', encoding='utf-8') as f:
            f.write('window.__PAPER__ = window.__PAPER__ || {};\n')
            f.write('window.__PAPER__[%s] = %s;\n'
                    % (y, json.dumps(d, ensure_ascii=False, separators=(',', ':'))))
        n = sum(len(pp['sentences']) for t in d['reading'] for pp in t['paras'])
        tot += n
        print(y, '阅读句', n, '| 文件', round(os.path.getsize(os.path.join(root, f'{y}.js')) / 1e6, 2), 'MB')
    print('总句数', tot)


if __name__ == '__main__':
    main()
