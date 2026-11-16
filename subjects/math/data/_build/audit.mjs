/* 跨年份数据体检：重复题干 / 占位语 / 公式配对 / 答案分布 / 难度分布 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const DIR = path.resolve('data/paper');
const ctx = { window: {} };
vm.createContext(ctx);

const years = [];
for (const f of fs.readdirSync(DIR).filter((x) => /^\d{4}\.js$/.test(x)).sort()) {
  const code = fs.readFileSync(path.join(DIR, f), 'utf8');
  try { vm.runInContext(code, ctx); } catch (e) { console.log(`✗ ${f} 加载失败: ${e.message}`); continue; }
  const y = Number(f.slice(0, 4));
  if (ctx.window.__MATH__ && ctx.window.__MATH__[y]) years.push(ctx.window.__MATH__[y]);
}

const all = [];
for (const P of years) {
  (P.choices || []).forEach((q) => all.push({ ...q, year: P.year, tab: '选择' }));
  (P.fills || []).forEach((q) => all.push({ ...q, year: P.year, tab: '填空' }));
  (P.bigs || []).forEach((q) => all.push({ ...q, year: P.year, tab: '解答' }));
}
console.log(`加载 ${years.length} 套卷 · ${all.length} 题`);

/* 1. 重复题干 */
const byStem = new Map();
for (const q of all) {
  const k = String(q.stem || '').replace(/\s+/g, '');
  if (!k) continue;
  if (!byStem.has(k)) byStem.set(k, []);
  byStem.get(k).push(`${q.year}-${q.no}`);
}
const dup = [...byStem.entries()].filter(([, v]) => v.length > 1);
console.log(`\n【1】重复题干：${dup.length} 组`);
dup.slice(0, 10).forEach(([k, v]) => console.log(`  ${v.join(' / ')}  ← ${k.slice(0, 40)}`));

/* 2. 占位语 */
const BAD = ['（略）', '(略)', '略解', '同上', '见解析', '暂无解析', 'TODO', '待填', '待补'];
let badN = 0;
for (const q of all) {
  const blob = [q.stem, q.answer, q.trap, ...Object.values(q.analysis || {}), ...(q.subs || []).map((s) => s.ans), ...(q.pitfalls || [])].join('\n');
  for (const b of BAD) {
    const hit = b === '同上' ? /(^|[^不])同上/.test(blob) : blob.includes(b);
    if (hit) {
      console.log(`  ✗ ${q.year}-${q.no} 含占位语「${b}」`);
      badN++;
      break;
    }
  }
}
console.log(`\n【2】占位语：${badN} 处`);

/* 3. 公式配对 */
let unp = 0;
for (const q of all) {
  const s = [q.stem, ...Object.values(q.options || {}), q.answer, ...Object.values(q.analysis || {}), ...(q.subs || []).map((x) => x.ans)].join('\n');
  const n = (s.match(/(?<!\\)\$/g) || []).length;
  if (n % 2) { console.log(`  ✗ ${q.year}-${q.no} $ 未配对（${n}）`); unp++; }
}
console.log(`【3】$ 未配对：${unp} 题`);

/* 4. 答案分布 */
const dist = {};
for (const q of all.filter((x) => x.tab === '选择')) dist[q.answer] = (dist[q.answer] || 0) + 1;
console.log(`\n【4】选择题答案分布：${JSON.stringify(dist)}`);

/* 5. 难度分布 */
const dif = {};
for (const q of all) { const d = q.difficulty || '?'; dif[d] = (dif[d] || 0) + 1; }
console.log(`【5】难度分布：${JSON.stringify(dif)}`);

/* 6. 知识点覆盖 */
const pts = new Set(all.map((q) => q.subject + '/' + q.point));
console.log(`【6】覆盖知识点：${pts.size} 个`);

/* 7. 每卷学科分值 */
console.log('\n【7】逐年学科分值：');
for (const P of years) {
  const sc = { 高等数学: 0, 线性代数: 0, 概率论与数理统计: 0 };
  (P.choices || []).forEach((q) => { sc[q.subject] += (P.year >= 2021 ? 5 : 4); });
  (P.fills || []).forEach((q) => { sc[q.subject] += (P.year >= 2021 ? 5 : 4); });
  (P.bigs || []).forEach((q) => { sc[q.subject] += q.score || 0; });
  const sum = Object.values(sc).reduce((a, b) => a + b, 0);
  console.log(`  ${P.year}  ${Object.entries(sc).map(([k, v]) => `${k} ${v}`).join(' · ')}  = ${sum}`);
}
