/* ============================================================
   考研真题精读库 · 总入口
   读 data/manifest.js 渲染三科卡片与总览；
   读各科 localStorage 聚合生题本总账（file:// 下若被隔离则降级为「—」）。
   ============================================================ */
(function () {
  'use strict';

  var M = window.__MANIFEST__ || { subjects: [], totals: {} };
  var LS_THEME = 'hub.theme.v1';

  /* ---------------- 工具 ---------------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function num(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  function readLS(key, dflt) {
    try {
      var v = window.localStorage.getItem(key);
      return v ? JSON.parse(v) : dflt;
    } catch (e) { return dflt; }
  }

  /* ---------------- 主题 ---------------- */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { window.localStorage.setItem(LS_THEME, t); } catch (e) {}
    var ico = $('#btn-theme');
    if (ico) ico.innerHTML = t === 'light'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z"/></svg>';
  }

  /* ---------------- 倒计时 ---------------- */
  function renderCountdown() {
    var el = $('#countdown');
    if (!el) return;
    var exam = new Date(M.examDate || '2026-12-20T14:00:00+08:00');
    var now = new Date();
    var days = Math.ceil((exam - now) / 86400000);
    if (days > 0) {
      el.innerHTML = '距考试 <b>' + days + '</b> 天';
    } else if (days === 0) {
      el.innerHTML = '<b>今天</b> 考试';
    } else {
      el.innerHTML = '已考完 <b>' + (-days) + '</b> 天';
    }
  }

  /* ---------------- 生题本聚合 ---------------- */
  function collectWrong() {
    var out = {};   // subjectId -> {items: [...], groups: Map, extra}
    M.subjects.forEach(function (s) {
      var raw = readLS(s.storage.wrong, null);
      var items = [];
      if (raw && typeof raw === 'object') {
        Object.keys(raw).forEach(function (k) {
          var w = raw[k];
          if (!w) return;
          items.push({
            sid: s.id,
            short: s.short,
            id: w.id || k,
            year: w.year || (String(w.id || k).match(/^(\d{4})/) || [])[1] || '',
            no: w.no || (String(w.id || k).split('-')[1] || ''),
            subject: w.subject || '',
            module: w.module || '',
            point: w.point || '',
            text: w.text || w.word || w.term || ''
          });
        });
      }
      out[s.id] = items;
    });
    return out;
  }

  function renderWrongBook(wrong) {
    var box = $('#wbm');
    if (!box) return;
    var flat = [];
    Object.keys(wrong).forEach(function (k) { flat = flat.concat(wrong[k]); });
    if (!flat.length) {
      box.innerHTML = '<div class="wb-empty">' +
        '<b>生题本还是空的</b>' +
        '进任一科点「✎ 不会」或自测答错，就会自动收进来；三科共用一本账。' +
        '</div>';
      return;
    }
    // 按 科 → 知识点 聚合
    var g = new Map();
    flat.forEach(function (it) {
      var key = it.short + '||' + (it.point || (it.year ? it.year + ' 年' : '未分类'));
      if (!g.has(key)) g.set(key, []);
      g.get(key).push(it);
    });
    var groups = Array.from(g.entries()).sort(function (a, b) { return b[1].length - a[1].length; });
    box.innerHTML = '<div class="wb-groups">' + groups.map(function (e) {
      var list = e[1].slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0) || (a.no || 0) - (b.no || 0); });
      var head = e[0].split('||');
      return '<section class="wb-g">' +
        '<div class="wb-gh"><span class="card-badge" style="--sc:var(--accent)">' + esc(head[0]) + '</span>' +
        '<b>' + esc(head[1]) + '</b><span class="wb-gc">' + list.length + ' 题</span></div>' +
        list.map(function (it) {
          return '<div class="wb-row"><span class="wb-y">' + esc(it.year) + '</span>' +
            '<span class="wb-n">' + esc(it.no) + '.</span>' +
            '<span class="wb-t">' + esc(it.text || (it.module ? it.module + ' · ' : '') + (it.point || '未分类')) + '</span></div>';
        }).join('') +
        '</section>';
    }).join('') + '</div>';
  }

  /* ---------------- 渲染 ---------------- */
  function renderOverview(wrong) {
    var box = $('#overview');
    if (!box) return;
    var total = M.totals.questions || 0;
    var doneN = 0, wrongN = 0;
    M.subjects.forEach(function (s) {
      var d = readLS(s.storage.done, null);
      if (d && typeof d === 'object') doneN += Object.keys(d).length;
      wrongN += (wrong[s.id] || []).length;
    });
    var pct = total ? Math.round(doneN / total * 100) : 0;
    box.innerHTML = [
      ['ov', total, '真题总量', M.totals.years + ' 套卷 · ' + M.totals.subjects + ' 科'],
      ['ov ok', doneN, '已做', pct + '% 覆盖'],
      ['ov bad', wrongN, '生题本', '不会 / 错题'],
      ['ov warn', M.totals.points, '知识点', '三科知识体系']
    ].map(function (r) {
      return '<div class="' + r[0] + '"><div class="ov-n">' + num(r[1]) + '</div>' +
        '<div class="ov-l">' + r[2] + '</div><div class="ov-s">' + esc(r[3]) + '</div></div>';
    }).join('');
  }

  function renderCards(wrong) {
    var box = $('#cards');
    if (!box) return;
    box.innerHTML = M.subjects.map(function (s) {
      var done = readLS(s.storage.done, null);
      var doneN = done && typeof done === 'object' ? Object.keys(done).length : 0;
      var total = s.counts.total || 0;
      var pct = total ? Math.round(doneN / total * 100) : 0;
      var wn = (wrong[s.id] || []).length;
      var tabs = Object.keys(s.counts.byTab || {}).map(function (k) {
        return '<span class="chip">' + esc(k) + ' <b>' + s.counts.byTab[k] + '</b></span>';
      }).join('');
      return '<article class="card" data-id="' + esc(s.id) + '">' +
        '<div class="card-h"><span class="card-badge">' + esc(s.short) + '</span>' +
        '<span class="card-t">' + esc(s.name) + '</span></div>' +
        '<div class="card-span">' + esc(s.span) + ' · ' + s.years.length + ' 套卷</div>' +
        '<div class="card-stats">' +
        '<div><div class="cs-n">' + num(total) + '</div><div class="cs-l">题量</div></div>' +
        '<div><div class="cs-n">' + num(doneN) + '</div><div class="cs-l">已做</div></div>' +
        '<div><div class="cs-n" style="color:' + (wn ? 'var(--bad)' : 'inherit') + '">' + num(wn) + '</div><div class="cs-l">生题本</div></div>' +
        '</div>' +
        '<div class="tabs-row">' + tabs + '</div>' +
        '<div class="prog"><i style="width:' + pct + '%"></i></div>' +
        '<div class="prog-meta"><span>' + pct + '% 完成</span><span>' + s.knowledge.covered + '/' + s.knowledge.points + ' 知识点</span></div>' +
        '<div class="card-f">' +
        '<a class="btn primary" href="' + esc(s.entry) + '">进入精读' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>' +
        '</a>' +
        (s.entryAlt ? '<a class="btn" href="' + esc(s.entryAlt) + '">整卷模式</a>' : '') +
        '</div></article>';
    }).join('');
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    var t = 'dark';
    try { t = window.localStorage.getItem(LS_THEME) || 'dark'; } catch (e) {}
    applyTheme(t);

    var wrong = collectWrong();
    renderOverview(wrong);
    renderCards(wrong);
    renderWrongBook(wrong);
    renderCountdown();
    setInterval(renderCountdown, 60000);

    var btn = $('#btn-theme');
    if (btn) btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'light' ? 'dark' : 'light');
    });

    var rf = $('#btn-refresh');
    if (rf) rf.addEventListener('click', function () {
      var w = collectWrong();
      renderOverview(w); renderCards(w); renderWrongBook(w);
    });

    // 从浏览器后退回来时刷新进度
    window.addEventListener('pageshow', function () {
      var w = collectWrong();
      renderOverview(w); renderCards(w); renderWrongBook(w);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
