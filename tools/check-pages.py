import os
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES = [
    ("hub", "index.html", "#cards .card", 3),
    ("408", "subjects/408/index.html", "#yearlist li", 10),
    ("math", "subjects/math/index.html", "#yearlist li", 11),
    ("english", "subjects/english/index.html", "body", None),
    ("english-paper", "subjects/english/paper.html", "body", None),
]

ok = True
with sync_playwright() as p:
    b = p.chromium.launch(channel="msedge")
    for name, rel, sel, want in PAGES:
        pg = b.new_page(viewport={"width": 1500, "height": 950})
        errs = []
        pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
        pg.on("pageerror", lambda e: errs.append("PAGEERROR " + str(e)))
        pg.on("requestfailed", lambda r: errs.append("404 " + r.url.split("/")[-1]))
        url = "file:///" + os.path.join(ROOT, rel.replace("/", os.sep)).replace("\\", "/")
        try:
            pg.goto(url, wait_until="load", timeout=45000)
            pg.wait_for_timeout(1600)
            n = pg.eval_on_selector_all(sel, "els => els.length")
            katex = pg.eval_on_selector_all(".katex", "els => els.length")
            bad = pg.eval_on_selector_all(".katex-error", "els => els.length")
            flag = "✓"
            if want is not None and n != want:
                flag = "✗"; ok = False
            if errs:
                flag = "✗"; ok = False
            print(f"  {flag} {name:15} 选择器 {n:3}  KaTeX {katex:4}  错误 {len(errs)}  {errs[:3]}")
        except Exception as e:
            ok = False
            print(f"  ✗ {name:15} {type(e).__name__}: {str(e)[:120]}")
        pg.close()
    b.close()

print("\n" + ("全部通过" if ok else "有失败项"))
raise SystemExit(0 if ok else 1)
