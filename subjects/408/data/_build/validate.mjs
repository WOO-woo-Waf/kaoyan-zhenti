#!/usr/bin/env node
/* 408 数据结构校验器
   用法：node data/_build/validate.mjs [--strict]
   退出码 0 = 全绿；1 = 有错 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const DATA = path.join(ROOT, 'data');
const STRICT = process.argv.includes('--strict');

const YEARS = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
const SUBJECTS = ['数据结构', '计算机组成原理', '操作系统', '计算机网络'];
const DIST = { 数据结构: 45, 计算机组成原理: 45, 操作系统: 35, 计算机网络: 25 };

const errors = [];
const warns = [];
const err = (m) => errors.push(m);
const warn = (m) => warns.push(m);

function loadJS(file, globalName) {
  const ctx = { window: {}, console };
  ctx[globalName] = ctx.window;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  return ctx.window[globalName] || {};
}

// ---- 1. kb ----
const kbPath = path.join(DATA, 'kb.js');
if (!fs.existsSync(kbPath)) { console.error('✗ 缺 data/kb.js'); process.exit(1); }
const KB = loadJS(kbPath, '__KB__');
const MODULES = new Map();   // 学科 -> Set(module)
const POINTS = new Map();    // 学科||module -> Set(point)
(KB.subjects || []).forEach((s) => {
  MODULES.set(s.name, new Set());
  (s.modules || []).forEach((m) => {
    MODULES.get(s.name).add(m.name);
    POINTS.set(s.name + '||' + m.name, new Set(m.points || []));
  });
});

// ---- 2. 每年 ----
const seen = new Map();   // id -> 年份
let totalQ = 0, totalBig = 0;
const bySubject = Object.fromEntries(SUBJECTS.map((s) => [s, 0]));

YEARS.forEach((y) => {
  const f = path.join(DATA, 'paper', `${y}.js`);
  if (!fs.existsSync(f)) { err(`✗ 缺 ${y}.js`); return; }
  let obj;
  try { obj = loadJS(f, '__CS408__')[y]; }
  catch (e) { err(`✗ ${y}.js 执行失败：${e.message}`); return; }
  if (!obj) { err(`✗ ${y}.js 未挂到 window.__CS408__[${y}]`); return; }

  const choices = obj.choices || [];
  const bigs = obj.bigs || [];
  totalQ += choices.length;
  totalBig += bigs.length;

  // 选择题
  if (choices.length !== 40) err(`✗ ${y}: 选择题 ${choices.length} 题（应为 40）`);
  const nos = new Set();
  choices.forEach((q, i) => {
    const tag = `${y}-${q.no}`;
    if (q.no !== i + 1) err(`✗ ${y}: 第 ${i + 1} 个选择题的 no=${q.no}，不连续`);
    if (nos.has(q.no)) err(`✗ ${tag}: 题号重复`);
    nos.add(q.no);
    if (q.id !== `${y}-${q.no}`) err(`✗ ${tag}: id 应为 "${y}-${q.no}"，实际 "${q.id}"`);
    if (seen.has(q.id)) err(`✗ ${tag}: id 重复（已出现在 ${seen.get(q.id)}）`);
    seen.set(q.id, y);

    if (!SUBJECTS.includes(q.subject)) err(`✗ ${tag}: subject="${q.subject}" 不合法`);
    else {
      bySubject[q.subject] += 2;
      if (!MODULES.get(q.subject)?.has(q.module)) err(`✗ ${tag}: module="${q.module}" 不在 ${q.subject} 的模块清单里`);
      else if (!POINTS.get(q.subject + '||' + q.module)?.has(q.point)) {
        const msg = `✗ ${tag}: point="${q.point}" 不在 【${q.subject}/${q.module}】 的知识点清单里`;
        STRICT ? err(msg) : warn(msg);
      }
    }
    if (!q.stem || q.stem.length < 6) err(`✗ ${tag}: stem 太短或缺失`);
    const opts = q.options || {};
    ['A', 'B', 'C', 'D'].forEach((k) => {
      if (!opts[k] || String(opts[k]).trim() === '') err(`✗ ${tag}: 选项 ${k} 缺失或为空`);
    });
    if (!['A', 'B', 'C', 'D'].includes(q.answer)) err(`✗ ${tag}: answer="${q.answer}" 不合法`);
    if (!q.analysis) err(`✗ ${tag}: 缺 analysis`);
    else {
      if (!q.analysis.includes('【考什么】')) err(`✗ ${tag}: analysis 缺【考什么】段`);
      if (!q.analysis.includes('【怎么解】')) err(`✗ ${tag}: analysis 缺【怎么解】段`);
    }
    if (q.difficulty && (q.difficulty < 1 || q.difficulty > 5)) warn(`· ${tag}: difficulty=${q.difficulty} 越界`);
    if (q.code && !q.code.includes('\n')) warn(`· ${tag}: code 只有一行，确认不是被压平了`);
  });

  // 综合题
  if (bigs.length && bigs.length !== 7) err(`✗ ${y}: 综合题 ${bigs.length} 题（应为 7）`);
  const sum = bigs.reduce((a, q) => a + (q.score || 0), 0);
  if (bigs.length === 7 && sum !== 70) err(`✗ ${y}: 综合题总分 ${sum}（应为 70）`);
  bigs.forEach((q, i) => {
    const tag = `${y}-${q.no}`;
    if (q.no !== 41 + i) err(`✗ ${y}: 第 ${i + 1} 个综合题 no=${q.no}（应为 ${41 + i}）`);
    if (!SUBJECTS.includes(q.subject)) err(`✗ ${tag}: subject 不合法`);
    else bySubject[q.subject] += q.score || 0;
    if (!q.stem || q.stem.length < 6) err(`✗ ${tag}: stem 太短`);
    if (!q.analysis) err(`✗ ${tag}: 缺 analysis`);
    if (!Array.isArray(q.subs) || !q.subs.length) warn(`· ${tag}: 没有 subs 小问`);
    if (seen.has(q.id)) err(`✗ ${tag}: id 重复`);
    seen.set(q.id, y);
  });

  // 分值分布
  if (obj.dist) {
    SUBJECTS.forEach((s) => {
      if (obj.dist[s] !== DIST[s]) warn(`· ${y}: dist.${s}=${obj.dist[s]}（大纲 ${DIST[s]}）`);
    });
  }
});

// ---- 3. 汇总 ----
const total = totalQ + totalBig;
console.log('────────── 408 数据体检 ──────────');
console.log(`年份：${YEARS.filter((y) => fs.existsSync(path.join(DATA, 'paper', `${y}.js`))).join(' / ')}`);
console.log(`题量：选择题 ${totalQ} · 综合题 ${totalBig} · 合计 ${total}`);
console.log(`学科选择题分值：${SUBJECTS.map((s) => `${s} ${bySubject[s]}`).join(' · ')}`);
console.log(`知识点：${[...POINTS.values()].reduce((a, s) => a + s.size, 0)} 个（kb 收录）`);
if (warns.length) {
  console.log(`\n⚠ 警告 ${warns.length} 条：`);
  warns.slice(0, 80).forEach((w) => console.log('  ' + w));
  if (warns.length > 80) console.log(`  …还有 ${warns.length - 80} 条`);
}
if (errors.length) {
  console.log(`\n✗ 错误 ${errors.length} 条：`);
  errors.slice(0, 120).forEach((e) => console.log('  ' + e));
  if (errors.length > 120) console.log(`  …还有 ${errors.length - 120} 条`);
  process.exit(1);
}
console.log('\n✓ 全部通过');
