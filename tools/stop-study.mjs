import {ROOT} from './study-core.mjs';
const url = `http://127.0.0.1:${Number(process.env.STUDY_PORT || 17866)}`;
try {
  const res = await fetch(url + '/api/health', {signal:AbortSignal.timeout(1000)}), info=await res.json();
  if(info.app!=='kaoyan-zhenti-study'||info.root!==ROOT||!Number.isInteger(info.pid)) throw new Error('目标身份不匹配，未停止');
  process.kill(info.pid); console.log('已停止本目录的学习库保存程序。');
} catch(e) { if(e.message.includes('fetch failed')) console.log('本机保存程序未运行。'); else throw e; }
