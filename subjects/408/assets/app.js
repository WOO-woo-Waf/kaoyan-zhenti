/* =========================================================
   408 真题精读系统 · app.js
   纯静态 / file:// 直开 / 无依赖
   视图：试卷 · 知识体系 · 生题本 · 统计
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- 常量 ---------------- */
  const DATA = window.__CS408__ || {};
  const KB = window.__KB__ || { subjects: [] };
  const SUBJ_COLOR = { '数据结构': 'ds', '计算机组成原理': 'co', '操作系统': 'os', '计算机网络': 'nw' };
  const SUBJ_SHORT = { '数据结构': 'DS', '计算机组成原理': 'CO', '操作系统': 'OS', '计算机网络': 'NW' };
  const LS = {
    wrong: 'cs408.wrong.v1',
    done: 'cs408.done.v1',
    pref: 'cs408.pref.v1'
  };
  const YEARS = Object.keys(DATA).map(Number).sort((a, b) => b - a);

  /* ---------------- 状态 ---------------- */
  const S = {
    view: 'paper',
    mode: 'study',        // study | quiz
    year: YEARS[0] || 2025,
    tab: 'choice',        // choice | big
    subject: '',          // '' | 学科名
    selId: null,
    anOpen: true,
    query: '',
    kbSel: { lv: 0, subject: null, module: null, point: null }
  };

  /* ---------------- 存储 ---------------- */
  const store = {
    get(k, d) {
      try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; }
    },
    set(k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { toast('本地存储写入失败（可能已满）'); }
    }
  };
  let WRONG = store.get(LS.wrong, {});   // id -> {ts, subject, module, point, reason, pick}
  let DONE = store.get(LS.done, {});     // id -> {pick, ok, ts}
  const pref = store.get(LS.pref, {});

  const saveWrong = () => store.set(LS.wrong, WRONG);
  const saveDone = () => store.set(LS.done, DONE);
  const savePref = () => store.set(LS.pref, {
    theme: document.documentElement.dataset.theme,
    anOpen: S.anOpen, mode: S.mode, year: S.year,
    view: S.view, subject: S.subject
  });

  /* ---------------- 工具 ---------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  const pad2 = (n) => (n < 10 ? '0' + n : '' + n);

  let toastTimer = null;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1600);
  }

  /* ---------------- 数据索引 ---------------- */
  const ALL = [];        // 全部题目（含年份）
  const BY_ID = new Map();
  const BY_POINT = new Map();   // 知识点 -> 题目数组

  function buildIndex() {
    YEARS.forEach((y) => {
      const p = DATA[y];
      if (!p) return;
      (p.choices || []).forEach((q) => {
        const item = Object.assign({}, q, { year: y, kind: 'choice', id: q.id || (y + '-' + q.no) });
        ALL.push(item); BY_ID.set(item.id, item);
      });
      (p.bigs || []).forEach((q) => {
        const item = Object.assign({}, q, { year: y, kind: 'big', id: q.id || (y + '-' + q.no) });
        ALL.push(item); BY_ID.set(item.id, item);
      });
    });
    ALL.forEach((q) => {
      const k = q.point || '未分类';
      if (!BY_POINT.has(k)) BY_POINT.set(k, []);
      BY_POINT.get(k).push(q);
    });
  }

  const yearPaper = (y) => DATA[y] || null;
  const curPaper = () => yearPaper(S.year);
  const listOf = (y) => {
    const p = yearPaper(y); if (!p) return [];
    return (S.tab === 'choice' ? (p.choices || []) : (p.bigs || []))
      .map((q) => Object.assign({}, q, { year: y, kind: S.tab === 'choice' ? 'choice' : 'big', id: q.id || (y + '-' + q.no) }));
  };
  const statusOf = (id) => {
    if (WRONG[id]) return 'unsure';
    const d = DONE[id];
    if (d) return d.ok ? 'ok' : 'bad';
    return '';
  };

  /* ---------------- 代码高亮（极简 C 语法） ---------------- */
  const KEYWORDS = /\b(int|char|float|double|void|long|short|unsigned|signed|struct|typedef|return|if|else|for|while|do|switch|case|break|continue|sizeof|static|const|extern|register|volatile|union|enum|goto|default|NULL|true|false)\b/g;
  function hl(src) {
    const slots = [];
    const MARK = '\u0001';
    const put = (html) => MARK + String.fromCharCode(0xE000 + (slots.push(html) - 1)) + MARK;
    let s = esc(src);
    // 1) 注释优先（最高优先级，先摘出来）
    s = s.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g, (m) => put('<span class="cm">' + m + '</span>'));
    // 2) 字符串
    s = s.replace(/"(?:[^"\\\n]|\\.)*"/g, (m) => put('<span class="st">' + m + '</span>'));
    // 3) 关键字 / 数字（此时不会碰到已摘出的片段，因为标记里没有字母数字）
    s = s.replace(KEYWORDS, '<span class="kw">$1</span>');
    s = s.replace(/\b(0x[0-9a-fA-F]+|\d+(?:\.\d+)?)\b/g, '<span class="nm">$1</span>');
    // 4) 还原
    s = s.replace(/\u0001([\uE000-\uF8FF])\u0001/g, (_, ch) => slots[ch.charCodeAt(0) - 0xE000]);
    return s;
  }

  /* ---------------- 解析分段 ---------------- */
  function sections(analysis) {
    const out = [];
    if (!analysis) return out;
    const re = /【([^】]{1,12})】/g;
    let m, last = 0, label = null;
    while ((m = re.exec(analysis))) {
      const body = analysis.slice(last, m.index).trim();
      if (label !== null && body) out.push({ label, body });
      label = m[1];
      last = re.lastIndex;
    }
    const tail = analysis.slice(last).trim();
    if (label !== null) out.push({ label, body: tail });
    else if (tail) out.push({ label: '', body: tail });
    return out;
  }

  /* ---------------- 渲染：左栏年份 ---------------- */
  function renderYears() {
    const ul = $('#yearlist');
    if (!YEARS.length) {
      ul.innerHTML = '<li class="pane-empty">还没有数据<br>把 <code>data/paper/20XX.js</code> 放进来</li>';
      $('#year-count').textContent = '';
      return;
    }
    $('#year-count').textContent = YEARS.length + ' 套';
    ul.innerHTML = YEARS.map((y) => {
      const p = yearPaper(y);
      if (!p) {
        return `<li><button class="yr missing" disabled><div class="yr-h"><span class="yr-n">${y}</span></div>
          <div class="yr-b"><span class="badge">缺</span></div></button></li>`;
      }
      const total = (p.choices || []).length + (p.bigs || []).length;
      const ids = ALL.filter((q) => q.year === y).map((q) => q.id);
      const done = ids.filter((id) => DONE[id]).length;
      const bad = ids.filter((id) => WRONG[id] || (DONE[id] && !DONE[id].ok)).length;
      const segs = KB.subjects.map((s) => {
        const n = ALL.filter((q) => q.year === y && q.subject === s.name).length;
        const w = total ? (n / total) * 100 : 0;
        return `<i style="width:${w}%;background:${s.color}" title="${s.name} ${n} 题"></i>`;
      }).join('');
      return `<li><button class="yr ${y === S.year && S.view === 'paper' ? 'on' : ''}" data-year="${y}">
        <div class="yr-h"><span class="yr-n">${y}</span>
          <span class="yr-d">${done}/${total}</span></div>
        <div class="yr-b">${segs ? '' : ''}${bad ? `<span class="badge" style="background:var(--bad-dim);color:var(--bad)">错 ${bad}</span>` : ''}${done === total && total ? '<span class="badge" style="background:var(--ok-dim);color:var(--ok)">完成</span>' : ''}</div>
        <div class="yr-prog">${segs}</div>
      </button></li>`;
    }).join('');
    $$('#yearlist .yr[data-year]').forEach((b) => {
      b.addEventListener('click', () => {
        S.year = Number(b.dataset.year); S.selId = null; S.query = ''; $('#search').value = '';
        S.view = 'paper'; render();
        const first = listOf(S.year).filter((q) => !S.subject || q.subject === S.subject)[0];
        if (first) selectQuestion(first.id);
        savePref();
      });
    });
  }

  /* ---------------- 渲染：题型 / 学科筛选 ---------------- */
  function renderDocHead() {
    const p = curPaper();
    $('#doc-year').textContent = p ? S.year : '—';
    $('#doc-meta').textContent = p ? `${p.score || 150} 分 · ${p.duration || 180} 分钟 · 选择题 40 + 综合 7` : '未收录';
    const topic = p ? (p.title || '') : '';
    $('#doc-topic').textContent = topic;

    const cN = p ? (p.choices || []).length : 0;
    const bN = p ? (p.bigs || []).length : 0;
    $$('#tabs button').forEach((b) => {
      const t = b.dataset.tab;
      b.classList.toggle('on', t === S.tab);
      const n = b.querySelector('.tb-n');
      if (n) n.textContent = t === 'choice' ? (cN ? cN + ' 题' : '—') : (bN ? bN + ' 题' : '—');
    });

    // 学科筛选 chips
    const box = $('#subjects');
    const counts = {};
    listOf(S.year).forEach((q) => { counts[q.subject] = (counts[q.subject] || 0) + 1; });
    box.innerHTML = [`<button type="button" data-sub="" class="${S.subject === '' ? 'on' : ''}">全部 ${listOf(S.year).length}</button>`]
      .concat(KB.subjects.map((s) => `<button type="button" data-sub="${s.name}" class="${S.subject === s.name ? 'on' : ''}">${s.short} ${counts[s.name] || 0}</button>`))
      .join('');
    $$('#subjects button').forEach((b) => {
      b.addEventListener('click', () => { S.subject = b.dataset.sub; renderDocHead(); renderQList(); });
    });

    // 四科分值
    if (p && p.dist) {
      $('#dist-list').innerHTML = KB.subjects.map((s) => `<dt><span class="sb ${SUBJ_COLOR[s.name]}">${SUBJ_SHORT[s.name]}</span></dt><dd>${s.name} ${p.dist[s.name] || 0} 分</dd>`).join('');
    }
  }

  /* ---------------- 渲染：题目列表 ---------------- */
  function matchQuery(q) {
    if (!S.query) return true;
    const t = S.query.toLowerCase();
    return (q.stem || '').toLowerCase().includes(t)
      || (q.point || '').toLowerCase().includes(t)
      || (q.module || '').toLowerCase().includes(t)
      || (q.id || '').includes(t)
      || String(q.year).includes(t)
      || Object.values(q.options || {}).join(' ').toLowerCase().includes(t);
  }

  function questionCard(q) {
    const st = statusOf(q.id);
    const cls = ['qcard'];
    if (S.selId === q.id) cls.push('sel');
    if (st) cls.push(st);
    const done = DONE[q.id];
    let opts = '';
    if (q.kind === 'choice' && q.options) {
      const one = Object.values(q.options).some((v) => String(v).length > 34);
      opts = `<div class="qopts ${one ? 'one' : ''}">` + ['A', 'B', 'C', 'D'].map((k) => {
        const v = q.options[k]; if (v == null) return '';
        let c = 'qopt';
        if (S.mode === 'quiz' && done) {
          if (k === q.answer) c += ' correct';
          else if (done.pick === k) c += ' wrong';
        }
        if (S.mode === 'study') { /* 精读模式不提前标答案，进解析看 */ }
        return `<button type="button" class="${c}" data-q="${q.id}" data-k="${k}"><b>${k}</b><span>${esc(v)}</span></button>`;
      }).join('') + '</div>';
    }
    const showAns = S.mode === 'study' || (S.mode === 'quiz' && done);
    const foot = `<div class="qc-foot">
        ${showAns && q.answer ? `<span class="ans">答案 ${q.answer}</span>` : (q.kind === 'choice' ? '<span style="color:var(--fg-faint)">未作答</span>' : '')}
        ${q.score ? `<span class="qscore">${q.score} 分</span>` : ''}
        <span class="acts">
          <button type="button" class="mini ${WRONG[q.id] ? 'on' : ''}" data-w="${q.id}">${WRONG[q.id] ? '✓ 已标记不会' : '✎ 不会'}</button>
          <button type="button" class="mini" data-go="${q.id}">解析 →</button>
        </span>
      </div>`;
    return `<article class="${cls.join(' ')}" id="card-${q.id}" data-id="${q.id}">
      <header class="qc-h">
        <span class="qno">${q.no}</span>
        <span class="sb ${SUBJ_COLOR[q.subject] || ''}">${SUBJ_SHORT[q.subject] || '—'}</span>
        <span class="qmod">${esc(q.module || '')}</span>
        <span class="qpts">· ${esc(q.point || '')}</span>
        ${st ? `<span class="qstate ${st}">${st === 'ok' ? '✓ 对' : st === 'bad' ? '✗ 错' : '★ 不会'}</span>` : ''}
        <span class="qscore">${q.kind === 'big' ? (q.score || 0) + ' 分' : '2 分'}</span>
      </header>
      <div class="qstem">${fmtStem(q.stem)}</div>
      ${q.figure ? `<div class="qfig"><b>图示</b>\n${esc(q.figure)}</div>` : ''}
      ${q.code ? codeBlock(q.code, q.kind === 'big' ? 9 : 0, q.id) : ''}
      ${q.kind === 'big' && q.subs && q.subs.length ? `<ul class="subqs">${q.subs.map((s) => `<li><span class="lb">${esc(s.label || '')}</span>${esc(s.ask || '')}</li>`).join('')}</ul>` : ''}
      ${opts}
      ${foot}
    </article>`;
  }

  function fmtStem(s) {
    let t = esc(s || '');
    t = t.replace(/_{3,}/g, '<span class="blank"></span>');
    return t;
  }

  /* 代码块（可截断 + 全屏） */
  function codeBlock(src, maxLines, id) {
    const all = String(src || '').split('\n');
    const cut = maxLines && all.length > maxLines;
    const shown = cut ? all.slice(0, maxLines).join('\n') : String(src || '');
    return `<div class="qcode">
      <pre class="code">${hl(shown)}</pre>
      ${cut ? `<div class="code-more">… 共 ${all.length} 行，还有 ${all.length - maxLines} 行未显示</div>` : ''}
      <button type="button" class="code-fs" data-code="${esc(id)}" title="全屏看完整代码">⤢ 全屏</button>
    </div>`;
  }

  function openCode(id) {
    const q = BY_ID.get(id); if (!q || !q.code) return;
    $('#cm-title').textContent = `${q.year} 年第 ${q.no} 题${q.codeNote ? ' · ' + q.codeNote : ''}`;
    $('#cm-body').innerHTML = hl(q.code);
    $('#codemodal').hidden = false;
    $('#codemodal').dataset.code = q.code;
  }

  function renderQList() {
    const box = $('#qlist');
    if (S.query) {
      const hits = ALL.filter(matchQuery).slice(0, 200);
      box.innerHTML = `<div class="pane-h" style="display:flex;align-items:center;gap:8px;margin:-2px 0 12px;padding-bottom:9px;border-bottom:1px dashed var(--line);font-size:10.5px;letter-spacing:1.2px;color:var(--fg-faint);text-transform:uppercase;font-weight:700">搜索 · ${esc(S.query)} <span style="margin-left:auto;letter-spacing:0;text-transform:none;font-weight:400">${hits.length} 题</span></div>`
        + (hits.length ? hits.map(questionCard).join('') : `<div class="pane-empty">没有匹配的题</div>`);
      bindCards();
      return;
    }
    const list = listOf(S.year).filter((q) => !S.subject || q.subject === S.subject);
    if (!list.length) {
      box.innerHTML = `<div class="pane-empty">这一栏还没有数据<br><b>${S.year} 年 · ${S.tab === 'choice' ? '选择题' : '综合应用题'}</b><br>把解析补进 <code>data/paper/${S.year}.js</code> 就会显示</div>`;
      return;
    }
    box.innerHTML = list.map(questionCard).join('');
    bindCards();
  }

  function bindCards() {
    $$('#qlist .qcard').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.qopt') || e.target.closest('[data-w]')) return;
        selectQuestion(card.dataset.id);
      });
    });
    $$('#qlist .qopt').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        answer(btn.dataset.q, btn.dataset.k);
      });
    });
    $$('#qlist [data-w]').forEach((btn) => {
      btn.addEventListener('click', (e) => { e.stopPropagation(); toggleWrong(btn.dataset.w); });
    });
    $$('#qlist [data-go]').forEach((btn) => {
      btn.addEventListener('click', (e) => { e.stopPropagation(); selectQuestion(btn.dataset.go); });
    });
  }

  function selectQuestion(id) {
    S.selId = id;
    $$('#qlist .qcard').forEach((c) => c.classList.toggle('sel', c.dataset.id === id));
    renderDetail();
  }

  function answer(id, pick) {
    const q = BY_ID.get(id); if (!q || !q.answer) return;
    const ok = pick === q.answer;
    DONE[id] = { pick, ok, ts: Date.now() };
    saveDone();
    if (!ok) markWrong(id, 'wrong', pick);
    const card = $('#card-' + id);
    if (card) {
      $$('.qopt', card).forEach((b) => {
        b.classList.remove('correct', 'wrong');
        if (b.dataset.k === q.answer) b.classList.add('correct');
        else if (b.dataset.k === pick) b.classList.add('wrong');
      });
      $$('.qstate', card).forEach((s) => s.remove());
      const st = document.createElement('span');
      st.className = 'qstate ' + (ok ? 'ok' : 'bad');
      st.textContent = ok ? '✓ 对' : '✗ 错';
      card.querySelector('.qc-h').appendChild(st);
      card.classList.remove('ok', 'bad', 'unsure');
      card.classList.add(ok ? 'ok' : 'bad');
    }
    toast(ok ? '✓ 正确' : `✗ 错，正确答案 ${q.answer}（已加入生题本）`);
    renderDetail();
    renderYears();
  }

  function markWrong(id, reason, pick) {
    const q = BY_ID.get(id); if (!q) return;
    WRONG[id] = {
      ts: Date.now(), subject: q.subject || '', module: q.module || '',
      point: q.point || '未分类', reason: reason || 'unsure', pick: pick || '',
      year: q.year, no: q.no, kind: q.kind
    };
    saveWrong();
    updateWrongBadge();
  }

  function toggleWrong(id) {
    if (WRONG[id]) { delete WRONG[id]; toast('已从生题本移除'); }
    else { markWrong(id, 'unsure'); toast('★ 已加入生题本'); }
    saveWrong();
    updateWrongBadge();
    const card = $('#card-' + id);
    if (card) {
      const btn = card.querySelector('[data-w]');
      if (btn) {
        btn.classList.toggle('on', !!WRONG[id]);
        btn.textContent = WRONG[id] ? '✓ 已标记不会' : '✎ 不会';
      }
      card.classList.remove('ok', 'bad', 'unsure');
      const st = statusOf(id); if (st) card.classList.add(st);
    }
    if (S.view === 'wrong') renderWrong();
    if (S.view === 'stats') renderStats();
  }

  /* ---------------- 渲染：右栏解析 ---------------- */
  function renderDetail() {
    const box = $('#detail');
    const q = S.selId ? BY_ID.get(S.selId) : null;
    if (!q) {
      box.innerHTML = `<div class="pane-empty">
        <b>点右边任意一题看解析</b><br>
        每题：考什么 → 怎么解 → 逐项排除 → 易错点<br>
        右上「不会」标记后进生题本
      </div>`;
      return;
    }
    const secs = sections(q.analysis);
    const st = statusOf(q.id);
    const rel = (BY_POINT.get(q.point) || []).filter((x) => x.id !== q.id).slice(0, 8);

    let html = `<div class="pane-h" style="display:flex;align-items:center;gap:8px;margin:-2px 0 12px;padding-bottom:9px;border-bottom:1px dashed var(--line);font-size:10.5px;letter-spacing:1.2px;color:var(--fg-faint);text-transform:uppercase;font-weight:700">
      ${q.year} 年第 ${q.no} 题<span style="margin-left:auto;letter-spacing:0;text-transform:none;font-weight:400">${q.kind === 'big' ? (q.score || 0) + ' 分' : '2 分'}</span></div>`;

    html += `<div class="kchips">
      <span class="sb ${SUBJ_COLOR[q.subject] || ''}">${q.subject || '—'}</span>
      <span class="kchip" data-kb="${esc(q.subject)}">${esc(q.module || '未分类')}</span>
      <span class="kchip" data-kb="${esc(q.point)}"># ${esc(q.point || '未分类')}</span>
      ${q.type ? `<span class="kchip">${esc(q.type)}</span>` : ''}
      ${q.difficulty ? `<span class="kchip">难度 ${'★'.repeat(Math.max(1, Math.min(5, q.difficulty)))}</span>` : ''}
      ${st ? `<span class="kchip" style="color:${st === 'ok' ? 'var(--ok)' : st === 'bad' ? 'var(--bad)' : 'var(--warn)'}">${st === 'ok' ? '✓ 已做对' : st === 'bad' ? '✗ 做错过' : '★ 不会'}</span>` : ''}
    </div>`;

    html += `<div class="qstem" style="font-size:14px;color:var(--fg-mid)">${fmtStem(q.stem)}</div>`;
    if (q.code && q.kind === 'big') html += codeBlock(q.code, 0, q.id);

    if (q.kind === 'choice' && q.answer) {
      html += `<div class="an-opt ok"><span class="k">答案</span><span>${esc(q.answer)}${q.options && q.options[q.answer] ? ' · ' + esc(q.options[q.answer]) : ''}</span></div>`;
    }

    if (!S.anOpen) {
      html += `<div class="an-tools"><button type="button" class="mini pri" id="an-toggle">展开解析（a）</button></div>`;
      html += relHtml(rel);
      box.innerHTML = html;
      bindDetail();
      return;
    }

    if (secs.length) {
      const hasWhy = q.whyWrong && Object.keys(q.whyWrong).length;
      secs.forEach((s) => {
        if (hasWhy && /排除|选项/.test(s.label)) return;   // 有结构化 whyWrong 时不再重复
        html += `<div class="an-h">${esc(s.label || '解析')}</div><div class="an-p">${esc(s.body)}</div>`;
      });
    } else if (q.analysis) {
      html += `<div class="an-h">解析</div><div class="an-p">${esc(q.analysis)}</div>`;
    } else {
      html += `<div class="an-h">解析</div><div class="an-p" style="color:var(--fg-faint)">这一题还没写解析。补进 <code>data/paper/${q.year}.js</code> 的 <code>analysis</code> 字段即可。</div>`;
    }

    if (q.subs && q.subs.length) {
      html += `<div class="an-h">参考答案</div>`;
      q.subs.forEach((s) => {
        html += `<div class="an-p"><b>${esc(s.label || '')}</b> ${esc(s.ans || '')}</div>`;
      });
    }

    if (q.whyWrong && Object.keys(q.whyWrong).length) {
      html += `<div class="an-h">逐项排除</div>`;
      ['A', 'B', 'C', 'D'].forEach((k) => {
        const v = q.whyWrong[k]; if (!v) return;
        const ok = k === q.answer;
        html += `<div class="an-opt ${ok ? 'ok' : 'bad'}"><span class="k">${k}</span><span>${esc(v)}</span></div>`;
      });
    }

    if (q.trap) html += `<div class="trap"><b>易错</b> ${esc(q.trap)}</div>`;
    if (q.pitfalls && q.pitfalls.length) {
      html += `<div class="an-h">踩坑点</div>` + q.pitfalls.map((p) => `<div class="an-p">· ${esc(p)}</div>`).join('');
    }
    if (q.codeNote) html += `<div class="an-p" style="color:var(--fg-faint)">复杂度：${esc(q.codeNote)}</div>`;

    // 数据结构算法题：手写代码答题模板
    if (q.kind === 'big' && q.subject === '数据结构' && /算法|设计/.test(q.type || '')) {
      html += `<details class="acc" style="margin-top:14px;background:var(--bg-soft);border:1px solid var(--line-soft);border-radius:9px;padding:9px 12px">
        <summary style="cursor:pointer;font-size:12px;color:var(--accent);font-weight:700">手写代码 20 分钟答题模板（点开）</summary>
        <div class="an-p" style="font-size:12.5px;margin-top:8px">阅卷是「**思路分 + 关键代码分 + 复杂度分**」三段踩点。只写伪代码 4–6 分；伪代码 + 关键循环 + 复杂度 9–12 分。</div>
        <pre class="code" style="margin-top:8px">【算法思想】3 行，用中文说清：遍历什么、判断什么、返回什么
【代码】
  函数头（参数类型 / 返回值写对）
  变量初始化
  主循环（边界条件写清）
  返回
【复杂度】时间 O(____)，空间 O(____)</pre>
        <div class="an-p" style="font-size:12px;color:var(--fg-dim)">起手动作：线性表→双指针/头插尾插；树→递归框架 <code>if(root==NULL) return;</code> + 左 + 右；图→先定存储 + visited；排序查找→先写划分/合并核心循环。</div>
      </details>`;
    }

    html += relHtml(rel);

    html += `<div class="an-tools">
      <button type="button" class="mini ${WRONG[q.id] ? 'on' : ''}" id="d-wrong">${WRONG[q.id] ? '✓ 已在生题本' : '★ 加入生题本'}</button>
      <button type="button" class="mini" id="d-kb">看知识体系</button>
      <button type="button" class="mini" id="d-prev">← 上一题</button>
      <button type="button" class="mini" id="d-next">下一题 →</button>
    </div>`;

    box.innerHTML = html;
    bindDetail();
    box.scrollTop = 0;
  }

  function relHtml(rel) {
    if (!rel.length) return '';
    return `<div class="rel"><h5>同知识点真题（${rel.length}）</h5>${rel.map((r) => `<button type="button" class="rq" data-rel="${r.id}"><span class="rn">${r.year}-${r.no}</span><span>${esc((r.stem || '').slice(0, 46))}${(r.stem || '').length > 46 ? '…' : ''}</span></button>`).join('')}</div>`;
  }

  function bindDetail() {
    const t = $('#an-toggle'); if (t) t.addEventListener('click', () => { S.anOpen = true; savePref(); renderDetail(); });
    const w = $('#d-wrong'); if (w) w.addEventListener('click', () => { toggleWrong(S.selId); renderDetail(); });
    const k = $('#d-kb'); if (k) k.addEventListener('click', () => {
      const q = BY_ID.get(S.selId); if (!q) return;
      gotoKB(q.subject, q.module, q.point);
    });
    const p = $('#d-prev'); if (p) p.addEventListener('click', () => step(-1));
    const n = $('#d-next'); if (n) n.addEventListener('click', () => step(1));
    $$('#detail [data-rel]').forEach((b) => b.addEventListener('click', () => {
      const q = BY_ID.get(b.dataset.rel); if (!q) return;
      S.year = q.year; S.tab = q.kind === 'choice' ? 'choice' : 'big'; S.subject = ''; S.view = 'paper';
      render(); selectQuestion(q.id);
      const card = $('#card-' + q.id); if (card) card.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }));
    $$('#detail .kchip[data-kb]').forEach((b) => b.addEventListener('click', () => {
      const q = BY_ID.get(S.selId); if (!q) return;
      if (q.point && b.textContent.indexOf(q.point) >= 0) gotoKB(q.subject, q.module, q.point);
      else gotoKB(q.subject, q.module, null);
    }));
  }

  function step(dir) {
    const list = listOf(S.year).filter((q) => !S.subject || q.subject === S.subject);
    if (!list.length) return;
    let i = list.findIndex((q) => q.id === S.selId);
    if (i < 0) i = 0;
    else i = Math.max(0, Math.min(list.length - 1, i + dir));
    selectQuestion(list[i].id);
    const card = $('#card-' + list[i].id);
    if (card) card.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  /* ---------------- 知识体系 ---------------- */
  function gotoKB(subject, module, point) {
    S.view = 'kb';
    S.kbSel = { lv: point ? 3 : module ? 2 : 1, subject, module, point };
    render(); savePref();
  }

  function renderKB() {
    const tree = $('#kbtree');
    const counts = (filter) => ALL.filter(filter).length;
    const bads = (filter) => ALL.filter((q) => filter(q) && (WRONG[q.id] || (DONE[q.id] && !DONE[q.id].ok))).length;

    let html = '';
    const totalAll = ALL.length;
    html += `<button class="kbn lv1 ${S.kbSel.lv === 0 ? 'on' : ''}" data-kb-lv="0"><span class="car">◆</span>全部真题<span class="cnt">${totalAll}</span></button>`;
    KB.subjects.forEach((sub) => {
      const subN = counts((q) => q.subject === sub.name);
      const subB = bads((q) => q.subject === sub.name);
      const openSub = S.kbSel.subject === sub.name;
      html += `<button class="kbn lv1 ${openSub && S.kbSel.lv === 1 ? 'on' : ''}" data-kb-lv="1" data-sub="${sub.name}" style="color:${openSub ? sub.color : ''}">
        <span class="car">${openSub ? '▾' : '▸'}</span>${sub.name}<span class="cnt ${subB ? 'bad' : ''}">${subN}${subB ? ' / 错' + subB : ''}</span></button>`;
      if (!openSub) return;
      html += `<div class="kbgroup">`;
      sub.modules.forEach((mod) => {
        const mN = counts((q) => q.subject === sub.name && q.module === mod.name);
        const mB = bads((q) => q.subject === sub.name && q.module === mod.name);
        const openMod = S.kbSel.module === mod.name;
        html += `<button class="kbn lv2 ${openMod && S.kbSel.lv === 2 ? 'on' : ''}" data-kb-lv="2" data-sub="${sub.name}" data-mod="${mod.name}">
          <span class="car">${openMod ? '▾' : '▸'}</span>${mod.name}<span class="cnt ${mB ? 'bad' : ''}">${mN}${mB ? '/错' + mB : ''}</span></button>`;
        if (!openMod) return;
        html += `<div class="kbgroup">`;
        mod.points.forEach((pt) => {
          const pN = counts((q) => q.subject === sub.name && q.point === pt);
          const pB = bads((q) => q.subject === sub.name && q.point === pt);
          const on = S.kbSel.point === pt;
          html += `<button class="kbn lv3 ${on ? 'on' : ''}" data-kb-lv="3" data-sub="${sub.name}" data-mod="${mod.name}" data-pt="${pt}">
            <span class="car">·</span>${pt}<span class="cnt ${pB ? 'bad' : ''}">${pN || ''}${pB ? '/错' + pB : ''}</span></button>`;
        });
        html += `</div>`;
      });
      html += `</div>`;
    });
    tree.innerHTML = html;
    $('#kb-count').textContent = totalAll + ' 题';

    $$('#kbtree .kbn').forEach((b) => b.addEventListener('click', () => {
      const lv = Number(b.dataset.kbLv);
      S.kbSel = { lv, subject: b.dataset.sub || null, module: b.dataset.mod || null, point: b.dataset.pt || null };
      renderKB();
    }));

    // 右区
    const body = $('#kb-body');
    const sel = S.kbSel;
    let list = ALL.slice();
    let title = '知识体系总览';
    let meta = ALL.length + ' 题 · ' + YEARS.length + ' 套卷';
    if (sel.point) {
      list = list.filter((q) => q.subject === sel.subject && q.point === sel.point);
      title = sel.point; meta = `${sel.subject} · ${sel.module} · 近 ${YEARS.length} 年考 ${list.length} 次`;
    } else if (sel.module) {
      list = list.filter((q) => q.subject === sel.subject && q.module === sel.module);
      title = sel.module; meta = `${sel.subject} · ${list.length} 题`;
    } else if (sel.subject) {
      list = list.filter((q) => q.subject === sel.subject);
      const sub = KB.subjects.find((s) => s.name === sel.subject);
      title = sel.subject; meta = `卷面 ${sub ? sub.score : '—'} 分 · 近十年 ${list.length} 题`;
    }
    $('#kb-title').textContent = title;
    $('#kb-meta').textContent = meta;

    const doneN = list.filter((q) => DONE[q.id]).length;
    const okN = list.filter((q) => DONE[q.id] && DONE[q.id].ok).length;
    const badN = list.filter((q) => WRONG[q.id] || (DONE[q.id] && !DONE[q.id].ok)).length;

    body.innerHTML = `
      <div class="st-grid">
        <div class="st-card"><div class="v">${list.length}</div><div class="l">题目数</div><div class="s">该范围下全部真题</div></div>
        <div class="st-card"><div class="v" style="color:var(--accent)">${doneN}</div><div class="l">已做</div><div class="s">${list.length ? Math.round(doneN / list.length * 100) : 0}% 覆盖</div></div>
        <div class="st-card"><div class="v" style="color:var(--ok)">${doneN ? Math.round(okN / doneN * 100) : 0}%</div><div class="l">正确率</div><div class="s">${okN} / ${doneN}</div></div>
        <div class="st-card"><div class="v" style="color:var(--bad)">${badN}</div><div class="l">不会 / 错题</div><div class="s">点开可跳转重做</div></div>
      </div>
      <div class="st-h">真题清单（近 → 远）</div>
      ${list.length ? list.sort((a, b) => b.year - a.year || a.no - b.no).map((q) => {
        const st = statusOf(q.id);
        return `<div class="wrow" data-jump="${q.id}">
          <span class="wid">${q.year}-${q.no}</span>
          <span class="wtx">${esc((q.stem || '').replace(/\s+/g, ' ').slice(0, 90))}${(q.stem || '').length > 90 ? '…' : ''}</span>
          <span class="wtag sb ${SUBJ_COLOR[q.subject] || ''}">${esc(q.module || '')}</span>
          ${st ? `<span class="wtag" style="color:${st === 'ok' ? 'var(--ok)' : st === 'bad' ? 'var(--bad)' : 'var(--warn)'}">${st === 'ok' ? '✓' : st === 'bad' ? '✗' : '★'}</span>` : ''}
        </div>`;
      }).join('') : '<div class="pane-empty">这个知识点近十年没有单独出过选择题（可能在综合题里考到）</div>'}
    `;
    $$('#kb-body [data-jump]').forEach((r) => r.addEventListener('click', () => jumpTo(r.dataset.jump)));
  }

  function jumpTo(id) {
    const q = BY_ID.get(id); if (!q) return;
    S.view = 'paper'; S.year = q.year; S.tab = q.kind === 'choice' ? 'choice' : 'big'; S.subject = ''; S.query = '';
    $('#search').value = '';
    render();
    selectQuestion(id);
    const card = $('#card-' + id); if (card) card.scrollIntoView({ block: 'center' });
  }

  /* ---------------- 生题本 ---------------- */
  function wrongList() {
    return Object.keys(WRONG).map((id) => BY_ID.get(id)).filter(Boolean).sort((a, b) => {
      const wa = WRONG[a.id], wb = WRONG[b.id];
      const pa = (wa.reason === 'wrong' ? 2 : 1), pb = (wb.reason === 'wrong' ? 2 : 1);
      return pb - pa || (wb.ts || 0) - (wa.ts || 0);
    });
  }

  function renderWrong() {
    const list = wrongList();
    $('#wb-meta').textContent = list.length ? `${list.length} 题 · ${new Set(list.map((q) => q.point)).size} 个知识点` : '空';
    const body = $('#wb-body');
    if (!list.length) {
      body.innerHTML = `<div class="pane-empty">
        <b>生题本还是空的</b><br>
        做题时点「✎ 不会」或自测选错，就会自动进来。<br>
        按知识点聚合，等你回来集中攻。
      </div>`;
      return;
    }
    // 按学科 → 知识点聚合
    const groups = new Map();
    list.forEach((q) => {
      const key = q.subject + '||' + (q.point || '未分类');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(q);
    });
    const ordered = Array.from(groups.entries()).sort((a, b) => b[1].length - a[1].length);

    let html = `<div class="st-grid">
      <div class="st-card"><div class="v" style="color:var(--bad)">${list.length}</div><div class="l">不会 / 做错</div><div class="s">按知识点聚合</div></div>
      <div class="st-card"><div class="v">${ordered.length}</div><div class="l">知识点数</div><div class="s">考频最高的先攻</div></div>
      <div class="st-card"><div class="v" style="color:var(--accent)">${list.filter((q) => q.subject === '数据结构').length}</div><div class="l">数据结构</div><div class="s">算法题优先</div></div>
      <div class="st-card"><div class="v" style="color:var(--co)">${list.filter((q) => q.subject === '计算机组成原理').length}</div><div class="l">组成原理</div><div class="s">计算类偏多</div></div>
    </div>`;

    html += ordered.map(([key, qs]) => {
      const [sub, pt] = key.split('||');
      return `<div class="wgroup">
        <h4><span class="sb ${SUBJ_COLOR[sub] || ''}">${SUBJ_SHORT[sub] || '—'}</span>${esc(pt)}
          <span class="n">${qs.length} 题</span>
          <button type="button" class="mini" data-drill="${esc(key)}" style="margin-left:auto">重做这一组</button></h4>
        ${qs.map((q) => `<div class="wrow" data-jump="${q.id}">
          <span class="wid">${q.year}-${q.no}</span>
          <span class="wtx">${esc((q.stem || '').replace(/\s+/g, ' ').slice(0, 88))}${(q.stem || '').length > 88 ? '…' : ''}</span>
          <span class="wtag" style="color:var(--fg-faint)">${esc(q.module || '')}</span>
          <span class="wtag" style="color:${WRONG[q.id] && WRONG[q.id].reason === 'wrong' ? 'var(--bad)' : 'var(--warn)'}">${WRONG[q.id] && WRONG[q.id].reason === 'wrong' ? '错' : '不会'}</span>
          <button type="button" class="del" data-del="${q.id}" title="移出生题本">×</button>
        </div>`).join('')}
      </div>`;
    }).join('');
    body.innerHTML = html;

    $$('#wb-body [data-jump]').forEach((r) => r.addEventListener('click', (e) => {
      if (e.target.dataset.del) return;
      jumpTo(r.dataset.jump);
    }));
    $$('#wb-body [data-del]').forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation(); delete WRONG[b.dataset.del]; saveWrong(); updateWrongBadge(); renderWrong();
    }));
    $$('#wb-body [data-drill]').forEach((b) => b.addEventListener('click', () => {
      const [sub, pt] = b.dataset.drill.split('||');
      const first = list.find((q) => q.subject === sub && (q.point || '未分类') === pt);
      if (!first) return;
      S.mode = 'quiz'; S.view = 'paper'; S.year = first.year;
      S.tab = first.kind === 'choice' ? 'choice' : 'big'; S.subject = '';
      $$('#mode-seg button').forEach((x) => x.classList.toggle('on', x.dataset.mode === 'quiz'));
      render(); selectQuestion(first.id); savePref();
      toast('已切到自测模式，只显示这一组以外的题请自行筛选');
    }));
  }

  function updateWrongBadge() {
    const n = Object.keys(WRONG).length;
    const a = $('#wb-count'); if (a) a.textContent = n;
    const b = $('#wb-cnt2'); if (b) b.textContent = n + ' 题';
    renderWbDrawer();
  }

  function renderWbDrawer() {
    const ul = $('#wb-list');
    if (!ul) return;
    const list = wrongList();
    if (!list.length) { ul.innerHTML = '<li class="empty">还是空的<br>做题时点「✎ 不会」就会进来</li>'; return; }
    ul.innerHTML = list.map((q) => `<li class="wb-item">
      <span class="bw" data-jump="${q.id}">${q.year}-${q.no}</span>
      <span class="bm">${esc(q.point || '')}</span>
      <span class="bt">${new Date(WRONG[q.id].ts || Date.now()).toLocaleDateString('zh-CN')}</span>
      <button type="button" class="del" data-del="${q.id}">×</button>
    </li>`).join('');
    $$('#wb-list [data-jump]').forEach((b) => b.addEventListener('click', () => {
      $('#drawer').hidden = true; jumpTo(b.dataset.jump);
    }));
    $$('#wb-list [data-del]').forEach((b) => b.addEventListener('click', () => {
      delete WRONG[b.dataset.del]; saveWrong(); updateWrongBadge();
      if (S.view === 'wrong') renderWrong();
    }));
  }

  function wbMarkdown() {
    const list = wrongList();
    if (!list.length) return '（生题本为空）';
    const byPoint = new Map();
    list.forEach((q) => {
      const k = q.subject + ' / ' + (q.point || '未分类');
      if (!byPoint.has(k)) byPoint.set(k, []);
      byPoint.get(k).push(q);
    });
    let md = '# 408 生题本（不会的题）\n\n';
    md += `> 导出时间：${new Date().toLocaleString('zh-CN')} · 共 ${list.length} 题 / ${byPoint.size} 个知识点\n\n`;
    Array.from(byPoint.entries()).sort((a, b) => b[1].length - a[1].length).forEach(([k, qs]) => {
      md += `## ${k}（${qs.length} 题）\n\n`;
      qs.forEach((q) => {
        md += `- **${q.year}-${q.no}** ${(q.stem || '').replace(/\s+/g, ' ').slice(0, 120)}\n`;
        md += `  - 答案：${q.answer || '见解析'}${WRONG[q.id] && WRONG[q.id].pick ? `（我选 ${WRONG[q.id].pick}）` : ''}\n`;
        md += `  - 模块：${q.module || ''} · 知识点：${q.point || ''}\n`;
      });
      md += '\n';
    });
    return md;
  }

  /* ---------------- 统计 ---------------- */
  function renderStats() {
    const total = ALL.length;
    const doneN = ALL.filter((q) => DONE[q.id]).length;
    const okN = ALL.filter((q) => DONE[q.id] && DONE[q.id].ok).length;
    const badN = ALL.filter((q) => WRONG[q.id] || (DONE[q.id] && !DONE[q.id].ok)).length;
    const pct = doneN ? Math.round(okN / doneN * 100) : 0;
    $('#st-meta').textContent = `${YEARS.length} 套卷 · ${total} 题 · 已做 ${doneN}`;

    let html = `<div class="st-grid">
      <div class="st-card"><div class="v">${total}</div><div class="l">题库总题数</div><div class="s">${YEARS.length} 套 · 选择 + 综合</div></div>
      <div class="st-card"><div class="v" style="color:var(--accent)">${doneN}</div><div class="l">已做</div><div class="s">${total ? Math.round(doneN / total * 100) : 0}% 覆盖</div></div>
      <div class="st-card"><div class="v" style="color:var(--ok)">${pct}%</div><div class="l">正确率</div><div class="s">${okN} / ${doneN} 题</div></div>
      <div class="st-card"><div class="v" style="color:var(--bad)">${badN}</div><div class="l">不会 / 错题</div><div class="s">进生题本集中攻</div></div>
    </div>`;

    // 学科分布
    html += `<div class="st-h">学科分布（近十年）</div>`;
    KB.subjects.forEach((s) => {
      const list = ALL.filter((q) => q.subject === s.name);
      const d = list.filter((q) => DONE[q.id]).length;
      const ok = list.filter((q) => DONE[q.id] && DONE[q.id].ok).length;
      const w = list.length ? (ok / Math.max(1, d)) * 100 : 0;
      html += `<div class="bar">
        <span class="bl"><span class="sb ${SUBJ_COLOR[s.name]}">${SUBJ_SHORT[s.name]}</span> ${s.short}</span>
        <span class="bt"><i style="width:${list.length ? (d / list.length) * 100 : 0}%;background:${s.color};opacity:.45"></i><i style="width:${list.length ? (ok / list.length) * 100 : 0}%;background:${s.color}"></i></span>
        <span class="bv">${ok}/${d} · ${list.length} 题</span>
      </div>`;
    });

    // 年份 × 学科 矩阵
    html += `<div class="st-h">年份 × 学科（绿=全对 / 红=有错 / 灰=未做）</div>`;
    html += `<table class="matrix"><thead><tr><th>年份</th>${KB.subjects.map((s) => `<th><span class="sb ${SUBJ_COLOR[s.name]}">${SUBJ_SHORT[s.name]}</span></th>`).join('')}<th>合计</th></tr></thead><tbody>`;
    YEARS.forEach((y) => {
      html += `<tr><th>${y}</th>`;
      let yDone = 0, yTot = 0;
      KB.subjects.forEach((s) => {
        const list = ALL.filter((q) => q.year === y && q.subject === s.name);
        const d = list.filter((q) => DONE[q.id]).length;
        const ok = list.filter((q) => DONE[q.id] && DONE[q.id].ok).length;
        yDone += d; yTot += list.length;
        const cls = !d ? '' : (ok === d ? 'hit' : 'miss');
        const bg = !d ? '' : (ok === d ? 'background:var(--ok-dim);color:var(--ok)' : 'background:var(--bad-dim);color:var(--bad)');
        html += `<td class="${cls}" style="${bg}">${d ? ok + '/' + d : list.length}</td>`;
      });
      html += `<td>${yDone}/${yTot}</td></tr>`;
    });
    html += `</tbody></table>`;

    // 薄弱知识点
    const ptMap = new Map();
    ALL.forEach((q) => {
      const k = q.point || '未分类';
      const e = ptMap.get(k) || { n: 0, bad: 0, subject: q.subject, module: q.module };
      e.n++;
      if (WRONG[q.id] || (DONE[q.id] && !DONE[q.id].ok)) e.bad++;
      ptMap.set(k, e);
    });
    const weak = Array.from(ptMap.entries()).filter(([, v]) => v.bad > 0).sort((a, b) => b[1].bad - a[1].bad).slice(0, 15);
    if (weak.length) html += `<div class="st-h">薄弱知识点 Top ${weak.length}</div>`;
    html += weak.length ? weak.map(([pt, v]) => `<div class="bar">
        <span class="bl" style="flex:0 0 auto"><span class="sb ${SUBJ_COLOR[v.subject] || ''}">${SUBJ_SHORT[v.subject] || ''}</span> ${esc(pt)}</span>
        <span class="bt"><i style="width:${v.n ? (v.bad / v.n) * 100 : 0}%;background:var(--bad)"></i></span>
        <span class="bv">错 ${v.bad} / 考 ${v.n}</span>
      </div>`).join('') : '<div class="pane-empty" style="padding:18px">还没有错题记录</div>';

    // 高频知识点
    const hot = Array.from(ptMap.entries()).sort((a, b) => b[1].n - a[1].n).slice(0, 20);
    html += `<div class="st-h">高频知识点 Top ${hot.length}</div>`;
    html += `<div class="kchips">${hot.map(([pt, v]) => `<span class="kchip" data-jumppt="${esc(pt)}">${esc(pt)} <b style="font-family:var(--mono);color:var(--accent)">${v.n}</b></span>`).join('')}</div>`;

    $('#st-body').innerHTML = html;
    $$('#st-body [data-jumppt]').forEach((b) => b.addEventListener('click', () => {
      const pt = b.dataset.jumppt;
      const q = ALL.find((x) => (x.point || '未分类') === pt);
      if (q) gotoKB(q.subject, q.module, pt);
    }));
  }

  /* ---------------- 渲染总入口 ---------------- */
  function render() {
    ['paper', 'kb', 'wrong', 'stats'].forEach((v) => {
      const el = document.getElementById('view-' + v);
      if (el) el.hidden = v !== S.view;
    });
    $$('#view-seg button').forEach((b) => b.classList.toggle('on', b.dataset.view === S.view));
    renderYears();
    if (S.view === 'paper') { renderDocHead(); renderQList(); renderDetail(); }
    else if (S.view === 'kb') renderKB();
    else if (S.view === 'wrong') renderWrong();
    else if (S.view === 'stats') renderStats();
    document.documentElement.classList.toggle('no-an', !S.anOpen);
    updateWrongBadge();
  }

  /* ---------------- 事件绑定 ---------------- */
  function bindGlobal() {
    document.addEventListener('click', (e) => {
      const b = e.target.closest('.code-fs');
      if (b) { e.stopPropagation(); openCode(b.dataset.code); }
    });
    $('#cm-close').addEventListener('click', () => { $('#codemodal').hidden = true; });
    $('#codemodal').addEventListener('click', (e) => { if (e.target.id === 'codemodal') $('#codemodal').hidden = true; });
    $('#cm-copy').addEventListener('click', async () => {
      const txt = $('#codemodal').dataset.code || '';
      try { await navigator.clipboard.writeText(txt); toast('代码已复制'); }
      catch (err) {
        const ta = document.createElement('textarea'); ta.value = txt;
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
        toast('代码已复制');
      }
    });
    $('#tabs').addEventListener('click', (e) => {
      const b = e.target.closest('button[data-tab]'); if (!b) return;
      S.tab = b.dataset.tab; S.selId = null; S.subject = '';
      renderDocHead(); renderQList();
      const first = listOf(S.year)[0];
      if (first) selectQuestion(first.id);
    });
    $('#view-seg').addEventListener('click', (e) => {
      const b = e.target.closest('button[data-view]'); if (!b) return;
      S.view = b.dataset.view; render(); savePref();
    });
    $('#mode-seg').addEventListener('click', (e) => {
      const b = e.target.closest('button[data-mode]'); if (!b) return;
      S.mode = b.dataset.mode;
      $$('#mode-seg button').forEach((x) => x.classList.toggle('on', x.dataset.mode === S.mode));
      render(); savePref();
      toast(S.mode === 'quiz' ? '自测模式：先选答案，错了自动进生题本' : '精读模式：答案与解析直接展开');
    });
    $('#btn-an').addEventListener('click', () => {
      S.anOpen = !S.anOpen;
      $('#btn-an').classList.toggle('on', S.anOpen);
      document.documentElement.classList.toggle('no-an', !S.anOpen);
      if (S.view === 'paper') renderDetail(); else render();
      savePref();
    });
    $('#btn-theme').addEventListener('click', () => {
      const d = document.documentElement;
      d.dataset.theme = d.dataset.theme === 'dark' ? 'light' : 'dark';
      savePref();
    });
    $('#fs-up').addEventListener('click', () => {
      const cur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--read-size')) || 17.5;
      document.documentElement.style.setProperty('--read-size', Math.min(23, cur + 0.5) + 'px');
    });
    $('#fs-down').addEventListener('click', () => {
      const cur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--read-size')) || 17.5;
      document.documentElement.style.setProperty('--read-size', Math.max(13, cur - 0.5) + 'px');
    });
    $('#btn-drawer').addEventListener('click', () => { $('#drawer').hidden = false; renderWbDrawer(); });
    $('#dw-close').addEventListener('click', () => { $('#drawer').hidden = true; });
    $('#wb-copy').addEventListener('click', async () => {
      const md = wbMarkdown();
      try { await navigator.clipboard.writeText(md); toast('已复制 Markdown，粘回对话即可'); }
      catch (e) { const ta = document.createElement('textarea'); ta.value = md; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); toast('已复制'); }
    });
    $('#wb-csv').addEventListener('click', () => {
      const rows = [['年份', '题号', '学科', '模块', '知识点', '答案', '我的选择', '原因', '时间']];
      wrongList().forEach((q) => {
        const w = WRONG[q.id] || {};
        rows.push([q.year, q.no, q.subject, q.module, q.point, q.answer || '', w.pick || '', w.reason === 'wrong' ? '做错' : '不会', new Date(w.ts || Date.now()).toLocaleString('zh-CN')]);
      });
      const csv = '\ufeff' + rows.map((r) => r.map((c) => `"${String(c == null ? '' : c).replace(/"/g, '""')}"`).join(',')).join('\r\n');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
      a.download = '408生题本.csv'; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 3000);
      toast('已导出 CSV');
    });
    $('#wb-clear').addEventListener('click', () => {
      if (!Object.keys(WRONG).length) return;
      if (!confirm('清空生题本（做题记录保留）？')) return;
      WRONG = {}; saveWrong(); updateWrongBadge(); render(); toast('已清空生题本');
    });
    let st = null;
    $('#search').addEventListener('input', (e) => {
      clearTimeout(st);
      st = setTimeout(() => {
        S.query = e.target.value.trim();
        if (S.view !== 'paper') { S.view = 'paper'; }
        render();
      }, 140);
    });
    document.addEventListener('keydown', (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') {
        if (e.key === 'Escape') { e.target.value = ''; S.query = ''; render(); e.target.blur(); }
        return;
      }
      switch (e.key) {
        case '/': e.preventDefault(); $('#search').focus(); break;
        case 'j': step(1); break;
        case 'k': step(-1); break;
        case 'a': $('#btn-an').click(); break;
        case 'w': if (S.selId) { toggleWrong(S.selId); renderDetail(); } break;
        case 'm': $('#mode-seg').querySelector('[data-mode="' + (S.mode === 'study' ? 'quiz' : 'study') + '"]').click(); break;
        case '1': case '2': case '3': case '4':
          if (S.view === 'paper' && S.mode === 'quiz' && S.selId) answer(S.selId, 'ABCD'[Number(e.key) - 1]);
          break;
        case 'Escape':
          if (!$('#codemodal').hidden) { $('#codemodal').hidden = true; break; }
          $('#drawer').hidden = true;
          break;
      }
    });
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    buildIndex();

    // 主题
    document.documentElement.dataset.theme = pref.theme === 'light' ? 'light' : 'dark';
    if (pref.anOpen === false) { S.anOpen = false; $('#btn-an').classList.remove('on'); }
    if (pref.mode === 'quiz') S.mode = 'quiz';
    $$('#mode-seg button').forEach((x) => x.classList.toggle('on', x.dataset.mode === S.mode));
    if (pref.year && DATA[pref.year]) S.year = pref.year;
    if (pref.view) S.view = pref.view;

    bindGlobal();
    // 首屏自动选第一题，避免右栏空着
    if (S.view === 'paper' && !S.selId) {
      const first = listOf(S.year).filter((q) => !S.subject || q.subject === S.subject)[0];
      if (first) S.selId = first.id;
    }
    render();

    const n = ALL.length;
    if (!n) {
      toast('还没有题目数据：先跑 OCR + 生成 data/paper/*.js');
    } else {
      console.log(`[408] 载入 ${YEARS.length} 套卷 · ${n} 题 · ${BY_POINT.size} 个知识点`);
    }
  }

  let booted = false;
  function start() { if (booted) return; booted = true; boot(); }
  document.addEventListener('DOMContentLoaded', start);
  if (document.readyState === 'complete' || document.readyState === 'interactive') start();
})();
