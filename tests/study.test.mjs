import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {once} from 'node:events';
import {ROOT, readState, buildReport, emptyState, updateState} from '../tools/study-core.mjs';
import {createStudyServer} from '../tools/study-server.mjs';

test('迁入备份可无损恢复，题目完整关联，当前派生档案与正式文件一致', () => {
  let state=emptyState();
  for(const f of fs.readdirSync(path.join(ROOT,'study-data/imports'))) {
    const backup=JSON.parse(fs.readFileSync(path.join(ROOT,'study-data/imports',f),'utf8'));
    for(const [k,v] of Object.entries(backup.values)) {
      state=updateState(state,k,v,state.versions[k]||0,'test-import');
      assert.deepEqual(state.values[k],v,k);
    }
  }
  const report=buildReport(state);
  assert.equal(report.summary['408'].needsHelp,23);assert.equal(report.summary.math.needsHelp,3);
  assert.equal(report.summary.english.needsHelp,0);
  for(const sid of ['408','math']) {
    assert.equal(report.summary[sid].unresolved,0);
    for(const it of report.subjects[sid].needsHelp) {assert.ok(it.question.stem);assert.ok(it.question.analysis);assert.ok(it.question.point);}
  }
  const saved=JSON.parse(fs.readFileSync(path.join(ROOT,'study-data/agent-context.json'),'utf8'));
  const liveReport=buildReport(readState(path.join(ROOT,'study-data')));
  assert.deepEqual(saved,JSON.parse(JSON.stringify(liveReport)));
});

test('本机写入、并发冲突、重启恢复与接口/路径隔离', async () => {
  const dataDir=fs.mkdtempSync(path.join(ROOT,'_tmp','api-check-'));
  let server=createStudyServer({dataDir});server.listen(0,'127.0.0.1');await once(server,'listening');
  async function connect() {
    const url='http://127.0.0.1:'+server.address().port;
    const script=await (await fetch(url+'/api/bootstrap.js')).text(),ctx={window:{}};vm.runInNewContext(script,ctx);
    return {url,boot:JSON.parse(JSON.stringify(ctx.window.__STUDY_BOOT__))};
  }
  let {url,boot}=await connect();
  const post=(key,value,version,extra={})=>fetch(url+'/api/value',{method:'POST',headers:{'Content-Type':'application/json','X-Study-Token':boot.token,...extra},body:JSON.stringify({key,value,version})});
  try {
    assert.equal((await post('math.wrong.v1',{'2016-1':{ts:1}},0)).status,200);
    assert.equal((await post('math.wrong.v1',{'2016-2':{ts:2}},0)).status,409);
    assert.deepEqual(readState(dataDir).values['math.wrong.v1'],{'2016-1':{ts:1}});
    assert.equal((await post('study.knowledge.v1',{'math:极限':{subject:'math',point:'极限',note:'夹逼思路'}},0)).status,200);
    assert.equal((await post('paper.answers',{'2026:21':'A'},0)).status,200);
    assert.equal((await post('paper.words',[{w:'civilization',year:2026,qno:21}],0)).status,200);
    assert.equal((await post('math.wrong.v1',{},1,{Origin:'https://example.com'})).status,403);
    assert.equal((await post('math.wrong.v1',{},1,{'X-Study-Token':'invalid'})).status,403);
    for(const target of ['/.git/config','/_tmp/check-countdown.py','/tools/study-core.mjs','/study-data/%2e%2e%5c.git%5cconfig']) assert.equal((await fetch(url+target)).status,403,target);
    assert.throws(()=>createStudyServer({dataDir}),/已.*运行/);
    const disk=readState(dataDir),report=buildReport(disk);
    assert.equal(report.subjects.english.vocabulary.length,1);assert.ok(report.subjects.english.vocabulary[0].context);
    assert.equal(report.subjects.math.explicitKnowledge.length,1);
    assert.equal(report.revision,JSON.parse(fs.readFileSync(path.join(dataDir,'agent-context.json'),'utf8')).revision);
    await new Promise(resolve=>server.close(resolve));
    server=createStudyServer({dataDir});server.listen(0,'127.0.0.1');await once(server,'listening');
    ({url,boot}=await connect());assert.deepEqual(boot.values, disk.values);assert.equal(boot.revision,disk.revision);
  } finally { await new Promise(resolve=>server.close(resolve)); }
});

test('不会题与明确知识点分离；数学选项、英语错误与历史仍可读', () => {
  let s=emptyState();
  const updates=[['math.done.v1',{'2016-1':'wrong'}],['math.answers.v1',{'2016-1':{pick:'A',ok:false,ts:123}}],
    ['paper.answers',{'2026:21':'X'}],['wx.answers.v1',{'2026:1':'X'}],['study.questions.v1',{'english:2026:46':{reason:'unsure'}}],
    ['study.knowledge.v1',{'english:定语从句':{subject:'english',point:'定语从句',note:'关系词选择'}}]];
  for(const [key,value] of updates)s=updateState(s,key,value,0);
  let r=buildReport(s);assert.equal(r.summary.english.needsHelp,3);assert.equal(r.summary.english.explicitKnowledge,1);
  assert.equal(r.subjects.math.needsHelp[0].userAnswer.pick,'A');
  assert.ok(r.subjects.english.needsHelp.find(x=>x.id==='2026:46').question.context);
  s=updateState(s,'paper.answers',{'2026:21':'C'},1);
  assert.ok(s.history.find(x=>x.key==='paper.answers'&&x.changes[0].after==='X'));
  s=updateState(s,'paper.answers',{'2026:1':'A'},2);
  r=buildReport(s);
  const duplicate=r.subjects.english.needsHelp.find(x=>x.id==='2026:1');
  assert.equal(duplicate.answerSources.length,2);assert.ok(duplicate.flags.some(x=>x.includes('wx.answers')));
  assert.throws(()=>updateState(s,'unrelated.secret',{},0),/不支持/);
});
