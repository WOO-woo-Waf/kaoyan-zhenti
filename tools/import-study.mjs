#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {isDeepStrictEqual} from 'node:util';
import {ROOT, KEYS, readState, updateState, persistState, atomicWrite} from './study-core.mjs';

const source = process.argv[2];
if (!source) throw new Error('用法：node tools/import-study.mjs <学习记录.json>；请先停止保存程序。');
// 离线导入，避免与正在运行的写入者竞争。
try {
  const res = await fetch(`http://127.0.0.1:${process.env.STUDY_PORT || 17866}/api/health`, {signal:AbortSignal.timeout(600)});
  const h = await res.json();
  if (h.app === 'kaoyan-zhenti-study' && h.root === ROOT) throw new Error('保存程序正在运行，请先双击“停止学习库.cmd”再导入。');
} catch(e) { if(!e.message.includes('fetch failed') && !e.message.includes('aborted') && !e.message.includes('timeout')) throw e; }
const bytes = fs.readFileSync(source), hash=crypto.createHash('sha256').update(bytes).digest('hex');
const raw = JSON.parse(bytes.toString('utf8')), entries=Array.isArray(raw) ? raw : [raw];
const dir=path.join(ROOT,'study-data'); let state=readState(dir);
if(state.migrations.some(m=>m.sha256===hash)) { console.log('此份记录已导入，未重复写入。'); process.exit(0); }
const imported = {};
for (const entry of entries) {
  if (entry.errors?.length) throw new Error('来源存在解析错误，未导入；先查看候选记录。');
  if(!entry.values || typeof entry.values!=='object') throw new Error('导入文件需要 values 对象');
  for(const [key,value] of Object.entries(entry.values)) {
    if(!KEYS.includes(key)) throw new Error('导入包含未登记字段，已停止');
    if(Object.hasOwn(imported,key) && !isDeepStrictEqual(imported[key],value)) throw new Error('多个来源的 '+key+' 不一致，需先确认来源，未覆盖');
    imported[key]=value;
  }
}
for(const [key,value] of Object.entries(imported)) {
  if(Object.hasOwn(state.values,key) && !isDeepStrictEqual(state.values[key],value)) throw new Error('正式文件已有不同的 '+key+'，未覆盖；请先核对。');
}
for(const [key,value] of Object.entries(imported)) state=updateState(state,key,value,state.versions[key]||0,'browser-migration');
const capturedAt=new Date().toISOString();
const sources=entries.map(e=>({browser:e.browser||'手动导出',profile:e.profile||'',origin:e.origin||''}));
state.migrations.push({capturedAt,sha256:hash,sources,keys:Object.keys(imported)});
const archive={schemaVersion:1,capturedAt,sources,values:imported};
atomicWrite(path.join(dir,'imports',hash.slice(0,12)+'.json'),JSON.stringify(archive,null,2)+'\n');
const report=persistState(dir,state);
console.log(JSON.stringify({revision:state.revision,summary:report.summary,importedKeys:Object.keys(imported).length},null,2));
