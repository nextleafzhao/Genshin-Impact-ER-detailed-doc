// 粗扫 hoyoverse 新闻 ID：返回每个 ID 的首行标题（约 2.2s/ID）。
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const [outDir, lang, from, to, stepArg, outName, portArg] = process.argv.slice(2);
const step = stepArg ? parseInt(stepArg, 10) : 1;
mkdirSync(outDir, { recursive: true });
const PORT = portArg ? parseInt(portArg, 10) : 9600;
const udd = mkdtempSync(join(tmpdir(), 'edgecoarse-'));
const child = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--disable-extensions', '--disable-background-networking', '--mute-audio',
  '--blink-settings=imagesEnabled=false',
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
const v = await version();
const cdp = await CDP.connect(v.webSocketDebuggerUrl);
const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
await cdp.send('Page.enable', {}, sessionId);
await cdp.send('Runtime.enable', {}, sessionId);

const results = [];
const lo = parseInt(from, 10), hi = parseInt(to, 10);
for (let id = lo; id <= hi; id += step) {
  const url = `https://genshin.hoyoverse.com/${lang}/news/detail/${id}`;
  try {
    await cdp.send('Page.navigate', { url }, sessionId);
    let title = '';
    for (let i = 0; i < 12; i++) {
      await sleep(500);
      const r = await cdp.send('Runtime.evaluate', {
        expression: `(() => { const el = document.querySelector('#__nuxt'); if (!el) return ''; const t = el.innerText; const lines = t.split('\\n').map(s => s.trim()).filter(s => s.length > 5); return lines[0] || ''; })()`,
        returnByValue: true,
      }, sessionId);
      title = (r.result && r.result.value) || '';
      if (title) break;
    }
    const line = `${id}\t${title.replace(/\s+/g, ' ').slice(0, 120)}`;
    results.push(line);
    if (title) console.log(line);
  } catch (e) { /* skip */ }
  if ((id - lo) % 200 === 0) {
    writeFileSync(join(outDir, outName || `_coarse_${lo}_${hi}.txt`), results.join('\n'), 'utf8');
  }
}
writeFileSync(join(outDir, outName || `_coarse_${lo}_${hi}.txt`), results.join('\n'), 'utf8');
console.log(`DONE ${results.filter(r => r.split('\t')[1]).length} non-empty of ${results.length}`);
cdp.close();
try { child.kill(); } catch {}
await sleep(300);
process.exit(0);
