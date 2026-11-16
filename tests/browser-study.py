"""Isolated real-page smoke test; never touches the user's browser profile or study-data."""
import json
import pathlib
import subprocess
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT/'_tmp/persistence-check'
OUT.mkdir(parents=True,exist_ok=True)
log=(OUT/'server.log').open('w',encoding='utf-8')
proc=subprocess.Popen(['node','tests/ui-fixture-server.mjs'],cwd=ROOT,stdout=subprocess.PIPE,stderr=log,text=True,encoding='utf-8')
results=[]
try:
    info=json.loads(proc.stdout.readline())
    directory=pathlib.Path(info['dataDir'])
    with sync_playwright() as p:
        browser=p.chromium.launch(channel='msedge',headless=True)
        context=browser.new_context(viewport={'width':1500,'height':1000})
        page=context.new_page()
        errors=[]
        page.on('pageerror',lambda e:errors.append(str(e)))
        def settled():
            page.wait_for_function('window.StudyFiles && !window.StudyFiles.pending()')
            assert page.locator('#study-save-status').inner_text()=='已保存到文件'
        def state():
            return json.loads((directory/'state.json').read_text(encoding='utf-8'))
        page.goto(info['url']+'/subjects/408/index.html',wait_until='load')
        page.locator('#qlist .qcard').first.click()
        page.locator('#d-wrong').click()
        settled()
        assert len(state()['values']['cs408.wrong.v1'])==1
        results.append('408 标记不会自动写盘')
        page.goto(info['url']+'/subjects/math/index.html',wait_until='load')
        page.locator('#qlist .qcard').first.click()
        page.locator('#detail [data-w]').first.click()
        settled()
        assert len(state()['values']['math.wrong.v1'])==1
        results.append('数学生题本自动写盘')
        page.goto(info['url']+'/subjects/english/paper.html',wait_until='load')
        page.locator('#questions .study-unsure').first.click()
        page.locator('#questions .qopt[data-opt]').first.click()
        # Simulates the existing word-picker's storage adapter, separate from the user's records.
        page.evaluate("StudyStorage.setItem('paper.words',JSON.stringify([{w:'civilization',year:2026,qno:21,ts:123}]))")
        page.locator('#study-profile').click()
        page.locator('#study-subject').select_option('english')
        page.locator('#study-point').fill('定语从句')
        page.locator('#study-note').fill('关系词选择')
        page.locator('#study-add-point').click()
        settled()
        assert state()['values']['paper.words'][0]['w']=='civilization'
        assert len(state()['values']['study.questions.v1'])==1
        assert len(state()['values']['study.knowledge.v1'])==1
        results.append('英语作答、不会题、生词适配器及知识点标记自动写盘')
        page.evaluate("let pts=JSON.parse(StudyStorage.getItem('study.knowledge.v1'));pts['english:定语从句'].note='测试'.repeat(20000);StudyStorage.setItem('study.knowledge.v1',JSON.stringify(pts))")
        settled()
        assert len(state()['values']['study.knowledge.v1']['english:定语从句']['note'])==40000
        results.append('超过浏览器 keepalive 限额的学习记录仍可自动保存')
        before=state()['values'].copy()
        page.evaluate('localStorage.clear()')
        page.reload(wait_until='load')
        settled()
        assert page.locator('#questions .study-unsure').first.inner_text().startswith('✓')
        assert state()['values']['paper.words']==before['paper.words']
        assert page.evaluate("JSON.parse(StudyStorage.getItem('paper.words'))[0].w")=='civilization'
        results.append('清空浏览器缓存后从正式文件恢复')
        page.goto(info['url']+'/subjects/english/index.html',wait_until='load')
        page.locator('.acc .study-unsure').first.wait_for()
        settled()
        page.goto(info['url']+'/',wait_until='load')
        settled()
        page.screenshot(path=str(OUT/'hub.png'))
        assert not errors,errors
        report=json.loads((directory/'agent-context.json').read_text(encoding='utf-8'))
        assert report['summary']['408']['needsHelp']==1
        assert report['summary']['math']['needsHelp']==1
        assert report['summary']['english']['needsHelp']>=1
        assert report['subjects']['english']['vocabulary'][0]['context']
        assert (directory/'学习档案.md').exists()
        results.append('五页加载无脚本错误，档案关联完整题目与英语上下文')
        no_cache=browser.new_context()
        no_cache.add_init_script("Object.defineProperty(window,'localStorage',{get(){throw new Error('storage disabled')}})")
        other=no_cache.new_page()
        other.goto(info['url']+'/subjects/408/index.html',wait_until='load')
        other.wait_for_function('window.StudyFiles && !window.StudyFiles.pending()')
        assert other.locator('#study-save-status').inner_text()=='已保存到文件'
        assert other.evaluate("Object.keys(JSON.parse(StudyStorage.getItem('cs408.wrong.v1'))).length")==1
        no_cache.close()
        results.append('浏览器本地存储不可用时仍从文件正常恢复')
        browser.close()
    result={'status':'passed','results':results,'fixtureData':str(directory),'pageErrors':errors}
    (OUT/'results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(result,ensure_ascii=False))
finally:
    proc.terminate()
    proc.wait(timeout=10)
    log.close()
