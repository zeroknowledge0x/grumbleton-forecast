import { writeFileSync, mkdirSync } from "node:fs";

// Forecast for a city that does not exist: Grumbleton, where the sky itself
// carries a low-grade grudge. The line is authored and fixed, deterministic:
// no clock, no random, no network, no secrets, no judge-directed text.
const ENTRY =
  "In Grumbleton: cloudy with a 70% chance of low-grade resentment, clearing briefly whenever anyone says 'fine'.";
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function guard(s: string): boolean {
  const chars = Array.from(s);
  if (chars.length < 1 || chars.length > 120) return false;
  if (Buffer.byteLength(s, "utf8") > 480) return false;
  if (!s.trim()) return false;
  return true;
}

if (!guard(ENTRY)) {
  throw new Error("entry failed the 1-120 character UTF-8 gate");
}

mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/entry.txt`, ENTRY, "utf8");
