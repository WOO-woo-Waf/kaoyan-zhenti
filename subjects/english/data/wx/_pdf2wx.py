# -*- coding: utf-8 -*-
"""真题 PDF -> 完形填空结构化数据

关键发现：空位编号是「数字 + \u2003」形式的文本 token（如 '1\u2003'），
两側还夹着 \u2002 / \u2003 空白 token。据此还原 [[n]]。
"""
import fitz, re, sys, json, os, glob

sys.stdout.reconfigure(encoding='utf-8')

WS = '\u2002\u2003\u00a0'
BLANK_TOK = re.compile(r'^(\d{1,2})\u2003?$')


def clean(s):
    for ch in WS:
        s = s.replace(ch, ' ')
    return re.sub(r'\s+', ' ', s).strip()


def noise(s):
    if not s:
        return True
    if '懒笔记' in s or 'lazynote' in s or '在线使用效果更好' in s:
        return True
    if re.fullmatch(r'[·\s]*\d{4}\s*年?[·\s]*', s):
        return True
    if re.fullmatch(r'考研英语[一二]', s):
        return True
    return False


def page_rows(page):
    rows = {}
    for w in page.get_text('words'):
        rows.setdefault(round(w[1], 0), []).append((w[0], w[4]))
    return [sorted(v, key=lambda t: t[0]) for _, v in sorted(rows.items())]


def build_text(pages, start_no=1):
    n = start_no - 1
    out = []
    for page in pages:
        rows = page_rows(page)
        if not rows:
            continue
        # 左边界 = 本页最常见的起始 x（取中位数），首行缩进即段落起点
        lefts = sorted(r[0][0] for r in rows if r)
        margin = lefts[len(lefts) // 2] if lefts else 0
        merged = []
        for row in rows:
            if not row:
                continue
            indent = row[0][0] > margin + 8
            buf = []
            for _, tok in row:
                tok_s = clean(tok)
                if not tok_s:
                    continue
                # 空位编号：裸数字 + 尾随 em-space（普通数字不会有 em-space）
                if re.fullmatch('\\d{1,2}\u2003', tok):
                    n += 1
                    buf.append(f'\u00a7{n}\u00a7')
                else:
                    buf.append(tok_s)
            if buf:
                merged.append((indent, ' '.join(buf)))
        for indent, line in merged:
            # 空位后紧跟标点 -> 合并
            line = re.sub('\u00a7(\\d+)\u00a7\\s+([.,;:!?])', '\u00a7\\1\u00a7\\2', line)
            line = re.sub('\u00a7(\\d+)\u00a7', '[[\\1]]', line)
            s = clean(line)
            if noise(s):
                continue
            if indent and out and out[-1] != '':
                out.append('')
            out.append(s)
        out.append('')
    text = re.sub(r'\n{3,}', '\n\n', '\n'.join(out))
    return text.strip(), n - start_no + 1


def slice_wx(fulltext):
    i = fulltext.find('Use of English')
    if i < 0:
        return None, None
    seg = fulltext[i:]
    m = re.search(r'^1\.\s*\[\s*A\s*\]', seg, re.M)
    if not m:
        return None, None
    passage, rest = seg[:m.start()], seg[m.start():]
    # 去掉 Directions 说明段（以 (10 points) 收尾）
    k = passage.find('(10 points)')
    if k > 0:
        passage = passage[k + len('(10 points)'):]
    passage = re.sub(r'^Section I\s*', '', passage, flags=re.M)
    passage = re.sub(r'^Use of English\s*', '', passage, flags=re.M)
    # 选项可能一行一个，也可能四个挤在同一行（2023 就是），统一按 [ X ] 切开
    norm = re.sub('\\[\\s*([A-D])\\s*\\]', '\n[\\1] ', rest)
    opts = {}
    pat = re.compile(
        r'^(\d{1,2})\.\s*\n+\[A\]\s*(.*?)\n+\[B\]\s*(.*?)\n+\[C\]\s*(.*?)\n+\[D\]\s*(.*?)(?=\n+\d{1,2}\.|\Z)',
        re.S | re.M)
    for mm in pat.finditer(norm):
        no = int(mm.group(1))
        if 1 <= no <= 20:
            opts[no] = {L: clean(v) for L, v in zip('ABCD', mm.groups()[1:])}
    return passage.strip(), opts


def main():
    root = r'D:\buff\考研\英语\真题库'
    outdir = r'D:\buff\考研\英语\精读系统\data\wx'
    years = sorted(int(re.search(r'(\d{4})', os.path.basename(p)).group(1))
                   for p in glob.glob(os.path.join(root, '*_英语一_真题.pdf')))
    bad = []
    for y in years:
        d = fitz.open(os.path.join(root, f'{y}_英语一_真题.pdf'))
        text, cnt = build_text([d[i] for i in range(d.page_count)])
        passage, opts = slice_wx(text)
        if passage is None:
            bad.append((y, 'slice-fail', 0, 0))
            continue
        got = len(re.findall(r'\[\[\d+\]\]', passage))
        nos = [int(x) for x in re.findall(r'\[\[(\d+)\]\]', passage)]
        ok = (got == 20 and nos == list(range(1, 21)) and len(opts) == 20
              and all(len(v) == 4 for v in opts.values()))
        if not ok:
            bad.append((y, f'blanks={got} nos_ok={nos == list(range(1, 21))} opts={len(opts)}', got, len(opts)))
            continue
        data = {'year': y, 'paper': '英语一', 'section': '完形填空', 'topic': '',
                'source': {'textUrl': '', 'answerUrl': ''},
                'text': passage,
                'blanks': [{'no': n, 'options': opts[n], 'answer': '', 'type': '', 'explain': ''}
                           for n in range(1, 21)]}
        with open(os.path.join(outdir, f'{y}.pdf.json'), 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=1)
        print(y, 'OK', got, len(opts))
    print('--- 失败 ---')
    for b in bad:
        print(b)


if __name__ == '__main__':
    main()
