import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {ROOT} from './study-core.mjs';
const port = Number(process.env.STUDY_PORT || 17866), url = `http://127.0.0.1:${port}`;
async function health() {
  try { const res = await fetch(url + '/api/health', {signal:AbortSignal.timeout(600)}); return await res.json(); } catch { return null; }
}
let running = await health();
if (running && (running.app !== 'kaoyan-zhenti-study' || running.root !== ROOT)) throw new Error('此端口正在运行其他目录或程序，请先核对，未覆盖/停止它。');
if (!running) {
  const dir = path.join(ROOT, '_tmp'); fs.mkdirSync(dir, {recursive:true});
  const out = fs.openSync(path.join(dir, 'study-server.stdout.log'), 'a');
  const err = fs.openSync(path.join(dir, 'study-server.stderr.log'), 'a');
  const child = spawn(process.execPath, [path.join(ROOT,'tools','study-server.mjs')], {cwd:ROOT, detached:true, windowsHide:true, stdio:['ignore',out,err]});
  child.on('error', error => console.error(error.message)); child.unref(); fs.closeSync(out); fs.closeSync(err);
  for (let i=0; i<50 && !running; i++) { await new Promise(resolve=>setTimeout(resolve,100)); running=await health(); }
  if (!running || running.root !== ROOT) throw new Error('启动失败，请查看 _tmp/study-server.stderr.log。');
}
console.log(`学习库：${url}\n正式保存目录：${path.join(ROOT,'study-data')}`);
if (!process.argv.includes('--no-open')) {
  const command = process.platform === 'win32' ? 'rundll32.exe' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  const args = process.platform === 'win32' ? ['url.dll,FileProtocolHandler',url] : [url];
  const browser = spawn(command,args,{detached:true,windowsHide:true,stdio:'ignore'}); browser.on('error',error=>console.error('请手动打开：'+url+'（'+error.message+'）')); browser.unref();
}
