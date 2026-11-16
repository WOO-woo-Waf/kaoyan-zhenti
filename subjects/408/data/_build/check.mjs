#!/usr/bin/env node
/* 单年校验：node data/_build/check.mjs 2017
   只校验指定年份，方便逐年补数据时自检 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const DATA = path.join(ROOT, 'data');
const YEAR = Number(process.argv[2]);
if (!YEAR) { console.error('用法: node data/_build/check.mjs 2017'); process.exit(2); }

const SUBJECTS = ['数据结构', '计算机组成原理', '操作系统', '计算机网络'];

function loadJS(file, name) {
  const ctx = { window: {}, console };
  ctx[name] = ctx.window;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  return ctx.window[name];
}

const KB = loadJS(path.join(DATA, 'kb.js'), '__KB__');
const MODULES = new Map();
const POINTS = new Map();
KB.subjects.forEach((s) => {
  MODULES.set(s.name, new Set());
  s.modules.forEach((m) => {
    MODULES.get(s.name).add(m.name);
    POINTS.set(s.name + '||' + m.name, new Set(m.points));
  });
});

const file = path.join(DATA, 'paper', `${YEAR}.js`);
if (!fs.existsSync(file)) { console.error(`✗ 缺 ${YEAR}.js`); process.exit(1); }
let obj;
try { obj = loadJS(file, '__CS408__')[YEAR]; }
catch (e) { console.error(`✗ ${YEAR}.js 执行失败：${e.message}`); process.exit(1); }
if (!obj) { console.error(`✗ 未挂到 window.__CS408__[${YEAR}]`); process.exit(1); }

const errors = [];
const warns = [];
const choices = obj.choices || [];
const bigs = obj.bigs || [];

if (choices.length !== 40) errors.push(`选择题 ${choices.length} 题（应 40）`);
if (bigs.length !== 7) errors.push(`综合题 ${bigs.length} 题（应 7）`);
const bigSum = bigs.reduce((a, q) => a + (q.score || 0), 0);
if (bigs.length === 7 && bigSum !== 70) errors.push(`综合题总分 ${bigSum}（应 70）`);

const ptStat = new Map();
choices.forEach((q, i) => {
  const tag = `${YEAR}-${q.no}`;
  if (q.no !== i + 1) errors.push(`${tag}: no 不连续（第 ${i + 1} 个）`);
  if (q.id !== `${YEAR}-${q.no}`) errors.push(`${tag}: id 应是 "${YEAR}-${q.no}"`);
  if (!SUBJECTS.includes(q.subject)) errors.push(`${tag}: subject=${q.subject}`);
  else if (!MODULES.get(q.subject).has(q.module)) errors.push(`${tag}: module=${q.module} 不在 ${q.subject}`);
  else if (!POINTS.get(q.subject + '||' + q.module).has(q.point)) errors.push(`${tag}: point=${q.point} 不在 ${q.subject}/${q.module}`);
  if (!q.stem) errors.push(`${tag}: 缺 stem`);
  ['A', 'B', 'C', 'D'].forEach((k) => { if (!q.options || !q.options[k]) errors.push(`${tag}: 选项 ${k} 缺失`); });
  if (!['A', 'B', 'C', 'D'].includes(q.answer)) errors.push(`${tag}: answer=${q.answer}`);
  if (!q.analysis) errors.push(`${tag}: 缺 analysis`);
  else {
    if (!q.analysis.includes('【考什么】')) errors.push(`${tag}: analysis 缺【考什么】`);
    if (!q.analysis.includes('【怎么解】')) errors.push(`${tag}: analysis 缺【怎么解】`);
  }
  const k = q.subject + '/' + q.point;
  ptStat.set(k, (ptStat.get(k) || 0) + 2);
});

bigs.forEach((q, i) => {
  const tag = `${YEAR}-${q.no}`;
  if (q.no !== 41 + i) errors.push(`${tag}: no 应为 ${41 + i}`);
  const k = q.subject + '/' + q.point;
  ptStat.set(k, (ptStat.get(k) || 0) + (q.score || 0));
  if (!q.subs || !q.subs.length) warns.push(`${tag}: 没有 subs`);
  if (q.subject === '数据结构' && !q.code && /算法|设计|代码/.test(q.type || '')) warns.push(`${tag}: 算法题缺 code`);
});

const bySubject = {};
[...choices.map((q) => [q.subject, 2]), ...bigs.map((q) => [q.subject, q.score || 0])]
  .forEach(([s, v]) => { bySubject[s] = (bySubject[s] || 0) + v; });

console.log(`── ${YEAR} ── 选择 ${choices.length} · 综合 ${bigs.length} · 综合分 ${bigSum}`);
console.log('学科分值：' + SUBJECTS.map((s) => `${s} ${bySubject[s] || 0}`).join(' · '));
console.log('知识点：' + [...ptStat.entries()].map(([k, v]) => `${k}(${v})`).join('、'));
if (warns.length) { console.log(`\n⚠ ${warns.length} 条警告`); warns.forEach((w) => console.log('  ' + w)); }
if (errors.length) { console.log(`\n✗ ${errors.length} 条错误`); errors.slice(0, 60).forEach((e) => console.log('  ' + e)); process.exit(1); }
console.log('\n✓ 通过');
