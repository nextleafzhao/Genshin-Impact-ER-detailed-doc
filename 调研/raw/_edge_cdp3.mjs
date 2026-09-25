// 通用 headless Edge CDP 抓取器 v3。
// 用法: node _edge_cdp3.mjs <outDir> page <lang:id:name> ...
//       node _edge_cdp3.mjs <outDir> eval <url> <exprFile> <outName>
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = process.argv[2];
const mode = process.argv[3];
mkdirSync(outDir, { recursive: true });

const PORT = 9335;
const udd = mkdtempSync(join(tmpdir(), 'edgecdp3-'));
const child = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--disable-extensions', '--disable-background-networking', '--mute-audio',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${udd}`, 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function version() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (r.ok) return await r.json();
    } catch {}
    await sleep(500);
  }
  throw new Error('edge devtools never came up');
}

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); }
  static async connect(url) {
    const ws = new WebSocket(url);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    const c = new CDP(ws);
    ws.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.id && c.pending.has(m.id)) {
        const { res, rej } = c.pending.get(m.id);
        c.pending.delete(m.id);
        m.error ? rej(new Error(JSON.stringify(m.error))) : res(m.result);
      }
    };
    return c;
  }
  send(method, params = {}, sessionId) {
    const id = ++this.id;
    const p = { id, method, params };
    if (sessionId) p.sessionId = sessionId;
    this.ws.send(JSON.stringify(p));
    return new Promise((res, rej) => this.pending.set(id, { res, rej }));
  }
  close() { try { this.ws.close(); } catch {} }
}

const v = await version();
const cdp = await CDP.connect(v.webSocketDebuggerUrl);
const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
await cdp.send('Page.enable', {}, sessionId);
await cdp.send('Runtime.enable', {}, sessionId);

async function run(expr, tries, wantLen) {
  let out = '';
  for (let i = 0; i < tries; i++) {
    await sleep(1000);
    const r = await cdp.send('Runtime.evaluate',
      { expression: expr, returnByValue: true, awaitPromise: false }, sessionId);
    if (r.exceptionDetails) {
      console.log('JSERR ' + JSON.stringify(r.exceptionDetails).slice(0, 200));
      return '';
    }
    out = r.result ? r.result.value : '';
    if (typeof out === 'string' && out.length >= wantLen) return out;
    if (typeof out !== 'string' && out != null) return out;
  }
  return out;
}

const PAGE_EXPR = `(() => {
  const el = document.querySelector('.news-detail-content, .detail-content, article, #__nuxt');
  return el ? el.innerText : document.body.innerText;
})()`;

if (mode === 'page') {
  for (const spec of process.argv.slice(4)) {
    const [lang, id, name] = spec.split(':');
    const url = `https://genshin.hoyoverse.com/${lang}/news/detail/${id}`;
    try {
      await cdp.send('Page.navigate', { url }, sessionId);
      const text = await run(PAGE_EXPR, 45, 5000);
      writeFileSync(join(outDir, name),
        `SOURCE: ${url}\nFETCHED: 2026-09-22\nRENDERED BY: headless Edge (CDP)\n\n${text}\n`, 'utf8');
      console.log(`SAVED ${name} len=${text.length} ${text.includes('月之輪') ? 'HAS_MOONWHEEL' : 'no_moonwheel'}`);
    } catch (e) { console.log(`FAIL ${spec} ${e && e.message}`); }
  }
} else if (mode === 'eval') {
  const url = process.argv[4];
  const expr = readFileSync(process.argv[5], 'utf8');
  const outName = process.argv[6];
  await cdp.send('Page.navigate', { url }, sessionId);
  const out = await run(expr, 30, 300);
  if (outName) { writeFileSync(join(outDir, outName), String(out), 'utf8'); }
  console.log(`EVAL ${url} -> ${String(out).length} chars`);
}

cdp.close();
try { child.kill(); } catch {}
await sleep(400);
process.exit(0);
