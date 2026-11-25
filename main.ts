// Pigeon Pitch, One Line — u-donrulezz-pigeon-pitch-one-line-af06c6cf
//
// A city pigeon pitches investors its startup, Coo: the Uber for
// breadcrumbs. The pitch is a fixed, hand-written string — no randomness,
// no clock, no network, no input — so every run produces byte-identical
// output. The program writes it to <OUTPUT_DIR>/entry.txt, where
// OUTPUT_DIR defaults to /output (the grader's output directory).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "I'm raising a seed round — literally, seeds — for Coo, the Uber for breadcrumbs: 40,000 pigeons already queue on your statue daily, and my co-founder is the statue.";

// The gate requires 1–200 characters, one line, not only whitespace.
// Fail loudly instead of writing an entry the gate would refuse.
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.includes("\n") || PITCH.trim().length === 0) {
  throw new Error(`Pitch is ${PITCH.length} characters; must be 1–200, single line.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
