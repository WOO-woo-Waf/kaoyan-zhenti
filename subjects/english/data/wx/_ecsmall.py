# -*- coding: utf-8 -*-
"""Build a compact EN-CN dict for the passage words from ECDICT."""
import csv, io, json, os, re, sys

SRC = r'D:\buff\考研\英语\精读系统\data\wx\_src'
EC = os.path.join(SRC, 'ecdict.csv')
OUT = os.path.join(SRC, 'ecdict_small.json')

csv.field_size_limit(10 ** 7)

words = set()
for y in range(2006, 2027):
    if y == 2013:
        continue
    d = json.load(io.open(os.path.join(SRC, '%d.json' % y), encoding='utf-8'))
    t = ' '.join(p['en'] for p in d['paragraphs'])
    t = re.sub(r'\[\[\d+\]\]', ' ', t)
    for w in re.findall(r"[A-Za-z][A-Za-z\-']+", t):
        w = w.lower().strip("'")
        words.add(w)
print('words needed', len(words))

out = {}
with io.open(EC, encoding='utf-8', errors='replace', newline='') as f:
    r = csv.DictReader(f)
    for row in r:
        w = (row.get('word') or '').lower().strip()
        if w in words and w not in out:
            out[w] = {
                'phon': (row.get('phonetic') or '').strip(),
                'trans': (row.get('translation') or '').replace('\\n', '\n').strip(),
                'pos': (row.get('pos') or '').strip(),
                'tag': (row.get('tag') or '').strip(),
                'bnc': (row.get('bnc') or '0').strip(),
                'frq': (row.get('frq') or '0').strip(),
                'exchange': (row.get('exchange') or '').strip(),
            }
print('found', len(out))
io.open(OUT, 'w', encoding='utf-8').write(json.dumps(out, ensure_ascii=False))
