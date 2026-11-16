/**
 * 生成 data/manifest.json —— 三科真题库的机器可读总清单。
 * 供总入口页面与后续智能体读取。
 *
 * 用法：node data/build-manifest.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const SUB = path.join(ROOT, 'subjects');

const papersOf = (dir) =>
  fs.readdirSync(dir).filter((x) => /^\d{4}\.js$/.test(x)).map((x) => path.join(dir, x)).sort();

function loadWindow(files) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  for (const f of files) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
  return ctx.window;
}

const stat = (arr) => arr.reduce((m, k) => ((m[k] = (m[k] || 0) + 1), m), {});

/* ---------------- 408 ---------------- */
function build408() {
  const dir = path.join(SUB, '408', 'data');
  const w = loadWindow([path.join(dir, 'kb.js'), ...papersOf(path.join(dir, 'paper'))]);
  const P = w.__CS408__;
  const KB = w.__KB__;
  const years = Object.keys(P).map(Number).sort((a, b) => a - b);
  const all = years.flatMap((y) => [
    ...(P[y].choices || []).map((q) => ({ ...q, year: y, tab: '选择' })),
    ...(P[y].bigs || []).map((q) => ({ ...q, year: y, tab: '解答' })),
  ]);
  const points = new Set(all.map((q) => `${q.subject}/${q.point}`));
  return {
    id: '408',
    name: '计算机学科专业基础（408）',
    short: '408',
    entry: 'subjects/408/index.html',
    years,
    span: `${years[0]}–${years[years.length - 1]}`,
    counts: { total: all.length, byTab: stat(all.map((q) => q.tab)), byYear: Object.fromEntries(years.map((y) => [y, all.filter((q) => q.year === y).length])) },
    knowledge: {
      subjects: KB.subjects.length,
      modules: KB.subjects.reduce((n, s) => n + s.modules.length, 0),
      points: KB.subjects.reduce((n, s) => n + s.modules.reduce((m, mo) => m + mo.points.length, 0), 0),
      covered: points.size,
    },
    storage: { wrong: 'cs408.wrong.v1', done: 'cs408.done.v1', pref: 'cs408.pref.v1' },
    globals: { paper: '__CS408__', kb: '__KB__' },
  };
}

/* ---------------- 数学 ---------------- */
function buildMath() {
  const dir = path.join(SUB, 'math', 'data');
  const w = loadWindow([path.join(dir, 'kb.js'), ...papersOf(path.join(dir, 'paper'))]);
  const P = w.__MATH__;
  const KB = w.__KB__;
  const years = Object.keys(P).map(Number).sort((a, b) => a - b);
  const all = years.flatMap((y) => [
    ...(P[y].choices || []).map((q) => ({ ...q, year: y, tab: '选择' })),
    ...(P[y].fills || []).map((q) => ({ ...q, year: y, tab: '填空' })),
    ...(P[y].bigs || []).map((q) => ({ ...q, year: y, tab: '解答' })),
  ]);
  const points = new Set(all.map((q) => `${q.subject}/${q.point}`));
  return {
    id: 'math',
    name: '数学（一）',
    short: '数学',
    entry: 'subjects/math/index.html',
    years,
    span: `${years[0]}–${years[years.length - 1]}`,
    counts: { total: all.length, byTab: stat(all.map((q) => q.tab)), byYear: Object.fromEntries(years.map((y) => [y, all.filter((q) => q.year === y).length])) },
    knowledge: {
      subjects: KB.subjects.length,
      modules: KB.subjects.reduce((n, s) => n + s.modules.length, 0),
      points: KB.subjects.reduce((n, s) => n + s.modules.reduce((m, mo) => m + mo.points.length, 0), 0),
      covered: points.size,
    },
    storage: { wrong: 'math.wrong.v1', done: 'math.done.v1', pref: 'math.pref.v1' },
    globals: { paper: '__MATH__', kb: '__KB__' },
  };
}

/* ---------------- 英语 ---------------- */
function buildEnglish() {
  const dir = path.join(SUB, 'english', 'data', 'paper');
  const w = loadWindow(papersOf(dir));
  const P = w.__PAPER__;
  const years = Object.keys(P).map(Number).sort((a, b) => a - b);
  const per = (y) => {
    const p = P[y];
    const readingQ = (p.reading || []).reduce((n, a) => n + (a.questions || []).length, 0);
    const partBQ = (p.partB?.questions || []).length;
    const partCQ = (p.partC?.sentences || []).length;
    const clozeQ = (p.cloze?.sentences || []).length;
    const writingQ = Object.keys(p.writing || {}).length;
    return { reading: readingQ, partB: partBQ, partC: partCQ, cloze: clozeQ, writing: writingQ, total: readingQ + partBQ + partCQ + clozeQ + writingQ };
  };
  const byYear = Object.fromEntries(years.map((y) => [y, per(y).total]));
  const sum = (k) => years.reduce((n, y) => n + per(y)[k], 0);
  return {
    id: 'english',
    name: '英语（一）',
    short: '英语',
    entry: 'subjects/english/index.html',
    entryAlt: 'subjects/english/paper.html',
    years,
    span: `${years[0]}–${years[years.length - 1]}`,
    counts: {
      total: Object.values(byYear).reduce((a, b) => a + b, 0),
      byTab: { 阅读: sum('reading'), 新题型: sum('partB'), 翻译: sum('partC'), 完型: sum('cloze'), 写作: sum('writing') },
      byYear,
    },
    knowledge: { subjects: 5, modules: 5, points: 5, covered: 5, note: '阅读 / 新题型 / 翻译 / 完型 / 写作 五个体裁' },
    storage: { wrong: 'wx.bookmarks.v1', done: 'wx.answers.v1', pref: 'wx.theme.v1' },
    globals: { paper: '__PAPER__', kb: null },
  };
}

/* ---------------- 汇总 ---------------- */
const subjects = [build408(), buildMath(), buildEnglish()];
const manifest = {
  name: '考研真题精读库',
  description: '英语（一）、数学（一）、408 计算机学科专业基础 —— 近十余年真题逐题解析，纯静态离线可用',
  generatedAt: new Date().toISOString(),
  examDate: '2026-12-20T14:00:00+08:00',
  subjects,
  totals: {
    subjects: subjects.length,
    years: subjects.reduce((n, s) => n + s.years.length, 0),
    questions: subjects.reduce((n, s) => n + s.counts.total, 0),
    points: subjects.reduce((n, s) => n + s.knowledge.points, 0),
  },
};

fs.writeFileSync(path.join(ROOT, 'data', 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');
// 页面版：file:// 下无法 fetch，必须内联成 JS
fs.writeFileSync(
  path.join(ROOT, 'data', 'manifest.js'),
  '/* 由 data/build-manifest.mjs 自动生成，勿手改 */\nwindow.__MANIFEST__ = ' + JSON.stringify(manifest, null, 2) + ';\n',
  'utf8'
);

console.log('✓ data/manifest.json');
for (const s of subjects) {
  console.log(`  ${s.short.padEnd(4)} ${s.span.padEnd(11)} ${String(s.counts.total).padStart(4)} 题  ${JSON.stringify(s.counts.byTab)}  知识点 ${s.knowledge.covered}/${s.knowledge.points}`);
}
console.log(`  合计 ${manifest.totals.questions} 题 · ${manifest.totals.years} 套卷 · ${manifest.totals.points} 知识点`);
