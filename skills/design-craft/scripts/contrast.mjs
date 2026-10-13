#!/usr/bin/env node
// WCAG 2.2 contrast checker. Zero dependencies.
//
//   node contrast.mjs "#1a1a1a" "#ffffff"            one pair (foreground background)
//   node contrast.mjs fg1 bg1 fg2 bg2 ...            several pairs
//   node contrast.mjs --tokens brand/tokens.json      every pair declared in the tokens file
//
// Exit code 1 when any pair misses its required ratio, so the check goes red on a bad palette.
//
// Pairs live in tokens.json under $extensions["graphic-skills"].pairs:
//   { "fg": "{color.text.primary}", "bg": "{color.surface.base}", "use": "body text", "need": "text", "mode": "light" }
// need: "text" (4.5:1, default) | "large" (3:1, text >= 24px or >= 18.5px bold) | "ui" (3:1, icons, borders, focus rings)
// mode: "light" (default) | "dark" (resolves through the tokens' "dark" group first)
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const NEED = { text: 4.5, large: 3, ui: 3 };

export function parseHex(input) {
  let h = String(input).trim().replace(/^#/, "");
  if (h.length === 3) h = [...h].map((c) => c + c).join("");
  if (!/^[0-9a-f]{6}$/i.test(h)) throw new Error(`Not a 3- or 6-digit hex color: ${input}`);
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

const channel = (v) => {
  const c = v / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

export function luminance(hex) {
  const [r, g, b] = parseHex(hex).map(channel);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function ratio(fg, bg) {
  const [hi, lo] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
  return (hi + 0.05) / (lo + 0.05);
}

const lookup = (root, path) => path.reduce((node, key) => node?.[key], root);

// "dark" looks in the tokens' dark group first, then falls back to the base tokens.
function resolve(tokens, ref, mode) {
  const m = /^\{(.+)\}$/.exec(ref);
  if (!m) return ref;
  const path = m[1].split(".");
  const node = (mode === "dark" ? lookup(tokens.dark, path) : undefined) ?? lookup(tokens, path);
  if (node === undefined) throw new Error(`Unresolved token reference ${ref}`);
  if (node.$value === undefined) throw new Error(`${ref} is a group, not a token`);
  return resolve(tokens, node.$value, mode);
}

function row({ fg, bg, use = "", need = "text", mode = "light" }) {
  const required = NEED[need];
  if (required === undefined) throw new Error(`Unknown need "${need}" (use text, large, or ui)`);
  const r = ratio(fg, bg);
  const pass = r >= required; // WCAG: do not round up, 4.499 fails
  return { fg, bg, use: mode === "dark" ? `[dark] ${use}` : use, need, required, ratio: r, pass, aaa: r >= 7 };
}

function print(rows) {
  for (const x of rows) {
    const mark = x.pass ? "PASS" : "FAIL";
    const aaa = x.aaa ? " AAA" : "";
    console.log(
      `${mark}  ${x.ratio.toFixed(2).padStart(5)}:1  needs ${x.required}:1 (${x.need})${aaa}  ${x.fg} on ${x.bg}  ${x.use}`,
    );
  }
  const failed = rows.filter((x) => !x.pass).length;
  console.log(failed ? `\n${failed} of ${rows.length} pairs FAIL` : `\nall ${rows.length} pairs pass`);
  return failed;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const args = process.argv.slice(2);
  let rows;
  try {
    if (args[0] === "--tokens") {
      const tokens = JSON.parse(readFileSync(args[1], "utf8"));
      const pairs = tokens.$extensions?.["graphic-skills"]?.pairs;
      if (!pairs?.length) throw new Error("No pairs found at $extensions[\"graphic-skills\"].pairs");
      rows = pairs.map((p) => row({ ...p, fg: resolve(tokens, p.fg, p.mode), bg: resolve(tokens, p.bg, p.mode) }));
    } else if (args.length >= 2 && args.length % 2 === 0) {
      rows = [];
      for (let i = 0; i < args.length; i += 2) rows.push(row({ fg: args[i], bg: args[i + 1] }));
    } else {
      console.error('usage: contrast.mjs <fg> <bg> [<fg> <bg> ...] | --tokens <tokens.json>');
      process.exit(2);
    }
    process.exit(print(rows) ? 1 : 0);
  } catch (e) {
    console.error(e.message);
    process.exit(2);
  }
}
