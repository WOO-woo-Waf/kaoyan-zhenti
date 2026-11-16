#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {ROOT, readState, persistState, updateState} from './study-core.mjs';

export function createStudyServer({dataDir = path.join(ROOT, 'study-data')} = {}) {
  fs.mkdirSync(dataDir, {recursive:true});
  const lock=path.join(dataDir,'.writer-lock.json');
  if (fs.existsSync(lock)) {
    const previous=JSON.parse(fs.readFileSync(lock,'utf8'));
    let alive=true; try {process.kill(previous.pid,0);} catch {alive=false;}
    if(alive) throw new Error('此学习档案已有保存程序在运行，未启动第二个写入者。');
    fs.unlinkSync(lock);
  }
  fs.writeFileSync(lock,JSON.stringify({pid:process.pid}),{flag:'wx'});
  let state = readState(dataDir);
  let report;
  try { report=persistState(dataDir, state); } catch(e) {fs.unlinkSync(lock);throw e;}
  const token = crypto.randomBytes(32).toString('hex');
  const types = {'.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.md':'text/plain; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.woff':'font/woff', '.woff2':'font/woff2', '.ttf':'font/ttf', '.ico':'image/x-icon'};
  const server = http.createServer(async (req, res) => {
    function send(status, body, type = 'application/json; charset=utf-8') {
      res.writeHead(status, {'Content-Type':type, 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff', 'Referrer-Policy':'no-referrer'});
      res.end(typeof body === 'string' ? body : JSON.stringify(body));
    }
    try {
      const port = server.address().port, hosts = ['127.0.0.1:' + port, 'localhost:' + port];
      if (!hosts.includes(req.headers.host)) return send(403, {error:'仅允许本机访问'});
      const url = new URL(req.url, 'http://' + req.headers.host);
      if (url.pathname.startsWith('/api/')) {
        if (req.headers['sec-fetch-site'] === 'cross-site' || (req.headers.origin && req.headers.origin !== 'http://' + req.headers.host)) return send(403, {error:'不允许跨站请求'});
        if (url.pathname === '/api/health' && req.method === 'GET') return send(200, {app:'kaoyan-zhenti-study', root:ROOT, pid:process.pid, revision:state.revision});
        if (['/api/bootstrap.js','/api/snapshot'].includes(url.pathname) && req.method === 'GET') {
          const overview=Object.fromEntries(Object.entries(report.subjects).map(([sid,s])=>[sid,s.needsHelp.map(it=>({sid,short:sid==='math'?'数学':sid==='english'?'英语':'408',id:it.id,year:it.question.year,no:it.question.no,subject:it.question.subject||'',module:it.question.module||'',point:it.question.point||it.question.type||'',text:it.question.stem||''}))]));
          if (url.pathname === '/api/snapshot') return send(200,{values:state.values,versions:state.versions,revision:state.revision,overview});
          return send(200, 'window.__STUDY_BOOT__=' + JSON.stringify({values:state.values, versions:state.versions, revision:state.revision, overview, token}).replace(/</g, '\\u003c') + ';', 'text/javascript; charset=utf-8');
        }
        if (url.pathname === '/api/value' && req.method === 'POST') {
          if (req.headers['x-study-token'] !== token || !String(req.headers['content-type']).startsWith('application/json')) return send(403, {error:'无效的保存请求'});
          const chunks = []; let length = 0;
          for await (const chunk of req) { length += chunk.length; if (length > 5 * 1024 * 1024) return send(413, {error:'学习数据过大'}); chunks.push(chunk); }
          const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
          // 单进程内同步检查版本并原子写文件；多标签旧状态不能覆盖新记录。
          const next = updateState(state, body.key, body.value, body.version);
          if (next !== state) { state = next; report=persistState(dataDir, state); }
          return send(200, {revision:state.revision, version:state.versions[body.key] || 0, savedAt:state.updatedAt});
        }
        return send(404, {error:'接口不存在'});
      }
      if (!['GET', 'HEAD'].includes(req.method)) return send(405, {error:'请求方法不支持'});
      let relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
      if (relative.split(/[\\/]/).some(p => p.startsWith('.') || ['_tmp', 'node_modules', 'tools'].includes(p))) return send(403, {error:'此路径不开放'});
      if (!types[path.extname(relative)]) return send(403, {error:'文件类型不开放'});
      // 学习档案允许浏览器阅读，但不开放仓库配置、临时资料或目录列表。
      const base = relative.startsWith('study-data/') ? dataDir : ROOT;
      if (base === dataDir) relative = relative.slice('study-data/'.length);
      const file = path.resolve(base, relative);
      if (!file.startsWith(path.resolve(base) + path.sep)) return send(403, {error:'路径越界'});
      let stat;
      try { stat = fs.statSync(file); } catch { return send(404, {error:'文件不存在'}); }
      if (!stat.isFile() || !fs.realpathSync(file).startsWith(fs.realpathSync(base) + path.sep)) return send(403, {error:'路径不开放'});
      res.writeHead(200, {'Content-Type':types[path.extname(file)], 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff'});
      if (req.method === 'HEAD') return res.end();
      fs.createReadStream(file).pipe(res);
    } catch (error) {
      if (!res.headersSent) send(error.status || (error instanceof SyntaxError ? 400 : 500), {error:error.message});
      else res.destroy();
    }
  });
  server.on('close',()=>{if(fs.existsSync(lock)){const owner=JSON.parse(fs.readFileSync(lock,'utf8'));if(owner.pid===process.pid)fs.unlinkSync(lock);}});
  return server;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.STUDY_PORT || 17866);
  const server = createStudyServer();
  server.on('error', error => { console.error('启动失败：' + error.message); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`学习库已启动：http://127.0.0.1:${server.address().port}\n自动保存位置：${path.join(ROOT, 'study-data')}\n关闭本窗口将停止保存服务。`));
}
