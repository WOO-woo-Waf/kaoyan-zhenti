# -*- coding: utf-8 -*-
"""Extract 完形填空 (Section I) from a lazynote section page -> JSON.

Usage: python _lz_parse.py <sections.html> <out.json>
"""
import io, re, json, sys, html

TYPES = ('词义辨析', '逻辑关系', '固定搭配', '语法结构')


def strip_tags(s):
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S)
    s = re.sub(r'<br\s*/?>', '\n', s, flags=re.I)
    s = re.sub(r'<[^>]+>', '\n', s)
    s = html.unescape(s)
    s = s.replace('\u00a0', ' ').replace('\u2002', ' ').replace('\u2003', ' ').replace('\u3000', ' ')
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r'\n\s*\n+', '\n', s)
    return s.strip()


def parse_paragraphs(s):
    out = []
    for m in re.finditer(r'id="p-(\d+)"(.*?)(?=id="p-\d+"|<h2|id="q-1")', s, re.S):
        body = re.sub(r'^[^<>]*>', '', m.group(2), count=1)
        zh = ''
        mz = re.search(r'<p class="lt-zh"[^>]*>(.*?)</p>', body, re.S)
        if mz:
            zh = strip_tags(mz.group(1)).replace('\n', ' ')
        en = body[:mz.start()] if mz else body
        en = re.sub(r'<u>\s*(\d+)\s*</u>', r' [[\1]] ', en)
        en = strip_tags(en)
        en = re.sub(r'\s+', ' ', en).strip()
        en = re.sub(r'\s*\[\[(\d+)\]\]\s*', r' [[\1]] ', en)
        en = en.strip()
        if en:
            out.append({'en': en, 'zh': zh})
    return out


def parse_blanks(s):
    res = {}
    blocks = re.split(r'id="q-(\d+)"', s)
    for i in range(1, len(blocks), 2):
        no = int(blocks[i])
        body = blocks[i + 1]
        nxt = re.search(r'id="q-\d+"', body)
        if nxt:
            body = body[:nxt.start()]
        joined = '\n'.join(l.strip() for l in strip_tags(body).split('\n') if l.strip())
        rec = {'no': no, 'answer': '', 'type': '', 'clue': '', 'opts': {}, 'chk': {}, 'short': {},
               'long': {}}
        ma = re.search(r'【答案】\s*\n?\s*\[\s*([A-D])\s*\]', joined)
        if ma:
            rec['answer'] = ma.group(1)
        for j, l in enumerate(joined.split('\n')):
            if l.strip() in TYPES:
                rec['type'] = l.strip()
                break
        mc = re.search(r'【线索】\s*\n?(.*?)(?:\n【选项】|$)', joined, re.S)
        if mc:
            rec['clue'] = re.sub(r'\s+', ' ', mc.group(1)).strip()
        seg = re.split(r'\n(?=[A-D]\)\s*)', joined)
        for sp in seg[1:]:
            mm = re.match(r'([A-D])\)\s*([^\n]*)\n\s*([✓✗])\s*\n?\s*([^\n]*)', sp)
            if mm:
                L = mm.group(1)
                rec['opts'][L] = mm.group(2).strip()
                rec['chk'][L] = 1 if mm.group(3) == '✓' else 0
                rec['short'][L] = mm.group(4).strip()
                rest = sp[mm.end():]
                body_lines = [x.strip() for x in rest.split('\n') if x.strip()]
                body_lines = [x for x in body_lines if x not in ('【验证】', '【选项】', '【线索】')]
                rec['long'][L] = ' '.join(body_lines)[:400]
        if rec['answer'] and rec['answer'] not in rec['opts']:
            print('WARN blank', no, 'answer not in opts', rec['answer'], rec['opts'])
        res[no] = rec
    return res


def parse_main_idea(s):
    t = strip_tags(s)
    m = re.search(r'全文主旨\s*\n\s*([^\n]{4,60})', t)
    return m.group(1).strip() if m else ''


def main(src, dst):
    s = io.open(src, encoding='utf-8', errors='replace').read()
    data = {'paragraphs': parse_paragraphs(s), 'blanks': parse_blanks(s),
            'mainIdea': parse_main_idea(s), 'title': ''}
    mt = re.search(r'<title>(.*?)</title>', s, re.S)
    if mt:
        data['title'] = html.unescape(mt.group(1)).strip()
    io.open(dst, 'w', encoding='utf-8').write(json.dumps(data, ensure_ascii=False, indent=1))
    print('paras', len(data['paragraphs']), 'blanks', len(data['blanks']), '|', data['mainIdea'])
    bad = [n for n in range(1, 21) if n not in data['blanks'] or not data['blanks'][n]['answer']
           or len(data['blanks'][n]['opts']) != 4]
    print('BAD:', bad)


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
