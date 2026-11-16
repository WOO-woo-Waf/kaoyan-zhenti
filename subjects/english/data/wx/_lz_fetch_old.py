# -*- coding: utf-8 -*-
"""Fetch lazynote section pages for the older (pre-2010) URL scheme."""
import os, subprocess

YEARS = [2006, 2007, 2008, 2009]
BASE = 'https://english-exam.lazynote.cn/kaoyan/sections/{y}/section1/'
SRC = r'D:\buff\考研\英语\精读系统\data\wx\_src'
PY = r'D:\Anaconda\python.exe'

for y in YEARS:
    p = os.path.join(SRC, 'lz%d_sections.html' % y)
    rc = subprocess.call(['curl.exe', '-sL', '--max-time', '40', '-A',
                          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                          '(KHTML, like Gecko) Chrome/120.0 Safari/537.36',
                          '-o', p, BASE.format(y=y)])
    print(y, 'rc', rc, os.path.getsize(p) if os.path.exists(p) else 'NA')
    rc = subprocess.call([PY, os.path.join(SRC, '..', '_lz_parse.py'), p,
                          os.path.join(SRC, '%d.json' % y)])
    print('---', y, 'parse rc', rc)
