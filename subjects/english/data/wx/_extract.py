# -*- coding: utf-8 -*-
"""Extract the Use-of-English (完形填空) block from a yz.chsi.com.cn article page."""
import io, re, sys, html


def clean(s):
    s = re.sub(r'<script.*?</script>', '', s, flags=re.S | re.I)
    s = re.sub(r'<style.*?</style>', '', s, flags=re.S | re.I)
    s = re.sub(r'<br\s*/?>', '\n', s, flags=re.I)
    s = re.sub(r'</p\s*>', '\n', s, flags=re.I)
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s)
    s = s.replace('\u00a0', ' ').replace('\u3000', ' ')
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r'\n{3,}', '\n\n', s)
    return s.strip()


def main(path):
    raw = io.open(path, encoding='utf-8', errors='replace').read()
    # article body lives in a div; grab the largest text-bearing block
    body = clean(raw)
    lines = [l.strip() for l in body.split('\n')]
    out = []
    started = False
    for l in lines:
        if not started:
            if re.match(r'^(Section\s*(I|Ⅰ)|完形填空|Section\s*I\s*Use)', l, re.I):
                started = True
        if started:
            if re.match(r'^(Section\s*(II|Ⅲ)|Part\s*(A|B|C)\b|阅读理解|Section\s*Ⅱ)', l, re.I) and len(out) > 5:
                break
            out.append(l)
    print('\n'.join(out))


if __name__ == '__main__':
    main(sys.argv[1])
