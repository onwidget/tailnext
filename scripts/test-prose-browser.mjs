import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';

const require = createRequire(import.meta.url);
const server = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '-p', '3100'], {
  stdio: ['ignore', 'pipe', 'pipe'],
});
let output = '';
for (const stream of [server.stdout, server.stderr]) stream.on('data', (data) => { output += data; });
const origin = 'http://127.0.0.1:3100';
let browser;
try {
  let ready = false;
  for (let i = 0; i < 120; i++) {
    if (server.exitCode !== null) throw new Error(output);
    try { ready = (await fetch(origin)).ok; } catch { /* startup */ }
    if (ready) break;
    await new Promise((done) => setTimeout(done, 500));
  }
  assert.ok(ready, output);
  browser = await chromium.launch({ headless: true });
  const routes = [
    ...(await readdir('src/content/blog')).filter((name) => name.endsWith('.mdx'))
      .map((name) => '/blog/' + name.slice(0, -4)),
    '/privacy', '/terms',
  ];
  for (const width of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    for (const route of routes) {
      const response = await page.goto(origin + route, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, route);
      const prose = page.locator('.prose').first();
      await prose.waitFor();
      const styles = await prose.evaluate((root) => {
        const paragraph = root.querySelector('p');
        const heading = root.querySelector('h1,h2,h3');
        const link = root.querySelector('p a,li a');
        const list = root.querySelector('ul,ol');
        return {
          length: root.textContent.trim().length,
          font: paragraph && parseFloat(getComputedStyle(paragraph).fontSize),
          heading: heading && parseFloat(getComputedStyle(heading).fontSize),
          link: link && getComputedStyle(link).textDecorationLine,
          list: list && getComputedStyle(list).listStyleType,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
        };
      });
      assert.ok(styles.length > 0, route);
      assert.ok(styles.font >= 18, route + ': prose font');
      if (styles.heading) assert.ok(styles.heading > styles.font, route + ': heading hierarchy');
      if (styles.link) assert.ok(styles.link.includes('underline'), route + ': link underline');
      if (styles.list) assert.notEqual(styles.list, 'none', route + ': list marker');
      assert.equal(styles.overflow, false, route + ': horizontal overflow');
    }
    await page.close();
  }
  console.log('Blog and legal prose verified at mobile and desktop widths.');
} finally {
  await browser?.close();
  server.kill('SIGTERM');
}
