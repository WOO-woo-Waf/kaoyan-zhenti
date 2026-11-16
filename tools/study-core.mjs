import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const KEYS = [
  'cs408.wrong.v1', 'cs408.done.v1', 'cs408.pref.v1',
  'math.wrong.v1', 'math.done.v1', 'math.pref.v1', 'math.answers.v1',
  'wx.answers.v1', 'wx.bookmarks.v1', 'wx.theme.v1', 'wx.fontSize.v1', 'wx.showZh.v1', 'wx.mode.v1',
  'paper.answers', 'paper.words', 'paper.theme', 'paper.size', 'paper.zh', 'paper.view',
  'paper.deep', 'paper.analysis', 'paper.year', 'paper.tab', 'paper.textNo', 'hub.theme.v1',
  'study.questions.v1', 'study.knowledge.v1'
];
const OBJECT_KEYS = new Set(['cs408.wrong.v1', 'cs408.done.v1', 'cs408.pref.v1', 'math.wrong.v1',
  'math.done.v1', 'math.pref.v1', 'math.answers.v1', 'wx.answers.v1', 'paper.answers', 'study.questions.v1', 'study.knowledge.v1']);
export function validateValue(key, value) {
  if (!KEYS.includes(key)) throw new Error('不支持的学习数据字段');
  if (value === null) return;
  if (OBJECT_KEYS.has(key) && (!value || typeof value !== 'object' || Array.isArray(value))) throw new Error('此字段必须为对象');
  if (['wx.bookmarks.v1', 'paper.words'].includes(key) && !Array.isArray(value)) throw new Error('生词本必须为数组');
  if (JSON.stringify(value).length > 4 * 1024 * 1024) throw new Error('单个字段超过 4 MB');
}
export function emptyState() {
  return {schemaVersion: 1, revision: 0, updatedAt: null, values: {}, versions: {}, history: [], migrations: []};
}
export function readState(dir) {
  const file = path.join(dir, 'state.json');
  if (!fs.existsSync(file)) return emptyState();
  const state = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (state.schemaVersion !== 1 || !Number.isInteger(state.revision) || !state.values || !state.versions || !Array.isArray(state.history) || !Array.isArray(state.migrations)) throw new Error('学习档案损坏或版本不支持，已停止写入，请保留文件');
  for (const [key, value] of Object.entries(state.values)) validateValue(key, value);
  return state;
}
export function updateState(state, key, value, expectedVersion, source = 'page') {
  validateValue(key, value);
  const currentVersion = state.versions[key] || 0;
  if (expectedVersion !== currentVersion) {
    const e = new Error('另一页面已更新此记录，请刷新后继续；未覆盖文件中的数据'); e.status = 409; throw e;
  }
  if (isDeepStrictEqual(state.values[key] ?? null, value)) return state;
  const next = structuredClone(state), before = next.values[key] ?? null;
  const at = new Date().toISOString();
  next.revision++; next.updatedAt = at; next.versions[key] = currentVersion + 1;
  if (value === null) delete next.values[key]; else next.values[key] = value;
  // 保存每次变更的差异，当前状态可查，历史答错后改对也不会抹掉。
  const diff = [];
  if (OBJECT_KEYS.has(key) && !key.endsWith('pref.v1')) {
    for (const id of new Set([...Object.keys(before || {}), ...Object.keys(value || {})])) {
      if (!isDeepStrictEqual(before?.[id], value?.[id])) diff.push({id, before: before?.[id] ?? null, after: value?.[id] ?? null});
    }
  } else diff.push({before, after: value});
  next.history.push({revision: next.revision, at, key, source, changes: diff});
  return next;
}
export function atomicWrite(file, text) {
  fs.mkdirSync(path.dirname(file), {recursive: true});
  const temp = file + '.' + process.pid + '.tmp';
  try {
    const fd = fs.openSync(temp, 'w');
    try { fs.writeFileSync(fd, text, 'utf8'); fs.fsyncSync(fd); } finally { fs.closeSync(fd); }
    fs.renameSync(temp, file);
  } finally { if (fs.existsSync(temp)) fs.unlinkSync(temp); }
}
let bankCache;
export function loadBanks() {
  if (bankCache) return bankCache;
  const banks = {};
  for (const sid of ['408', 'math', 'english']) {
    const dir = path.join(ROOT, 'subjects', sid, 'data'), ctx = {window: {}};
    vm.createContext(ctx);
    for (const sub of ['paper', ...(sid === 'english' ? ['wx'] : [])]) {
      const subdir = path.join(dir, sub);
      if (!fs.existsSync(subdir)) continue;
      for (const f of fs.readdirSync(subdir).filter(f => /^\d{4}\.js$/.test(f)).sort()) vm.runInContext(fs.readFileSync(path.join(subdir, f), 'utf8'), ctx);
    }
    const kb = path.join(dir, 'kb.js');
    if (fs.existsSync(kb)) vm.runInContext(fs.readFileSync(kb, 'utf8'), ctx);
    const papers = ctx.window[sid === '408' ? '__CS408__' : sid === 'math' ? '__MATH__' : '__PAPER__'] || {};
    const questions = {};
    for (const [year, paper] of Object.entries(papers)) {
      if (sid !== 'english') {
        for (const kind of ['choices', 'fills', 'bigs']) for (const q of paper[kind] || []) questions[q.id] = {...q, year: Number(year), kind};
      } else {
        for (const art of paper.reading || []) for (const q of art.questions || []) questions[year + ':' + q.no] = {...q, year: Number(year), kind: 'reading', context: art.paras, articleNo: art.no};
        for (const q of paper.partB?.questions || []) questions[year + ':' + q.no] = {...q, year: Number(year), kind: 'partB', context: paper.partB};
        for (const [i, q] of (paper.partC?.sentences || []).entries()) {
          const no = q.no || 46 + i; questions[year + ':' + no] = {...q, no, year: Number(year), kind: 'partC', context: paper.partC};
        }
        for (const [kind, q] of Object.entries(paper.writing || {})) {
          const no = ['small', 'A'].includes(kind) ? 51 : 52; questions[year + ':' + no] = {...q, no, year: Number(year), kind: 'writing:' + kind};
        }
      }
    }
    if (sid === 'english') for (const [year, paper] of Object.entries(ctx.window.__WX__ || {})) {
      for (const q of paper.blanks || []) questions[year + ':' + q.no] = {...q, year: Number(year), kind: 'cloze', context: paper.text};
    }
    banks[sid] = {questions, papers, wx: ctx.window.__WX__ || {}, knowledge: ctx.window.__KB__ || null};
  }
  bankCache = banks; return banks;
}
const names = {'408': '408 计算机学科专业基础', math: '数学（一）', english: '英语（一）'};
function correctOf(q) { return q?.answer ?? q?.ans ?? null; }
function answerResult(sid, record, q) {
  if (sid === '408') return typeof record?.ok === 'boolean' ? record.ok : null;
  if (sid === 'math') return record === 'right' ? true : record === 'wrong' ? false : null;
  return q?.answer && typeof record === 'string' ? record.toUpperCase() === String(q.answer).toUpperCase() : null;
}
export function buildReport(state) {
  const banks = loadBanks(), values = state.values;
  const report = {schemaVersion: 1, revision: state.revision, updatedAt: state.updatedAt,
    instructions: ['先读 summary，再读 subjects 中的 needsHelp 和 weakPoints。', 'explicitKnowledge 是本人明确标记；weakPoints 是从题目标签推断，不能当成掌握程度定论。',
      'unresolvedRecords 不丢弃：题库无法匹配的原始记录需人工核对。', '未记录作答的题不等于不会；做对也不自动删除本人“不会”的标记。',
      '讲解先讲知识点与思路，再跨年对比考法，指出标准动作，最后给 2–3 道自测题，先不给答案。'],
    summary: {}, subjects: {}, migrations: state.migrations, history: state.history};
  for (const sid of ['408', 'math', 'english']) {
    const bank = banks[sid], wrong = values[sid === '408' ? 'cs408.wrong.v1' : 'math.wrong.v1'] || {};
    const recordSets = sid === 'english' ? [['wx.answers.v1', values['wx.answers.v1'] || {}], ['paper.answers', values['paper.answers'] || {}]] : [[sid === '408' ? 'cs408.done.v1' : 'math.done.v1', values[sid === '408' ? 'cs408.done.v1' : 'math.done.v1'] || {}]];
    const records = Object.assign({},...recordSets.map(([,v])=>v));
    const items = new Map(), unresolvedRecords = [], attempts = [];
    function add(id, flags, raw) {
      const q = bank.questions[id];
      if (!q) { unresolvedRecords.push({id, flags, raw}); return; }
      if (!items.has(id)) items.set(id, {id, flags: [], userAnswer: records[id] ?? null,
        answerSources:recordSets.filter(([,entries])=>Object.hasOwn(entries,id)).map(([sourceKey,entries])=>({sourceKey,record:entries[id]})), correctAnswer: correctOf(q), question: q});
      const it = items.get(id); it.flags = [...new Set([...it.flags, ...flags])];
      if (sid === 'math') it.userAnswer = values['math.answers.v1']?.[id] ?? raw?.myAnswer ?? it.userAnswer;
      if (sid === '408' && it.userAnswer === null && raw?.pick) it.userAnswer = raw.pick;
      if (raw !== undefined) it.mark = raw;
    }
    if (sid !== 'english') for (const [id, raw] of Object.entries(wrong)) if (raw) add(id, [raw.reason === 'wrong' || raw.myAnswer ? '答错后入本' : '本人标记不会'], raw);
    for (const [sourceKey, sourceRecords] of recordSets) for (const [id, raw] of Object.entries(sourceRecords)) {
      const q = bank.questions[id], result = answerResult(sid, raw, q);
      attempts.push({sourceKey, id, record: raw, result, questionMatched: !!q});
      if (result === false) add(id, ['当前答错（' + sourceKey + '）']);
      else if (!q) unresolvedRecords.push({id, flags: ['答题记录'], raw});
    }
    for (const [key, mark] of Object.entries(values['study.questions.v1'] || {})) {
      if (key.startsWith(sid + ':') && mark) add(key.slice(sid.length + 1), ['本人标记不会'], mark);
    }
    const weak = new Map();
    for (const it of items.values()) {
      const q = it.question, point = q.point || q.type || q.kind || '未标注知识点';
      const group = [q.subject || names[sid], q.module || '', point].join(' / ');
      if (!weak.has(group)) weak.set(group, {subject: q.subject || names[sid], module: q.module || '', point, basis: '由错题/不会题关联推断，待复习确认', questionIds: []});
      weak.get(group).questionIds.push(it.id);
    }
    const vocabulary = [];
    if (sid === 'english') for (const key of ['wx.bookmarks.v1', 'paper.words']) for (const item of values[key] || []) {
      const year = item.year, no = item.blankNo ?? item.qno ?? item.no;
      const q = bank.questions[year + ':' + no];
      const context = q?.context || (key === 'wx.bookmarks.v1' ? bank.wx[year]?.text : bank.papers[year]);
      vocabulary.push({sourceKey: key, ...item, context: context ?? null});
    }
    const explicitKnowledge = Object.values(values['study.knowledge.v1'] || {}).filter(x => x && x.subject === sid).map(x => ({...x,
      relatedQuestionIds:Object.entries(bank.questions).filter(([,q]) => q.point === x.point || q.type === x.point).map(([id])=>id)}));
    const data = {name: names[sid], needsHelp: [...items.values()], weakPoints: [...weak.values()].sort((a,b) => b.questionIds.length - a.questionIds.length),
      explicitKnowledge, vocabulary, attempts, unresolvedRecords,
      raw: Object.fromEntries(Object.entries(values).filter(([k]) => sid === 'english' ? /^(wx\.|paper\.)/.test(k) : k.startsWith(sid === '408' ? 'cs408.' : 'math.')))};
    report.subjects[sid] = data;
    report.summary[sid] = {name: names[sid], needsHelp: items.size, weakPoints: weak.size, explicitKnowledge: explicitKnowledge.length,
      answered: attempts.length, incorrectLatest: attempts.filter(a => a.result === false).length, vocabulary: vocabulary.length, unresolved: unresolvedRecords.length};
  }
  return report;
}
function readable(value) { return typeof value === 'string' ? value : JSON.stringify(value, null, 2); }
export function reportMarkdown(report) {
  let text = '# 我的考研学习档案\n\n';
  text += `版本：${report.revision}　最后保存：${report.updatedAt || '尚无学习记录'}\n\n`;
  text += '> 由本机保存程序自动更新。正式数据是同目录 state.json，智能体完整资料是 agent-context.json。\n';
  text += '> “本人标记”与“由错题推断”分别记录；未作答不代表不会，做对不自动取消不会标记。\n\n';
  text += '| 科目 | 需讲解题 | 推断薄弱点 | 本人标记知识点 | 已作答 | 最近答错 | 生词 | 待核对记录 |\n|---|---:|---:|---:|---:|---:|---:|---:|\n';
  for (const s of Object.values(report.summary)) text += `| ${s.name} | ${s.needsHelp} | ${s.weakPoints} | ${s.explicitKnowledge} | ${s.answered} | ${s.incorrectLatest} | ${s.vocabulary} | ${s.unresolved} |\n`;
  for (const s of Object.values(report.subjects)) {
    text += `\n## ${s.name}\n\n### 我明确不会的知识点\n\n`;
    text += s.explicitKnowledge.length ? s.explicitKnowledge.map(p => `- **${p.point}**：${p.note || '本人标记不会'}\n`).join('') : '尚未明确标记。\n';
    text += '\n### 从错题和不会题推断的薄弱点\n\n';
    text += s.weakPoints.length ? s.weakPoints.map(p => `- **${p.point}**（${p.module || p.subject}）：${p.questionIds.join('、')}。${p.basis}。\n`).join('') : '暂无可推断记录。\n';
    text += '\n### 需要讲解的题\n\n';
    if (!s.needsHelp.length) text += '暂无记录。\n';
    for (const it of s.needsHelp) {
      const q = it.question;
      text += `#### ${it.id} · ${q.point || q.type || q.kind}\n\n状态：${it.flags.join('；')}\n\n`;
      text += `我的作答：${readable(it.userAnswer)}\n\n标准答案：${readable(it.correctAnswer)}\n\n`;
      if(it.answerSources.length) text += '**各页面的作答来源**\n\n' + readable(it.answerSources) + '\n\n';
      for (const [label, value] of [['题干', q.stem || q.en || q.ask || q.prompt], ['代码', q.code], ['选项', q.options], ['解析', q.analysis || q.explain], ['分问', q.subs], ['易错点', q.trap], ['上下文', q.context]]) {
        if (value != null) text += `**${label}**\n\n${readable(value)}\n\n`;
      }
      text += '<details><summary>完整题目字段（避免遗漏）</summary>\n\n```json\n' + JSON.stringify(q, null, 2) + '\n```\n\n</details>\n\n';
    }
    text += '\n### 英语生词和上下文\n\n';
    if (s.vocabulary.length) for (const word of s.vocabulary) text += `#### ${word.w || word.word || word.term || '生词'}\n\n` + '```json\n' + JSON.stringify(word, null, 2) + '\n```\n\n';
    else text += '暂无记录。\n';
    if (s.unresolvedRecords.length) text += '\n### 待核对的原始记录\n\n```json\n' + JSON.stringify(s.unresolvedRecords, null, 2) + '\n```\n';
  }
  text += '\n## 给讲解智能体\n\n' + report.instructions.map((s, i) => `${i + 1}. ${s}`).join('\n') + '\n\n完整答题记录、原始字段、历史变更和迁移来源见 agent-context.json 与 state.json。\n';
  return text;
}
export function persistState(dir, state) {
  const report = buildReport(state), json = JSON.stringify(report, null, 2) + '\n', md = reportMarkdown(report);
  atomicWrite(path.join(dir, 'state.json'), JSON.stringify(state, null, 2) + '\n');
  atomicWrite(path.join(dir, 'agent-context.json'), json);
  atomicWrite(path.join(dir, '学习档案.md'), md);
  return report;
}
