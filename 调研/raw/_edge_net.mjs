// 捕获页面加载期间的 XHR/fetch 请求 URL（用于发现官网新闻列表 API）。
// 用法: node _edge_net.mjs <url> [filterSubstr] [scrollRounds]
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const [url, filterSubstr, scrollRoundsRaw] = process.argv.slice(2);
const scrollRounds = parseInt(scrollRoundsRaw || '10', 10);
const outDir = '调研\\raw';
mkdirSync(outDir, { recursive: true });
const PORT = 9471;
const udd = mkdtempSync(join(tmpdir(), 'edgenet-'));
const child = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--disable-extensions', '--mute-audio', '--blink-settings=imagesEnabled=false',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${udd}`, 'about:blank',
], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function version() {
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(`http://127.0.0.1:${PORT}/json/version`); if (r.ok) return await r.json(); } catch {}
    await sleep(500);
  }
  throw new Error('no devtools');
}
class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); }
  static async connect(u) {
    const ws = new WebSocket(u);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    const c = new CDP(ws);
    ws.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.id && c.pending.has(m.id)) {
        const { res, rej } = c.pending.get(m.id); c.pending.delete(m.id);
        m.error ? rej(new Error(JSON.stringify(m.error))) : res(m.result);
      } else if (m.method === 'Network.requestWillBeSent') {
        seen.push(m.params.request.url);
      } else if (m.method === 'Network.responseReceived') {
        seenResp.push(`${m.params.response.status} ${m.params.response.mimeType} ${m.params.response.url}`);
      }
    };
    return c;
  }
  send(method, params = {}, sessionId) {
    const id = ++this.id; const p = { id, method, params };
    if (sessionId) p.sessionId = sessionId;
    this.ws.send(JSON.stringify(p));
    return new Promise((res, rej) => this.pending.set(id, { res, rej }));
  }
  close() { try { this.ws.close(); } catch {} }
}
const seen = [];
const seenResp = [];
const v = await version();
const cdp = await CDP.connect(v.webSocketDebuggerUrl);
const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
await cdp.send('Page.enable', {}, sessionId);
await cdp.send('Runtime.enable', {}, sessionId);
await cdp.send('Network.enable', {}, sessionId);
await cdp.send('Page.navigate', { url }, sessionId);
for (let i = 0; i < 20; i++) {
  await sleep(1000);
  const r = await cdp.send('Runtime.evaluate', { expression: 'document.body ? document.body.innerText.length : 0', returnByValue: true }, sessionId);
  if ((r.result && r.result.value) > 500) break;
}
for (let i = 0; i < scrollRounds; i++) {
  await cdp.send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight)', returnByValue: true }, sessionId);
  await sleep(1500);
}
const filt = (s) => !filterSubstr || s.includes(filterSubstr);
const report = [
  `# NET CAPTURE for ${url}`,
  `FILTER: ${filterSubstr || '(none)'}`,
  '',
  '## REQUESTS (filtered)',
  ...seen.filter(filt),
  '',
  '## RESPONSES (filtered)',
  ...seenResp.filter(filt),
].join('\n');
writeFileSync(join(outDir, '_t_net.txt'), report, 'utf8');
console.log(`TOTAL requests=${seen.length} matched=${seen.filter(filt).length}`);
console.log(report.slice(0, 6000));
cdp.close();
try { child.kill(); } catch {}
await sleep(300);
process.exit(0);
