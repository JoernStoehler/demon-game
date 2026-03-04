#!/usr/bin/env node
/**
 * Generate the Open Graph social preview image (1200x630) using Playwright.
 * Renders a simple branded HTML page and screenshots it.
 *
 * Usage: node scripts/generate-og-image.mjs
 * Output: public/og-image.png
 */
import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../public/og-image.png");

const html = `<!DOCTYPE html>
<html>
<head>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    background: #2A1F0F;
    font-family: 'Space Mono', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #D4C8A0;
  }
  h1 {
    font-size: 72px;
    font-weight: 700;
    letter-spacing: 12px;
    color: #B8A668;
    margin-bottom: 16px;
  }
  .divider {
    width: 80px;
    height: 4px;
    background: #B8A668;
    border-radius: 2px;
    margin-bottom: 24px;
  }
  .subtitle {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #8A7A5A;
    margin-bottom: 32px;
  }
  .tagline {
    font-size: 16px;
    color: #8A7A5A;
    max-width: 600px;
    text-align: center;
    line-height: 1.6;
  }
</style>
</head>
<body>
  <h1>THE PAUSE</h1>
  <div class="divider"></div>
  <div class="subtitle">Director-General, ISIA</div>
  <div class="tagline">
    Enforce the international ban on superintelligence.
    Every decision has consequences. How long can you hold?
  </div>
</body>
</html>`;

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
const buffer = await page.screenshot({ type: "png" });
writeFileSync(outPath, buffer);
await browser.close();

console.log(`Generated: ${outPath} (${buffer.length} bytes)`);
