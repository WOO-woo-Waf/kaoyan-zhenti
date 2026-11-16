#!/usr/bin/env node
/* 单年校验：node data/_build/check.mjs 2016 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');

const year = Number(process.argv[2]);
if (!year) { console.error('用法: node data/_build/check.mjs <year>'); process.exit(2); }

/* 各年题型结构：选择题数 / 填空题数 / 解答题数 / 每题分值
 * 2021 考研（2020 年 12 月）起改革：10 选择(5分) + 6 填空(11-16, 5分) + 6 解答(17-22, 70分) */
const STRUCT = {
  2016: [8, 6, 9], 2017: [8, 6, 9], 2018: [8, 6, 9], 2019: [8, 6, 9], 2020: [8, 6, 9],
  2021: [10, 6, 6], 2022: [10, 6, 6], 2023: [10, 6, 6],
  2024: [10, 6, 6], 2025: [10, 6, 6], 2026: [10, 6, 6]
};
const SCORE = {
  old: { choice: 4, fill: 4, bigTotal: 94 },   // 2016-2020
  neu: { choice: 5, fill: 5, bigTotal: 70 }    // 2021-2026
};

/* ---- 加载 kb ---- */
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data', 'kb.js'), 'utf8'), ctx);
const KB = ctx.window.__KB__;
const POINTS = new Set();
const MODULE_OF = new Map();   // subject||point -> module
KB.subjects.forEach((s) => s.modules.forEach((m) => m.points.forEach((p) => {
  POINTS.add(s.name + '||' + p);
  MODULE_OF.set(s.name + '||' + p, m.name);
})));
const SUBJECTS = new Set(KB.subjects.map((s) => s.name));

/* ---- 加载年份数据 ---- */
const f = path.join(ROOT, 'data', 'paper', year + '.js');
if (!fs.existsSync(f)) { console.error(`✗ 缺 ${year}.js`); process.exit(1); }
const ctx2 = { window: {} };
vm.createContext(ctx2);
vm.runInContext(fs.readFileSync(f, 'utf8'), ctx2);
const P = ctx2.window.__MATH__ && ctx2.window.__MATH__[year];
if (!P) { console.error(`✗ ${year}.js 没有挂到 window.__MATH__[${year}]`); process.exit(1); }

const errs = [];
const warns = [];
const E = (m) => errs.push(m);
const W = (m) => warns.push(m);

const [nC, nF, nB] = STRUCT[year] || [10, 6, 6];
const S = year >= 2021 ? SCORE.neu : SCORE.old;

/* 基本字段 */
if (P.year !== year) E(`year 字段应为 ${year}，实际 ${P.year}`);
if (!P.title) E('缺 title');
if (P.duration !== 180) W(`duration 应为 180，实际 ${P.duration}`);
if (P.score !== 150) E(`score 应为 150，实际 ${P.score}`);

/* 题量 */
const C = P.choices || [], F = P.fills || [], B = P.bigs || [];
if (C.length !== nC) E(`选择题应为 ${nC} 道，实际 ${C.length}`);
if (F.length !== nF) E(`填空题应为 ${nF} 道，实际 ${F.length}`);
if (B.length !== nB) E(`解答题应为 ${nB} 道，实际 ${B.length}`);

/* 题号连续 & id */
const all = [...C, ...F, ...B];
const total = nC + nF + nB;
for (let i = 0; i < all.length; i++) {
  const q = all[i];
  if (q.no !== i + 1) E(`第 ${i + 1} 个对象的 no 应为 ${i + 1}，实际 ${q.no}`);
  if (q.id !== `${year}-${q.no}`) E(`no=${q.no} 的 id 应为 ${year}-${q.no}，实际 ${q.id}`);
}
if (all.length !== total) E(`总题数应为 ${total}，实际 ${all.length}`);

/* 逐题 */
const pointCount = new Map();
function chkCommon(q, kind) {
  const tag = `${kind}第 ${q.no} 题`;
  if (!SUBJECTS.has(q.subject)) E(`${tag} subject 非法：「${q.subject}」`);
  if (!q.point) E(`${tag} 缺 point`);
  else if (!POINTS.has(q.subject + '||' + q.point)) E(`${tag} point 不在 kb：「${q.point}」（subject=${q.subject}）`);
  else {
    const mod = MODULE_OF.get(q.subject + '||' + q.point);
    if (q.module !== mod) E(`${tag} module 应为「${mod}」，实际「${q.module}」`);
    pointCount.set(q.point, (pointCount.get(q.point) || 0) + 1);
  }
  if (!q.stem || String(q.stem).trim().length < 6) E(`${tag} 题干过短`);
  const an = q.analysis || {};
  const need = kind === '解答' ? ['思路', '关键步骤', '易错'] : ['考什么', '怎么解', '逐项排除'];
  need.forEach((k) => {
    if (!an[k] || String(an[k]).trim().length < 8) E(`${tag} analysis 缺【${k}】或过短`);
  });
  if (q.difficulty != null && (q.difficulty < 1 || q.difficulty > 5)) W(`${tag} difficulty 越界`);
  // 公式定界符配对
  const cnt = (String(q.stem || '').match(/(?<!\\)\$/g) || []).length;
  if (cnt % 2 !== 0) E(`${tag} 题干 $ 未配对（${cnt} 个）`);
}

C.forEach((q) => {
  q.tab = 'choice';
  chkCommon(q, '选择');
  if (!/^[ABCD]$/.test(q.answer || '')) E(`选择第 ${q.no} 题 answer 应为 A-D，实际「${q.answer}」`);
  const o = q.options || {};
  ['A', 'B', 'C', 'D'].forEach((k) => { if (!o[k] || !String(o[k]).trim()) E(`选择第 ${q.no} 题缺选项 ${k}`); });
  if (Object.keys(o).length !== 4) E(`选择第 ${q.no} 题选项数应为 4，实际 ${Object.keys(o).length}`);
  const ww = q.whyWrong || {};
  const wrongKeys = Object.keys(ww).filter((k) => k !== q.answer);
  if (wrongKeys.length !== 3) W(`选择第 ${q.no} 题 whyWrong 应恰 3 项（不含正确项），实际 ${wrongKeys.length}`);
  wrongKeys.forEach((k) => { if (!String(ww[k] || '').trim()) E(`选择第 ${q.no} 题 whyWrong.${k} 为空`); });
});

F.forEach((q) => {
  q.tab = 'fill';
  chkCommon(q, '填空');
  if (!q.answer || !String(q.answer).trim()) E(`填空第 ${q.no} 题缺 answer`);
});

B.forEach((q) => {
  q.tab = 'big';
  chkCommon(q, '解答');
  if (!(q.score > 0)) E(`解答第 ${q.no} 题缺 score`);
  if (!Array.isArray(q.subs) || !q.subs.length) E(`解答第 ${q.no} 题缺 subs 小问`);
  else q.subs.forEach((s, i) => {
    if (!s.ask) E(`解答第 ${q.no} 题 subs[${i}] 缺 ask`);
    if (!s.ans) E(`解答第 ${q.no} 题 subs[${i}] 缺 ans`);
  });
  if (!Array.isArray(q.pitfalls) || q.pitfalls.length < 2) W(`解答第 ${q.no} 题 pitfalls 应 ≥2 条`);
});

/* 分值 */
const bigSum = B.reduce((a, q) => a + (q.score || 0), 0);
if (bigSum !== S.bigTotal) E(`解答题分值合计应为 ${S.bigTotal}，实际 ${bigSum}`);
const grand = nC * S.choice + nF * S.fill + bigSum;
if (grand !== 150) E(`全卷合计应为 150，实际 ${grand}`);

/* 学科分布 */
const sub = {};
all.forEach((q) => {
  const sc = q.tab === 'choice' ? S.choice : q.tab === 'fill' ? S.fill : (q.score || 0);
  sub[q.subject] = (sub[q.subject] || 0) + sc;
});

/* 输出 */
console.log(`── ${year} ── 选择 ${C.length} · 填空 ${F.length} · 解答 ${B.length} · 解答分 ${bigSum}`);
console.log('学科分值：' + Object.entries(sub).map(([k, v]) => `${k} ${v}`).join(' · '));
console.log('知识点：' + Array.from(pointCount.entries()).map(([p, n]) => `${p}(${n})`).join('、'));

if (warns.length) { console.log('\n⚠ 警告 ' + warns.length + ' 条：'); warns.forEach((m) => console.log('  · ' + m)); }
if (errs.length) {
  console.log('\n✗ 错误 ' + errs.length + ' 条：');
  errs.slice(0, 60).forEach((m) => console.log('  ✗ ' + m));
  if (errs.length > 60) console.log(`  … 还有 ${errs.length - 60} 条`);
  process.exit(1);
}
console.log('\n✓ 通过');
