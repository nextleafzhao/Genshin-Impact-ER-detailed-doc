// 通用 headless Edge CDP 批量抓取器。
// 用法: node _edge_batch.mjs <outDir> <spec...>
//   spec = <outName>|<url>|<optional selector>
// 每个 url 用新 target 渲染，取 innerText 存盘。
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = process.argv[2];
const specs = process.argv.slice(3);
mkdirSync(outDir, { recursive: true });

const PORT = 9377;
const udd = mkdtempSync(join(tmpdir(), 'edgebatch-'));
const child = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--disable-extensions', '--disable-background-networking', '--mute-audio',
  '--blink-settings=imagesEnabled=false',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${udd}`, 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function version() {
  for (let i = 0; i < 80; i++) {
    try { const r = await fetch(`http://127.0.0.1:${PORT}/json/version`); if (r.ok) return await r.json(); } catch {}
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

for (const spec of specs) {
  const [outName, url, selector] = spec.split('|');
  const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
  await cdp.send('Page.enable', {}, sessionId);
  await cdp.send('Runtime.enable', {}, sessionId);
  const sel = selector || 'body';
  const expr = `(() => { const e = document.querySelector(${JSON.stringify(sel)}); return e ? e.innerText : document.body.innerText; })()`;
  try {
    await cdp.send('Page.navigate', { url }, sessionId);
    let text = '';
    for (let i = 0; i < 40; i++) {
      await sleep(1000);
      const r = await cdp.send('Runtime.evaluate', { expression: expr, returnByValue: true }, sessionId);
      if (r.exceptionDetails) { console.log(`JSERR ${outName}`); break; }
      text = (r.result && r.result.value) || '';
      if (text.length > 6000) break;
    }
    writeFileSync(join(outDir, outName),
      `SOURCE: ${url}\nFETCHED: 2026-09-22\nRENDERED BY: headless Edge (CDP)\n\n${text}\n`, 'utf8');
    console.log(`SAVED ${outName} len=${text.length}`);
  } catch (e) {
    console.log(`FAIL ${outName} ${e && e.message}`);
  }
  try { await cdp.send('Target.closeTarget', { targetId }); } catch {}
}

cdp.close();
try { child.kill(); } catch {}
await sleep(400);
process.exit(0);
