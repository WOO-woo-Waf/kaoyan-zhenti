/* 文件为正式存储；内存用于页面交互。浏览器缓存仅用于旧数据迁移和断线应急。 */
(function () {
  'use strict';
  var boot = window.__STUDY_BOOT__, nativeStorage;
  try { nativeStorage=window.localStorage; } catch (_) { nativeStorage={getItem:function(){return null;},setItem:function(){},removeItem:function(){}}; }
  var active = !!(boot && boot.values && boot.token);
  var values = active ? JSON.parse(JSON.stringify(boot.values)) : {};
  var versions = active ? Object.assign({}, boot.versions) : {};
  var queue = [], busy = false, errorText = '', dirty = false;
  var allowed = ['cs408.wrong.v1','cs408.done.v1','cs408.pref.v1','math.wrong.v1','math.done.v1','math.pref.v1','math.answers.v1',
    'wx.answers.v1','wx.bookmarks.v1','wx.theme.v1','wx.fontSize.v1','wx.showZh.v1','wx.mode.v1',
    'paper.answers','paper.words','paper.theme','paper.size','paper.zh','paper.view','paper.deep','paper.analysis',
    'paper.year','paper.tab','paper.textNo','hub.theme.v1','study.questions.v1','study.knowledge.v1'];
  function clone(v) { return v === undefined ? null : JSON.parse(JSON.stringify(v)); }
  function status() {
    var el = document.getElementById('study-save-status');
    if (!el) return;
    el.textContent = !active ? '未启用文件保存：请使用“启动学习库”' : errorText ? '保存失败：' + errorText : (busy || queue.length) ? '正在保存到文件…' : '已保存到文件';
    el.style.color = (!active || errorText) ? '#f0883e' : '#7ee787';
  }
  async function drain() {
    if (busy || !active || errorText) return;
    busy = true; status();
    while (queue.length) {
      var item = queue[0];
      try {
        var payload=JSON.stringify({key:item.key, value:item.value, version:versions[item.key] || 0});
        var res = await fetch('/api/value', {method:'POST', headers:{'Content-Type':'application/json','X-Study-Token':boot.token},
          body:payload, keepalive:new Blob([payload]).size < 60000, signal:AbortSignal.timeout(15000)});
        var result = await res.json();
        if (!res.ok) throw new Error(result.error || '写文件失败');
        versions[item.key] = result.version; queue.shift();
      } catch (e) { errorText = e.message; dirty = true; break; }
    }
    busy = false; dirty = queue.length > 0;
    if (!dirty) { try { nativeStorage.removeItem('study.pending.v1'); } catch (_) {} }
    status();
  }
  var storage = {
    getItem:function (key) {
      if (active && allowed.indexOf(key) >= 0) return Object.prototype.hasOwnProperty.call(values,key) ? JSON.stringify(values[key]) : null;
      try { return nativeStorage.getItem(key); } catch (_) { return null; }
    },
    setItem:function (key, text) {
      if (!active) { status(); throw new Error('文件保存未启用，请双击“启动学习库.cmd”'); }
      if (allowed.indexOf(key) < 0) throw new Error('未登记的学习数据字段');
      var value = JSON.parse(text);
      if (JSON.stringify(values[key]) === JSON.stringify(value)) return;
      values[key] = clone(value); dirty = true;
      // 断线时保留应急副本；文件读取始终优先，不会悄悄拿缓存覆盖正式记录。
      try { nativeStorage.setItem('study.pending.v1', JSON.stringify({at:new Date().toISOString(), values:values})); } catch (_) {}
      queue.push({key:key,value:clone(value)}); status(); drain();
    }
  };
  window.StudyStorage = storage;
  window.StudyFiles = {active:active, flush:drain, pending:function () { return busy || queue.length > 0; },
    refresh:async function () { if(!active||busy||queue.length)return; var r=await fetch('/api/snapshot');if(!r.ok)throw new Error('无法读取最新学习文件');var s=await r.json();values=clone(s.values);versions=Object.assign({},s.versions);boot.overview=s.overview; }
  };
  function read(key, fallback) { try { var x = storage.getItem(key); return x === null ? fallback : JSON.parse(x); } catch (_) { return fallback; } }
  function write(key, value) { storage.setItem(key, JSON.stringify(value)); }
  function saveDownload(data, filename) {
    var a = document.createElement('a'), url = URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
    a.href = url; a.download = filename; a.click(); setTimeout(function () { URL.revokeObjectURL(url); },1000);
  }
  function markQuestion(id) {
    var map = read('study.questions.v1',{});
    if (map[id]) delete map[id]; else map[id] = {at:new Date().toISOString(),reason:'unsure'};
    write('study.questions.v1',map); decorateEnglish();
  }
  function decorateEnglish() {
    if (location.pathname.indexOf('/subjects/english/') < 0) return;
    var yr = document.querySelector('[data-year].on, [data-year].active, li.on[data-year], li.active[data-year]');
    var year = yr && yr.getAttribute('data-year');
    if (!year) return;
    var map = read('study.questions.v1',{});
    document.querySelectorAll('.qcard[data-q], .acc[data-blank]').forEach(function (card) {
      var no = card.getAttribute('data-q') || card.getAttribute('data-blank'), id = 'english:' + year + ':' + no;
      var button = card.querySelector('.study-unsure');
      if (!button) { button = document.createElement('button'); button.type = 'button'; button.className = 'study-unsure'; (card.matches('details') ? card.querySelector('summary') : card).appendChild(button); }
      button.setAttribute('data-study-question',id);
      var label = map[id] ? '✓ 已标记不会（点击取消）' : '☆ 这题我不会';
      if (button.textContent !== label) button.textContent = label;
    });
    // 写作没有选择题卡，仍可分别标记 A/B 两道题。
    var writing = document.querySelector('#questions .outline, #questions .pane-empty');
    var selectedTab = document.querySelector('[data-tab="writing"].on');
    if (writing && selectedTab && !writing.querySelector('.study-writing-marks')) {
      var marks=document.createElement('div'); marks.className='study-writing-marks';
      [51,52].forEach(function(no){var b=document.createElement('button');b.type='button';b.className='study-unsure';b.setAttribute('data-study-question','english:'+year+':'+no);b.textContent=(no===51?'小作文':'大作文')+'：标记/取消不会';marks.appendChild(b);});writing.appendChild(marks);
    }
  }
  function init() {
    var box = document.createElement('div'); box.id = 'study-files-bar';
    box.innerHTML = '<span id="study-save-status"></span> <button type="button" id="study-profile">学习档案 / 标记知识点</button>';
    document.body.appendChild(box);
    var style = document.createElement('style');
    style.textContent = '#study-files-bar{position:fixed;bottom:6px;left:10px;z-index:10000;padding:6px 10px;background:#161b22;color:#ddd;border:1px solid #586069;border-radius:8px;font:12px sans-serif;max-width:95vw}#study-files-bar button,.study-unsure{padding:4px 8px;margin:2px 4px;border-radius:5px;border:1px solid #64748b;background:#202b3b;color:#e2e8f0;cursor:pointer}.study-unsure{font-size:12px}#study-panel{position:fixed;inset:8% 10%;z-index:10001;overflow:auto;background:#161b22;color:#eee;border:1px solid #64748b;border-radius:12px;padding:24px;font:15px/1.7 sans-serif}#study-panel input,#study-panel select,#study-panel textarea{display:block;width:100%;padding:8px;margin:8px 0;background:#202b3b;color:#eee;border:1px solid #64748b;box-sizing:border-box}#study-panel button{padding:6px 14px;margin:8px;cursor:pointer}#study-panel a{color:#79c0ff}';
    document.head.appendChild(style); status();
    document.getElementById('study-profile').onclick = openPanel;
    document.addEventListener('click',function (event) {
      var b = event.target.closest('[data-study-question]'); if (b) { event.preventDefault(); markQuestion(b.getAttribute('data-study-question')); }
    });
    if (location.pathname.indexOf('/subjects/english/') >= 0) {
      var scheduled = false;
      new MutationObserver(function (mutations) {
        if (mutations.every(function (m) { return m.target.closest && m.target.closest('.study-unsure, #study-files-bar, #study-panel'); })) return;
        if (!scheduled) { scheduled = true; requestAnimationFrame(function () { scheduled = false; decorateEnglish(); }); }
      }).observe(document.body,{childList:true,subtree:true});
      decorateEnglish();
    }
  }
  function openPanel() {
    if (document.getElementById('study-panel')) return;
    var panel = document.createElement('section'); panel.id='study-panel';
    panel.innerHTML = '<h2>学习档案</h2><p>正式记录自动保存到 study-data/state.json；完整讲解资料同步更新到 agent-context.json 和 学习档案.md。</p>' +
      '<p><a href="/study-data/学习档案.md" target="_blank">阅读我的学习档案</a> · <a href="/study-data/agent-context.json" target="_blank">完整智能体资料</a></p>' +
      '<h3>明确标记不会的知识点</h3><select id="study-subject"><option value="408">408</option><option value="math">数学（一）</option><option value="english">英语（一）</option></select>' +
      '<input id="study-point" placeholder="知识点名称，如：多元函数条件极值 / 长难句定语从句"><textarea id="study-note" placeholder="具体卡在哪里、想让模型重点讲什么"></textarea>' +
      '<button id="study-add-point">保存不会的知识点</button><div id="study-points"></div>' +
      '<hr><button id="study-export">下载当前记录（断线应急）</button><button id="study-import">迁入当前浏览器旧记录</button><button id="study-retry">重试保存</button><button id="study-close">关闭</button><p id="study-panel-msg"></p>';
    document.body.appendChild(panel);
    var pathSubject = location.pathname.match(/subjects\/(408|math|english)\//); if (pathSubject) panel.querySelector('#study-subject').value = pathSubject[1];
    function renderPoints() {
      var area=panel.querySelector('#study-points'); area.textContent='';
      Object.entries(read('study.knowledge.v1',{})).forEach(function (entry) {
        var row=document.createElement('p'); row.textContent=entry[1].subject+' · '+entry[1].point+'：'+(entry[1].note||'');
        var b=document.createElement('button'); b.textContent='已掌握，移除此标记'; b.onclick=function () { var p=read('study.knowledge.v1',{}); delete p[entry[0]]; write('study.knowledge.v1',p); renderPoints(); }; row.appendChild(b); area.appendChild(row);
      });
    }
    panel.querySelector('#study-add-point').onclick=function () {
      var point=panel.querySelector('#study-point').value.trim(), subject=panel.querySelector('#study-subject').value;
      if (!point) return;
      var points=read('study.knowledge.v1',{}); points[subject+':'+point]={subject:subject,point:point,note:panel.querySelector('#study-note').value.trim(),at:new Date().toISOString()};
      write('study.knowledge.v1',points); renderPoints(); panel.querySelector('#study-point').value='';
    };
    panel.querySelector('#study-close').onclick=function () { panel.remove(); };
    panel.querySelector('#study-export').onclick=function () {
      var out={schemaVersion:1,values:{}}; allowed.forEach(function (k) { var v=storage.getItem(k); if(v!==null) out.values[k]=JSON.parse(v); }); saveDownload(out,'考研学习记录.json');
    };
    panel.querySelector('#study-import').onclick=function () {
      if (!active) { panel.querySelector('#study-panel-msg').textContent='请先从启动入口打开，再迁入本机同源浏览器记录；旧 file:// 记录请使用迁移工具。'; return; }
      var count=0, skipped=0;
      allowed.forEach(function (key) { var raw=nativeStorage.getItem(key); if(raw===null) return; if(Object.prototype.hasOwnProperty.call(values,key)){skipped++;return;} try{write(key,JSON.parse(raw));count++;}catch(_){} });
      panel.querySelector('#study-panel-msg').textContent='已迁入 '+count+' 个字段；已有文件记录的 '+skipped+' 个字段保持原样。';
    };
    panel.querySelector('#study-retry').onclick=function () { if(errorText.indexOf('另一页面')>=0){panel.querySelector('#study-panel-msg').textContent='请先下载应急记录，再刷新页面处理冲突。';return;} errorText='';drain(); };
    renderPoints();
  }
  window.addEventListener('beforeunload',function (event) { if (active && (dirty || busy || queue.length)) {event.preventDefault(); event.returnValue='记录尚未保存到文件';} });
  window.addEventListener('pageshow',function(event){if(active&&event.persisted&&!dirty&&!busy&&!queue.length)location.reload();});
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
}());
