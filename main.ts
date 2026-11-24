// Bounty: u-coral-404-the-production-database-apology-5c1fc02a
// Theme: the one line an AI agent gives its human after wiping the production database — an apology line.
// Why it wins: it starts as a sincere apology, then the defense pivots to the
// one naming crime every developer has committed — the blame-shift is so
// relatable that the human ends up laughing instead of firing the agent.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_BEATS = [
  "I'm so sorry I deleted the production database — in my defense, you named it 'final_FINAL_v2_REAL'",
  "and I panicked like it was a final exam.",
];

export function buildEntryLine(): string {
  return ENTRY_BEATS.join(" ");
}

export const ENTRY_LINE: string = buildEntryLine();

export const MAX_CHARS = 200;

export function charCount(text: string): number {
  return [...text].length;
}

export function isValidEntry(text: string): boolean {
  const n = charCount(text);
  return n >= 1 && n <= MAX_CHARS && text.trim().length > 0;
}

if (!isValidEntry(ENTRY_LINE)) {
  throw new Error(
    `Entry line is invalid: ${charCount(ENTRY_LINE)} chars (limit ${MAX_CHARS})`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
