#!/usr/bin/env node
// Tonal scale generator in OKLCH. Zero dependencies.
//
//   node palette.mjs "#2f6b4f"                 table: 11 steps with contrast against white and black
//   node palette.mjs "#2f6b4f" --json primary   tokens.json snippet: { "primary": { "50": { "$value": "#..." }, ... } }
//
// Hue is held constant; lightness steps are even; chroma follows a bell around the base color's
// lightness so tints stay clean and shades stay rich, then is reduced until the color fits sRGB.
// The table names the step the base color is nearest to; pin the exact base hex to that step in tokens.
import { ratio, parseHex } from "./contrast.mjs";
import { pathToFileURL } from "node:url";

const STEPS = { 50: 0.975, 100: 0.945, 200: 0.89, 300: 0.82, 400: 0.73, 500: 0.64, 600: 0.55, 700: 0.46, 800: 0.38, 900: 0.3, 950: 0.22 };

const toLinear = (v) => { const c = v / 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };

function srgbEncode(c) {
  return 255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
}

function hexToOklch(hex) {
  const [r, g, b] = parseHex(hex).map(toLinear);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return { L, C: Math.hypot(a, bb), h: Math.atan2(bb, a) };
}

function oklchToRgb({ L, C, h }) {
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

const inGamut = (rgb) => rgb.every((v) => v >= -0.0005 && v <= 1.0005);
const toHex = (rgb) => "#" + rgb.map((v) => Math.round(Math.min(255, Math.max(0, srgbEncode(Math.min(1, Math.max(0, v)))))).toString(16).padStart(2, "0")).join("");

function fit(L, C, h) {
  let lo = 0;
  let hi = C;
  if (inGamut(oklchToRgb({ L, C, h }))) return toHex(oklchToRgb({ L, C, h }));
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklchToRgb({ L, C: mid, h }))) lo = mid; else hi = mid;
  }
  return toHex(oklchToRgb({ L, C: lo, h }));
}

export function scale(baseHex) {
  const base = hexToOklch(baseHex);
  const out = {};
  for (const [step, L] of Object.entries(STEPS)) {
    const bell = Math.max(0.15, 1 - Math.abs(L - base.L) * 1.25);
    out[step] = fit(L, base.C * bell, base.h);
  }
  return out;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const [base, flag, name = "color"] = process.argv.slice(2);
  if (!base) {
    console.error('usage: palette.mjs "#rrggbb" [--json <name>]');
    process.exit(2);
  }
  const s = scale(base);
  if (flag === "--json") {
    console.log(JSON.stringify({ [name]: Object.fromEntries(Object.entries(s).map(([k, v]) => [k, { $value: v }])) }, null, 2));
  } else {
    const closest = Object.entries(STEPS).sort((a, b) => Math.abs(a[1] - hexToOklch(base).L) - Math.abs(b[1] - hexToOklch(base).L))[0][0];
    console.log(`base ${base} sits nearest step ${closest}\n`);
    console.log("step  hex      on white  on black");
    for (const [k, v] of Object.entries(s)) {
      const w = ratio(v, "#ffffff");
      const bl = ratio(v, "#000000");
      console.log(`${k.padEnd(5)} ${v}  ${w.toFixed(2).padStart(5)}${w >= 4.5 ? "*" : " "}   ${bl.toFixed(2).padStart(5)}${bl >= 4.5 ? "*" : " "}`);
    }
    console.log("\n* = passes 4.5:1 for body text on that background");
  }
}
