# -*- coding: utf-8 -*-
"""Merge lazynote word lists (kaoyan / cet4 / cet6) -> worddict2.json
Also attach IPA from CMUdict."""
import io, re, json, html, os

SRC = r'D:\buff\考研\英语\精读系统\data\wx\_src'
CMU = os.path.expanduser(r'~\AppData\Roaming\nltk_data\corpora\cmudict\cmudict')

ARP = {
    'AA': 'ɑ', 'AE': 'æ', 'AH': 'ʌ', 'AO': 'ɔ', 'AW': 'aʊ', 'AY': 'aɪ', 'EH': 'e',
    'ER': 'ər', 'EY': 'eɪ', 'IH': 'ɪ', 'IY': 'i', 'OW': 'oʊ', 'OY': 'ɔɪ', 'UH': 'ʊ',
    'UW': 'u', 'B': 'b', 'CH': 'tʃ', 'D': 'd', 'DH': 'ð', 'F': 'f', 'G': 'ɡ', 'HH': 'h',
    'JH': 'dʒ', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'NG': 'ŋ', 'P': 'p', 'R': 'r',
    'S': 's', 'SH': 'ʃ', 'T': 't', 'TH': 'θ', 'V': 'v', 'W': 'w', 'Y': 'j', 'Z': 'z',
    'ZH': 'ʒ',
}


VOWELS = {'AA', 'AE', 'AH', 'AO', 'AW', 'AY', 'EH', 'ER', 'EY', 'IH', 'IY', 'OW', 'OY', 'UH', 'UW'}


def arp2ipa(phones):
    toks = []  # (ipa, stress)
    for p in phones:
        base, d = p, ''
        if p and p[-1].isdigit():
            base, d = p[:-1], p[-1]
        sym = ARP.get(base, '')
        if base == 'AH' and d == '0':
            sym = 'ə'
        if base == 'ER' and d == '0':
            sym = 'ər'
        toks.append([sym, 'ˈ' if d == '1' else ('ˌ' if d == '2' else ''), base in VOWELS])
    # move stress marker leftward over the onset consonants
    for i, t in enumerate(toks):
        if not t[1]:
            continue
        j = i
        while j - 1 >= 0 and not toks[j - 1][2] and not toks[j - 1][1]:
            j -= 1
        toks[j][1] = t[1]
        if j != i:
            t[1] = ''
    return ''.join(s + st for s, st, _ in toks)


def load_cmu():
    d = {}
    if not os.path.exists(CMU):
        return d
    for line in io.open(CMU, encoding='utf-8', errors='replace'):
        line = line.split('#')[0].strip()
        if not line:
            continue
        parts = line.split()
        w = parts[0].lower()
        if w.endswith(')'):
            w = w.split('(')[0]
        rest = parts[1:]
        if rest and rest[0].isdigit():
            rest = rest[1:]  # variant index
        if w in d:
            continue
        d[w] = rest
    return d


def strip_tags(s):
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S)
    s = re.sub(r'<br\s*/?>', ' ', s, flags=re.I)
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s)
    s = s.replace('\u00a0', ' ').replace('\u2002', ' ').replace('\u2003', ' ')
    s = re.sub(r'[ \t]+', ' ', s)
    return s


def parse_list(path):
    s = io.open(path, encoding='utf-8', errors='replace').read()
    text = strip_tags(s)
    out = {}
    for m in re.finditer(r'(\d{1,4}) ([A-Za-z][A-Za-z\-\']{1,25}) (A1|A2|B1|B2|C1|C2) (.+?)(?= \d{1,4} [A-Za-z][A-Za-z\-\']{1,25} (?:A1|A2|B1|B2|C1|C2) |$)', text):
        w = m.group(2).lower()
        if w in out:
            continue
        defs = re.sub(r'\s+\d{1,4}$', '', m.group(4)).strip()
        out[w] = {'w': m.group(2), 'cefr': m.group(3), 'defs': defs}
    return out


def main():
    cmu = load_cmu()
    print('cmu', len(cmu))
    merged = {}
    for name in ('kao', 'cet6', 'cet4'):
        d = parse_list(os.path.join(SRC, 'w_%s.html' % name))
        print(name, len(d))
        for k, v in d.items():
            if k not in merged:
                merged[k] = v
    # attach phonetics
    n = 0
    for k, v in merged.items():
        ph = None
        base = k
        for cand in (k, k.rstrip('s'), k.rstrip('ed'), k.rstrip('d')):
            if cand in cmu:
                ph = arp2ipa(cmu[cand])
                break
        if ph:
            v['phon'] = '/' + ph + '/'
            n += 1
        else:
            v['phon'] = ''
    print('merged', len(merged), 'with phon', n)
    io.open(os.path.join(SRC, 'worddict2.json'), 'w', encoding='utf-8').write(
        json.dumps(merged, ensure_ascii=False))
    for k in ('effect', 'perplexing', 'awareness', 'caravanserai'):
        print(k, merged.get(k))


if __name__ == '__main__':
    main()
