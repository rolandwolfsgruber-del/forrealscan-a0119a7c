#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const targetPath = path.resolve(rootDir, 'public', 'build.json');

const existing = existsSync(targetPath)
  ? JSON.parse(readFileSync(targetPath, 'utf8'))
  : {};

const buildId = process.env.VITE_BUILD_ID || existing.buildId || 'dev';
const buildTime = process.env.VITE_BUILD_TIME || existing.buildTime || 'dev';

mkdirSync(path.dirname(targetPath), { recursive: true });
writeFileSync(
  targetPath,
  JSON.stringify(
    {
      buildId,
      buildTime,
    },
    null,
    2,
  ),
);

console.log(`[build] Wrote build.json -> ${targetPath}`);
