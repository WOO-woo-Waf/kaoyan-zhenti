#!/usr/bin/env node
/* 全量校验：node data/_build/validate.mjs [--strict] */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const strict = process.argv.includes('--strict');

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data', 'kb.js'), 'utf8'), ctx);
const KB = ctx.window.__KB__;
const POINTS = new Set();
KB.subjects.forEach((s) => s.modules.forEach((m) => m.points.forEach((p) => POINTS.add(s.name + '||' + p))));

const dir = path.join(ROOT, 'data', 'paper');
const files = fs.readdirSync(dir).filter((f) => /^\d{4}\.js$/.test(f)).sort();
const years = files.map((f) => Number(f.slice(0, 4)));

console.log('────────── 数学（一）数据体检 ──────────');
console.log('年份：' + years.join(' / '));

let nC = 0, nF = 0, nB = 0;
const subScore = {};
const pointFreq = new Map();
const ids = new Set();
const errs = [];

for (const y of years) {
  const c = { window: {} };
  vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(dir, y + '.js'), 'utf8'), c);
  const P = c.window.__MATH__ && c.window.__MATH__[y];
  if (!P) { errs.push(`${y}.js 未挂载 window.__MATH__[${y}]`); continue; }
  (P.choices || []).forEach((q) => { q.tab = 'choice'; });
  (P.fills || []).forEach((q) => { q.tab = 'fill'; });
  (P.bigs || []).forEach((q) => { q.tab = 'big'; });
  const all = [...(P.choices || []), ...(P.fills || []), ...(P.bigs || [])];
  nC += (P.choices || []).length; nF += (P.fills || []).length; nB += (P.bigs || []).length;
  all.forEach((q) => {
    if (ids.has(q.id)) errs.push(`重复 id：${q.id}`);
    ids.add(q.id);
    const key = q.subject + '||' + q.point;
    if (!POINTS.has(key)) errs.push(`${q.id} point 不在 kb：「${q.point}」`);
    pointFreq.set(q.point, (pointFreq.get(q.point) || 0) + 1);
    const sc = q.tab === 'choice' ? (y >= 2021 ? 5 : 4) : q.tab === 'fill' ? (y >= 2021 ? 5 : 4) : (q.score || 0);
    subScore[q.subject] = (subScore[q.subject] || 0) + sc;
  });
}

console.log(`题量：选择 ${nC} · 填空 ${nF} · 解答 ${nB} · 合计 ${nC + nF + nB}`);
console.log('学科分值：' + Object.entries(subScore).map(([k, v]) => `${k} ${v}`).join(' · '));
console.log(`知识点：${pointFreq.size} 个（kb 收录 ${KB.subjects.reduce((a, s) => a + s.modules.reduce((x, m) => x + m.points.length, 0), 0)} 个）`);

/* 逐年细查 */
const bad = [];
for (const y of years) {
  try {
    execFileSync(process.execPath, [path.join(__dirname, 'check.mjs'), String(y)], { stdio: 'pipe' });
  } catch (e) {
    bad.push(y);
    const out = String(e.stdout || '') + String(e.stderr || '');
    const lines = out.split('\n').filter((l) => l.includes('✗')).slice(0, 8);
    errs.push(`[${y}] ` + lines.join(' | '));
  }
}

/* 未覆盖知识点 */
const uncovered = [];
KB.subjects.forEach((s) => s.modules.forEach((m) => m.points.forEach((p) => {
  if (!pointFreq.has(p)) uncovered.push(`${s.short}/${p}`);
})));

if (uncovered.length) console.log(`\nℹ 十年未考到的知识点 ${uncovered.length} 个：\n  ${uncovered.join('、')}`);

if (errs.length) {
  console.log(`\n✗ 错误 ${errs.length} 条：`);
  errs.slice(0, 40).forEach((m) => console.log('  ✗ ' + m));
  process.exit(1);
}
if (bad.length) { console.log(`\n✗ 未通过年份：${bad.join(', ')}`); process.exit(1); }
console.log('\n✓ 全部通过');
