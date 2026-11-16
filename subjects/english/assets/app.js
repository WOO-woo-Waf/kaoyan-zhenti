/* =========================================================================
   考研英语精读器 · app.js
   纯静态 / 零依赖 / 零 fetch / 零 ES module —— 双击 file:// 即可运行
   数据来源：window.__WX__[year]（由 data/wx/YYYY.js 注入）
   ========================================================================= */
(function () {
  'use strict';

  /* ===================== 0. 工具 ===================== */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  /* 极简 markdown：只支持 **粗体** */
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  /* 官方解析排版：把 【线索】【选项】【验证】 变成小标签，选项行高亮对错 */
  function analysisHtml(raw) {
    var lines = String(raw || '').split('\n');
    var out = [];
    var inOpts = false;
    for (var i = 0; i < lines.length; i++) {
      var ln = lines[i].trim();
      if (!ln) continue;
      var mHead = ln.match(/^【(.+?)】\s*(.*)$/);
      if (mHead) {
        inOpts = (mHead[1] === '选项');
        out.push('<div class="an-h">' + esc(mHead[1]) + '</div>'
          + (mHead[2] ? '<p class="an-p">' + md(mHead[2]) + '</p>' : ''));
        continue;
      }
      var mOpt = ln.match(/^([A-D])\)\s*(.*)$/);
      if (mOpt) {
        var right = /✓/.test(mOpt[2]);
        out.push('<p class="an-opt' + (right ? ' right' : '') + '">'
          + '<b>' + mOpt[1] + ')</b> ' + md(mOpt[2]) + '</p>');
        continue;
      }
      out.push('<p class="an-p">' + md(ln) + '</p>');
    }
    return out.join('');
  }

  var WORD_RE = /^[A-Za-z][A-Za-z'\u2019-]*$/;
  /* 原文分词：[[n]] 空位 或 英文单词（含连字符/撇号） */
  var TOKEN_RE = /\[\[(\d{1,2})\]\]|([A-Za-z][A-Za-z'\u2019-]*)/g;

  var YOUDAO = function (w) { return 'https://dict.youdao.com/result?word=' + encodeURIComponent(w) + '&lang=en'; };
  var CAMBRIDGE = function (w) { return 'https://dictionary.cambridge.org/dictionary/english/' + encodeURIComponent(w); };

  /* ===================== 1. 存储 ===================== */
  var K = {
    ans: 'wx.answers.v1',
    words: 'wx.bookmarks.v1',
    theme: 'wx.theme.v1',
    size: 'wx.fontSize.v1',
    zh: 'wx.showZh.v1',
    mode: 'wx.mode.v1'
  };
  var store = {
    get: function (k, d) {
      try {
        var v = window.StudyStorage.getItem(k);
        return v == null ? d : JSON.parse(v);
      } catch (e) { return d; }
    },
    set: function (k, v) {
      try { window.StudyStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 隐私模式忽略 */ }
    }
  };

  /* ===================== 2. 状态 ===================== */
  var S = {
    years: [],
    cur: null,
    data: {},
    answers: store.get(K.ans, {}) || {},
    revealed: {},
    words: [],
    theme: store.get(K.theme, 'dark') === 'light' ? 'light' : 'dark',
    size: Number(store.get(K.size, 17.5)) || 17.5,
    showZh: store.get(K.zh, true) !== false,
    mode: store.get(K.mode, 'study') === 'practice' ? 'practice' : 'study',
    view: 'text',
    activeBlank: null,
    activeWord: '',
    selWord: ''
  };
  S.words = Array.isArray(store.get(K.words, [])) ? store.get(K.words, []) : [];

  /* ===================== 3. DOM ===================== */
  var yearlist, reading, panel, wordcard, selbar, selWordEl, drawer, wbList,
      searchEl, toastEl, viewSeg, modeSeg, wbCount, wbCnt2;

  /* ===================== 4. 启动 ===================== */
  function boot() {
    yearlist = $('#yearlist');
    reading = $('#reading');
    panel = $('#panel');
    wordcard = $('#wordcard');
    selbar = $('#selbar');
    selWordEl = $('#selbar-word');
    drawer = $('#drawer');
    wbList = $('#wb-list');
    searchEl = $('#search');
    toastEl = $('#toast');
    viewSeg = $('#view-seg');
    modeSeg = $('#mode-seg');
    wbCount = $('#wb-count');
    wbCnt2 = $('#wb-cnt2');

    applyTheme();
    applySize();
    applyZh();
    applyMode();

    collectYears();
    renderYearList();
    bindEvents();
    renderDrawer();
    updateWbCount();

    var first = S.years.indexOf(2013) >= 0 ? 2013 : (S.years[0] || null);
    if (first != null) selectYear(first);
    else renderNoData();
  }

  /* ===================== 5. 年份 ===================== */
  function collectYears() {
    var wx = window.__WX__ || {};
    S.years = Object.keys(wx)
      .map(function (k) { return Number(k); })
      .filter(function (n) { return isFinite(n) && n > 1990 && n < 2100; })
      .sort(function (a, b) { return a - b; });
  }

  function yearData(y) { return (window.__WX__ || {})[y] || {}; }

  function renderYearList() {
    var q = (searchEl.value || '').trim().toLowerCase();
    var html = S.years.filter(function (y) {
      if (!q) return true;
      var d = yearData(y);
      return String(y).indexOf(q) >= 0
        || String(d.topic || '').toLowerCase().indexOf(q) >= 0
        || String(d.paper || '').toLowerCase().indexOf(q) >= 0
        || String(d.section || '').toLowerCase().indexOf(q) >= 0;
    }).map(function (y) {
      var d = yearData(y);
      var badges = '';
      if (Array.isArray(d.sentences) && d.sentences.length) badges += '<span class="badge star">\u2b50 精讲</span>';
      if (Array.isArray(d.words) && d.words.length) badges += '<span class="badge words">生词 ' + d.words.length + '</span>';
      if (Array.isArray(d.blanks) && d.blanks.length) badges += '<span class="badge">' + d.blanks.length + ' 题</span>';
      return '<li><button type="button" class="yr' + (y === S.cur ? ' on' : '') + '" data-year="' + y + '">'
        + '<span class="yr-h"><span class="yr-n">' + y + '</span>'
        + (d.paper ? '<span class="badge">' + esc(d.paper) + '</span>' : '')
        + (d.difficulty ? '<span class="yr-d">难度 ' + esc(d.difficulty) + '</span>' : '')
        + '</span>'
        + '<span class="yr-t">' + esc(d.topic || d.section || '（暂无主题）') + '</span>'
        + (badges ? '<span class="yr-b">' + badges + '</span>' : '')
        + '</button></li>';
    }).join('');

    yearlist.innerHTML = html ||
      '<li style="padding:18px 12px;color:var(--fg-faint);font-size:12px;line-height:1.8">没有匹配的年份。<br>清空搜索框试试。</li>';

    var n = S.years.length;
    $('#year-count').textContent = n ? n + ' 篇' : '0 篇';
  }

  function selectYear(y) {
    S.cur = Number(y);
    S.data = yearData(S.cur);
    S.activeBlank = null;
    S.view = 'text';
    hideWordcard();
    renderYearList();
    renderDocHead();
    renderReading();
    renderPanel();
    markWordCurrent();
  }

  function renderNoData() {
    $('#doc-year').textContent = '—';
    $('#doc-meta').textContent = '';
    $('#doc-topic').textContent = '还没有任何篇目数据';
    $('#doc-src').innerHTML = '';
    reading.innerHTML = '<div class="empty-note">'
      + '还没有读到任何年份数据。<br><br>'
      + '把 <code>data/wx/2013.js</code> 之类的文件放到 <code>data/wx/</code> 目录下即可自动出现。<br>'
      + '文件格式见 <code>SCHEMA.md</code>。'
      + '</div>';
    panel.innerHTML = '';
  }

  /* ===================== 6. 文档头 ===================== */
  function renderDocHead() {
    var d = S.data || {};
    $('#doc-year').textContent = d.year || S.cur || '—';

    var meta = [];
    if (d.paper) meta.push(d.paper);
    if (d.section) meta.push(d.section);
    if (d.difficulty) meta.push('难度 ' + d.difficulty);
    if (Array.isArray(d.blanks) && d.blanks.length) meta.push(d.blanks.length + ' 空');
    if (Array.isArray(d.sentences) && d.sentences.length) meta.push(d.sentences.length + ' 句');
    $('#doc-meta').textContent = meta.join(' · ');

    $('#doc-topic').textContent = d.topic || '';

    var src = [];
    var s = d.source || {};
    if (s.textUrl) src.push('<a href="' + esc(s.textUrl) + '" target="_blank" rel="noopener noreferrer">原文出处</a>');
    if (s.answerUrl) src.push('<a href="' + esc(s.answerUrl) + '" target="_blank" rel="noopener noreferrer">答案出处</a>');
    $('#doc-src').innerHTML = src.join(' · ');
  }

  /* ===================== 7. 原文渲染 ===================== */
  function inlineHTML(raw) {
    var out = '', last = 0, m;
    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(raw)) !== null) {
      if (m.index > last) out += esc(raw.slice(last, m.index));
      if (m[1] !== undefined) {
        out += '<button type="button" class="cap" data-blank="' + m[1] + '" '
             + 'aria-label="第 ' + m[1] + ' 空" title="第 ' + m[1] + ' 空 · 点击看解析">' + m[1] + '</button>';
      } else {
        out += '<span class="w">' + esc(m[2]) + '</span>';
      }
      last = TOKEN_RE.lastIndex;
    }
    out += esc(raw.slice(last));
    return out;
  }

  /* 把段落切成「句子包裹 + 普通文本」的片段，句子用 sentences[].en 精确匹配 */
  function markSentences(text, sents) {
    var parts = [], cur = 0;
    sents.forEach(function (s) {
      var en = String(s.en || '');
      if (!en) return;
      var idx = text.indexOf(en, cur);
      if (idx < 0) return;                 // 数据对不上 → 降级为纯文本
      if (idx > cur) parts.push({ raw: text.slice(cur, idx) });
      parts.push({ raw: en, sent: s });
      cur = idx + en.length;
    });
    if (cur < text.length) parts.push({ raw: text.slice(cur) });

    return parts.map(function (p) {
      if (!p.sent) return inlineHTML(p.raw);
      return '<span class="sent" data-sent="' + esc(p.sent.i) + '" title="点击查看逐句解析">'
           + '<sup class="sn">' + esc(p.sent.i) + '</sup>'
           + inlineHTML(p.raw) + '</span>';
    }).join('');
  }

  function renderReading() {
    var d = S.data || {};
    var sents = Array.isArray(d.sentences) ? d.sentences : [];
    viewSeg.style.visibility = sents.length ? 'visible' : 'hidden';
    if (!sents.length) S.view = 'text';

    if (S.view === 'sentence' && sents.length) renderSentenceView(sents);
    else renderTextView(d, sents);

    syncViewSeg();
    decorateCaps();
  }

  function renderTextView(d, sents) {
    var text = String(d.text || '');
    if (!text.trim()) {
      reading.innerHTML = '<div class="empty-note">本篇没有 <code>text</code> 字段。<br>'
        + '请检查 <code>data/wx/' + esc(S.cur) + '.js</code> 是否符合 SCHEMA.md。</div>';
      return;
    }
    var paras = text.split(/\n\s*\n/).filter(function (p) { return p.trim(); });
    reading.innerHTML = paras.map(function (p, i) {
      var paraNo = i + 1;
      var mine = sents.filter(function (s) { return (Number(s.para) || 1) === paraNo; });
      return '<p class="para">' + (mine.length ? markSentences(p, mine) : inlineHTML(p)) + '</p>';
    }).join('');
  }

  function chunksHTML(chunks) {
    if (!Array.isArray(chunks) || !chunks.length) return '';
    return '<div class="chunks">' + chunks.map(function (c) {
      return '<div class="chunk"><span class="ct">' + inlineHTML(String(c.t || '')) + '</span>'
        + (c.r ? '<span class="cr">' + esc(c.r) + '</span>' : '')
        + '</div>';
    }).join('') + '</div>';
  }

  function renderSentenceView(sents) {
    reading.innerHTML = sents.map(function (s) {
      var head = '<div class="sb-h"><span class="sb-i">' + esc(s.i) + '</span>'
        + (s.para ? '<span class="sb-p">第 ' + esc(s.para) + ' 段</span>' : '')
        + (Array.isArray(s.blankNos) && s.blankNos.length
            ? '<span class="sb-p">含第 ' + esc(s.blankNos.join('、')) + ' 空</span>'
            : (s.blankNo ? '<span class="sb-p">含第 ' + esc(s.blankNo) + ' 空</span>' : ''))
        + '</div>';
      return '<div class="sentblock" data-sent="' + esc(s.i) + '">'
        + head
        + '<p class="sb-en">' + inlineHTML(String(s.en || '')) + '</p>'
        + (s.zh ? '<p class="sb-zh zh">' + md(s.zh) + '</p>' : '')
        + (s.struct ? '<div class="sb-struct">' + md(s.struct) + '</div>' : '')
        + chunksHTML(s.chunks)
        + '</div>';
    }).join('');
  }

  function syncViewSeg() {
    $$('#view-seg button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-view') === S.view);
    });
  }

  /* ===================== 8. 解析面板 ===================== */
  function blankByNo(n) {
    var list = (S.data && S.data.blanks) || [];
    for (var i = 0; i < list.length; i++) if (Number(list[i].no) === Number(n)) return list[i];
    return null;
  }
  function answerKey(n) { return S.cur + ':' + n; }
  function pickedOf(n) { return S.answers[answerKey(n)] || null; }
  function isRevealed(n) { return S.mode === 'study' || !!pickedOf(n) || !!S.revealed[n]; }

  function decorateCaps() {
    $$('.cap[data-blank]').forEach(function (c) {
      var n = Number(c.getAttribute('data-blank'));
      var b = blankByNo(n);
      var p = pickedOf(n);
      if (p && b) c.setAttribute('data-state', p === b.answer ? 'ok' : 'bad');
      else c.removeAttribute('data-state');
      c.classList.toggle('on', S.activeBlank === n);
    });
  }

  function renderPanel() {
    var d = S.data || {};
    var html = '';

    var blanks = Array.isArray(d.blanks) ? d.blanks : [];
    if (blanks.length) {
      html += '<div class="sec"><h3 class="sec-h">题目解析 <span class="n">' + blanks.length + '</span></h3>'
        + blanks.map(accHTML).join('') + '</div>';
    }

    if (Array.isArray(d.fullZh) && d.fullZh.length) {
      html += '<div class="sec"><h3 class="sec-h">全文译文</h3><div class="zhbox">'
        + d.fullZh.map(function (p) { return '<p class="zh">' + md(p) + '</p>'; }).join('')
        + '</div></div>';
    }

    if (Array.isArray(d.words) && d.words.length) {
      html += '<div class="sec"><h3 class="sec-h">本篇生词 <span class="n">' + d.words.length + '</span></h3>'
        + '<ul class="wlist">' + d.words.map(function (w) {
          return '<li>'
            + '<span class="wl-h"><span class="wl-w" data-word="' + esc(w.w) + '">' + esc(w.w) + '</span>'
            + (w.phon ? '<span class="wl-p">' + esc(w.phon) + '</span>' : '')
            + (w.level ? '<span class="wl-lv">' + esc(w.level) + '</span>' : '')
            + '</span>'
            + (w.zh ? '<span class="wl-z">' + esc(w.zh) + '</span>' : '')
            + (w.note ? '<span class="wl-n">' + esc(w.note) + '</span>' : '')
            + '</li>';
        }).join('') + '</ul></div>';
    }

    if (Array.isArray(d.takeaways) && d.takeaways.length) {
      html += '<div class="sec"><h3 class="sec-h">方法论小结 <span class="n">' + d.takeaways.length + '</span></h3>'
        + '<ul class="tk">' + d.takeaways.map(function (t) { return '<li>' + md(t) + '</li>'; }).join('')
        + '</ul></div>';
    }

    panel.innerHTML = html || '<div class="empty-note" style="margin:20px 0">本篇暂无解析数据。</div>';
    decorateCaps();
  }

  function accHTML(b) {
    var p = pickedOf(b.no);
    var st = p ? (p === b.answer ? 'ok' : 'bad') : '';
    var right = (b.options && b.options[b.answer]) || '';
    return '<details class="acc" data-blank="' + esc(b.no) + '"' + (st ? ' data-state="' + st + '"' : '') + '>'
      + '<summary><span class="sum-no">' + esc(b.no) + '</span>'
      + '<span class="sum-t">' + (b.type ? esc(b.type) + ' · ' : '') + esc(right) + '</span>'
      + '<span class="sum-ans">' + esc(b.answer || '?') + '</span></summary>'
      + '<div class="acc-body">' + blankBody(b) + '</div>'
      + '</details>';
  }

  function blankBody(b) {
    var p = pickedOf(b.no);
    var rev = isRevealed(b.no);
    var o = b.options || {};
    var html = '';

    var tags = '';
    if (b.type) tags += '<span class="tag type">' + esc(b.type) + '</span>';
    if (b.logic) tags += '<span class="tag logic">逻辑：' + esc(b.logic) + '</span>';
    if (b.signal) tags += '<span class="tag sig">' + esc(b.signal) + '</span>';
    if (tags) html += '<div class="tags">' + tags + '</div>';

    html += '<div class="opts">' + ['A', 'B', 'C', 'D'].filter(function (k) {
      return o[k] !== undefined && o[k] !== null;
    }).map(function (k) {
      var cls = 'opt';
      if (rev) cls += (k === b.answer ? ' correct' : ' wrong');
      if (p === k) cls += ' picked';
      return '<button type="button" class="' + cls + '" data-opt="' + k + '">'
        + '<span class="ol">' + k + '</span>'
        + '<span class="ot">' + esc(o[k]) + '</span>'
        + (rev && k === b.answer && b.gloss ? '<span class="og">' + esc(b.gloss) + '</span>' : '')
        + '</button>';
    }).join('') + '</div>';

    if (p) {
      var ok = p === b.answer;
      html += '<div class="ansline' + (ok ? '' : ' bad') + '">'
        + (ok ? '✓ 答对' : '✗ 答错')
        + ' · 你的选择 <b>' + esc(p) + '</b> · 正确答案 <b>' + esc(b.answer) + '</b>'
        + (b.gloss ? ' · ' + esc(b.gloss) : '')
        + '</div>';
    } else if (rev) {
      html += '<div class="ansline">正确答案 <b>' + esc(b.answer) + '</b>'
        + (b.gloss ? ' · ' + esc(b.gloss) : '') + '</div>';
    }

    if (rev) {
      if (b.explain) html += '<p class="explain">' + md(b.explain) + '</p>';
      if (b.whyWrong && Object.keys(b.whyWrong).length) {
        html += '<ul class="why">' + Object.keys(b.whyWrong).sort().map(function (k) {
          return '<li><span class="k">' + esc(k) + '</span><span>' + md(b.whyWrong[k]) + '</span></li>';
        }).join('') + '</ul>';
      }
      if (b.collocation) html += '<div class="collo">' + esc(b.collocation) + '</div>';
      if (b.answerNote) html += '<p class="noteline">※ ' + esc(b.answerNote) + '</p>';
      if (b.analysis) {
        html += '<details class="src-acc"><summary>官方详细解析（原文照录）</summary>'
          + '<div class="src-body">' + analysisHtml(b.analysis) + '</div></details>';
      }
      html += '<div class="wc-acts"><button type="button" class="mini" data-wact="copy-opt" '
        + 'data-copy="' + esc((b.options || {})[b.answer] || '') + '">复制答案词</button>'
        + '<a class="mini" href="' + esc(YOUDAO((b.options || {})[b.answer] || '')) + '" target="_blank" rel="noopener noreferrer">有道</a>'
        + '<button type="button" class="mini pri" data-wact="star-opt" '
        + 'data-word="' + esc((b.options || {})[b.answer] || '') + '">★ 加入生词本</button></div>';
    } else {
      html += '<button type="button" class="reveal" data-reveal="' + esc(b.no) + '">'
        + '显示解析（先自己做，再看更有效）</button>';
    }

    return html;
  }

  function refreshAcc(n) {
    var d = $('details.acc[data-blank="' + n + '"]', panel);
    if (!d) return;
    var b = blankByNo(n);
    if (!b) return;
    var p = pickedOf(n);
    var st = p ? (p === b.answer ? 'ok' : 'bad') : '';
    if (st) d.setAttribute('data-state', st); else d.removeAttribute('data-state');
    var body = $('.acc-body', d);
    if (body) body.innerHTML = blankBody(b);
    var sumAns = $('.sum-ans', d);
    if (sumAns) sumAns.textContent = b.answer || '?';
  }

  function openBlank(n, instant) {
    var d = $('details.acc[data-blank="' + n + '"]', panel);
    if (!d) return;
    $$('details.acc[open]', panel).forEach(function (x) { if (x !== d) x.open = false; });
    d.open = true;
    S.activeBlank = Number(n);
    decorateCaps();
    var col = $('.col-right');
    if (!col) return;
    var cr = col.getBoundingClientRect(), dr = d.getBoundingClientRect();
    var top = col.scrollTop + (dr.top - cr.top) - 14;
    if (instant) col.scrollTop = top;
    else if (col.scrollTo) col.scrollTo({ top: top, behavior: 'smooth' });
    else col.scrollTop = top;
  }

  function gotoBentence(i) {
    if (!Array.isArray(S.data.sentences) || !S.data.sentences.length) return;
    if (S.view !== 'sentence') { S.view = 'sentence'; renderReading(); }
    var el = $('.sentblock[data-sent="' + i + '"]', reading);
    if (!el) return;
    $$('.sentblock.hl', reading).forEach(function (x) { x.classList.remove('hl'); });
    el.classList.add('hl');
    var col = $('.col-mid');
    var cr = col.getBoundingClientRect(), er = el.getBoundingClientRect();
    var top = col.scrollTop + (er.top - cr.top) - 14;
    if (col.scrollTo) col.scrollTo({ top: top, behavior: 'smooth' });
    else col.scrollTop = top;
  }

  /* ===================== 9. 单词卡 ===================== */
  function findWordEntry(raw) {
    var list = (S.data && S.data.words) || [];
    var lb = String(raw || '').toLowerCase().replace(/[\u2019']s$/, '');
    if (!lb) return null;
    var i, e, lw;

    for (i = 0; i < list.length; i++) {
      e = list[i]; lw = String(e.w || '').toLowerCase();
      if (lw === lb) return e;
    }
    for (i = 0; i < list.length; i++) {
      e = list[i]; lw = String(e.w || '').toLowerCase();
      if (!lw) continue;
      if (lw.split(/[\s\-]+/).indexOf(lb) >= 0) return e;
      if (lb.length >= 4 && lw.indexOf(lb) === 0) return e;
      if (lw.length >= 4 && lb.indexOf(lw) === 0) return e;
    }
    return null;
  }

  function contextSentence(word) {
    var lw = String(word || '').toLowerCase();
    if (!lw) return '';
    var sents = (S.data && S.data.sentences) || [];
    var i;
    for (i = 0; i < sents.length; i++) {
      if (String(sents[i].en || '').toLowerCase().indexOf(lw) >= 0) return String(sents[i].en);
    }
    var text = String((S.data && S.data.text) || '');
    var idx = text.toLowerCase().indexOf(lw);
    if (idx < 0) return '';
    var start = text.lastIndexOf('.', idx);
    start = start < 0 ? 0 : start + 1;
    var end = text.indexOf('.', idx);
    if (end < 0) end = Math.min(text.length, idx + 140);
    return text.slice(start, end + 1).trim();
  }

  function hlWord(sentence, word) {
    var s = esc(sentence);
    var w = String(word || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!w) return s;
    try { return s.replace(new RegExp('(' + w + ')', 'i'), '<b>$1</b>'); }
    catch (e) { return s; }
  }

  function showWord(raw, opts) {
    var w = String(raw || '').trim().replace(/^[^A-Za-z]+|[^A-Za-z'\u2019-]+$/g, '');
    if (!w) return;
    opts = opts || {};
    S.activeWord = w;

    var entry = findWordEntry(w);
    var ctx = opts.sentence || contextSentence(w);
    var key = w.toLowerCase().replace(/[\u2019']s$/, '');
    var starred = S.words.some(function (x) { return String(x.w).toLowerCase() === key; });

    var html = '<div class="wc-top">'
      + '<span class="wc-w">' + esc(w) + '</span>'
      + (entry && entry.phon ? '<span class="wc-phon">' + esc(entry.phon) + '</span>' : '')
      + (entry && entry.pos ? '<span class="wc-pos">' + esc(entry.pos) + '</span>' : '')
      + (entry && entry.level ? '<span class="wc-pos">' + esc(entry.level) + '</span>' : '')
      + '<button type="button" class="wc-close" data-wact="close" title="关闭 (Esc)">×</button>'
      + '</div>';

    if (entry) {
      html += '<p class="wc-zh">' + esc(entry.zh || '') + '</p>';
      if (entry.note) html += '<p class="wc-note">' + esc(entry.note) + '</p>';
      if (entry.inText) html += '<div class="wc-intext">文中：' + hlWord(entry.inText, w) + '</div>';
      else if (ctx) html += '<div class="wc-intext">原文：' + hlWord(ctx, w) + '</div>';
    } else {
      html += '<p class="wc-miss">本篇生词表未收录这个词。用下面外链或划词插件查一下。</p>';
      if (ctx) html += '<div class="wc-intext">原文：' + hlWord(ctx, w) + '</div>';
    }

    html += '<div class="wc-acts">'
      + '<button type="button" class="mini" data-wact="copy" data-copy="' + esc(w) + '">复制</button>'
      + '<a class="mini" href="' + esc(YOUDAO(w)) + '" target="_blank" rel="noopener noreferrer">有道</a>'
      + '<a class="mini" href="' + esc(CAMBRIDGE(w)) + '" target="_blank" rel="noopener noreferrer">剑桥</a>'
      + '<button type="button" class="mini ' + (starred ? 'on' : 'pri') + '" data-wact="star" data-word="' + esc(w) + '">'
      + (starred ? '★ 已在生词本' : '★ 加入生词本') + '</button>'
      + '</div>';

    wordcard.innerHTML = html;
    wordcard.hidden = false;
    markWordCurrent();
  }

  function hideWordcard() {
    wordcard.hidden = true;
    wordcard.innerHTML = '';
    S.activeWord = '';
    markWordCurrent();
  }

  function markWordCurrent() {
    var cur = S.activeWord ? S.activeWord.toLowerCase().replace(/[\u2019']s$/, '') : '';
    $$('.w', reading).forEach(function (el) {
      var t = el.textContent.toLowerCase().replace(/[\u2019']s$/, '');
      el.classList.toggle('cur', !!cur && t === cur);
    });
  }

  /* ===================== 10. 划词工具条 ===================== */
  function showSelbar(word, rect) {
    S.selWord = word;
    selWordEl.textContent = word;
    $('[data-act="youdao"]', selbar).href = YOUDAO(word);
    $('[data-act="cambridge"]', selbar).href = CAMBRIDGE(word);
    selbar.hidden = false;

    var bw = selbar.offsetWidth, bh = selbar.offsetHeight;
    var vw = window.innerWidth, vh = window.innerHeight;
    var x, y;
    if (rect && (rect.width || rect.height)) {
      x = rect.left + rect.width / 2 - bw / 2;
      y = rect.top - bh - 8;
      if (y < 60) y = rect.bottom + 8;
    } else {
      x = vw / 2 - bw / 2;
      y = vh / 2;
    }
    x = Math.max(8, Math.min(vw - bw - 8, x));
    y = Math.max(56, Math.min(vh - bh - 8, y));
    selbar.style.left = x + 'px';
    selbar.style.top = y + 'px';
  }
  function hideSelbar() { selbar.hidden = true; }

  function onMouseUp(e) {
    if (selbar.contains(e.target) || drawer.contains(e.target)) return;
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed) { hideSelbar(); return; }
    var raw = sel.toString().replace(/\s+/g, ' ').trim();
    if (!raw || !WORD_RE.test(raw) || raw.length < 2 || raw.length > 40) { hideSelbar(); return; }
    var rect = null;
    try {
      if (sel.rangeCount) rect = sel.getRangeAt(0).getBoundingClientRect();
    } catch (err) { rect = null; }
    showSelbar(raw, rect);
    // 选中即复制（给划词翻译插件用），失败静默
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(raw).then(function () {
          var btn = $('[data-act="copy"]', selbar);
          if (btn) btn.classList.add('copied');
        }, function () { /* 静默 */ });
      }
    } catch (err2) { /* 静默 */ }
  }

  /* ===================== 11. 生词本 ===================== */
  function saveWords() { store.set(K.words, S.words); }
  function updateWbCount() {
    wbCount.textContent = String(S.words.length);
    wbCnt2.textContent = S.words.length + ' 个词';
  }
  function addWord(w, blankNo) {
    var word = String(w || '').trim().replace(/^[^A-Za-z]+|[^A-Za-z'\u2019-]+$/g, '');
    if (!word) return false;
    var key = word.toLowerCase().replace(/[\u2019']s$/, '');
    if (S.words.some(function (x) { return String(x.w).toLowerCase().replace(/[\u2019']s$/, '') === key; })) {
      toast('「' + word + '」已在生词本');
      return false;
    }
    S.words.push({
      w: word,
      year: S.cur,
      blankNo: blankNo == null ? '' : blankNo,
      ts: Date.now()
    });
    S.words.sort(function (a, b) { return a.ts - b.ts; });
    saveWords();
    renderDrawer();
    updateWbCount();
    toast('已加入生词本：' + word);
    return true;
  }
  function delWord(i) {
    S.words.splice(i, 1);
    saveWords();
    renderDrawer();
    updateWbCount();
  }

  function fmtTime(ts) {
    var d = new Date(ts || Date.now());
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate())
      + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }

  function renderDrawer() {
    if (!S.words.length) {
      wbList.innerHTML = '<li class="empty">还没有生词。<br>划选或双击任意英文单词 → ★ 生词本。</li>';
      return;
    }
    wbList.innerHTML = S.words.map(function (x, i) {
      return '<li class="wb-item">'
        + '<span class="bw" data-wb="' + i + '">' + esc(x.w) + '</span>'
        + '<span class="bm">' + esc(x.year || '') + (x.blankNo !== '' && x.blankNo != null ? ' · 第' + esc(x.blankNo) + '空' : '') + '</span>'
        + '<span class="bt">' + esc(fmtTime(x.ts)) + '</span>'
        + '<button type="button" class="del" data-del="' + i + '" title="删除">×</button>'
        + '</li>';
    }).join('');
  }

  function wordsMarkdown() {
    var head = '| 单词 | 年份 | 题号 | 加入时间 |\n| --- | --- | --- | --- |\n';
    return head + S.words.map(function (x) {
      return '| ' + x.w + ' | ' + (x.year || '') + ' | ' + (x.blankNo === '' || x.blankNo == null ? '—' : x.blankNo) + ' | ' + fmtTime(x.ts) + ' |';
    }).join('\n');
  }

  function wordsCSV() {
    var q = function (v) { return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; };
    var rows = [['word', 'year', 'blankNo', 'addedAt']];
    S.words.forEach(function (x) {
      rows.push([x.w, x.year || '', x.blankNo == null ? '' : x.blankNo, fmtTime(x.ts)]);
    });
    return rows.map(function (r) { return r.map(q).join(','); }).join('\r\n');
  }

  /* ===================== 12. 复制 / 下载 / Toast ===================== */
  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 1700);
  }

  function copySilent(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    var ok = false;
    try { ta.select(); ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text, label) {
    var done = function () { toast((label || '已复制') + '：' + (String(text).length > 24 ? String(text).slice(0, 24) + '…' : text)); };
    var fail = function () { toast(copySilent(text) ? (label || '已复制') : '复制失败，请手动选中'); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(String(text)).then(done, fail);
        return;
      }
    } catch (e) { /* fallthrough */ }
    fail();
  }

  function download(filename, text, mime) {
    try {
      var blob = new Blob(['\ufeff' + text], { type: (mime || 'text/csv') + ';charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      toast('已导出 ' + filename);
    } catch (e) {
      toast('导出失败：' + e.message);
    }
  }

  /* ===================== 13. 偏好 ===================== */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', S.theme);
    store.set(K.theme, S.theme);
  }
  function applySize() {
    document.documentElement.style.setProperty('--read-size', S.size + 'px');
    store.set(K.size, S.size);
  }
  function applyZh() {
    document.body.classList.toggle('hide-zh', !S.showZh);
    $('#btn-zh').classList.toggle('on', S.showZh);
    store.set(K.zh, S.showZh);
  }
  function applyMode() {
    document.body.classList.toggle('practice', S.mode === 'practice');
    $$('#mode-seg button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-mode') === S.mode);
    });
    store.set(K.mode, S.mode);
  }

  /* ===================== 14. 事件 ===================== */
  function bindEvents() {
    /* 年份列表 */
    yearlist.addEventListener('click', function (e) {
      var b = e.target.closest('[data-year]');
      if (!b) return;
      var y = Number(b.getAttribute('data-year'));
      if (y === S.cur) return;
      selectYear(y);
    });

    /* 搜索 */
    searchEl.addEventListener('input', renderYearList);

    /* 视图切换 */
    viewSeg.addEventListener('click', function (e) {
      var b = e.target.closest('[data-view]');
      if (!b) return;
      var v = b.getAttribute('data-view');
      if (v === S.view) return;
      S.view = v;
      renderReading();
    });

    /* 模式切换 */
    modeSeg.addEventListener('click', function (e) {
      var b = e.target.closest('[data-mode]');
      if (!b) return;
      S.mode = b.getAttribute('data-mode');
      applyMode();
      renderPanel();
    });

    /* 中文开关 */
    $('#btn-zh').addEventListener('click', function () {
      S.showZh = !S.showZh;
      applyZh();
      toast(S.showZh ? '已显示中文' : '已隐藏中文');
    });

    /* 字号 */
    $('#fs-up').addEventListener('click', function () {
      S.size = Math.min(26, Math.round((S.size + 1) * 10) / 10);
      applySize();
    });
    $('#fs-down').addEventListener('click', function () {
      S.size = Math.max(13, Math.round((S.size - 1) * 10) / 10);
      applySize();
    });

    /* 主题 */
    $('#btn-theme').addEventListener('click', function () {
      S.theme = S.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      toast(S.theme === 'dark' ? '深色模式' : '浅色模式');
    });

    /* 生词本抽屉 */
    $('#btn-drawer').addEventListener('click', function () {
      drawer.hidden = false;
      renderDrawer();
    });
    $('#dw-close').addEventListener('click', function () { drawer.hidden = true; });
    wbList.addEventListener('click', function (e) {
      var del = e.target.closest('[data-del]');
      if (del) { delWord(Number(del.getAttribute('data-del'))); return; }
      var bw = e.target.closest('[data-wb]');
      if (bw) {
        var item = S.words[Number(bw.getAttribute('data-wb'))];
        if (item) window.open(YOUDAO(item.w), '_blank', 'noopener');
      }
    });
    $('#wb-copy').addEventListener('click', function () {
      if (!S.words.length) { toast('生词本是空的'); return; }
      copyText(wordsMarkdown(), '已复制 ' + S.words.length + ' 个词（Markdown 表格）');
    });
    $('#wb-csv').addEventListener('click', function () {
      if (!S.words.length) { toast('生词本是空的'); return; }
      download('生词本_' + fmtTime(Date.now()).replace(/[: ]/g, '-') + '.csv', wordsCSV(), 'text/csv');
    });
    $('#wb-clear').addEventListener('click', function () {
      if (!S.words.length) { toast('生词本是空的'); return; }
      S.words = [];
      saveWords();
      renderDrawer();
      updateWbCount();
      toast('已清空生词本');
    });

    /* 中栏点击 */
    reading.addEventListener('click', function (e) {
      var cap = e.target.closest ? e.target.closest('.cap[data-blank]') : null;
      if (cap) { openBlank(cap.getAttribute('data-blank')); return; }

      var w = e.target.closest ? e.target.closest('.w') : null;
      if (w) {
        var sentEl = w.closest('.sent, .sentblock');
        var sentTxt = '';
        if (sentEl) {
          var si = sentEl.getAttribute('data-sent');
          var list = S.data.sentences || [];
          for (var k = 0; k < list.length; k++) {
            if (String(list[k].i) === String(si)) { sentTxt = String(list[k].en || ''); break; }
          }
        }
        showWord(w.textContent, { sentence: sentTxt });
        return;
      }

      var sb = e.target.closest ? e.target.closest('.sentblock[data-sent], .sent[data-sent]') : null;
      if (sb) { gotoBentence(sb.getAttribute('data-sent')); }
    });

    /* 右栏点击 */
    panel.addEventListener('click', function (e) {
      var op = e.target.closest('[data-opt]');
      if (op) {
        var acc = op.closest('details.acc');
        if (!acc) return;
        var n = Number(acc.getAttribute('data-blank'));
        S.answers[answerKey(n)] = op.getAttribute('data-opt');
        store.set(K.ans, S.answers);
        refreshAcc(n);
        decorateCaps();
        return;
      }

      var rv = e.target.closest('[data-reveal]');
      if (rv) {
        var rn = Number(rv.getAttribute('data-reveal'));
        S.revealed[rn] = 1;
        refreshAcc(rn);
        return;
      }

      var wl = e.target.closest('.wl-w[data-word]');
      if (wl) { showWord(wl.getAttribute('data-word')); return; }

      var act = e.target.closest('[data-wact]');
      if (act) { handleWAct(act, act.getAttribute('data-wact')); }
    });

    /* 单词卡 */
    wordcard.addEventListener('click', function (e) {
      var act = e.target.closest('[data-wact]');
      if (act) handleWAct(act, act.getAttribute('data-wact'));
    });

    /* 划词工具条 */
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousedown', function (e) {
      if (!selbar.hidden && !selbar.contains(e.target)) hideSelbar();
    });
    selbar.addEventListener('click', function (e) {
      var el = e.target.closest('[data-act]');
      if (!el) return;
      var a = el.getAttribute('data-act');
      if (a === 'copy') {
        copyText(S.selWord, '已复制');
      } else if (a === 'star') {
        var b = blankByNo(S.activeBlank);
        addWord(S.selWord, b ? b.no : '');
        renderPanel();
        hideSelbar();
      }
      /* youdao / cambridge 是 <a>，默认行为即可 */
    });

    /* 键盘 */
    document.addEventListener('keydown', function (e) {
      var t = e.target;
      var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);

      if (e.key === 'Escape') {
        if (!selbar.hidden) { hideSelbar(); return; }
        if (!drawer.hidden) { drawer.hidden = true; return; }
        if (!wordcard.hidden) { hideWordcard(); return; }
        var open = $('details.acc[open]', panel);
        if (open) open.open = false;
        S.activeBlank = null;
        decorateCaps();
        return;
      }
      if (typing) return;

      if (e.key === '/' || (e.key === '?' && e.shiftKey)) {
        e.preventDefault();
        searchEl.focus();
        searchEl.select();
        return;
      }
      if (e.key === 'z' || e.key === 'Z') {
        S.showZh = !S.showZh;
        applyZh();
        return;
      }
      if (e.key === 'j' || e.key === 'k') {
        e.preventDefault();
        moveBlank(e.key === 'j' ? 1 : -1);
      }
    });

    /* Ctrl + 滚轮缩放 */
    document.addEventListener('wheel', function (e) {
      if (!e.ctrlKey) return;
      e.preventDefault();
      S.size = Math.max(13, Math.min(26, Math.round((S.size + (e.deltaY < 0 ? 1 : -1)) * 10) / 10));
      applySize();
    }, { passive: false });

    /* 窗口变化时收起工具条 */
    window.addEventListener('resize', hideSelbar);
  }

  function handleWAct(el, act) {
    if (act === 'close') { hideWordcard(); return; }
    if (act === 'copy' || act === 'copy-opt') { copyText(el.getAttribute('data-copy') || '', '已复制'); return; }
    if (act === 'star' || act === 'star-opt') {
      var w = el.getAttribute('data-word') || S.selWord;
      var b = blankByNo(S.activeBlank);
      if (addWord(w, b ? b.no : '')) {
        if (S.activeWord) showWord(S.activeWord);
      }
      return;
    }
  }

  function moveBlank(dir) {
    var caps = $$('.cap[data-blank]', reading);
    if (!caps.length) return;
    var cur = S.activeBlank;
    var idx = -1;
    caps.forEach(function (c, i) { if (Number(c.getAttribute('data-blank')) === Number(cur)) idx = i; });
    var next = idx < 0 ? (dir > 0 ? 0 : caps.length - 1) : (idx + dir + caps.length) % caps.length;
    var n = Number(caps[next].getAttribute('data-blank'));
    if (S.view === 'sentence') {
      var blk = caps[next].closest('.sentblock');
      if (blk) {
        var col = $('.col-mid');
        var cr = col.getBoundingClientRect(), er = blk.getBoundingClientRect();
        if (col.scrollTo) col.scrollTo({ top: col.scrollTop + (er.top - cr.top) - 14, behavior: 'smooth' });
        else col.scrollTop = col.scrollTop + (er.top - cr.top) - 14;
      }
    }
    openBlank(n);
  }

  /* ===================== 15. Go ===================== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
