/* =========================================================
   考研数学（一）真题精读系统 · app.js
   ---------------------------------------------------------
   视图：试卷 / 知识体系 / 生题本 / 统计
   题型：选择题(choice) · 填空题(fill) · 解答题(big)
   公式：KaTeX（本地 vendor，离线可用）
   ========================================================= */
(function () {
  'use strict';

  /* ============ 0. 工具 ============ */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* 公式渲染：先切分数学段/文本段，文本段转义 + 换行，数学段交 KaTeX
     （不能先整体替换再 replace(\n)，否则 KaTeX 的 SVG 路径里换行会被插进 d 属性） */
  const escText = (t) => t
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
  function tex(src) {
    if (src == null || src === '') return '';
    const s = String(src);
    const run = (body, display) => {
      try { return katex.renderToString(body, { displayMode: display, throwOnError: false, strict: false }); }
      catch (e) { return '<code>' + body + '</code>'; }
    };
    let out = '', i = 0, guard = 0;
    while (i < s.length && guard++ < 20000) {
      const rest = s.slice(i);
      let m = rest.match(/^\$\$/);
      if (m) {
        const end = s.indexOf('$$', i + 2);
        if (end > -1) { out += run(s.slice(i + 2, end), true); i = end + 2; continue; }
      }
      m = rest.match(/^\\\[/);
      if (m) {
        const end = s.indexOf('\\]', i + 2);
        if (end > -1) { out += run(s.slice(i + 2, end), true); i = end + 2; continue; }
      }
      m = rest.match(/^\\\(/);
      if (m) {
        const end = s.indexOf('\\)', i + 2);
        if (end > -1) { out += run(s.slice(i + 2, end), false); i = end + 2; continue; }
      }
      if (s[i] === '$') {
        const end = s.indexOf('$', i + 1);
        if (end > -1) { out += run(s.slice(i + 1, end), false); i = end + 1; continue; }
      }
      const nx = rest.slice(1).search(/\$|\\\[|\\\(/);
      const chunk = nx === -1 ? rest : rest.slice(0, nx + 1);
      out += escText(chunk);
      i += chunk.length;
    }
    return out;
  }

  let toastTimer = null;
  function toast(msg) {
    const el = $('#toast'); if (!el) return;
    el.textContent = msg; el.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('on'), 1800);
  }

  /* ============ 1. 状态 ============ */
  const LS = { wrong: 'math.wrong.v1', done: 'math.done.v1', pref: 'math.pref.v1' };
  const readLS = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  const writeLS = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  const YEARS = Object.keys(window.__MATH__ || {}).map(Number).sort((a, b) => a - b);
  const prefs = readLS(LS.pref, {});
  const S = {
    year: prefs.year && YEARS.includes(prefs.year) ? prefs.year : (YEARS[YEARS.length - 1] || 2016),
    tab: prefs.tab || 'choice',
    subject: '',
    selId: null,
    query: '',
    view: prefs.view || 'paper',
    mode: prefs.mode || 'study',
    showAn: prefs.showAn !== false,
    fs: prefs.fs || 0,
    wb: 'all',
    rev: {}
  };
  let WRONG = readLS(LS.wrong, {});   // {id: {id, ts, myAnswer?}}
  let DONE = readLS(LS.done, {});     // {id: true}  已作答(自测)
  function savePref() {
    writeLS(LS.pref, { year: S.year, tab: S.tab, view: S.view, mode: S.mode, showAn: S.showAn, fs: S.fs });
  }

  /* ============ 2. 索引 ============ */
  const ALL = [];          // 所有题目（带 tab 字段）
  const BY_ID = new Map();
  const KB = window.__KB__ || { subjects: [] };
  const POINT2MOD = new Map();   // point → {subject, module, id}
  const MOD2SUB = new Map();

  function buildIndex() {
    KB.subjects.forEach((sub) => {
      sub.modules.forEach((mod) => {
        MOD2SUB.set(mod.id, { sub: sub.name, mod: mod.name, short: sub.short });
        mod.points.forEach((p) => POINT2MOD.set(sub.name + '||' + p, { mod: mod.name, modId: mod.id, short: sub.short }));
      });
    });
    YEARS.forEach((y) => {
      const p = window.__MATH__[y]; if (!p) return;
      (p.choices || []).forEach((q) => { q.tab = 'choice'; q.year = y; q.id = q.id || (y + '-' + q.no); ALL.push(q); BY_ID.set(q.id, q); });
      (p.fills || []).forEach((q) => { q.tab = 'fill'; q.year = y; q.id = q.id || (y + '-' + q.no); ALL.push(q); BY_ID.set(q.id, q); });
      (p.bigs || []).forEach((q) => { q.tab = 'big'; q.year = y; q.id = q.id || (y + '-' + q.no); ALL.push(q); BY_ID.set(q.id, q); });
    });
  }

  const paperOf = (y) => window.__MATH__[y] || null;
  function listOf(y, tab) {
    const p = paperOf(y); if (!p) return [];
    if (tab === 'fill') return p.fills || [];
    if (tab === 'big') return p.bigs || [];
    return p.choices || [];
  }
  function subjShort(name) {
    const s = KB.subjects.find((x) => x.name === name);
    return s ? s.short : '';
  }
  function subjColor(name) {
    const s = KB.subjects.find((x) => x.name === name);
    return s ? s.short.toLowerCase() : 'gs';
  }
  const SCORE = (q) => q.score || (q.tab === 'choice' ? 5 : q.tab === 'fill' ? 5 : 10);

  /* ============ 3. 顶栏 / 左侧 ============ */
  function renderTop() {
    $('#wb-count').textContent = Object.keys(WRONG).length;
    $$('#view-seg button').forEach((b) => b.classList.toggle('on', b.dataset.view === S.view));
    $$('#mode-seg button').forEach((b) => b.classList.toggle('on', b.dataset.mode === S.mode));
    $('#btn-an').classList.toggle('on', S.showAn);
    document.documentElement.style.fontSize = (15 + S.fs) + 'px';
  }

  function renderYears() {
    $('#year-count').textContent = YEARS.length + ' 套';
    $('#yearlist').innerHTML = YEARS.slice().reverse().map((y) => {
      const p = paperOf(y) || {};
      const items = ALL.filter((q) => q.year === y);
      const doneN = items.filter((q) => DONE[q.id]).length;
      const wrongN = items.filter((q) => WRONG[q.id]).length;
      const total = (p.choices || []).length + (p.fills || []).length + (p.bigs || []).length;
      const pct = total ? Math.round(doneN / total * 100) : 0;
      const cls = [y === S.year ? 'on' : '', wrongN ? 'haswrong' : ''].join(' ');
      return `<li class="yr ${cls}" data-year="${y}">
        <div class="yr-h"><span class="yr-n">${y}</span><span class="yr-c">${doneN}/${total}</span></div>
        <div class="yr-bar"><i style="width:${pct}%"></i></div>
        ${wrongN ? `<span class="yr-w">错 ${wrongN}</span>` : ''}
      </li>`;
    }).join('');
  }

  function renderLegend() {
    const p = paperOf(S.year) || {};
    const d = p.dist || {};
    $('#legend').innerHTML = KB.subjects.map((s) => {
      const v = d[s.name] != null ? d[s.name] : s.score;
      return `<li><span class="sb ${s.short.toLowerCase()}">${s.short}</span>${s.name} <b>${v}</b> 分</li>`;
    }).join('');
  }

  /* ============ 4. 试卷头 + 题型页签 ============ */
  function renderDocHead() {
    const p = paperOf(S.year);
    if (!p) { $('#dochead').innerHTML = '<div class="empty">该年数据还没生成</div>'; return; }
    const total = (p.choices || []).length + (p.fills || []).length + (p.bigs || []).length;
    $('#dochead').innerHTML = `
      <div class="dh-t">${esc(p.title || (S.year + ' 年全国硕士研究生招生考试 数学（一）'))}</div>
      <div class="dh-m">
        <span class="dh-b">${p.duration || 180} 分钟</span>
        <span class="dh-b">${p.score || 150} 分</span>
        <span class="dh-b">选择 ${(p.choices || []).length} · 填空 ${(p.fills || []).length} · 解答 ${(p.bigs || []).length}</span>
        <span class="dh-b">共 ${total} 题</span>
      </div>`;
  }

  function renderTabs() {
    const p = paperOf(S.year) || {};
    const defs = [
      ['choice', '选择题', (p.choices || []).length],
      ['fill', '填空题', (p.fills || []).length],
      ['big', '解答题', (p.bigs || []).length]
    ];
    $('#tabs').innerHTML = defs.map(([k, n, c]) =>
      `<button type="button" data-tab="${k}" class="${S.tab === k ? 'on' : ''}">${n}<span class="n">${c}</span></button>`
    ).join('') + subjChips();
  }

  function subjChips() {
    const list = listOf(S.year, S.tab);
    if (!list.length) return '';
    const cnt = {};
    list.forEach((q) => { cnt[q.subject] = (cnt[q.subject] || 0) + 1; });
    const chips = KB.subjects.map((s) =>
      `<button type="button" class="chip ${S.subject === s.name ? 'on' : ''}" data-subj="${esc(s.name)}">${esc(s.name)} <b>${cnt[s.name] || 0}</b></button>`
    ).join('');
    return `<span class="chip-sep"></span><button type="button" class="chip ${!S.subject ? 'on' : ''}" data-subj="">全部</button>` + chips;
  }

  /* ============ 5. 题目列表 ============ */
  function renderQList() {
    const list = listOf(S.year, S.tab).filter((q) => !S.subject || q.subject === S.subject);
    if (!list.length) { $('#qlist').innerHTML = '<div class="empty">这一栏没有题目</div>'; return; }
    $('#qlist').innerHTML = list.map((q) => questionCard(q)).join('');
    // 恢复选中
    if (S.selId && BY_ID.has(S.selId)) {
      const el = $('#qlist .qcard[data-id="' + S.selId + '"]');
      if (el) el.classList.add('sel');
    }
  }

  function qBadge(q) {
    const sc = subjColor(q.subject);
    return `<span class="sb ${sc}">${subjShort(q.subject)}</span>`;
  }

  function stemHtml(q) {
    let h = '<div class="qtxt">' + tex(q.stem) + '</div>';
    if (q.figure) h += `<div class="qfig">${tex(q.figure)}</div>`;
    return h;
  }

  function judgeBar() {
    return `<div class="judge">
      <span class="jg-l">自测判分</span>
      <button type="button" class="mini ok" data-judge="right">✓ 做对了</button>
      <button type="button" class="mini bad" data-judge="wrong">✗ 做错了</button>
    </div>`;
  }

  function questionCard(q) {
    const state = WRONG[q.id] ? 'is-wrong' : (DONE[q.id] ? 'is-done' : '');
    let body = '';
    if (q.tab === 'choice') {
      const opts = q.options || {};
      const keys = Object.keys(opts).sort();
      const one = keys.some((k) => String(opts[k] || '').length > 26);
      const shown = (S.mode === 'quiz' && !DONE[q.id] && !S.rev[q.id]) ? null : q.answer;
      body = `<div class="qopts ${one ? 'one' : ''}">` + keys.map((k) => {
        const cls = ['qopt'];
        if (shown) {
          if (k === q.answer) cls.push('correct');
          else if (WRONG[q.id] && WRONG[q.id].myAnswer === k) cls.push('wrong');
        }
        return `<div class="${cls.join(' ')}" data-opt="${k}"><b>${k}</b><span>${tex(opts[k])}</span></div>`;
      }).join('') + '</div>';
    } else if (q.tab === 'fill') {
      const shown = (S.mode === 'quiz' && !DONE[q.id] && !S.rev[q.id]) ? null : q.answer;
      body = shown
        ? `<div class="fill-ans"><div class="lab">答案</div><div class="val">${tex(q.answer)}</div></div>`
        : `<button type="button" class="fill-hidden" data-reveal="1">看答案</button>`;
      if (S.mode === 'quiz' && !DONE[q.id]) body += judgeBar();
    } else {
      const subs = (q.subs || []).map((s, i) =>
        `<div class="subq"><span class="lb">${esc(s.label || ('(' + (i + 1) + ')'))}</span><span class="ask">${tex(s.ask)}</span></div>`
      ).join('');
      body = subs ? `<div class="subs">${subs}</div>` : '';
      if (S.mode === 'quiz' && !DONE[q.id]) body += judgeBar();
    }
    return `<article class="qcard ${state}" data-id="${q.id}" data-tab="${q.tab}">
      <div class="qhead">
        <span class="qno">${q.no}</span>
        ${qBadge(q)}
        <span class="qmod">${esc(q.module || '')} · ${esc(q.point || '')}</span>
        <span class="spacer"></span>
        <span class="qscore">${SCORE(q)} 分</span>
      </div>
      ${stemHtml(q)}
      ${body}
      <div class="qfoot">
        <span class="qstate">${WRONG[q.id] ? '✗ 不会' : (DONE[q.id] ? '✓ 已做' : '未作答')}</span>
        <span class="spacer"></span>
        <button type="button" class="mini" data-w="1">${WRONG[q.id] ? '移出生题本' : '✎ 不会'}</button>
        <button type="button" class="mini" data-jump="1">解析 →</button>
      </div>
    </article>`;
  }

  /* ============ 6. 详情 ============ */
  function renderDetail() {
    const q = S.selId ? BY_ID.get(S.selId) : null;
    const box = $('#detail');
    if (!q) {
      box.innerHTML = `<div class="empty big">
        <div class="empty-t">点右边任意一题看解析</div>
        <div class="empty-s">每题：考什么 → 怎么解 → 逐项排除 → 易错点</div>
        <div class="empty-s">左上「不会」标记后进生题本</div>
      </div>`;
      return;
    }
    const p = paperOf(q.year);
    let h = `<div class="dhead">
      <span class="dy">${q.year} 年第 ${q.no} 题</span>
      <span class="spacer"></span>
      <span class="dsc">${SCORE(q)} 分</span>
    </div>
    <div class="dmeta">
      ${qBadge(q)}
      <span class="kchip-m">${esc(q.module || '')}</span>
      <span class="kchip-p" data-kb="${esc(q.point || '')}">⌘ ${esc(q.point || '')}</span>
      ${q.type ? `<span class="kchip-t">${esc(q.type)}</span>` : ''}
      ${q.difficulty ? `<span class="kchip-d">难度 ${'★'.repeat(q.difficulty)}</span>` : ''}
    </div>
    <div class="dstem">${stemHtml(q)}</div>`;

    // 选项 / 答案
    if (q.tab === 'choice') {
      const opts = q.options || {};
      const keys = Object.keys(opts).sort();
      h += `<div class="dans"><span class="lab">答案</span><b class="ok">${esc(q.answer)}</b><span class="ok-t">${tex(opts[q.answer] || '')}</span></div>`;
    } else if (q.tab === 'fill') {
      h += `<div class="dans"><span class="lab">答案</span><span class="ok-t">${tex(q.answer)}</span></div>`;
    }

    // 解析
    const an = q.analysis || {};
    const seg = (t) => (S.showAn ? '' : ' style="display:none"');
    h += `<div class="anwrap"${seg()}>`;
    if (an['考什么']) h += `<div class="an-h">考什么</div><div class="an-p">${tex(an['考什么'])}</div>`;
    if (an['怎么解'] || an['思路']) h += `<div class="an-h">怎么解</div><div class="an-p">${tex(an['怎么解'] || an['思路'])}</div>`;
    if (an['关键步骤']) h += `<div class="an-h">关键步骤</div><div class="an-p">${tex(an['关键步骤'])}</div>`;
    if (an['逐项排除']) h += `<div class="an-h">逐项排除</div><div class="an-p">${tex(an['逐项排除'])}</div>`;
    if (an['易错']) h += `<div class="an-h">易错</div><div class="an-p">${tex(an['易错'])}</div>`;

    // 解答题：小问参考答案
    if (q.tab === 'big' && (q.subs || []).length) {
      h += `<div class="an-h">参考答案</div><div class="subs">` + q.subs.map((s, i) => `
        <div class="subq">
          <span class="lb">${esc(s.label || ('(' + (i + 1) + ')'))}</span>
          <span class="ask">${tex(s.ask)}</span>
          <div class="ans" data-ans="${i}">${tex(s.ans || '')}</div>
        </div>`).join('') + `</div>`;
    }
    if ((q.pitfalls || []).length) {
      h += `<div class="pts"><div class="lab">踩坑点</div><ol>` +
        q.pitfalls.map((x) => `<li>${tex(x)}</li>`).join('') + `</ol></div>`;
    }
    if (q.trap) h += `<div class="trap"><b>易错</b>${tex(q.trap)}</div>`;
    h += `</div>`;

    // 同知识点
    const rel = ALL.filter((x) => x.point === q.point && x.id !== q.id).slice(0, 8);
    if (rel.length) {
      h += `<div class="rel"><div class="rel-h">同知识点真题（${rel.length}）</div>` +
        rel.map((x) => `<div class="rq" data-id="${x.id}"><span class="rn">${x.year}-${x.no}</span><span>${esc(String(x.stem || '').replace(/\$[^$]*\$/g, '⋯').slice(0, 60))}</span></div>`).join('') +
        `</div>`;
    }

    h += `<div class="dacts">
      ${(S.mode === 'quiz' && !DONE[q.id]) ? `<button type="button" class="mini ok" data-judge="right">✓ 做对了</button><button type="button" class="mini bad" data-judge="wrong">✗ 做错了</button>` : ''}
      <button type="button" class="mini" data-w="1">${WRONG[q.id] ? '★ 已入生题本' : '☆ 加入生题本'}</button>
      <button type="button" class="mini" data-kbjump="1">看知识体系</button>
      <button type="button" class="mini" data-nav="-1">← 上一题</button>
      <button type="button" class="mini" data-nav="1">下一题 →</button>
    </div>`;

    box.innerHTML = h;
  }

  /* ============ 7. 知识体系 ============ */
  function renderKB() {
    const html = KB.subjects.map((s) => {
      const total = s.modules.reduce((a, m) => a + m.points.length, 0);
      return `<li class="kbn lv1" data-sub="${esc(s.name)}">
        <span class="sb ${s.short.toLowerCase()}">${s.short}</span>
        <span class="kbn-n">${esc(s.name)}</span>
        <span class="kbn-c">${total}</span>
      </li>` + s.modules.map((m) => {
        const pts = m.points.map((p) => {
          const n = ALL.filter((q) => q.subject === s.name && q.point === p).length;
          return `<li class="kpt" data-point="${esc(p)}" data-sub="${esc(s.name)}"><span>${esc(p)}</span><i>${n || ''}</i></li>`;
        }).join('');
        return `<li class="kbn lv2" data-sub="${esc(s.name)}" data-mod="${esc(m.name)}">
            <span class="kbn-n">${esc(m.name)}</span><span class="kbn-c">${m.points.length}</span>
          </li><li class="kpts"><ul>${pts}</ul></li>`;
      }).join('');
    }).join('');
    $('#kbtree').innerHTML = html;
    $('#kb-count').textContent = ALL.length + ' 题';
    if (!S.kbPoint) {
      $('#kbmain').innerHTML = `<div class="empty big"><div class="empty-t">左侧选一个知识点</div>
        <div class="empty-s">看它在十年真题里怎么考、我错了几次</div></div>`;
    }
  }

  function renderKBPoint(sub, point) {
    S.kbPoint = point; S.kbSub = sub;
    const qs = ALL.filter((q) => q.subject === sub && q.point === point);
    const wrongN = qs.filter((q) => WRONG[q.id]).length;
    let h = `<div class="kbhead">
      <div class="kb-t">${esc(point)}</div>
      <div class="kb-m"><span class="sb ${subjShort(sub).toLowerCase()}">${subjShort(sub)}</span> ${esc(sub)}
        <span class="dh-b">考过 ${qs.length} 次</span>
        <span class="dh-b ${wrongN ? 'red' : ''}">错 ${wrongN}</span></div>
    </div>`;
    h += `<div class="kblist">` + (qs.length ? qs.map((q) => `
      <div class="kbr" data-id="${q.id}">
        <span class="kbr-y">${q.year}</span>
        <span class="kbr-n">${q.no}.</span>
        <span class="kbr-s">${tex(q.stem || '')}</span>
        <span class="kbr-t">${q.tab === 'choice' ? '选择' : q.tab === 'fill' ? '填空' : '解答'}</span>
        ${WRONG[q.id] ? '<span class="kbr-w">✗</span>' : ''}
      </div>`).join('') : '<div class="empty">这一知识点还没有真题</div>') + `</div>`;
    $('#kbmain').innerHTML = h;
    $$('#kbtree .kpt').forEach((el) => el.classList.toggle('on', el.dataset.point === point && el.dataset.sub === sub));
  }

  /* ============ 8. 生题本 ============ */
  function wbGroups() {
    const groups = new Map();
    Object.values(WRONG).forEach((w) => {
      const q = BY_ID.get(w.id); if (!q) return;
      const key = q.subject + '||' + q.module + '||' + q.point;
      if (!groups.has(key)) groups.set(key, { subject: q.subject, module: q.module, point: q.point, items: [] });
      groups.get(key).items.push(q);
    });
    return Array.from(groups.values()).sort((a, b) => b.items.length - a.items.length);
  }

  function renderWrong() {
    const gs = wbGroups();
    const total = Object.keys(WRONG).length;
    if (!total) {
      $('#wrongmain').innerHTML = `<div class="empty big"><div class="empty-t">生题本还是空的</div>
        <div class="empty-s">在题目上点「✎ 不会」，或自测答错，会自动收进来</div>
        <div class="empty-s">按「学科 → 模块 → 知识点」聚合，方便集中攻</div></div>`;
      return;
    }
    let h = `<div class="whead"><div class="w-t">生题本</div>
      <div class="w-m">共 <b>${total}</b> 题 · ${gs.length} 个知识点
        <button type="button" class="mini" id="wb-redo">重做这一组</button>
        <button type="button" class="mini" id="wb-md2">导出 Markdown</button>
      </div></div>`;
    h += gs.map((g) => `<section class="wgroup">
      <div class="wg-h">
        <span class="sb ${subjShort(g.subject).toLowerCase()}">${subjShort(g.subject)}</span>
        <b>${esc(g.module)}</b> · ${esc(g.point)}
        <span class="spacer"></span><span class="wg-c">${g.items.length} 题</span>
      </div>
      ${g.items.sort((a, b) => a.year - b.year || a.no - b.no).map((q) => `
        <div class="wrow" data-id="${q.id}">
          <span class="wr-y">${q.year}</span>
          <span class="wr-n">${q.no}.</span>
          <span class="wr-s">${tex(q.stem || '')}</span>
          <span class="spacer"></span>
          <button type="button" class="mini" data-w="1">移除</button>
          <button type="button" class="mini" data-jump="1">看解析</button>
        </div>`).join('')}
    </section>`).join('');
    $('#wrongmain').innerHTML = h;
  }

  /* ============ 9. 统计 ============ */
  function renderStats() {
    const total = ALL.length;
    const doneN = ALL.filter((q) => DONE[q.id]).length;
    const wrongN = Object.keys(WRONG).length;
    const rightN = Object.keys(DONE).filter((id) => DONE[id] === 'right').length;
    const acc = doneN ? Math.round(rightN / doneN * 100) : 0;

    let h = `<div class="whead"><div class="w-t">统计</div>
      <div class="w-m">${YEARS.length} 套卷 · ${total} 题 · 已做 ${doneN}</div></div>
      <div class="st-cards">
        <div class="st-card"><div class="st-n">${total}</div><div class="st-l">题库总题数</div><div class="st-s">${YEARS.length} 套 · 选择+填空+解答</div></div>
        <div class="st-card"><div class="st-n">${doneN}</div><div class="st-l">已做</div><div class="st-s">${Math.round(doneN / total * 100)}% 覆盖</div></div>
        <div class="st-card"><div class="st-n">${acc}%</div><div class="st-l">正确率</div><div class="st-s">${rightN} / ${doneN} 题</div></div>
        <div class="st-card"><div class="st-n red">${wrongN}</div><div class="st-l">不会 / 错题</div><div class="st-s">生题本集中攻</div></div>
      </div>`;

    // 学科分布
    h += `<div class="st-sec"><div class="st-h">学科分布</div>`;
    KB.subjects.forEach((s) => {
      const qs = ALL.filter((q) => q.subject === s.name);
      const w = qs.filter((q) => WRONG[q.id]).length;
      const pct = total ? Math.round(qs.length / total * 100) : 0;
      h += `<div class="bar"><span class="sb ${s.short.toLowerCase()}">${s.short}</span>
        <span class="bar-n">${esc(s.name)}</span>
        <span class="bar-t"><i style="width:${pct}%" class="${s.short.toLowerCase()}"></i></span>
        <span class="bar-v">${w}/${qs.length} 题</span></div>`;
    });
    h += `</div>`;

    // 年份 × 学科
    h += `<div class="st-sec"><div class="st-h">年份 × 学科（绿=全对 / 红=有错 / 灰=未做）</div><table class="matrix"><thead><tr>
      <th>年份</th>${KB.subjects.map((s) => `<th>${s.short}</th>`).join('')}<th>合计</th></tr></thead><tbody>`;
    YEARS.slice().reverse().forEach((y) => {
      const items = ALL.filter((q) => q.year === y);
      h += `<tr><td class="mx-y">${y}</td>` + KB.subjects.map((s) => {
        const qs = items.filter((q) => q.subject === s.name);
        const w = qs.filter((q) => WRONG[q.id]).length;
        const d = qs.filter((q) => DONE[q.id]).length;
        const cls = w ? 'bad' : (d && d === qs.length ? 'ok' : '');
        return `<td class="mx-c ${cls}">${qs.length}</td>`;
      }).join('') + `<td class="mx-c">${items.filter((q) => DONE[q.id]).length}/${items.length}</td></tr>`;
    });
    h += `</tbody></table></div>`;

    // 薄弱知识点
    const gs = wbGroups().slice(0, 15);
    h += `<div class="st-sec"><div class="st-h">薄弱知识点 Top 15</div><div class="kchips">`;
    h += gs.length ? gs.map((g) => `<span class="kchip">${esc(g.point)} <b>${g.items.length}</b></span>`).join('')
      : '<span class="empty-s">还没有错题记录</span>';
    h += `</div></div>`;

    // 高频知识点
    const freq = new Map();
    ALL.forEach((q) => { if (q.point) freq.set(q.point, (freq.get(q.point) || 0) + 1); });
    const top = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]).slice(0, 20);
    h += `<div class="st-sec"><div class="st-h">高频知识点 Top 20</div><div class="kchips">` +
      top.map(([p, n]) => `<span class="kchip">${esc(p)} <b>${n}</b></span>`).join('') + `</div></div>`;

    $('#statsmain').innerHTML = h;
  }

  /* ============ 10. 交互 ============ */
  function selectQuestion(id) {
    S.selId = id;
    $$('#qlist .qcard').forEach((el) => el.classList.toggle('sel', el.dataset.id === id));
    renderDetail();
    const el = $('#qlist .qcard[data-id="' + id + '"]');
    if (el) el.scrollIntoView({ block: 'nearest' });
  }

  function markWrong(id, myAnswer) {
    if (WRONG[id]) { delete WRONG[id]; }
    else { WRONG[id] = { id: id, ts: Date.now() }; if (myAnswer) WRONG[id].myAnswer = myAnswer; }
    writeLS(LS.wrong, WRONG);
    renderTop(); renderYears(); renderQList(); renderDetail();
  }

  function answerChoice(id, opt) {
    const q = BY_ID.get(id); if (!q) return;
    DONE[id] = (opt === q.answer) ? 'right' : 'wrong';
    if (opt !== q.answer && !WRONG[id]) WRONG[id] = { id: id, ts: Date.now(), myAnswer: opt };
    writeLS(LS.done, DONE); writeLS(LS.wrong, WRONG);
    renderTop(); renderYears(); renderQList(); renderDetail();
    toast(opt === q.answer ? '✓ 正确' : `✗ 错，正确答案 ${q.answer}${WRONG[id] ? '（已加入生题本）' : ''}`);
  }

  /* 填空 / 解答：自测判分 */
  function judge(id, result) {
    DONE[id] = result;
    if (result === 'wrong' && !WRONG[id]) WRONG[id] = { id: id, ts: Date.now() };
    writeLS(LS.done, DONE); writeLS(LS.wrong, WRONG);
    renderTop(); renderYears(); renderQList(); renderDetail();
    toast(result === 'right' ? '✓ 已记为做对' : '✗ 已记入生题本');
  }

  function step(d) {
    const list = listOf(S.year, S.tab).filter((q) => !S.subject || q.subject === S.subject);
    if (!list.length) return;
    let i = list.findIndex((q) => q.id === S.selId);
    i = i < 0 ? 0 : Math.min(list.length - 1, Math.max(0, i + d));
    selectQuestion(list[i].id);
  }

  function jumpTo(id) {
    const q = BY_ID.get(id); if (!q) return;
    S.year = q.year; S.tab = q.tab; S.view = 'paper'; S.subject = '';
    render();
    selectQuestion(id);
  }

  function render() {
    $('#view-paper').hidden = S.view !== 'paper';
    $('#view-kb').hidden = S.view !== 'kb';
    $('#view-wrong').hidden = S.view !== 'wrong';
    $('#view-stats').hidden = S.view !== 'stats';
    renderTop(); renderYears();
    if (S.view === 'paper') { renderDocHead(); renderTabs(); renderQList(); renderDetail(); renderLegend(); }
    if (S.view === 'kb') renderKB();
    if (S.view === 'wrong') renderWrong();
    if (S.view === 'stats') renderStats();
  }

  /* ============ 11. 事件 ============ */
  function bind() {
    // 视图切换
    $('#view-seg').addEventListener('click', (e) => {
      const b = e.target.closest('button[data-view]'); if (!b) return;
      S.view = b.dataset.view; render(); savePref();
    });
    // 模式
    $('#mode-seg').addEventListener('click', (e) => {
      const b = e.target.closest('button[data-mode]'); if (!b) return;
      S.mode = b.dataset.mode; render(); savePref();
    });
    // 解析开关
    $('#btn-an').addEventListener('click', () => { S.showAn = !S.showAn; render(); savePref(); });
    // 字号
    $('#fs-up').addEventListener('click', () => { S.fs = Math.min(4, S.fs + 1); render(); savePref(); });
    $('#fs-down').addEventListener('click', () => { S.fs = Math.max(-2, S.fs - 1); render(); savePref(); });
    // 主题
    $('#btn-theme').addEventListener('click', () => {
      const cur = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = cur;
    });
    // 年份
    $('#yearlist').addEventListener('click', (e) => {
      const b = e.target.closest('.yr'); if (!b) return;
      S.year = Number(b.dataset.year); S.selId = null; S.subject = '';
      render();
      const first = listOf(S.year, S.tab)[0];
      if (first) selectQuestion(first.id);
      savePref();
    });
    // 题型页签 + 学科筛选
    $('#tabs').addEventListener('click', (e) => {
      const t = e.target.closest('button[data-tab]');
      if (t) { S.tab = t.dataset.tab; S.subject = ''; S.selId = null; render(); const f = listOf(S.year, S.tab)[0]; if (f) selectQuestion(f.id); savePref(); return; }
      const s = e.target.closest('button[data-subj]');
      if (s) { S.subject = s.dataset.subj; S.selId = null; render(); const f = listOf(S.year, S.tab).filter((q) => !S.subject || q.subject === S.subject)[0]; if (f) selectQuestion(f.id); }
    });
    // 题目列表
    $('#qlist').addEventListener('click', (e) => {
      const card = e.target.closest('.qcard'); if (!card) return;
      const id = card.dataset.id;
      const opt = e.target.closest('.qopt');
      if (opt && S.mode === 'quiz' && !DONE[id]) { e.stopPropagation(); answerChoice(id, opt.dataset.opt); return; }
      if (e.target.closest('[data-w]')) { e.stopPropagation(); markWrong(id); return; }
      const jb = e.target.closest('[data-judge]');
      if (jb) { e.stopPropagation(); judge(id, jb.dataset.judge); return; }
      if (e.target.closest('[data-reveal]')) { e.stopPropagation(); S.rev[id] = true; renderQList(); return; }
      selectQuestion(id);
    });
    // 详情
    $('#detail').addEventListener('click', (e) => {
      const id = S.selId;
      if (e.target.closest('[data-w]')) { markWrong(id); return; }
      if (e.target.closest('[data-nav]')) { step(Number(e.target.closest('[data-nav]').dataset.nav)); return; }
      if (e.target.closest('[data-kbjump]')) {
        S.view = 'kb'; render();
        const q = BY_ID.get(id); if (q) renderKBPoint(q.subject, q.point);
        return;
      }
      const rq = e.target.closest('.rq'); if (rq) { jumpTo(rq.dataset.id); return; }
      const kp = e.target.closest('[data-kb]');
      if (kp) { const q = BY_ID.get(id); S.view = 'kb'; render(); renderKBPoint(q.subject, kp.dataset.kb); }
    });
    // 知识树
    $('#kbtree').addEventListener('click', (e) => {
      const lv2 = e.target.closest('.kbn.lv2');
      if (lv2) {
        const ul = lv2.nextElementSibling;
        if (ul && ul.classList.contains('kpts')) ul.hidden = !ul.hidden;
        return;
      }
      const pt = e.target.closest('.kpt');
      if (pt) { renderKBPoint(pt.dataset.sub, pt.dataset.point); return; }
    });
    // 生题本 / 知识体系 里的跳转（#wrongmain 每次重绘，必须委托）
    ['#wrongmain', '#kbmain'].forEach((sel) => {
      $(sel).addEventListener('click', (e) => {
        if (e.target.closest('#wb-md2')) { exportMD(); return; }
        if (e.target.closest('#wb-redo')) {
          const g = e.target.closest('.wgroup');
          const ids = g ? $$('.wrow', g).map((x) => x.dataset.id) : [];
          if (ids.length) { S.mode = 'quiz'; jumpTo(ids[0]); }
          return;
        }
        const row = e.target.closest('[data-id]');
        if (!row) return;
        if (e.target.closest('[data-w]')) { markWrong(row.dataset.id); if (S.view === 'wrong') renderWrong(); return; }
        jumpTo(row.dataset.id);
      });
    });
    // 抽屉
    $('#btn-drawer').addEventListener('click', () => {
      $('#drawer').hidden = false;
      $('#drawer-b').innerHTML = wbDrawer();
    });
    $('#drawer-x').addEventListener('click', () => { $('#drawer').hidden = true; });
    $('#drawer').addEventListener('click', (e) => {
      if (e.target.id === 'drawer') { $('#drawer').hidden = true; return; }
      const row = e.target.closest('[data-id]');
      if (row) { $('#drawer').hidden = true; jumpTo(row.dataset.id); }
    });
    const md = () => exportMD();
    $('#wb-md').addEventListener('click', md);
    $('#wb-clear').addEventListener('click', () => {
      if (!confirm('清空生题本？不可恢复。')) return;
      WRONG = {}; writeLS(LS.wrong, WRONG); render(); $('#drawer-b').innerHTML = wbDrawer(); toast('已清空');
    });
    $('#wb-csv').addEventListener('click', exportCSV);
    // 搜索
    let t = null;
    $('#search').addEventListener('input', (e) => {
      const v = e.target.value.trim();
      clearTimeout(t);
      t = setTimeout(() => { S.query = v; doSearch(v); }, 180);
    });
    // 键盘
    document.addEventListener('keydown', (e) => {
      if (e.target.matches('input,textarea')) return;
      if (e.metaKey || e.ctrlKey) return;
      switch (e.key) {
        case '1': case '2': case '3': case '4': {
          if (S.view !== 'paper' || S.mode !== 'quiz') break;
          const q = S.selId ? BY_ID.get(S.selId) : null;
          if (q && q.tab === 'choice' && !DONE[q.id]) { e.preventDefault(); answerChoice(q.id, 'ABCD'[Number(e.key) - 1]); }
          break;
        }
        case 'j': step(1); break;
        case 'k': step(-1); break;
        case 'a': S.showAn = !S.showAn; render(); savePref(); break;
        case 'w': if (S.selId) markWrong(S.selId); break;
        case 'm': S.mode = S.mode === 'study' ? 'quiz' : 'study'; render(); savePref(); break;
        case '/': e.preventDefault(); $('#search').focus(); break;
        case 'Escape': $('#drawer').hidden = true; break;
        default: break;
      }
    });
  }

  function wbDrawer() {
    const gs = wbGroups();
    if (!gs.length) return '<div class="empty">还没有标记「不会」的题</div>';
    return gs.map((g) => `<div class="db-g">
      <div class="db-h"><span class="sb ${subjShort(g.subject).toLowerCase()}">${subjShort(g.subject)}</span>${esc(g.point)} <b>${g.items.length}</b></div>
      ${g.items.map((q) => `<div class="db-r" data-id="${q.id}"><span class="db-y">${q.year}-${q.no}</span>${esc(String(q.stem || '').replace(/\$[^$]*\$/g, ' ').slice(0, 54))}</div>`).join('')}
    </div>`).join('');
  }

  function exportMD() {
    const gs = wbGroups();
    if (!gs.length) { toast('生题本为空'); return; }
    const brief = (q) => String(q.stem || '').replace(/\s+/g, ' ').trim();

    let md = `# 考研数学（一）· 生题本（${Object.keys(WRONG).length} 题 / ${gs.length} 个知识点）\n\n`;
    md += `> 学习方式：**按知识点串讲**，不要逐题念解析。\n`;
    md += `> 每个知识点先告诉我「十年里考过几次、分别怎么考」，再讲清「为什么我这类题会卡住」，最后给 1–2 道同类变式让我现场做。\n\n`;
    md += `---\n\n`;

    gs.forEach((g, gi) => {
      const all = ALL.filter((q) => q.subject === g.subject && q.point === g.point)
        .sort((a, b) => a.year - b.year || a.no - b.no);
      const years = Array.from(new Set(all.map((q) => q.year)));
      md += `## ${gi + 1}. 【${g.subject}】${g.module} · ${g.point}\n\n`;
      md += `- 十年考过 **${all.length}** 次（${years.join('、')}），我标了 **${g.items.length}** 题不会\n`;
      md += `- 我的错题：${g.items.map((q) => `${q.year}-${q.no}`).join('、')}\n\n`;

      md += `### ① 先讲这个知识点（不要从题目讲起）\n\n`;
      md += `> 待填：这个概念/定理的定义、适用条件、常见变形、和哪些知识点容易混。\n\n`;

      md += `### ② 十年真题里它长什么样\n\n`;
      all.forEach((q) => {
        const mark = WRONG[q.id] ? ' **[我不会]**' : '';
        md += `- \`${q.year}-${q.no}\`（${q.tab === 'choice' ? '选择' : q.tab === 'fill' ? '填空' : '解答'} ${SCORE(q)}分）${brief(q)}${mark}\n`;
      });
      md += `\n`;

      md += `### ③ 我的错题详解\n\n`;
      g.items.sort((a, b) => a.year - b.year || a.no - b.no).forEach((q) => {
        md += `#### ${q.year} 年第 ${q.no} 题（${q.tab === 'choice' ? '选择' : q.tab === 'fill' ? '填空' : '解答'} ${SCORE(q)} 分）\n\n`;
        md += `${q.stem}\n\n`;
        if (q.tab === 'choice' && q.options) {
          Object.keys(q.options).sort().forEach((k) => { md += `- ${k}. ${q.options[k]}\n`; });
          md += `\n`;
        }
        md += `**答案：${q.answer || '（解答见下）'}**\n\n`;
        const an = q.analysis || {};
        Object.keys(an).forEach((k) => { md += `**【${k}】** ${an[k]}\n\n`; });
        if ((q.subs || []).length) {
          q.subs.forEach((s, i) => { md += `**${s.label || ('(' + (i + 1) + ')')}** ${s.ask}\n\n> ${s.ans}\n\n`; });
        }
        if ((q.pitfalls || []).length) md += `> 踩坑点：${q.pitfalls.join('；')}\n\n`;
        if (q.trap) md += `> 易错：${q.trap}\n\n`;
        md += `---\n\n`;
      });
    });

    md += `\n## 请这样教我\n\n`;
    md += `1. 先按「知识点」讲，不要把题目当主体；\n`;
    md += `2. 讲完一个知识点，用上面 ② 的真题清单让我辨认「同一考法的不同马甲」；\n`;
    md += `3. 每个知识点最后给 1–2 道变式题（改数字/改条件），我做完你再判；\n`;
    md += `4. 我卡住的地方多半是「为什么想到这一步」，请把**思路入口**讲出来（看到什么特征 → 想到什么方法）。\n`;
    download('数学一生题本.md', md);
  }

  function exportCSV() {
    const rows = [['年份', '题号', '题型', '学科', '模块', '知识点', '答案', '题干']];
    Object.values(WRONG).forEach((w) => {
      const q = BY_ID.get(w.id); if (!q) return;
      const t = q.tab === 'choice' ? '选择' : q.tab === 'fill' ? '填空' : '解答';
      rows.push([q.year, q.no, t, q.subject, q.module, q.point, q.answer || '', String(q.stem || '').replace(/"/g, '""')]);
    });
    const csv = '\ufeff' + rows.map((r) => r.map((c) => `"${c}"`).join(',')).join('\n');
    download('数学一生题本.csv', csv);
  }

  function download(name, text) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('已导出 ' + name);
  }

  /* 搜索：题干 / 知识点 / 年份 */
  function doSearch(v) {
    if (!v) { render(); return; }
    const kw = v.toLowerCase();
    const hits = ALL.filter((q) =>
      String(q.stem || '').toLowerCase().includes(kw) ||
      String(q.point || '').toLowerCase().includes(kw) ||
      String(q.module || '').toLowerCase().includes(kw) ||
      String(q.year) === kw
    );
    S.view = 'paper'; S.subject = '';
    $('#view-paper').hidden = false; $('#view-kb').hidden = true; $('#view-wrong').hidden = true; $('#view-stats').hidden = true;
    renderTop();
    $('#dochead').innerHTML = `<div class="dh-t">搜索「${esc(v)}」</div><div class="dh-m"><span class="dh-b">命中 ${hits.length} 题</span></div>`;
    $('#tabs').innerHTML = '';
    $('#qlist').innerHTML = hits.length
      ? hits.slice(0, 200).map((q) => questionCard(q)).join('')
      : '<div class="empty">没有命中，换个关键词</div>';
    renderDetail();
  }

  /* ============ 12. 启动 ============ */
  function start() {
    buildIndex();
    if (!YEARS.length) { document.body.innerHTML = '<div class="empty big"><div class="empty-t">没有数据</div><div class="empty-s">检查 data/paper/*.js</div></div>'; return; }
    if (!paperOf(S.year)) S.year = YEARS[YEARS.length - 1];
    document.documentElement.dataset.theme = prefs.theme || 'dark';
    bind();
    render();
    const first = listOf(S.year, S.tab)[0];
    if (first) selectQuestion(first.id);
    console.log('[数学] 载入 ' + YEARS.length + ' 套卷 · ' + ALL.length + ' 题');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
