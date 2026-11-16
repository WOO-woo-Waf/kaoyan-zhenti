# -*- coding: utf-8 -*-
"""把完形的逐句精读挂到 data/paper/20XX.js 的 cloze 字段上

- 2013：用 data/wx/2013.js 里手制的 sentences（主干 + 切分块 + 译文），原样搬
- 其他年份：用 _sent.py 的切分 + 意群标注自动生成（无译文，因为解析 PDF 只给 2013 全文译文）
"""
import json, os, glob, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import _sent as S

sys.stdout.reconfigure(encoding='utf-8')

WX = r'D:\buff\考研\英语\精读系统\data\wx'
PAPER = r'D:\buff\考研\英语\精读系统\data\paper'


def load_wx(y):
    js = open(os.path.join(WX, f'{y}.js'), encoding='utf-8').read()
    body = js.split('window.__WX__[%d] =' % y, 1)[1].strip().rstrip(';')
    return json.loads(body)


def main():
    hand = 0
    for p in sorted(glob.glob(os.path.join(PAPER, '*.json'))):
        y = int(os.path.basename(p)[:4])
        d = json.load(open(p, encoding='utf-8'))
        try:
            w = load_wx(y)
        except Exception as e:
            print(y, '跳过', e)
            continue

        if w.get('sentences'):
            sents = [{'i': s['i'], 'en': s['en'], 'zh': s.get('zh', ''),
                      'main': s.get('struct', ''), 'chunks': s.get('chunks', [])}
                     for s in w['sentences']]
            hand += 1
            src = '手制'
        else:
            es = S.split_en(w['text'])
            sents = []
            for i, e in enumerate(es, 1):
                ch, main = S.chunk(e)
                sents.append({'i': i, 'en': e, 'zh': '', 'main': main, 'chunks': ch})
            src = '自动'

        d['cloze'] = {'sentences': sents, 'topic': w.get('topic', ''),
                      'difficulty': w.get('difficulty', 0), 'source': src}
        with open(p, 'w', encoding='utf-8') as f:
            json.dump(d, f, ensure_ascii=False, indent=1)
        with open(os.path.join(PAPER, f'{y}.js'), 'w', encoding='utf-8') as f:
            f.write('window.__PAPER__ = window.__PAPER__ || {};\n')
            f.write('window.__PAPER__[%d] = %s;\n'
                    % (y, json.dumps(d, ensure_ascii=False, separators=(',', ':'))))
        print(y, src, '完形句', len(sents), '| 大小', round(os.path.getsize(os.path.join(PAPER, f'{y}.js')) / 1e6, 2), 'MB')
    print('手制年份数', hand)


if __name__ == '__main__':
    main()
