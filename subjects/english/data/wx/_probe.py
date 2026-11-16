# -*- coding: utf-8 -*-
"""Report 生词-candidate coverage per year (no nltk)."""
import io, json, re

SRC = r'D:\buff\考研\英语\精读系统\data\wx\_src'
WD = json.load(io.open(SRC + r'\worddict2.json', encoding='utf-8'))

STOP = set('''a an the and or but if while when as of to in on at by for with from into onto about
above below over under between among through during before after since until till than that this these
those there here where which who whom whose what why how not no nor so such too very can could may
might must shall should will would do does did done be been being am is are was were has have had
having it its they them their he him his she her we us our you your i me my one two three also more
most much many few less least other another any some all both each either neither own same
according however therefore moreover furthermore thus hence although though because since unless
its it's they're we're'''.split())

SUF = [('ies', 'y'), ('ied', 'y'), ('ying', 'y'), ('es', ''), ('ed', ''), ('ing', ''), ('ly', ''),
       ('er', ''), ('est', ''), ('s', ''), ('d', ''), ('', '')]


def lemma(w, D):
    if w in D:
        return w
    for a, b in SUF:
        if w.endswith(a) and len(w) > len(a) + 2:
            c = w[:len(w) - len(a)] + b
            if c in D:
                return c
            if a in ('ed', 'ing', 'es') and len(c) > 3 and c[-1] == c[-2]:
                c2 = c[:-1]
                if c2 in D:
                    return c2
    return None


def toks(t):
    return [x.lower().strip("'") for x in re.findall(r"[A-Za-z][A-Za-z\-']+", t)]


for y in range(2006, 2027):
    if y == 2013:
        continue
    d = json.load(io.open(SRC + r'\%d.json' % y, encoding='utf-8'))
    text = ' '.join(p['en'] for p in d['paragraphs'])
    text = re.sub(r'\[\[\d+\]\]', ' ', text)
    seen, uniq = set(), []
    for w in toks(text):
        if w in STOP or len(w) < 3:
            continue
        k = lemma(w, WD)
        key = k or w
        if key in seen:
            continue
        seen.add(key)
        uniq.append((w, k))
    hit = [u for u in uniq if u[1]]
    miss = [u[0] for u in uniq if not u[1]]
    hard = [u[1] for u in hit if WD[u[1]]['cefr'] in ('B1', 'B2', 'C1', 'C2')]
    print(y, 'uniq', len(uniq), 'hit', len(hit), 'B1+', len(hard), 'MISS', len(miss))
    print('   miss:', ' '.join(miss))
