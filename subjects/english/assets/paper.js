/* =========================================================================
   考研英语整卷精读器 · paper.js  (v2 两栏同屏版)
   纯静态 / 零依赖 / 零 fetch / 零 ES module —— file:// 双击即可运行
   左：文章（段落 + 逐句精读）   右：题目（题干 + 选项 + 答案 + 解析，全内联）
   数据：
     window.__PAPER__[year].reading[] / partB / partC / writing / cloze
     window.__WX__[year].blanks       （完形 20 空的选项与解析）
   ========================================================================= */
(function () {
  'use strict';

  /* =====================================================================
     0. 工具
     ===================================================================== */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) {
    return Array.prototype.slice.call((r || document).querySelectorAll(s));
  };

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

  /* 官方解析排版：【xxx】→ 小标签；A) ✓ 正确 → 绿色高亮行 */
  function analysisHtml(raw) {
    var lines = String(raw || '').split('\n');
    var out = [];
    for (var i = 0; i < lines.length; i++) {
      var ln = lines[i].trim();
      if (!ln) continue;

      var mHead = ln.match(/^【(.+?)】\s*([\s\S]*)$/);
      if (mHead) {
        var hRest = String(mHead[2] || '').trim();
        var hOpt = hRest.match(/^\[\s*([A-G])\s*\]\s*([\s\S]*)$/)
                 || hRest.match(/^([A-G])[\)．.]\s*([\s\S]*)$/);
        if (hOpt) {
          out.push('<div class="an-h">' + esc(mHead[1]) + '</div>'
            + '<p class="an-opt right"><b>' + esc(hOpt[1]) + ')</b> '
            + md(hOpt[2].trim()) + '</p>');
        } else {
          out.push('<div class="an-h">' + esc(mHead[1]) + '</div>'
            + (hRest ? '<p class="an-p">' + md(hRest) + '</p>' : ''));
        }
        continue;
      }

      var mOpt = ln.match(/^\[\s*([A-G])\s*\]\s*([\s\S]*)$/)
              || ln.match(/^([A-G])[\)．.]\s*([\s\S]*)$/);
      if (mOpt) {
        var rest = String(mOpt[2] || '').trim();
        var j = i + 1;
        while (j < lines.length && /^[✓✔✗✘]/.test(lines[j].trim())) {
          rest = (lines[j].trim() + ' ' + rest).trim();
          i = j;
          j++;
        }
        var right = /[✓✔]/.test(rest);
        out.push('<p class="an-opt' + (right ? ' right' : '') + '">'
          + '<b>' + esc(mOpt[1]) + ')</b> ' + md(rest) + '</p>');
        continue;
      }

      out.push('<p class="an-p">' + md(ln) + '</p>');
    }
    return out.join('');
  }

  /* 意群功能 → 药丸配色 */
  function fnClass(r) {
    var s = String(r || '');
    if (/从句/.test(s)) return 'fn-clause';
    if (/主语/.test(s)) return 'fn-subj';
    if (/谓语|系动词|表语|宾补|宾语/.test(s)) return 'fn-pred';
    if (/介词|分词|不定式|动名词/.test(s)) return 'fn-prep';
    return 'fn-other';
  }

  var WORD_RE = /^[A-Za-z][A-Za-z'\u2019-]*$/;
  /* 原文分词：[[n]] 空位 / (41)____ 空位 / 英文单词 */
  var TOKEN_RE = /\[\[(\d{1,2})\]\]|[（(](\d{2})[)）]_+|([A-Za-z][A-Za-z'\u2019-]*)/g;

  var YOUDAO = function (w) {
    return 'https://dict.youdao.com/result?word=' + encodeURIComponent(w) + '&lang=en';
  };
  var CAMBRIDGE = function (w) {
    return 'https://dictionary.cambridge.org/dictionary/english/' + encodeURIComponent(w);
  };

  /* =====================================================================
     1. 存储（key 前缀 paper.）
     ===================================================================== */
  var K = {
    ans: 'paper.answers',
    words: 'paper.words',
    theme: 'paper.theme',
    size: 'paper.size',
    zh: 'paper.zh',
    view: 'paper.view',
    deep: 'paper.deep',
    analysis: 'paper.analysis',
    year: 'paper.year',
    tab: 'paper.tab',
    text: 'paper.textNo'
  };

  var store = {
    get: function (k, d) {
      try {
        var v = window.localStorage.getItem(k);
        return v == null ? d : JSON.parse(v);
      } catch (e) { return d; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 隐私模式忽略 */ }
    }
  };

  /* =====================================================================
     2. 状态
     ===================================================================== */
  var YEARS = [];
  (function () {
    for (var y = 2007; y <= 2026; y++) YEARS.push(y);
    YEARS.reverse();                       /* 2026 在最上面 */
  })();

  var TABS = ['wx', 'reading', 'partB', 'partC', 'writing'];
  var TAB_NAME = {
    wx: '完形填空', reading: '阅读理解',
    partB: '新题型', partC: '翻译', writing: '写作'
  };

  var S = {
    years: YEARS,
    cur: null,
    tab: 'reading',
    textNo: 1,
    view: store.get(K.view, 'sent') === 'para' ? 'para' : 'sent',
    deep: store.get(K.deep, false) === true,
    showZh: store.get(K.zh, true) !== false,
    analysis: store.get(K.analysis, true) !== false,
    answers: store.get(K.ans, {}) || {},
    words: [],
    theme: store.get(K.theme, 'dark') === 'light' ? 'light' : 'dark',
    size: Number(store.get(K.size, 17.5)) || 17.5,
    activeQ: null,
    selWord: '',
    list: [],
    pseq: 0
  };
  S.words = Array.isArray(store.get(K.words, [])) ? store.get(K.words, []) : [];

  /* =====================================================================
     3. DOM
     ===================================================================== */
  var yearlist, passage, questions, selbar, selWordEl, drawer, wbList,
      searchEl, toastEl, tabsEl, subtabsEl, wbCount, wbCnt2;

  /* =====================================================================
     4. 数据访问
     ===================================================================== */
  function paperData(y) { return (window.__PAPER__ || {})[y] || null; }
  function wxData(y) { return (window.__WX__ || {})[y] || null; }
  function hasData(y) { return !!(paperData(y) || wxData(y)); }

  function hasTab(y, tab) {
    var d = paperData(y), w = wxData(y);
    if (tab === 'wx') return !!(d && d.cloze && (d.cloze.sentences || []).length);
    if (!d) return false;
    if (tab === 'reading') {
      return (d.reading || []).some(function (t) { return (t.paras || []).length; });
    }
    if (tab === 'partB') return !!(d.partB && (d.partB.questions || []).length);
    if (tab === 'partC') return !!(d.partC && (d.partC.sentences || []).length);
    if (tab === 'writing') return !!(d.writing && (d.writing.A || d.writing.B));
    return false;
  }

  function splitParas(text) {
    var s = String(text || '');
    var parts = s.split(/\n\s*\n/).filter(function (p) { return p.trim(); });
    if (parts.length <= 1 && s.indexOf('\n') >= 0) {
      parts = s.split('\n').filter(function (p) { return p.trim(); });
    }
    return parts;
  }

  /* 完形：取出含第 n 空的整句，作为题目卡题干 */
  function blankSentence(text, no) {
    var s = String(text || '');
    var marker = '[[' + no + ']]';
    var idx = s.indexOf(marker);
    if (idx < 0) return '';
    var start = Math.max(
      s.lastIndexOf('.', idx), s.lastIndexOf('!', idx),
      s.lastIndexOf('?', idx), s.lastIndexOf('\n', idx)
    );
    start = start < 0 ? 0 : start + 1;
    var re = /[.!?]/g;
    re.lastIndex = idx + marker.length;
    var m = re.exec(s);
    var end = m ? m.index : Math.min(s.length, idx + 220);
    return s.slice(start, end + 1).trim().replace(/\[\[\d{1,2}\]\]/g, ' ____ ');
  }

  /* 翻译整节解析：拆出 46–50 的逐句块 */
  function partCAnalysisMap(text) {
    var s = String(text || '');
    var start = s.lastIndexOf('(46)');
    if (start < 0) return { head: s.trim(), map: {} };
    var head = s.slice(0, start).trim();
    var tail = s.slice(start);
    var re = /\((4[6-9]|50)\)/g;
    var marks = [], m;
    while ((m = re.exec(tail)) !== null) {
      marks.push({ no: m[1], at: m.index, len: m[0].length });
    }
    var map = {};
    for (var i = 0; i < marks.length; i++) {
      var end = (i + 1 < marks.length) ? marks[i + 1].at : tail.length;
      var body = tail.slice(marks[i].at + marks[i].len, end).trim();
      /* 去掉块首重复的英文原句，只留【…】起的解析 */
      var k = body.indexOf('【');
      if (k > 0) body = body.slice(k);
      map[marks[i].no] = body;
    }
    return { head: head, map: map };
  }

  /* 长文本里的【…】小标题 */
  function extractLabels(text) {
    var re = /【([^】\n]{1,40})】/g, out = [], m;
    var s = String(text || '');
    while ((m = re.exec(s)) !== null) out.push(m[1]);
    return out;
  }

  /* =====================================================================
     5. 当前题型题目列表（统一结构）
     ===================================================================== */
  function currentList() {
    var d = paperData(S.cur);
    var w = wxData(S.cur);
    var out = [];

    if (S.tab === 'wx') {
      var text = String((w && w.text) || '');
      out = ((w && w.blanks) || []).map(function (b) {
        return {
          no: Number(b.no), kind: 'wx',
          stem: blankSentence(text, b.no),
          type: b.type || '',
          options: b.options || {},
          answer: b.answer || '',
          analysis: b.analysis || '',
          explain: b.explain || '',
          whyWrong: b.whyWrong || null,
          collocation: b.collocation || '',
          gloss: b.gloss || '',
          logic: b.logic || '',
          signal: b.signal || ''
        };
      });
    } else if (S.tab === 'reading') {
      var t = ((d && d.reading) || [])[S.textNo - 1] || {};
      out = (t.questions || []).map(function (q) {
        return {
          no: Number(q.no), kind: 'reading',
          stem: q.stem || '', type: q.type || '',
          options: q.options || {}, answer: q.answer || '',
          analysis: q.analysis || '',
          explain: '', whyWrong: null, collocation: '',
          gloss: '', logic: '', signal: ''
        };
      });
    } else if (S.tab === 'partB') {
      var b2 = (d && d.partB) || {};
      var pool = b2.options || {};
      out = (b2.questions || []).map(function (q) {
        return {
          no: Number(q.no), kind: 'partB',
          stem: q.stem || '', type: q.type || '新题型',
          options: q.options || {}, answer: q.answer || '',
          analysis: q.analysis || '',
          explain: '', whyWrong: null, collocation: '',
          gloss: '', logic: '', signal: '',
          candidate: pool[q.answer] || ''
        };
      });
    } else if (S.tab === 'partC') {
      var c = (d && d.partC) || {};
      var map = partCAnalysisMap(c.analysis || '');
      out = (c.sentences || []).map(function (s) {
        return {
          no: Number(s.no), kind: 'partC',
          stem: s.en || '', type: '翻译',
          options: {}, answer: '',
          analysis: map.map[String(s.no)] || map.head || '',
          explain: '', whyWrong: null, collocation: '',
          gloss: '', logic: '', signal: ''
        };
      });
    }
    return out;
  }

  function findQ(no) {
    for (var i = 0; i < S.list.length; i++) {
      if (S.list[i].no === Number(no)) return S.list[i];
    }
    return null;
  }

  /* =====================================================================
     6. 作答
     ===================================================================== */
  function answerKey(no) { return S.cur + ':' + no; }
  function pickedOf(no) { return S.answers[answerKey(no)] || null; }

  /* =====================================================================
     7. 启动
     ===================================================================== */
  function boot() {
    yearlist = $('#yearlist');
    passage = $('#passage');
    questions = $('#questions');
    selbar = $('#selbar');
    selWordEl = $('#selbar-word');
    drawer = $('#drawer');
    wbList = $('#wb-list');
    searchEl = $('#search');
    toastEl = $('#toast');
    tabsEl = $('#tabs');
    subtabsEl = $('#subtabs');
    wbCount = $('#wb-count');
    wbCnt2 = $('#wb-cnt2');

    applyTheme();
    applySize();
    applyView();
    applyZh();
    applyAn();
    applyDeep();

    var savedYear = Number(store.get(K.year, 0));
    var savedTab = String(store.get(K.tab, 'reading'));
    var savedText = Number(store.get(K.text, 1));

    if (TABS.indexOf(savedTab) >= 0) S.tab = savedTab;
    if (savedText >= 1 && savedText <= 4) S.textNo = savedText;

    var first = null;
    if (savedYear && hasData(savedYear)) first = savedYear;
    if (first == null) first = hasData(2013) ? 2013 : firstYear();

    renderYearList();
    bindEvents();
    renderDrawer();
    updateWbCount();

    if (first != null) selectYear(first);
    else renderNoYear();
  }

  function firstYear() {
    for (var i = 0; i < S.years.length; i++) if (hasData(S.years[i])) return S.years[i];
    return null;
  }

  function renderNoYear() {
    $('#doc-year').textContent = '—';
    $('#doc-meta').textContent = '';
    $('#doc-topic').textContent = '还没有任何整卷数据';
    passage.innerHTML = '<div class="pane-empty">还没有读到任何年份数据。<br>'
      + '把 <code>data/paper/2013.js</code> 放到对应目录即可自动出现。</div>';
    questions.innerHTML = '<div class="pane-empty">暂无题目。</div>';
  }

  /* =====================================================================
     8. 左栏：年份
     ===================================================================== */
  function matchYear(y) {
    var q = (searchEl.value || '').trim().toLowerCase();
    if (!q) return true;
    if (String(y).indexOf(q) >= 0) return true;

    var w = wxData(y), d = paperData(y);

    var secMap = {
      '完形': 'wx', '完形填空': 'wx', 'cloze': 'wx',
      '阅读': 'reading', '阅读理解': 'reading', 'reading': 'reading',
      '新题型': 'partB', '7选5': 'partB', '七选五': 'partB', '排序': 'partB',
      '翻译': 'partC', 'translation': 'partC',
      '写作': 'writing', '作文': 'writing', 'writing': 'writing'
    };
    if (secMap[q] && hasTab(y, secMap[q])) return true;

    if (d) {
      var cz = d.cloze || {};
      var ctext = String(cz.topic || '') + ' ' + String(cz.source || '');
      if (ctext.toLowerCase().indexOf(q) >= 0) return true;

      var hay = [];
      (d.reading || []).forEach(function (t) {
        (t.questions || []).forEach(function (q2) {
          hay.push(String(q2.stem || ''), String(q2.type || ''));
        });
      });
      var pb = d.partB || {};
      (pb.questions || []).forEach(function (q3) { hay.push(String(q3.type || '')); });
      var pc = d.partC || {};
      (pc.sentences || []).forEach(function (s) { hay.push(String(s.en || '')); });
      if (hay.join(' ').toLowerCase().indexOf(q) >= 0) return true;
    }

    if (w) {
      var wt = (String(w.topic || '') + ' ' + String(w.section || '')
        + ' ' + String(w.paper || '')).toLowerCase();
      if (wt.indexOf(q) >= 0) return true;
      var bt = (w.blanks || []).map(function (b) {
        return String(b.type || '') + ' ' + String(b.explain || '');
      }).join(' ').toLowerCase();
      if (bt.indexOf(q) >= 0) return true;
    }
    return false;
  }

  function renderYearList() {
    var shown = S.years.filter(matchYear);

    yearlist.innerHTML = shown.map(function (y) {
      var ok = hasData(y);
      var w = wxData(y), d = paperData(y);
      var badge = (y >= 2012)
        ? '<span class="badge jz">精做</span>'
        : '<span class="yr-old">旧卷</span>';

      var tip = '（该年份数据缺失）';
      if (ok) {
        var cz = d && d.cloze;
        if (cz && cz.topic) tip = cz.topic;
        else if (w && w.topic) tip = w.topic;
        else if (d) tip = '阅读 ' + ((d.reading || []).length) + ' 篇 · 新题型 / 翻译 / 写作';
      }

      return '<li><button type="button" class="yr' + (y === S.cur ? ' on' : '')
        + (ok ? '' : ' missing') + '" data-year="' + y + '"'
        + (ok ? '' : ' disabled aria-disabled="true"') + '>'
        + '<span class="yr-h"><span class="yr-n">' + y + '</span>' + badge + '</span>'
        + '<span class="yr-t">' + esc(tip) + '</span>'
        + '</button></li>';
    }).join('');

    if (!shown.length) {
      yearlist.innerHTML = '<li style="padding:18px 12px;color:var(--fg-faint);'
        + 'font-size:12px;line-height:1.8">没有匹配的年份。<br>清空搜索框试试。</li>';
    }
    $('#year-count').textContent = S.years.length + ' 年';
  }

  function selectYear(y) {
    y = Number(y);
    if (!hasData(y)) { toast(y + ' 年数据缺失'); return; }
    S.cur = y;
    S.activeQ = null;
    store.set(K.year, y);

    if (!hasTab(y, S.tab)) {
      for (var i = 0; i < TABS.length; i++) {
        if (hasTab(y, TABS[i])) { S.tab = TABS[i]; break; }
      }
    }
    store.set(K.tab, S.tab);

    renderYearList();
    renderDocHead();
    renderSubTabs();
    renderPassage();
    renderQuestions();
    scrollPanesTop();
  }

  function scrollPanesTop() {
    if (passage) passage.scrollTop = 0;
    if (questions) questions.scrollTop = 0;
  }

  /* =====================================================================
     9. 文档头
     ===================================================================== */
  function tabCountText(y, tab) {
    var d = paperData(y), w = wxData(y);
    if (tab === 'wx') {
      var n = ((d && d.cloze && d.cloze.sentences) || []).length;
      return n ? n + ' 句' : '缺';
    }
    if (tab === 'reading') return (d && (d.reading || []).length) ? (d.reading || []).length + ' 篇' : '缺';
    if (tab === 'partB') {
      if (!d || !d.partB) return '缺';
      return ((d.partB.paras || []).length ? '7 选 5' : '排序');
    }
    if (tab === 'partC') return (d && d.partC && (d.partC.sentences || []).length)
      ? (d.partC.sentences || []).length + ' 句' : '缺';
    if (tab === 'writing') return (d && d.writing) ? '两篇' : '缺';
    return '';
  }

  function renderDocHead() {
    var d = paperData(S.cur), w = wxData(S.cur);
    $('#doc-year').textContent = S.cur != null ? S.cur : '—';

    $$('#tabs button').forEach(function (b) {
      var tab = b.getAttribute('data-tab');
      b.classList.toggle('on', tab === S.tab);
      b.setAttribute('aria-selected', tab === S.tab ? 'true' : 'false');
      b.disabled = !hasTab(S.cur, tab);
      var n = $('[data-n]', b);
      if (n) n.textContent = tabCountText(S.cur, tab);
    });

    var meta = [];
    if (S.tab === 'wx') {
      meta.push((w && w.paper) || '英语一');
      meta.push('完形填空');
      var cz = (d && d.cloze) || {};
      meta.push(((cz.sentences || []).length) + ' 句');
      if (cz.difficulty) meta.push('难度 ' + cz.difficulty);
      meta.push((cz.source === '手制' ? '人工精析' : '自动解析'));
    } else if (S.tab === 'reading') {
      var t = ((d && d.reading) || [])[S.textNo - 1];
      meta.push('阅读理解');
      meta.push('Text ' + S.textNo);
      if (t) meta.push((t.paras || []).length + ' 段');
      meta.push(((t && t.questions) || []).length + ' 题');
    } else if (S.tab === 'partB') {
      var pb = (d && d.partB) || {};
      meta.push('新题型');
      meta.push((pb.paras || []).length ? '7 选 5（选句填空）' : '段落排序（7 选 5）');
      meta.push(((pb.questions || []).length) + ' 题');
    } else if (S.tab === 'partC') {
      var pc = (d && d.partC) || {};
      meta.push('翻译');
      meta.push(((pc.paras || []).length) + ' 段');
      meta.push(((pc.sentences || []).length) + ' 句');
    } else {
      meta.push('写作');
      meta.push('小作文 + 大作文');
    }
    $('#doc-meta').textContent = meta.join(' · ');

    var cz2 = (d && d.cloze) || {};
    $('#doc-topic').textContent = (S.tab === 'wx' && cz2.topic) ? cz2.topic : '';
  }

  function renderSubTabs() {
    if (S.tab !== 'reading') { subtabsEl.hidden = true; subtabsEl.innerHTML = ''; return; }
    var d = paperData(S.cur);
    var n = ((d && d.reading) || []).length;
    if (!n) { subtabsEl.hidden = true; subtabsEl.innerHTML = ''; return; }
    var html = '';
    for (var i = 1; i <= n; i++) {
      html += '<button type="button" data-text="' + i + '"'
        + (i === S.textNo ? ' class="on"' : '') + '>Text ' + i + '</button>';
    }
    subtabsEl.innerHTML = html;
    subtabsEl.hidden = false;
  }

  /* =====================================================================
     10. 文章栏
     ===================================================================== */
  function inlineHTML(raw) {
    var out = '', last = 0, m;
    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(raw)) !== null) {
      if (m.index > last) out += esc(raw.slice(last, m.index));
      var n = (m[1] !== undefined) ? m[1] : m[2];
      if (n !== undefined) {
        out += '<button type="button" class="cap" data-blank="' + esc(n) + '" '
          + 'aria-label="第 ' + esc(n) + ' 题" title="第 ' + esc(n) + ' 题 · 点击看解析">'
          + esc(n) + '</button>';
      } else {
        out += '<span class="w">' + esc(m[3]) + '</span>';
      }
      last = TOKEN_RE.lastIndex;
    }
    out += esc(raw.slice(last));
    return out;
  }

  function sentHTML(s) {
    var open = !!S.deep;
    var main = String(s.main || '').replace(/^\s*主干\s*[:：]\s*/, '').trim();
    var chunks = s.chunks || [];
    var zh = String(s.zh || '').trim();

    var html = '<li class="sent' + (open ? ' open' : '') + '" data-i="' + esc(s.i) + '">';
    html += '<div class="sent-head">'
      + '<span class="sent-i">' + esc(s.i) + '</span>'
      + '<div class="sent-en">' + inlineHTML(String(s.en || '')) + '</div>'
      + '<button type="button" class="sent-toggle" aria-expanded="' + (open ? 'true' : 'false') + '">'
      + (open ? '精读 ▴' : '精读 ▾') + '</button>'
      + '</div>';

    html += '<div class="sent-body' + (open ? ' open' : '') + '">';
    if (main) {
      html += '<div class="main-rule"><b>主干</b><span>' + esc(main) + '</span></div>';
    }
    if (chunks.length) {
      html += '<table class="chunks"><thead><tr><th>意群</th><th>功能</th></tr></thead><tbody>'
        + chunks.map(function (c) {
            return '<tr><td class="ck-t">' + esc(c.t || '') + '</td>'
              + '<td><span class="fn ' + fnClass(c.r) + '">' + esc(c.r || '') + '</span></td></tr>';
          }).join('')
        + '</tbody></table>';
    }
    if (zh) html += '<div class="sent-zh">' + esc(zh) + '</div>';
    html += '</div></li>';
    return html;
  }

  function sentsHTML(sents) {
    if (!sents || !sents.length) return '';
    return '<ol class="sents">' + sents.map(sentHTML).join('') + '</ol>';
  }

  function paraBlockHTML(para, idx) {
    var no = para.no != null ? para.no : (idx + 1);
    var zh = String(para.zh || '').trim();
    var html = '<div class="para" data-para="' + esc(no) + '">';
    html += '<div class="para-head"><span class="para-no">¶' + esc(no) + '</span>'
      + (zh ? '<button type="button" class="para-zh" data-para-zh="' + idx + '">译文</button>' : '')
      + '</div>';
    html += '<p class="para-en">' + inlineHTML(String(para.en || '')) + '</p>';
    if (zh) {
      html += '<div class="para-zh-box" data-para-box="' + idx + '">' + esc(zh) + '</div>';
    }
    html += sentsHTML(para.sentences);
    html += '</div>';
    return html;
  }

  function renderPassage() {
    S.pseq = 0;
    var d = paperData(S.cur);
    var html = '';

    if (S.tab === 'wx') {
      var cz = (d && d.cloze) || {};
      var sents = cz.sentences || [];
      if (sents.length) {
        var joined = sents.map(function (s) { return String(s.en || '').trim(); })
          .filter(Boolean).join(' ');
        html = '<div class="para" data-para="1">'
          + '<div class="para-head"><span class="para-no">¶1</span></div>'
          + '<p class="para-en">' + inlineHTML(joined) + '</p>'
          + sentsHTML(sents)
          + '</div>';
      }
    } else if (S.tab === 'reading') {
      var t = ((d && d.reading) || [])[S.textNo - 1] || {};
      html = (t.paras || []).map(paraBlockHTML).join('');
    } else if (S.tab === 'partB') {
      var pb = (d && d.partB) || {};
      var paras = pb.paras || [];
      if (paras.length) {
        html = paras.map(paraBlockHTML).join('');
        html += '<details class="cand"><summary>候选句 A–G（7 选 5 · 点开看候选原文）</summary>'
          + '<div class="ocards">' + optionCards(pb.options) + '</div></details>';
      } else {
        html = '<div class="para"><div class="para-head">'
          + '<span class="para-no">¶</span>'
          + '<span style="font-size:11.5px;color:var(--fg-faint)">段落排序题 · 7 个候选段</span>'
          + '</div><div class="ocards">' + optionCards(pb.options) + '</div></div>';
      }
    } else if (S.tab === 'partC') {
      var pc = (d && d.partC) || {};
      html = (pc.paras || []).map(paraBlockHTML).join('');
    } else {
      html = writingPassageHTML(d);
    }

    if (!html) {
      html = '<div class="pane-empty">「' + esc(TAB_NAME[S.tab]) + '」在 '
        + esc(S.cur) + ' 年没有文章数据。</div>';
    }
    passage.innerHTML = html;
  }

  function optionCards(opts) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'].filter(function (k) {
      return opts && opts[k] != null && String(opts[k]) !== '';
    }).map(function (k) {
      return '<div class="ocard"><span class="ol">' + esc(k) + '</span>'
        + '<span class="ot">' + esc(opts[k]) + '</span></div>';
    }).join('');
  }

  /* ---- 写作：长文本按【xxx】切段 ---- */
  function textBlock(t) {
    var s = String(t || '').replace(/^\s+|\s+$/g, '');
    if (!s) return '';
    return '<p class="wxp">' + esc(s) + '</p>';
  }

  function longTextHTML(text) {
    var s = String(text || '');
    var re = /【([^】\n]{1,40})】/g;
    var out = [], last = 0, m;
    while ((m = re.exec(s)) !== null) {
      out.push(textBlock(s.slice(last, m.index)));
      out.push('<span class="wxlabel">' + esc(m[1]) + '</span>');
      last = re.lastIndex;
    }
    out.push(textBlock(s.slice(last)));
    return out.join('');
  }

  function wxcardHTML(letter, title, text) {
    return '<div class="wxcard">'
      + '<div class="wxcard-h"><span class="wn">' + esc(letter) + '</span>'
      + '<span class="wt">' + esc(title) + '</span></div>'
      + longTextHTML(text) + '</div>';
  }

  function writingPassageHTML(d) {
    var w = (d && d.writing) || {};
    if (!w.A && !w.B) return '';
    var html = '';
    if (w.A) html += wxcardHTML('A', '小作文（应用文）', w.A);
    if (w.B) html += wxcardHTML('B', '大作文（图画作文）', w.B);
    return html;
  }

  /* =====================================================================
     11. 题目栏
     ===================================================================== */
  function optBtnHTML(k, text, picked, graded, answer) {
    var cls = 'qopt';
    if (graded) {
      if (k === answer) cls += ' correct';
      else if (picked === k) cls += ' wrong';
    }
    if (picked === k) cls += ' picked';
    return '<button type="button" class="' + cls + '" data-opt="' + esc(k) + '">'
      + '<b>' + esc(k) + '</b>' + (text ? '<span>' + esc(text) + '</span>' : '')
      + '</button>';
  }

  function answerWordOf(q) {
    if (q.kind === 'partB') {
      return q.candidate || (q.options || {})[q.answer] || String(q.answer || '');
    }
    if (q.options && q.options[q.answer]) return String(q.options[q.answer]);
    return String(q.stem || '').replace(/[^\x20-\x7e]+/g, ' ').trim();
  }

  function qcardHTML(q) {
    var picked = pickedOf(q.no);
    var graded = !!picked || S.analysis;
    var word = answerWordOf(q);

    var html = '<article class="qcard' + (S.activeQ === q.no ? ' hl' : '')
      + '" data-q="' + esc(q.no) + '">';

    /* 头 */
    html += '<div class="qc-h"><span class="qno">' + esc(q.no) + '</span>'
      + (q.type ? '<span class="qtype">' + esc(q.type) + '</span>' : '')
      + (picked && q.answer
          ? '<span class="qc-state ' + (picked === q.answer ? 'ok' : 'bad') + '">'
            + (picked === q.answer ? '✓ 答对' : '✗ 答错') + '</span>'
          : '')
      + '</div>';

    /* 题干 */
    if (q.stem) {
      if (q.kind === 'partB') {
        html += '<details class="srcacc"><summary>题面原文照录（含答案与定位）</summary>'
          + '<div class="src-body"><p class="an-p">'
          + md(String(q.stem).replace(/\(4\d\)_+/g, '____ '))
          + '</p></div></details>';
      } else {
        html += '<p class="qstem">' + inlineHTML(q.stem) + '</p>';
      }
    }

    /* 选项 */
    if (q.kind === 'partB') {
      html += '<div class="qopts letters">'
        + ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(function (k) {
            return optBtnHTML(k, '', picked, graded, q.answer);
          }).join('')
        + '</div>';
    } else if (q.kind !== 'partC') {
      var keys = ['A', 'B', 'C', 'D'].filter(function (k) {
        return q.options && q.options[k] != null && String(q.options[k]) !== '';
      });
      if (keys.length) {
        html += '<div class="qopts">' + keys.map(function (k) {
          return optBtnHTML(k, q.options[k], picked, graded, q.answer);
        }).join('') + '</div>';
      }
    }

    /* 答案行 + 动作 */
    html += '<div class="qc-foot">';
    if (q.kind === 'partC') {
      html += '<span class="ans">划线句 ' + esc(q.no) + '</span>';
    } else if (picked) {
      html += '<span class="ans' + (picked === q.answer ? '' : ' bad') + '">'
        + '正确答案 ' + esc(q.answer) + '</span>'
        + '<span>· 你的选择 ' + esc(picked) + '</span>';
    } else if (S.analysis && q.answer) {
      html += '<span class="ans">正确答案 ' + esc(q.answer) + '</span>'
        + (q.gloss ? '<span>· ' + esc(q.gloss) + '</span>' : '');
    } else {
      html += '<span>先选一个，再展开解析</span>';
    }
    html += '<span class="acts">'
      + '<button type="button" class="mini" data-wact="copy-opt" data-copy="'
      + esc(word) + '" title="复制答案词">复制答案词</button>'
      + '<a class="mini" href="' + esc(YOUDAO(word.split(/\s+/)[0] || word))
      + '" target="_blank" rel="noopener noreferrer">有道</a>'
      + '<button type="button" class="mini pri" data-wact="star-opt" data-word="'
      + esc(word) + '">★ 生词本</button>'
      + '</span>';
    html += '</div>';

    /* 解析 */
    if (S.analysis) {
      var an = '';
      if (q.explain) an += '<p class="an-p">' + md(q.explain) + '</p>';
      if (q.whyWrong && Object.keys(q.whyWrong).length) {
        an += Object.keys(q.whyWrong).sort().map(function (k) {
          return '<p class="an-opt"><b>' + esc(k) + ')</b> ' + md(q.whyWrong[k]) + '</p>';
        }).join('');
      }
      if (q.collocation) an += '<p class="an-p"><code>' + esc(q.collocation) + '</code></p>';
      an += analysisHtml(q.analysis);
      if (an) html += '<div class="qc-an">' + an + '</div>';
    }

    html += '</article>';
    return html;
  }

  function writingQuestionsHTML(d) {
    var w = (d && d.writing) || {};
    var items = [];
    ['A', 'B'].forEach(function (k) {
      if (!w[k]) return;
      var n = 0;
      extractLabels(w[k]).forEach(function (lb) {
        n += 1;
        items.push({ k: k, n: n, t: lb });
      });
    });
    if (!items.length) {
      return '<div class="pane-empty"><b>写作无标准答案</b><br>'
        + '本页在左栏给出题面、参考范文与逐段拆解；<br>'
        + '先把范文抄一遍，再对照【解析】里的采分点自评。</div>';
    }
    return '<div class="pane-h">提纲 <span class="spacer">'
      + items.length + ' 个小标题</span></div>'
      + '<ul class="outline">' + items.map(function (x) {
          return '<li><span class="oi">' + esc(x.k) + x.n + '</span>'
            + '<span>' + esc(x.t) + '</span></li>';
        }).join('') + '</ul>';
  }

  function renderQuestions() {
    S.list = currentList();
    var d = paperData(S.cur);

    if (S.tab === 'writing') {
      questions.innerHTML = writingQuestionsHTML(d);
      return;
    }

    var n = S.list.length;
    var html = '<div class="pane-h">题目 <span class="spacer">'
      + esc(TAB_NAME[S.tab]) + ' · ' + n + ' 题</span></div>';

    if (!n) {
      html += '<div class="pane-empty">「' + esc(TAB_NAME[S.tab]) + '」在 '
        + esc(S.cur) + ' 年没有题目数据。</div>';
    } else if (S.tab === 'partC') {
      var c = (d && d.partC) || {};
      var map = partCAnalysisMap(c.analysis || '');
      if (map.head && S.analysis) {
        html += '<details class="srcacc"><summary>整篇说明（来源 / 主旨 / 术语统一）</summary>'
          + '<div class="src-body">' + analysisHtml(map.head) + '</div></details>';
      }
      html += S.list.map(qcardHTML).join('');
    } else {
      html += S.list.map(qcardHTML).join('');
    }
    questions.innerHTML = html;
  }

  function decorateCards() {
    $$('.qcard', questions).forEach(function (el) {
      el.classList.toggle('hl', Number(el.getAttribute('data-q')) === S.activeQ);
    });
  }

  function scrollToCard(no) {
    var el = $('.qcard[data-q="' + no + '"]', questions);
    if (!el || !questions) return;
    var cr = questions.getBoundingClientRect(), er = el.getBoundingClientRect();
    var top = questions.scrollTop + (er.top - cr.top) - 10;
    if (questions.scrollTo) questions.scrollTo({ top: top, behavior: 'smooth' });
    else questions.scrollTop = top;
  }

  /* =====================================================================
     12. 划词工具条（行为与 app.js 一致）
     ===================================================================== */
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
    if (!raw || !WORD_RE.test(raw) || raw.length < 2 || raw.length > 40) {
      hideSelbar();
      return;
    }
    var rect = null;
    try {
      if (sel.rangeCount) rect = sel.getRangeAt(0).getBoundingClientRect();
    } catch (err) { rect = null; }
    showSelbar(raw, rect);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(raw).then(function () {
          var btn = $('[data-act="copy"]', selbar);
          if (btn) btn.classList.add('copied');
        }, function () { /* 静默 */ });
      }
    } catch (err2) { /* 静默 */ }
  }

  /* =====================================================================
     13. 生词本
     ===================================================================== */
  function saveWords() { store.set(K.words, S.words); }

  function updateWbCount() {
    wbCount.textContent = String(S.words.length);
    wbCnt2.textContent = S.words.length + ' 个词';
  }

  function cleanWord(w) {
    return String(w || '').trim().replace(/^[^A-Za-z]+|[^A-Za-z'\u2019-]+$/g, '');
  }

  function addWord(w, no) {
    var word = cleanWord(w);
    if (!word) return false;
    var key = word.toLowerCase().replace(/[\u2019']s$/, '');
    var exists = S.words.some(function (x) {
      return String(x.w).toLowerCase().replace(/[\u2019']s$/, '') === key;
    });
    if (exists) { toast('「' + word + '」已在生词本'); return false; }
    S.words.push({
      w: word,
      year: S.cur,
      qno: (no == null || no === '') ? '' : no,
      tab: TAB_NAME[S.tab],
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
      var meta = String(x.year || '');
      if (x.qno !== '' && x.qno != null) meta += ' · 第' + x.qno + '题';
      else if (x.tab) meta += ' · ' + x.tab;
      return '<li class="wb-item">'
        + '<span class="bw" data-wb="' + i + '">' + esc(x.w) + '</span>'
        + '<span class="bm">' + esc(meta) + '</span>'
        + '<span class="bt">' + esc(fmtTime(x.ts)) + '</span>'
        + '<button type="button" class="del" data-del="' + i + '" title="删除">×</button>'
        + '</li>';
    }).join('');
  }

  function wordsMarkdown() {
    var head = '| 单词 | 年份 | 题号 | 加入时间 |\n| --- | --- | --- | --- |\n';
    return head + S.words.map(function (x) {
      return '| ' + x.w + ' | ' + (x.year || '') + ' | '
        + (x.qno === '' || x.qno == null ? '—' : x.qno) + ' | ' + fmtTime(x.ts) + ' |';
    }).join('\n');
  }

  function wordsCSV() {
    var q = function (v) { return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; };
    var rows = [['word', 'year', 'questionNo', 'addedAt']];
    S.words.forEach(function (x) {
      rows.push([x.w, x.year || '', x.qno == null ? '' : x.qno, fmtTime(x.ts)]);
    });
    return rows.map(function (r) { return r.map(q).join(','); }).join('\r\n');
  }

  /* =====================================================================
     14. 复制 / 下载 / Toast
     ===================================================================== */
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
    var t = String(text == null ? '' : text);
    var done = function () {
      toast((label || '已复制') + '：' + (t.length > 24 ? t.slice(0, 24) + '…' : t));
    };
    var fail = function () { toast(copySilent(t) ? (label || '已复制') : '复制失败，请手动选中'); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(done, fail);
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

  /* =====================================================================
     15. 全局偏好
     ===================================================================== */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', S.theme);
    store.set(K.theme, S.theme);
  }

  function applySize() {
    document.documentElement.style.setProperty('--read-size', S.size + 'px');
    store.set(K.size, S.size);
  }

  function applyView() {
    store.set(K.view, S.view);
    document.body.classList.toggle('view-sent', S.view === 'sent');
    document.body.classList.toggle('view-para', S.view === 'para');
    $$('#view-seg button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-view') === S.view);
    });
  }

  function applyDeep() {
    store.set(K.deep, S.deep);
    var btn = $('#btn-deep');
    if (btn) btn.classList.toggle('on', S.deep);
    $$('.sent', passage).forEach(function (li) {
      var body = $('.sent-body', li);
      var tog = $('.sent-toggle', li);
      if (body) body.classList.toggle('open', S.deep);
      if (tog) {
        tog.setAttribute('aria-expanded', S.deep ? 'true' : 'false');
        tog.textContent = S.deep ? '精读 ▴' : '精读 ▾';
      }
      li.classList.toggle('open', S.deep);
    });
  }

  function applyZh() {
    store.set(K.zh, S.showZh);
    document.body.classList.toggle('no-zh', !S.showZh);
    var btn = $('#btn-zh');
    if (btn) btn.classList.toggle('on', S.showZh);
  }

  function applyAn() {
    store.set(K.analysis, S.analysis);
    document.body.classList.toggle('no-an', !S.analysis);
    var btn = $('#btn-an');
    if (btn) btn.classList.toggle('on', S.analysis);
  }

  /* =====================================================================
     16. 事件
     ===================================================================== */
  function bindEvents() {
    /* 年份 */
    yearlist.addEventListener('click', function (e) {
      var b = e.target.closest('[data-year]');
      if (!b) return;
      var y = Number(b.getAttribute('data-year'));
      if (y === S.cur) return;
      selectYear(y);
    });

    /* 搜索 */
    searchEl.addEventListener('input', renderYearList);

    /* 题型 Tab */
    tabsEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tab]');
      if (!b || b.disabled) return;
      var tab = b.getAttribute('data-tab');
      if (tab === S.tab) return;
      S.tab = tab;
      S.activeQ = null;
      store.set(K.tab, tab);
      renderDocHead();
      renderSubTabs();
      renderPassage();
      renderQuestions();
      scrollPanesTop();
    });

    /* Text 1..4 */
    subtabsEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-text]');
      if (!b) return;
      var n = Number(b.getAttribute('data-text'));
      if (n === S.textNo) return;
      S.textNo = n;
      S.activeQ = null;
      store.set(K.text, n);
      $$('#subtabs button').forEach(function (x) {
        x.classList.toggle('on', Number(x.getAttribute('data-text')) === n);
      });
      renderDocHead();
      renderPassage();
      renderQuestions();
      scrollPanesTop();
    });

    /* 文章栏：译文 / 精读 / 空位胶囊 */
    passage.addEventListener('click', function (e) {
      var t = e.target;

      var pz = t.closest ? t.closest('[data-para-zh]') : null;
      if (pz) {
        var idx = pz.getAttribute('data-para-zh');
        var box = $('.para-zh-box[data-para-box="' + idx + '"]', passage);
        if (box) {
          var open = box.classList.toggle('open');
          pz.classList.toggle('on', open);
        }
        return;
      }

      var tog = t.closest ? t.closest('.sent-toggle') : null;
      if (tog) {
        var li = tog.closest('.sent');
        if (!li) return;
        var body = $('.sent-body', li);
        if (!body) return;
        var on = body.classList.toggle('open');
        li.classList.toggle('open', on);
        tog.setAttribute('aria-expanded', on ? 'true' : 'false');
        tog.textContent = on ? '精读 ▴' : '精读 ▾';
        return;
      }

      var cap = t.closest ? t.closest('.cap[data-blank]') : null;
      if (cap) {
        var no = Number(cap.getAttribute('data-blank'));
        S.activeQ = no;
        decorateCards();
        var card = $('.qcard[data-q="' + no + '"]', questions);
        if (card) {
          scrollToCard(no);
        } else {
          toast('第 ' + no + ' 题不在当前题型里');
        }
        return;
      }
    });

    /* 题目栏：选选项 / 复制 / 生词本 */
    questions.addEventListener('click', function (e) {
      var op = e.target.closest ? e.target.closest('.qopt[data-opt]') : null;
      if (op) {
        var card = op.closest('.qcard');
        if (!card) return;
        var no = Number(card.getAttribute('data-q'));
        S.answers[answerKey(no)] = op.getAttribute('data-opt');
        store.set(K.ans, S.answers);
        S.activeQ = no;
        renderQuestions();
        scrollToCard(no);
        return;
      }

      var act = e.target.closest ? e.target.closest('[data-wact]') : null;
      if (act) {
        var a = act.getAttribute('data-wact');
        if (a === 'copy-opt') copyText(act.getAttribute('data-copy') || '', '已复制');
        else if (a === 'star-opt') addWord(act.getAttribute('data-word') || '', S.activeQ);
      }
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
      if (a === 'copy') copyText(S.selWord, '已复制');
      else if (a === 'star') { addWord(S.selWord, S.activeQ); hideSelbar(); }
    });

    /* 整段 / 逐句 */
    $('#view-seg').addEventListener('click', function (e) {
      var b = e.target.closest('[data-view]');
      if (!b) return;
      S.view = b.getAttribute('data-view');
      applyView();
      toast(S.view === 'sent' ? '逐句精读' : '整段英文');
    });

    /* 精读全开 / 全关 */
    $('#btn-deep').addEventListener('click', function () {
      S.deep = !S.deep;
      applyDeep();
      toast(S.deep ? '精读全开' : '精读全部折叠');
    });

    /* 中文 */
    $('#btn-zh').addEventListener('click', function () {
      S.showZh = !S.showZh;
      applyZh();
      toast(S.showZh ? '已显示中文译文' : '已隐藏中文译文');
    });

    /* 解析 */
    $('#btn-an').addEventListener('click', function () {
      S.analysis = !S.analysis;
      applyAn();
      renderQuestions();
      toast(S.analysis ? '已展开全部解析' : '已折叠全部解析');
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

    /* 键盘 */
    document.addEventListener('keydown', function (e) {
      var t = e.target;
      var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);

      if (e.key === 'Escape') {
        if (!selbar.hidden) { hideSelbar(); return; }
        if (!drawer.hidden) { drawer.hidden = true; return; }
        S.activeQ = null;
        decorateCards();
        return;
      }
      if (typing) return;

      if (e.key === '/' || (e.key === '?' && e.shiftKey)) {
        e.preventDefault();
        searchEl.focus();
        searchEl.select();
        return;
      }
      if (e.key === 'v' || e.key === 'V') {
        S.view = S.view === 'sent' ? 'para' : 'sent';
        applyView();
        return;
      }
      if (e.key === 'd' || e.key === 'D') {
        S.deep = !S.deep;
        applyDeep();
        return;
      }
      if (e.key === 'z' || e.key === 'Z') {
        S.showZh = !S.showZh;
        applyZh();
        return;
      }
      if (e.key === 'a' || e.key === 'A') {
        S.analysis = !S.analysis;
        applyAn();
        renderQuestions();
        return;
      }
      if (e.key === 'j' || e.key === 'k') {
        e.preventDefault();
        moveQuestion(e.key === 'j' ? 1 : -1);
      }
    });

    /* Ctrl + 滚轮缩放 */
    document.addEventListener('wheel', function (e) {
      if (!e.ctrlKey) return;
      e.preventDefault();
      S.size = Math.max(13, Math.min(26,
        Math.round((S.size + (e.deltaY < 0 ? 1 : -1)) * 10) / 10));
      applySize();
    }, { passive: false });

    window.addEventListener('resize', hideSelbar);
  }

  function moveQuestion(dir) {
    var list = S.list;
    if (!list || !list.length) return;
    var idx = -1;
    for (var i = 0; i < list.length; i++) {
      if (list[i].no === S.activeQ) { idx = i; break; }
    }
    var next = idx < 0
      ? (dir > 0 ? 0 : list.length - 1)
      : (idx + dir + list.length) % list.length;
    S.activeQ = list[next].no;
    decorateCards();
    scrollToCard(S.activeQ);
  }

  /* =====================================================================
     17. 数据脚本兜底重试（本地 http 服务偶发连接被拒时自愈一次）
     ===================================================================== */
  function retryMissingScripts() {
    var miss = $$('script[data-missing="1"]').filter(function (s) {
      return s.src && s.dataset.retried !== '1';
    });
    if (!miss.length) return;
    var pending = miss.length;
    miss.forEach(function (old) {
      old.dataset.retried = '1';
      var s = document.createElement('script');
      s.src = old.src + (old.src.indexOf('?') < 0 ? '?' : '&') + 'r=1';
      s.onload = s.onerror = function () {
        pending -= 1;
        if (pending === 0) {
          renderYearList();
          renderDocHead();
          renderSubTabs();
          renderPassage();
          renderQuestions();
        }
      };
      document.body.appendChild(s);
    });
  }

  /* =====================================================================
     18. Go
     ===================================================================== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
    window.addEventListener('load', function () { setTimeout(retryMissingScripts, 60); });
  } else {
    boot();
    setTimeout(retryMissingScripts, 200);
  }
})();
