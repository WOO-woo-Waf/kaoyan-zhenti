# -*- coding: utf-8 -*-
"""Batch-fetch lazynote section pages for 2010-2026 (skip 2013) and parse to JSON."""
import io, os, subprocess, sys

YEARS = [y for y in range(2010, 2027) if y != 2013]
BASE = 'https://english-exam.lazynote.cn/kaoyan/sections/{y}-english-one/section1/'
SRC = r'D:\buff\考研\英语\精读系统\data\wx\_src'
PY = r'D:\Anaconda\python.exe'

os.makedirs(SRC, exist_ok=True)
for y in YEARS:
    html_path = os.path.join(SRC, 'lz%d_sections.html' % y)
    if not os.path.exists(html_path) or os.path.getsize(html_path) < 50000:
        rc = subprocess.call(['curl.exe', '-sL', '--max-time', '40', '-A',
                              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                              '(KHTML, like Gecko) Chrome/120.0 Safari/537.36',
                              '-o', html_path, BASE.format(y=y)])
        print(y, 'fetch rc', rc, os.path.getsize(html_path) if os.path.exists(html_path) else 'NA')
    rc = subprocess.call([PY, os.path.join(SRC, '..', '_lz_parse.py'), html_path,
                          os.path.join(SRC, '%d.json' % y)])
    print('---', y, 'parse rc', rc)
