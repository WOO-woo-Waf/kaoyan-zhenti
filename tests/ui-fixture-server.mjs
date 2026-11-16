import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from '../tools/study-core.mjs';
import {createStudyServer} from '../tools/study-server.mjs';
const dataDir=fs.mkdtempSync(path.join(ROOT,'_tmp','ui-check-'));
const server=createStudyServer({dataDir});
server.listen(0,'127.0.0.1',()=>console.log(JSON.stringify({url:'http://127.0.0.1:'+server.address().port,dataDir})));
process.on('SIGTERM',()=>server.close(()=>process.exit(0)));
