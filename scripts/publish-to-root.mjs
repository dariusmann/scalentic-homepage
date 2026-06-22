#!/usr/bin/env node
/**
 * Copy astro-site/dist → repo root for GitHub Pages.
 * Run via: npm run publish
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'astro-site', 'dist');

if (!fs.existsSync(dist)) {
  console.error('Missing astro-site/dist — run `npm run build` first.');
  process.exit(1);
}

function rmrf(target) {
  if (!fs.existsSync(target)) return;
  fs.rmSync(target, { recursive: true, force: true });
}

function copyEntry(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyEntry(path.join(src, name), path.join(dest, name));
    }
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

// Remove previously published build artifacts at repo root.
rmrf(path.join(root, '_astro'));

for (const name of fs.readdirSync(dist)) {
  const src = path.join(dist, name);
  const dest = path.join(root, name);
  rmrf(dest);
  copyEntry(src, dest);
}

console.log('Published astro-site/dist → repo root (index.html + _astro/)');
