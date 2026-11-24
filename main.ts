// Solara-promo entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard
// library only). The entry is the X post itself: one post of your own on X that
// quotes make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it, a photo
// of its own attached, make.fun or the @makefunai tag and your play code in its
// text. This program's only job is to hand the house the post's address: it
// copies POST.json from the repository root to /output/POST.json, where the
// gate reads it. Nothing this program writes about the post is scored.
//
// POST.json must hold the real address of the post you made
// ({"url": "https://x.com/<handle>/status/<id>"}), never make.fun's post and
// never a placeholder, before you submit. If POST.json is missing or still a
// placeholder, the gate refuses the entry (valid 0).
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
