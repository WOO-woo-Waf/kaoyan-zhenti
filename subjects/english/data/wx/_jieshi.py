# -*- coding: utf-8 -*-
"""解析 PDF -> 完形 20 题逐题解析 JSON"""
import fitz, re, sys, json, os, glob

sys.stdout.reconfigure(encoding='utf-8')


def clean(s):
    for ch in '\u2002\u2003\u00a0':
        s = s.replace(ch, ' ')
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r'\n\s*\n+', '\n', s)
    return s.strip()


def drop_noise(s):
    out = []
    for ln in s.split('\n'):
        if '懒笔记' in ln or 'lazynote' in ln or '在线使用效果更好' in ln:
            continue
        out.append(ln)
    return '\n'.join(out)


def parse_year(pdf):
    d = fitz.open(pdf)
    t = '\n'.join(d[i].get_text() for i in range(d.page_count))
    t = clean(drop_noise(t))
    # 完形解析区：从「完形填空题和解析」到「阅读理解题和解析」
    i = t.find('完形填空题和解析')
    if i < 0:
        i = t.find('【答案】')
    j = t.find('阅读理解题和解析', i)
    seg = t[i:j if j > 0 else i + 40000]

    # 每题：数字行 + 紧跟 【答案】
    marks = list(re.finditer(r'\n\s*(\d{1,2})\.\s*\n\s*【答案】\s*\[\s*([A-D])\s*\]\s*([^\n]*)', seg))
    if not marks:
        marks = list(re.finditer(r'(\d{1,2})\.\s*【答案】\s*\[\s*([A-D])\s*\]\s*([^\n]*)', seg))
    blocks = {}
    for k, m in enumerate(marks):
        no = int(m.group(1))
        if not (1 <= no <= 20):
            continue
        end = marks[k + 1].start() if k + 1 < len(marks) else len(seg)
        body = seg[m.start():end].strip()
        body = re.sub(r'^\d{1,2}\.\s*', '', body)
        blocks[no] = {
            'answer': m.group(2),
            'head': clean(m.group(3)),
            'body': clean(body),
        }
    return blocks


def main():
    root = r'D:\buff\考研\英语\真题库'
    outdir = r'D:\buff\考研\英语\精读系统\data\wx'
    ok = 0
    for p in sorted(glob.glob(os.path.join(root, '*_答案解析.pdf'))):
        y = int(re.search(r'(\d{4})', os.path.basename(p)).group(1))
        b = parse_year(p)
        miss = [n for n in range(1, 21) if n not in b]
        print(y, 'blocks', len(b), 'missing', miss)
        if len(b) == 20:
            ok += 1
            with open(os.path.join(outdir, f'{y}.jieshi.json'), 'w', encoding='utf-8') as f:
                json.dump({'year': y, 'blanks': b}, f, ensure_ascii=False, indent=1)
    print('完整年份:', ok, '/21')


if __name__ == '__main__':
    main()
