# -*- coding: utf-8 -*-
"""Generate data/wx/20XX.js from parsed lazynote JSON + ECDICT."""
import io, json, math, os, re, sys

SRC = r'D:\buff\考研\英语\精读系统\data\wx\_src'
OUT = r'D:\buff\考研\英语\精读系统\data\wx'
EC = json.load(io.open(os.path.join(SRC, 'ecdict_small.json'), encoding='utf-8'))
WD = json.load(io.open(os.path.join(SRC, 'worddict2.json'), encoding='utf-8'))

YEARS = [y for y in range(2006, 2027) if y != 2013]

TYPE_MAP = {'词义辨析': '实词辨析', '逻辑关系': '逻辑关系',
            '固定搭配': '固定搭配', '语法结构': '语法结构'}

LOGIC_KEYS = [('因果', ['因果', '原因', '结果', '因此', '因为']),
              ('转折', ['转折', '然而', '对比反差']),
              ('对比', ['对比', '相反', '正相反']),
              ('递进', ['递进', '进一步', '程度加深']),
              ('举例', ['举例', '例证', '具体例']),
              ('条件', ['条件', '只要', '充分条件']),
              ('让步', ['让步', '尽管']),
              ('并列', ['并列', '对应关系']),
              ('时间', ['时间', '先后']),
              ('总结', ['总结', '概括'])]

STOP = set('''a an the and or but if while when as of to in on at by for with from into onto about
above below over under between among through during before after since until till than that this these
those there here where which who whom whose what why how not no nor so such too very can could may
might must shall should will would do does did done be been being am is are was were has have had
having it its they them their he him his her we us our you your i me my one two three also more
most much many few less least other another any some all both each either neither own same
according however therefore moreover furthermore thus hence although though because unless
its they're we're'''.split())

SUF = [('ies', 'y'), ('ied', 'y'), ('ying', 'y'), ('es', ''), ('ed', ''), ('ing', ''), ('ly', ''),
       ('er', ''), ('est', ''), ('s', ''), ('d', ''), ('', '')]


def lemma(w):
    if w in EC:
        return w
    for a, b in SUF:
        if w.endswith(a) and len(w) > len(a) + 2:
            c = w[:len(w) - len(a)] + b
            if c in EC:
                return c
            if a in ('ed', 'ing', 'es') and len(c) > 3 and c[-1] == c[-2] and c[:-1] in EC:
                return c[:-1]
    return None


def norm_phon(p):
    if not p:
        return ''
    p = p.strip().strip('/')
    p = p.replace('ә', 'ə').replace("'", 'ˈ').replace(',', 'ˌ')
    p = (p.replace('ɑ:', 'ɑː').replace('ɔ:', 'ɔː').replace('i:', 'iː')
          .replace('u:', 'uː').replace('ә:', 'əː').replace('ə:', 'əː')
          .replace('ei', 'eɪ').replace('ou', 'oʊ').replace('ai', 'aɪ').replace('au', 'aʊ'))
    return '/' + p + '/'


def phon_of(w):
    e = EC.get(w) or {}
    p = norm_phon(e.get('phon', ''))
    if p and p != '//':
        return p
    wd = WD.get(w) or {}
    return wd.get('phon', '') or ''


def zh_of(w):
    e = EC.get(w) or {}
    t = (e.get('trans') or '').strip()
    if not t:
        return ''
    t = t.replace('\n', '；')
    t = re.sub(r'\[[^\]]*\]\s*', '', t)
    t = re.sub(r'[a-zA-Z]+\.\s*', '', t)
    t = re.sub(r'\s+', '', t)
    t = re.sub(r'；+', '；', t).strip('；,，')
    parts = [x for x in t.split('；') if x]
    out = '；'.join(parts[:2])
    return out[:40]


POS_MAP = [('n.', 'n.'), ('v.', 'v.'), ('vt.', 'vt.'), ('vi.', 'vi.'), ('adj.', 'adj.'),
           ('adv.', 'adv.'), ('prep.', 'prep.'), ('conj.', 'conj.'), ('pron.', 'pron.'),
           ('art.', 'art.'), ('num.', 'num.'), ('aux.', 'aux.')]


def pos_of(w):
    e = EC.get(w) or {}
    t = (e.get('trans') or '')
    for line in t.split('\n'):
        for k, v in POS_MAP:
            if line.strip().startswith(k):
                return v
    return ''


def level_of(w):
    e = EC.get(w) or {}
    tag = e.get('tag', '')
    tags = set(tag.split())
    try:
        frq = int(e.get('frq') or 0)
    except Exception:
        frq = 0
    if 'ky' in tags:
        return '考研核心' if frq and frq <= 12000 else '大纲'
    if tags & {'cet4', 'cet6', 'gk'}:
        return '大纲'
    return '超纲'


def clamp_explain(s, lo=30, hi=80):
    s = re.sub(r'\s+', '', s)
    if len(s) > hi:
        cut = -1
        for i in range(hi, lo - 1, -1):
            if s[i - 1] in '。；，、,;':
                cut = i
                break
        s = s[:cut] if cut > 0 else s[:hi]
        s = s.rstrip('。；，、,;')
    if not s.endswith(('。', '！', '？')):
        s += '。'
    return s


def build_explain(b):
    ans = b['answer']
    word = b['opts'].get(ans, '')
    short = (b['short'].get(ans) or '').strip().rstrip('。')
    long_ = (b['long'].get(ans) or '').strip()
    if short.startswith('「'):
        head = f'{word}：{short}'
    else:
        head = f'「{word}」{short}' if short else f'「{word}」'
    cand = head + '。' + long_
    e = clamp_explain(cand)
    if len(e) < 30:
        e = clamp_explain(head + '。' + (b['clue'] or ''))
    if len(e) < 30:
        e = clamp_explain(head + '。代入原文语义最通顺，其余选项均与前后文逻辑或搭配冲突。')
    return e


def build_why(b):
    out = {}
    for L in ('A', 'B', 'C', 'D'):
        if L == b['answer']:
            continue
        s = (b['short'].get(L) or '').strip().rstrip('。')
        if s:
            out[L] = s
    return out


def build_logic(b):
    if b['type'] != '逻辑关系':
        return '', ''
    clue = b['clue'] or ''
    for name, keys in LOGIC_KEYS:
        for k in keys:
            if k in clue:
                return name, (b['opts'].get(b['answer'], '') if len(b['opts'].get(b['answer'], '')) < 20 else '')
    return '语义衔接', ''


def build_collocation(b):
    if b['type'] != '固定搭配':
        return ''
    s = (b['short'].get(b['answer']) or '')
    m = re.match(r'\s*([A-Za-z][A-Za-z \-\'\.]{2,40}?)\s*(?:是|表|意为|为)', s)
    if m:
        return m.group(1).strip()
    m2 = re.search(r'([a-z]+ (?:up|off|in|on|to|with|for|of|out|down|away|about|from) [a-z]+)', s)
    if m2:
        return m2.group(1)
    return b['opts'].get(b['answer'], '')


def toks(t):
    return [x.lower().strip("'") for x in re.findall(r"[A-Za-z][A-Za-z\-']+", t)]


def sentences(text):
    return [s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if s.strip()]


def pick_words(d, text_plain):
    seen, order = set(), []
    for w in toks(text_plain):
        if w in STOP or len(w) < 4:
            continue
        k = lemma(w)
        if not k or k in seen:
            continue
        e = EC.get(k) or {}
        zh = zh_of(k)
        if not zh:
            continue
        try:
            frq = int(e.get('frq') or 0)
        except Exception:
            frq = 0
        if frq == 0:
            continue
        seen.add(k)
        order.append((k, frq))
    order.sort(key=lambda x: -x[1])
    return [k for k, _ in order[:26]]


def build_year(y):
    d = json.load(io.open(os.path.join(SRC, '%d.json' % y), encoding='utf-8'))
    paras = d['paragraphs']
    text = '\n\n'.join(p['en'] for p in paras)
    text = re.sub(r'\s*\[\[(\d+)\]\]\s*', r'[[\1]] ', text)
    text = re.sub(r'\s+', ' ', text).strip()

    blanks = []
    for no in range(1, 21):
        b = d['blanks'][str(no)]
        ans = b['answer']
        logic, signal = build_logic(b)
        rec = {
            'no': no,
            'options': {L: b['opts'][L] for L in 'ABCD'},
            'answer': ans,
            'type': TYPE_MAP.get(b['type'], '实词辨析'),
            'explain': build_explain(b),
        }
        if logic:
            rec['logic'] = logic
        if signal:
            rec['signal'] = signal
        ww = build_why(b)
        if ww:
            rec['whyWrong'] = ww
        col = build_collocation(b)
        if col:
            rec['collocation'] = col
        g = zh_of(lemma(b['opts'].get(ans, '').lower()) or b['opts'].get(ans, '').lower())
        if g:
            rec['gloss'] = g
        blanks.append(rec)

    plain = re.sub(r'\[\[\d+\]\]', ' ', text)
    sents = sentences(plain)
    words = []
    for w in pick_words(d, plain):
        ctx = ''
        for s in sents:
            if re.search(r'\b' + re.escape(w) + r'\w{0,3}\b', s, re.I):
                ctx = s if len(s) <= 150 else s[:147] + '…'
                break
        words.append({'w': w, 'phon': phon_of(w), 'pos': pos_of(w) or 'n.',
                      'zh': zh_of(w), 'level': level_of(w), 'inText': ctx})

    # difficulty
    frqs = []
    for w in toks(plain):
        if w in STOP or len(w) < 4:
            continue
        k = lemma(w)
        if not k:
            continue
        try:
            frqs.append(int((EC.get(k) or {}).get('frq') or 0) or 20000)
        except Exception:
            pass
    frqs.sort()
    med = frqs[len(frqs) // 2] if frqs else 5000
    diff = round(min(5.0, max(3.0, 2.6 + math.log10(max(med, 100)) * 0.5)), 1)

    tc = {}
    for b in blanks:
        tc[b['type']] = tc.get(b['type'], 0) + 1
    dist = '、'.join(f'{k} {v} 道' for k, v in sorted(tc.items(), key=lambda x: -x[1]))
    fixed = [str(b['no']) for b in blanks if b['type'] == '固定搭配']
    logic_nos = [str(b['no']) for b in blanks if b['type'] == '逻辑关系']
    takeaways = [f'本篇 20 空考点分布：{dist}。',
                 '固定搭配集中在第 ' + '、'.join(fixed) + ' 题，必须整块记，逐字直译必错。' if fixed else
                 '本篇以实词辨析为主，靠上下文的同义替换与感情色彩定项。']
    if logic_nos:
        takeaways.append('逻辑关系题在第 ' + '、'.join(logic_nos) + ' 题，判定看空前后是顺承还是反转。')

    out = {
        'year': y,
        'paper': '英语一',
        'section': '完形填空',
        'topic': d['mainIdea'] or (d['title'].split('·')[0].strip() if d['title'] else ''),
        'difficulty': diff,
        'source': {'textUrl': URL(y), 'answerUrl': URL(y)},
        'text': text,
        'blanks': blanks,
        'fullZh': [p['zh'] for p in paras],
        'words': words,
        'takeaways': takeaways,
    }
    return out


def URL(y):
    if y >= 2010:
        return f'https://english-exam.lazynote.cn/kaoyan/sections/{y}-english-one/section1/'
    return f'https://english-exam.lazynote.cn/kaoyan/sections/{y}/section1/'


def dump_js(obj):
    s = json.dumps(obj, ensure_ascii=False, indent=2)
    # make options inline: {"A": "x", "B": "y", "C": "z", "D": "w"}
    s = re.sub(r'\{\n\s+"A": ("(?:[^"\\]|\\.)*"),\n\s+"B": ("(?:[^"\\]|\\.)*"),\n\s+"C": ("(?:[^"\\]|\\.)*"),\n\s+"D": ("(?:[^"\\]|\\.)*")\n\s*\}',
               r'{ "A": \1, "B": \2, "C": \3, "D": \4 }', s)
    s = re.sub(r'\{\n\s+("[ABCD]": "(?:[^"\\]|\\.)*")(?:,\n\s+("[ABCD]": "(?:[^"\\]|\\.)*"))*\n\s*\}',
               lambda m: m.group(0), s)
    return s


def main():
    only = [int(x) for x in sys.argv[1:]] or YEARS
    for y in only:
        obj = build_year(y)
        body = dump_js(obj)
        js = ('/* 考研英语一 · 完形填空 %d · 数据契约 v1（见 SCHEMA.md） */\n'
              'window.__WX__ = window.__WX__ || {};\n'
              'window.__WX__[%d] = %s;\n') % (y, y, body)
        io.open(os.path.join(OUT, '%d.js' % y), 'w', encoding='utf-8', newline='\n').write(js)
        print(y, 'ok', len(obj['blanks']), 'blanks', len(obj['words']), 'words', obj['difficulty'])


if __name__ == '__main__':
    main()
