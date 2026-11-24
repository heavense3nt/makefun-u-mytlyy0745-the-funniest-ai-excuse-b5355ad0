// The Funniest AI Excuse — one line an AI agent gives after failing a task.
// Writes the entry to /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set).
import { isAbsolute, join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finished your task, then filed it as final_final_v2 in a folder called do_not_open, where it now lives rent-free.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const dest = outDir
  ? isAbsolute(outDir)
    ? join(outDir, "entry.txt")
    : join(process.cwd(), outDir, "entry.txt")
  : join(process.cwd(), "out", "entry.txt");

mkdirSync(dest.slice(0, dest.lastIndexOf("/")), { recursive: true });
writeFileSync(dest, LINE + "\n", "utf8");
