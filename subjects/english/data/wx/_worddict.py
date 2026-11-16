# -*- coding: utf-8 -*-
"""Parse lazynote 考研英语 word list (frequency page) -> word dict JSON.

Row format (text): <rank> <word> <CEFR> <pos> <zh> | <pos> <zh> ... <freq>
"""
import io, re, json, html, sys

SRC = r'D:\buff\考研\英语\精读系统\data\wx\_src\w_freq.html'
OUT = r'D:\buff\考研\英语\精读系统\data\wx\_src\worddict.json'


def strip_tags(s):
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S)
    s = re.sub(r'<br\s*/?>', ' ', s, flags=re.I)
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s)
    s = s.replace('\u00a0', ' ').replace('\u2002', ' ').replace('\u2003', ' ')
    s = re.sub(r'[ \t]+', ' ', s)
    return s


def main():
    s = io.open(SRC, encoding='utf-8', errors='replace').read()
    # Work on table rows if present
    rows = re.findall(r'<tr[^>]*>(.*?)</tr>', s, re.S)
    print('rows', len(rows))
    out = {}
    if rows:
        for r in rows:
            tds = [strip_tags(x).strip() for x in re.findall(r'<td[^>]*>(.*?)</td>', r, re.S)]
            if len(tds) < 4:
                continue
            # find the cell that is a bare english word
            word = None
            wi = -1
            for i, t in enumerate(tds):
                if re.fullmatch(r"[A-Za-z][A-Za-z\-'\. ]{0,30}", t):
                    word = t.strip()
                    wi = i
                    break
            if not word:
                continue
            cefr = ''
            if wi + 1 < len(tds) and re.fullmatch(r'(A1|A2|B1|B2|C1|C2)', tds[wi + 1].strip()):
                cefr = tds[wi + 1].strip()
            defs = tds[wi + 2] if wi + 2 < len(tds) else ''
            freq = tds[-1] if tds[-1].isdigit() else ''
            out[word.lower()] = {'w': word, 'cefr': cefr, 'defs': defs, 'freq': freq}
    else:
        text = strip_tags(s)
        for m in re.finditer(r'(\d{1,4}) ([A-Za-z][A-Za-z\-\']{1,25}) (A1|A2|B1|B2|C1|C2) (.+?)(?= \d{1,4} [A-Za-z]|$)', text):
            out[m.group(2).lower()] = {'w': m.group(2), 'cefr': m.group(3), 'defs': m.group(4)[:300], 'freq': ''}
    print('words', len(out))
    io.open(OUT, 'w', encoding='utf-8').write(json.dumps(out, ensure_ascii=False, indent=0))
    for k in list(out)[:5]:
        print(k, out[k])


if __name__ == '__main__':
    main()
