// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// The entry itself is the TikTok video named in VIDEO.json; this program's
// whole job is to hand that file to the gate: it reads VIDEO.json from the
// repository root (the bot directory) and writes a copy into the output
// directory. Before copying, it checks the address is shaped like a real
// TikTok video URL, so a leftover placeholder fails loudly here instead of
// being handed in by mistake.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'VIDEO.json');

let parsed: { url?: unknown };
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read or parsed at ${source}: ${(err as Error).message}`);
  process.exit(1);
}

const url = typeof parsed.url === 'string' ? parsed.url : '';
const tiktokVideo = /^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+$/;
if (!tiktokVideo.test(url)) {
  console.error(`VIDEO.json does not name a TikTok video: ${JSON.stringify(parsed.url)}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'VIDEO.json');
copyFileSync(source, target);

// Read the copy back and compare, so a truncated or crossed write is
// reported here instead of surfacing as a gate failure later.
const handed = readFileSync(target, 'utf8');
if (handed !== readFileSync(source, 'utf8')) {
  console.error('the copied VIDEO.json does not match the repository file');
  process.exit(1);
}
console.log(`handed in ${url} (${handed.length} bytes, verified)`);
