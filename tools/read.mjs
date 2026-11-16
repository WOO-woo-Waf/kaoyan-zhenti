#!/usr/bin/env node
/**
 * 真题库读取器 —— 给智能体 / 脚本用的只读 CLI。
 *
 * 用法：
 *   node tools/read.mjs subjects                      列出三科
 *   node tools/read.mjs years <科>                    列出该科年份与题量
 *   node tools/read.mjs points <科> [关键词]          列出知识点（可过滤）
 *   node tools/read.mjs point <科> <知识点>           该知识点历年真题（串讲用）
 *   node tools/read.mjs question <科> <id>            单题完整 JSON
 *   node tools/read.mjs search <科> <关键词>          题干 / 解析全文检索
 *   node tools/read.mjs export <科> <知识点...>        生成「知识点串讲」Markdown
 *   node tools/read.mjs export-all                    全部已掌握/未掌握？→ 按科全量导出索引
 *
 * <科> ∈ 408 | math | english | 数学 | 英语
 * 输出一律 UTF-8 JSON 或 Markdown，可直接管道给别的程序。
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { readState, buildReport } from './study-core.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');

const ALIAS = {
  '408': '408', cs408: '408', 计算机: '408',
  math: 'math', 数学: 'math', 数学一: 'math',
  english: 'english', 英语: 'english', 英语一: 'english',
};

const CACHE = new Map();

function loadSubject(id) {
  if (CACHE.has(id)) return CACHE.get(id);
  const dir = path.join(ROOT, 'subjects', id, 'data');
  const ctx = { window: {} };
  vm.createContext(ctx);
  const kbFile = path.join(dir, 'kb.js');
  if (fs.existsSync(kbFile)) vm.runInContext(fs.readFileSync(kbFile, 'utf8'), ctx);
  const paperDir = path.join(dir, 'paper');
  for (const f of fs.readdirSync(paperDir).filter((x) => /^\d{4}\.js$/.test(x)).sort()) {
    vm.runInContext(fs.readFileSync(path.join(paperDir, f), 'utf8'), ctx);
  }
  const w = ctx.window;
  const G = id === '408' ? '__CS408__' : id === 'math' ? '__MATH__' : '__PAPER__';
  const papers = w[G] || {};
  const kb = w.__KB__ || null;

  const questions = [];
  for (const y of Object.keys(papers).map(Number).sort((a, b) => a - b)) {
    const p = papers[y];
    if (id === 'english') {
      (p.reading || []).forEach((art) => (art.questions || []).forEach((q) =>
        questions.push({ ...q, year: y, tab: '阅读', id: `${y}-R${q.no}`, _art: art.no })));
      (p.partB?.questions || []).forEach((q) =>
        questions.push({ ...q, year: y, tab: '新题型', id: `${y}-B${q.no}` }));
      (p.partC?.sentences || []).forEach((q, i) =>
        questions.push({ ...q, year: y, tab: '翻译', id: `${y}-C${i + 1}`, no: i + 1 }));
      (p.cloze?.sentences || []).forEach((q, i) =>
        questions.push({ ...q, year: y, tab: '完型', id: `${y}-K${i + 1}`, no: i + 1 }));
      Object.keys(p.writing || {}).forEach((k) =>
        questions.push({ ...p.writing[k], year: y, tab: '写作', id: `${y}-W${k}`, no: k }));
    } else {
      (p.choices || []).forEach((q) => questions.push({ ...q, year: y, tab: '选择' }));
      (p.fills || []).forEach((q) => questions.push({ ...q, year: y, tab: '填空' }));
      (p.bigs || []).forEach((q) => questions.push({ ...q, year: y, tab: '解答' }));
    }
  }
  const out = { id, papers, kb, questions, years: Object.keys(papers).map(Number).sort((a, b) => a - b) };
  CACHE.set(id, out);
  return out;
}

const write = (s) => process.stdout.write(s + '\n');
const j = (o) => write(JSON.stringify(o, null, 2));
const die = (m) => { process.stderr.write('✗ ' + m + '\n'); process.exit(1); };

/* ---------------- 命令 ---------------- */
const [cmd, ...rest] = process.argv.slice(2);

function subjectOf(name) {
  const id = ALIAS[String(name || '').toLowerCase()] || ALIAS[name];
  if (!id) die(`未知科目「${name}」，可用：408 | math | english`);
  return id;
}

function brief(q) {
  return {
    id: q.id, year: q.year, no: q.no, tab: q.tab,
    subject: q.subject, module: q.module, point: q.point,
    difficulty: q.difficulty,
    stem: String(q.stem || q.en || '').replace(/\s+/g, ' ').slice(0, 120),
  };
}

switch (cmd) {
  case 'learning': {
    const report = buildReport(readState(path.join(ROOT, 'study-data')));
    if (rest[0] === 'summary') j({revision:report.revision,updatedAt:report.updatedAt,summary:report.summary,instructions:report.instructions});
    else if (rest[0]) j(report.subjects[subjectOf(rest[0])]);
    else j(report);
    break;
  }
  case 'subjects': {
    const m = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'manifest.json'), 'utf8'));
    j(m.subjects.map((s) => ({
      id: s.id, name: s.name, span: s.span, years: s.years.length,
      total: s.counts.total, byTab: s.counts.byTab,
      points: `${s.knowledge.covered}/${s.knowledge.points}`,
      entry: s.entry,
    })));
    break;
  }

  case 'years': {
    const s = loadSubject(subjectOf(rest[0]));
    j(s.years.map((y) => ({
      year: y,
      total: s.questions.filter((q) => q.year === y).length,
      byTab: s.questions.filter((q) => q.year === y).reduce((m, q) => ((m[q.tab] = (m[q.tab] || 0) + 1), m), {}),
    })));
    break;
  }

  case 'points': {
    const s = loadSubject(subjectOf(rest[0]));
    const kw = rest[1] || '';
    const map = new Map();
    for (const q of s.questions) {
      if (!q.point) continue;
      const k = `${q.subject || ''}\t${q.module || ''}\t${q.point}`;
      map.set(k, (map.get(k) || 0) + 1);
    }
    const rows = [...map.entries()]
      .filter(([k]) => !kw || k.includes(kw))
      .map(([k, n]) => { const [subject, module, point] = k.split('\t'); return { subject, module, point, count: n }; })
      .sort((a, b) => b.count - a.count);
    j(rows);
    break;
  }

  case 'point': {
    const id = subjectOf(rest[0]);
    const s = loadSubject(id);
    const p = rest.slice(1).join(' ');
    if (!p) die('用法：node tools/read.mjs point <科> <知识点>');
    const hit = s.questions.filter((q) => q.point === p);
    if (!hit.length) {
      const near = [...new Set(s.questions.map((q) => q.point).filter((x) => x && x.includes(p)))];
      die(`没有「${p}」。相近：${near.slice(0, 10).join(' / ') || '（无）'}`);
    }
    j({
      subject: id, point: p, count: hit.length,
      years: [...new Set(hit.map((q) => q.year))].sort(),
      questions: hit.map((q) => ({ ...brief(q), answer: q.answer })),
    });
    break;
  }

  case 'question': {
    const id = subjectOf(rest[0]);
    const s = loadSubject(id);
    const q = s.questions.find((x) => x.id === rest[1] || `${x.year}-${x.no}` === rest[1]);
    if (!q) die(`没有题号「${rest[1]}」`);
    j(q);
    break;
  }

  case 'search': {
    const id = subjectOf(rest[0]);
    const s = loadSubject(id);
    const kw = rest.slice(1).join(' ');
    if (!kw) die('用法：node tools/read.mjs search <科> <关键词>');
    const hit = s.questions.filter((q) =>
      JSON.stringify(q).toLowerCase().includes(kw.toLowerCase()));
    j({ subject: id, keyword: kw, count: hit.length, questions: hit.map(brief) });
    break;
  }

  case 'export': {
    const id = subjectOf(rest[0]);
    const s = loadSubject(id);
    const points = rest.slice(1);
    if (!points.length) die('用法：node tools/read.mjs export <科> <知识点...>');
    const name = id === '408' ? '408 计算机学科专业基础' : id === 'math' ? '数学（一）' : '英语（一）';
    let md = `# ${name} · 知识点串讲\n\n> 由 \`tools/read.mjs\` 生成 · 共 ${points.length} 个知识点\n\n`;
    for (const p of points) {
      const qs = s.questions.filter((q) => q.point === p).sort((a, b) => b.year - a.year);
      md += `\n---\n\n## ${p}\n\n十年考过 **${qs.length}** 次：${[...new Set(qs.map((q) => q.year))].join('、')}\n\n`;
      for (const q of qs) {
        md += `### ${q.year} 年第 ${q.no} 题（${q.tab}）\n\n`;
        md += `**题干** ${String(q.stem || q.en || '').replace(/\n/g, ' ')}\n\n`;
        if (q.options) md += Object.entries(q.options).map(([k, v]) => `- ${k}. ${v}`).join('\n') + '\n\n';
        if (q.answer) md += `**答案** ${q.answer}\n\n`;
        if (q.analysis && typeof q.analysis === 'object') {
          for (const [k, v] of Object.entries(q.analysis)) md += `**【${k}】** ${v}\n\n`;
        } else if (q.analysis) md += `**解析** ${q.analysis}\n\n`;
        if ((q.subs || []).length) {
          for (const sub of q.subs) md += `**${sub.label}** ${sub.ask}\n\n${sub.ans}\n\n`;
        }
        if (q.trap) md += `> ⚠️ 易错：${q.trap}\n\n`;
      }
    }
    md += `\n---\n\n## 请这样教我\n\n1. 先按上面顺序把每个**知识点**从零讲到会，不要只讲单题。\n`;
    md += `2. 每讲完一个知识点，横向对比它在不同年份的考法差异。\n`;
    md += `3. 指出我在哪一步最容易断，给出该步的标准动作。\n`;
    md += `4. 最后给我 2–3 道自测题（同知识点、不同考法），先不给答案。\n`;
    write(md);
    break;
  }

  default:
    write(`真题库读取器

  node tools/read.mjs learning summary            我的三科学习概况（智能体先读）
  node tools/read.mjs learning [科]               完整错题、不会题、知识点、生词与上下文

  node tools/read.mjs subjects                     三科总览
  node tools/read.mjs years <科>                   年份与题量
  node tools/read.mjs points <科> [关键词]         知识点列表
  node tools/read.mjs point <科> <知识点>          该知识点历年真题
  node tools/read.mjs question <科> <id>           单题完整 JSON
  node tools/read.mjs search <科> <关键词>         全文检索
  node tools/read.mjs export <科> <知识点...>      生成知识点串讲 Markdown

  <科> = 408 | math | 数学 | english | 英语
`);
}
