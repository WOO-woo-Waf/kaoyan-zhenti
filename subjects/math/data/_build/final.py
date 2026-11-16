# 终检：11 年逐卷渲染 + 7 张截图 + KaTeX 错误统计
# 用法：& 'D:\Anaconda\python.exe' -X utf8 data\_build\final.py
import os, json
from playwright.sync_api import sync_playwright

ROOT = r'D:\buff\考研\数学\精读系统'
OUT = os.path.join(ROOT, 'assets')
url = 'file:///' + os.path.join(ROOT, 'index.html').replace('\\', '/')
YEARS = list(range(2016, 2027))

errs = []
with sync_playwright() as p:
    b = p.chromium.launch(channel='msedge')
    pg = b.new_page(viewport={'width': 1680, 'height': 1050}, device_scale_factor=1.4)
    pg.on('console', lambda m: errs.append('[console] ' + m.text) if m.type == 'error' else None)
    pg.on('pageerror', lambda e: errs.append('[pageerror] ' + str(e)))
    pg.goto(url, wait_until='load')
    pg.wait_for_timeout(1200)

    # ---- 1. 逐年：选择 / 填空 / 解答 三视图 KaTeX 错误 ----
    print('══ 逐年渲染体检 ══')
    total_bad = 0
    for y in YEARS:
        pg.click(f'#yearlist li[data-year="{y}"]')
        pg.wait_for_timeout(120)
        row = {}
        for tab in ('choice', 'fill', 'big'):
            pg.click(f'#tabs button[data-tab="{tab}"]')
            pg.wait_for_timeout(150)
            st = pg.evaluate('''() => ({
                cards: document.querySelectorAll('#qlist .qcard').length,
                katex: document.querySelectorAll('#qlist .katex').length,
                bad: document.querySelectorAll('#qlist .katex-error').length,
                dollar: (document.querySelector('#qlist').innerText.match(/\\$/g) || []).length
            })''')
            row[tab] = st
            total_bad += st['bad'] + st['dollar']
        flag = '✓' if row['choice']['bad'] + row['fill']['bad'] + row['big']['bad'] == 0 else '✗'
        print(f"  {flag} {y}  选择 {row['choice']['cards']}题/{row['choice']['katex']}式  "
              f"填空 {row['fill']['cards']}题/{row['fill']['katex']}式  "
              f"解答 {row['big']['cards']}题/{row['big']['katex']}式")
    print(f'  → KaTeX 错误 + 未渲染 $ 合计：{total_bad}')

    # ---- 2. 七张截图 ----
    print('\n══ 截图 ══')
    pg.click('#yearlist li[data-year="2026"]')
    pg.wait_for_timeout(300)
    pg.click('#view-seg button[data-view="paper"]')
    pg.click('#tabs button[data-tab="choice"]')
    pg.wait_for_timeout(400)
    pg.screenshot(path=os.path.join(OUT, 'preview-paper.png'))
    print('  ✓ preview-paper.png')

    cards = pg.query_selector_all('#qlist .qcard')
    if len(cards) > 1:
        cards[1].click()
        pg.wait_for_timeout(400)
        pg.screenshot(path=os.path.join(OUT, 'preview-detail.png'))
        print('  ✓ preview-detail.png')

    for tab in ('fill', 'big'):
        pg.click(f'#tabs button[data-tab="{tab}"]')
        pg.wait_for_timeout(400)
        pg.screenshot(path=os.path.join(OUT, f'preview-{tab}.png'))
        print(f'  ✓ preview-{tab}.png')

    pg.click('#view-seg button[data-view="kb"]')
    pg.wait_for_timeout(400)
    pg.screenshot(path=os.path.join(OUT, 'preview-kb.png'))
    print('  ✓ preview-kb.png')

    pg.click('#view-seg button[data-view="stats"]')
    pg.wait_for_timeout(400)
    pg.screenshot(path=os.path.join(OUT, 'preview-stats.png'))
    print('  ✓ preview-stats.png')

    # 造一道错题 → 生题本
    pg.click('#view-seg button[data-view="paper"]')
    pg.click('#tabs button[data-tab="choice"]')
    pg.wait_for_timeout(300)
    pg.click('#qlist .qcard button[data-w="1"]')
    pg.wait_for_timeout(300)
    pg.click('#view-seg button[data-view="wrong"]')
    pg.wait_for_timeout(400)
    pg.screenshot(path=os.path.join(OUT, 'preview-wrong.png'))
    print('  ✓ preview-wrong.png')

    # 自测模式
    pg.click('#view-seg button[data-view="paper"]')
    pg.click('#mode-seg button[data-mode="quiz"]')
    pg.wait_for_timeout(300)
    opt = pg.query_selector('#qlist .qcard .qopt')
    if opt:
        opt.click()
        pg.wait_for_timeout(500)
    pg.screenshot(path=os.path.join(OUT, 'preview-quiz.png'))
    print('  ✓ preview-quiz.png')

    print('\n错误', errs if errs else '无')
    b.close()


