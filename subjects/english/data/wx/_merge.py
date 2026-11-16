# -*- coding: utf-8 -*-
"""合并 pdf.json（原文+选项）与 jieshi.json（答案+逐题解析）-> data/wx/20XX.js
2013 额外合并 Lead 手写的精讲字段（sentences / fullZh / words / takeaways）
"""
import json, re, sys, glob, os

sys.stdout.reconfigure(encoding='utf-8')

WX = r'D:\buff\考研\英语\精读系统\data\wx'
TYPES = ['词义辨析', '固定搭配', '逻辑关系', '语法结构', '上下文逻辑', '语义衔接',
         '词汇复现', '态度语气', '介词搭配', '动词辨析', '名词辨析', '形容词辨析']


def guess_type(body):
    head = body.split('\n')[:4]
    for h in head:
        for t in TYPES:
            if t in h:
                return t
    return ''


def short_explain(body):
    """从官方解析里抽一句「点破」：优先【线索】行"""
    lines = [l.strip() for l in body.split('\n') if l.strip()]
    for i, l in enumerate(lines):
        if l.startswith('【线索】'):
            s = l.replace('【线索】', '').strip()
            if len(s) < 8 and i + 1 < len(lines):
                s = lines[i + 1]
            return s[:160]
    for l in lines[1:]:
        if not l.startswith('【') and len(l) > 10:
            return l[:160]
    return ''


def js_dump(obj):
    return json.dumps(obj, ensure_ascii=False, indent=1)


def unwrap(text):
    """PDF 硬换行 -> 段内空格，保留 \n\n 作段落分隔"""
    text = re.sub(r'\n\s*\n', '\x00', text)   # 段界先占位
    text = re.sub(r'\s*\n\s*', ' ', text)      # 段内换行 -> 空格
    text = text.replace('\x00', '\n\n')
    text = re.sub(r' +', ' ', text)
    return text.strip()


def main():
    hand = {}
    hpath = os.path.join(WX, '_2013_hand.json')
    if os.path.exists(hpath):
        hand = json.load(open(hpath, encoding='utf-8'))

    years = sorted(int(re.search(r'(\d{4})', os.path.basename(p)).group(1))
                   for p in glob.glob(os.path.join(WX, '*.pdf.json')))
    for y in years:
        pdf = json.load(open(os.path.join(WX, f'{y}.pdf.json'), encoding='utf-8'))
        jie = json.load(open(os.path.join(WX, f'{y}.jieshi.json'), encoding='utf-8'))['blanks']
        h = hand if y == 2013 else None

        blocks = []
        hb = {}
        if h:
            hb = {b['no']: b for b in h['blanks']}

        for n in range(1, 21):
            j = jie[str(n)]
            b = {
                'no': n,
                'options': pdf['blanks'][n - 1]['options'],
                'answer': j['answer'],
                'type': guess_type(j['body']),
                'explain': short_explain(j['body']),
                'analysis': j['body'],
            }
            if hb:
                for k in ('whyWrong', 'collocation', 'gloss', 'logic', 'signal', 'answerNote'):
                    if k in hb[n]:
                        b[k] = hb[n][k]
                b['explain'] = hb[n]['explain']
                if hb[n].get('type'):
                    b['type'] = hb[n]['type']
            blocks.append(b)

        obj = {
            'year': y,
            'paper': '英语一',
            'section': '完形填空',
            'topic': (h or {}).get('topic', ''),
            'difficulty': (h or {}).get('difficulty', 0),
            'source': (h or {}).get('source', {'textUrl': '', 'answerUrl': ''}),
            'text': unwrap(pdf['text']),
            'blanks': blocks,
        }
        if h:
            for k in ('sentences', 'fullZh', 'words', 'takeaways'):
                if k in h:
                    obj[k] = h[k]

        out = os.path.join(WX, f'{y}.js')
        with open(out, 'w', encoding='utf-8') as f:
            f.write('window.__WX__ = window.__WX__ || {};\n')
            f.write(f'window.__WX__[{y}] = {js_dump(obj)};\n')
        print(y, 'ok', len(obj['blanks']), 'bytes', os.path.getsize(out))


if __name__ == '__main__':
    main()
