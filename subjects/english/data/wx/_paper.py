# -*- coding: utf-8 -*-
"""解析 PDF -> 整卷结构化数据（阅读 Part A ×4 / 新题型 Part B / 翻译 Part C / 写作）

统一模型：
  reading[]  = {no, paras:[{no,en,zh}], questions:[{no,stem,options,answer,type,analysis}]}
  partB      = {options:{A..G}, paras:[{en,zh}], questions:[{no,answer,type,analysis}]}
  partC      = {paras:[{en,zh}], sentences:[{no,en}], analysis}
  writing    = {parts:[{kind,raw}]}
"""
import fitz, re, sys, json, os, glob

sys.stdout.reconfigure(encoding='utf-8')
CJK = re.compile(r'[\u4e00-\u9fff]')
SEC_RE = re.compile(r'^\d{4}\s*年\s*考研英语[^\n]{0,12}?(?=完形|阅读|选句|段落|英译汉|写作|Part)\s*(.*)$')
SEC_HINT = ('完形', '阅读', '选句', '段落', '英译汉', '写作', 'Part')
ANS_RE = re.compile(r'^【答案】\s*\[?\s*([A-G])\s*\]?\s*(.*)$')
TOC_RE = re.compile(r'^(Section\s+[IV]+(\s+Part\s+[ABC])?(\s*\(\d\))?|Part\s+[ABC](\s*\(\d\))?|写作)$')
TYPE_LINE = re.compile(r'^(完形填空|阅读理解|新题型|写作|英译汉|选句填空|匹配|排序|翻译)[（(][^)）]*[)）]$')


def clean(s):
    for ch in '\u2002\u2003\u00a0':
        s = s.replace(ch, ' ')
    return re.sub(r'[ \t]+', ' ', s).strip()


def prep(pdf):
    d = fitz.open(pdf)
    t = '\n'.join(d[i].get_text() for i in range(d.page_count))
    out = []
    for ln in t.split('\n'):
        if '懒笔记' in ln or 'lazynote' in ln or '在线使用效果更好' in ln:
            continue
        if re.fullmatch(r'[\s\u2002\u2003]*', ln):
            out.append('')
            continue
        out.append(clean(ln))
    return out


def split_sections(lines):
    idx = [i for i, l in enumerate(lines) if SEC_RE.match(l)]
    out = []
    for k, i in enumerate(idx):
        j = idx[k + 1] if k + 1 < len(idx) else len(lines)
        out.append((SEC_RE.match(lines[i]).group(1), lines[i:j]))
    return out


def key_of(title):
    if '完形' in title:
        return 'cloze'
    m = re.search(r'第\s*(\d)\s*篇', title)
    if m:
        return 'read' + m.group(1)
    if 'Part B' in title or '选句' in title or '排序' in title or '小标题' in title or '匹配' in title:
        return 'partB'
    if 'Part C' in title or '英译汉' in title or '翻译' in title:
        return 'partC'
    if '小作文' in title:
        return 'writingA'
    if '大作文' in title:
        return 'writingB'
    return 'other'


def drop_toc(lines):
    out, i = [], 0
    while i < len(lines):
        if TOC_RE.match(lines[i]):
            i += 1
            while i < len(lines) and TYPE_LINE.match(lines[i]):
                i += 1
            while i < len(lines) and lines[i] == '':
                i += 1
            continue
        out.append(lines[i])
        i += 1
    return out


def groups(lines):
    g, cur = [], []
    for l in lines:
        if l == '':
            if cur:
                g.append(cur)
                cur = []
        else:
            cur.append(l)
    if cur:
        g.append(cur)
    return g


def parse_paras(lines, lo=21, hi=40):
    """段：英文 + 中文译文。
    P1..Pn 必须严格递增，避免选项解析里的『P2 转折立靶』被当成段落；
    段落区截到第一道题之前；Directions 说明段丢弃。
    """
    stop = len(lines)
    for i, l in enumerate(lines):
        m = re.match(r'^(\d{1,2})\.\s', l)
        if m and lo <= int(m.group(1)) <= hi:
            stop = i
            break
    lines = lines[:stop]

    blocks, cur, expect = [], None, 1
    for l in lines:
        m = re.match(r'^P(\d{1,2})\s+(.*)$', l)
        if m and int(m.group(1)) == expect:
            if cur:
                blocks.append(cur)
            cur = [m.group(2)]
            expect += 1
            continue
        if cur is not None:
            cur.append(l)
    if cur:
        blocks.append(cur)
    if not blocks:
        blocks = groups(lines)

    paras = []
    for g in blocks:
        en, zh = [], []
        for l in g:
            (zh if CJK.search(l) else en).append(l)
        e, z = ' '.join(en).strip(), ' '.join(zh).strip()
        if not e and not z:
            continue
        if e.startswith('Directions'):
            continue
        paras.append({'en': e, 'zh': z})
    for i, p in enumerate(paras):
        p['no'] = i + 1
    return paras


def cut_questions(lines, lo, hi):
    """返回 (原文行, 题目行)"""
    for i, l in enumerate(lines):
        m = re.match(r'^(\d{1,2})\.\s', l)
        if m and lo <= int(m.group(1)) <= hi:
            return lines[:i], lines[i:]
    return lines, []


def parse_questions(lines, lo, hi):
    qs, cur = [], None
    for l in lines:
        m = re.match(r'^(\d{1,2})\.\s*(.*)$', l)
        if m and lo <= int(m.group(1)) <= hi:
            if cur:
                qs.append(cur)
            cur = {'no': int(m.group(1)), 'stem': m.group(2).strip(), 'options': {}}
            continue
        mo = re.match(r'^\[\s*([A-G])\s*\]\s*(.*)$', l)
        if mo and cur is not None:
            cur['options'][mo.group(1)] = mo.group(2).strip()
            continue
        if cur is not None and not cur['options']:
            cur['stem'] = (cur['stem'] + ' ' + l).strip()
    if cur:
        qs.append(cur)
    # 排序题等章节里题号会重复出现，按题号去重（保留首次）
    seen, uniq = set(), []
    for q in qs:
        if q['no'] in seen:
            continue
        seen.add(q['no'])
        uniq.append(q)
    return uniq


def parse_blocks(lines):
    """【答案】切块 -> [{answer,type,body}]"""
    blocks, cur = [], None
    for l in lines:
        m = ANS_RE.match(l)
        if m:
            if cur:
                blocks.append(cur)
            cur = {'answer': m.group(1), 'type': clean(m.group(2)), 'body': []}
            continue
        if cur is not None:
            cur['body'].append(l)
    if cur:
        blocks.append(cur)
    for b in blocks:
        b['body'] = re.sub(r'\n{3,}', '\n\n', '\n'.join(b['body'])).strip()
    return blocks


def attach(qs, blocks):
    for i, q in enumerate(qs):
        if i < len(blocks):
            q['answer'] = blocks[i]['answer']
            q['type'] = blocks[i]['type']
            q['analysis'] = blocks[i]['body']
    return qs


def strip_head(lines):
    """砍掉节标题块与 Directions 说明，从正文第一行开始"""
    for i, l in enumerate(lines):
        if l.startswith('Directions'):
            for k in range(i, min(i + 14, len(lines))):
                if re.search(r'points?', lines[k], re.I):
                    return lines[k + 1:]
            return lines[i + 1:]
    for i, l in enumerate(lines):
        if '英语一真题' in l:
            return lines[i + 1:]
    return lines


def alt_paras(lines):
    """原文/译文交替排列（无 P 标记、无空行）：连续英文行成段，连续中文行成译"""
    out, i = [], 0
    while i < len(lines):
        en = []
        while i < len(lines) and not CJK.search(lines[i]):
            en.append(lines[i])
            i += 1
        zh = []
        while i < len(lines) and CJK.search(lines[i]):
            zh.append(lines[i])
            i += 1
        e, z = ' '.join(en).strip(), ' '.join(zh).strip()
        if e or z:
            out.append({'en': e, 'zh': z})
        elif i < len(lines):
            i += 1
    for k, p in enumerate(out):
        p['no'] = k + 1
    return out


def pair_paras(gs):
    """Part C：原文段与译文段交替出现，按 CJK 分类后配对"""
    out, i = [], 0
    while i < len(gs):
        g = gs[i]
        en_share = sum(1 for l in g if not CJK.search(l))
        en = ' '.join(g).strip()
        zh = ''
        if en_share >= len(g) / 2 and i + 1 < len(gs) and \
                sum(1 for l in gs[i + 1] if CJK.search(l)) >= len(gs[i + 1]) / 2:
            zh = ' '.join(gs[i + 1]).strip()
            i += 1
        out.append({'en': en, 'zh': zh})
        i += 1
    for i, p in enumerate(out):
        p['no'] = i + 1
    return out


def uniq_sent(body):
    """Part C 的 46–50 划线句（解析里以 (NN) 开头引用）"""
    txt = '\n'.join(body)
    sents, seen = [], set()
    for m in re.finditer(r'\((4[6-9]|50)\)\s*(.+?)(?=\((?:4[6-9]|50)\)|\n\n|$)', txt, re.S):
        n = int(m.group(1))
        s = re.sub(r'\s+', ' ', m.group(2)).strip()
        if len(s) > 20 and n not in seen:
            seen.add(n)
            sents.append({'no': n, 'en': s})
    return sorted(sents, key=lambda x: x['no'])


def parse_year(pdf):
    lines = prep(pdf)
    out = {'reading': []}
    for title, body in split_sections(lines):
        k = key_of(title)
        body = drop_toc(body)
        if k.startswith('read'):
            n = int(k[-1])
            lo = 21 + (n - 1) * 5
            # 【答案】可能落在题干之前（双栏乱序），故题目与解析都从整节取，按出现顺序对齐
            item = {'no': n, 'paras': parse_paras(body),
                    'questions': attach(parse_questions(body, lo, lo + 4), parse_blocks(body))}
            out['reading'].append(item)
        elif k == 'partB' and k not in out:
            # A~G 候选句框之前是原文
            i = next((j for j, l in enumerate(body) if re.match(r'^\[\s*A\s*\]', l)), len(body))
            opts = {}
            cur = None
            for l in body[i:]:
                mo = re.match(r'^\[\s*([A-G])\s*\]\s*(.*)$', l)
                if mo:
                    cur = mo.group(1)
                    opts[cur] = mo.group(2).strip()
                elif cur and not re.match(r'^\d{1,2}\.', l) and not l.startswith('【'):
                    opts[cur] = (opts[cur] + ' ' + l).strip()
                elif l.startswith('【'):
                    cur = None
            out['partB'] = {'options': opts,
                            'paras': alt_paras(strip_head(body[:i])),
                            'questions': attach(parse_questions(body, 41, 45), parse_blocks(body))}
        elif k == 'partC' and k not in out:
            j = next((i for i, l in enumerate(body) if l.strip() == '逐句解析'), len(body))
            out['partC'] = {
                'paras': alt_paras(strip_head(body[:j])),
                'sentences': uniq_sent(body),
                'analysis': re.sub(r'\n{3,}', '\n\n', '\n'.join(body[j:])).strip(),
            }
        elif k.startswith('writing'):
            out.setdefault('writing', {})[k[-1]] = re.sub(r'\n{3,}', '\n\n', '\n'.join(body)).strip()
    out['reading'].sort(key=lambda x: x['no'])
    return out


def main():
    root = r'D:\buff\考研\英语\真题库'
    outdir = r'D:\buff\考研\英语\精读系统\data\paper'
    os.makedirs(outdir, exist_ok=True)
    for p in sorted(glob.glob(os.path.join(root, '*_答案解析.pdf'))):
        y = int(re.search(r'(\d{4})', os.path.basename(p)).group(1))
        if y < 2007:
            continue
        d = parse_year(p)
        with open(os.path.join(outdir, f'{y}.json'), 'w', encoding='utf-8') as f:
            json.dump(d, f, ensure_ascii=False, indent=1)
        with open(os.path.join(outdir, f'{y}.js'), 'w', encoding='utf-8') as f:
            f.write('window.__PAPER__ = window.__PAPER__ || {};\n')
            f.write('window.__PAPER__[%d] = %s;\n'
                    % (y, json.dumps(d, ensure_ascii=False, separators=(',', ':'))))
        r = d['reading']
        print(y, '| 篇', len(r),
              '| 段落', [len(x['paras']) for x in r],
              '| 题', sum(len(x['questions']) for x in r),
              '| 答案', ''.join(x['questions'][0].get('answer', '?') for x in r),
              '| B', len(d.get('partB', {}).get('questions', [])),
              '| C句', len(d.get('partC', {}).get('sentences', [])),
              '| 写', list(d.get('writing', {}).keys()))


if __name__ == '__main__':
    main()
