#!/usr/bin/env node
// Repo consistency check. Zero dependencies. Run from the repo root: node scripts/check.mjs
// Exit code 1 when anything is inconsistent.
//
//  - every skills/<name>/SKILL.md has frontmatter whose name equals its folder and a description
//  - invocation stays in sync: disable-model-invocation in SKILL.md <=> allow_implicit_invocation: false in agents/openai.yaml
//  - .claude-plugin/plugin.json lists exactly the skill folders
//  - every relative markdown link in skills/, docs/, and the READMEs points at a file that exists
//  - the contrast and theme scripts pass on the worked example
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";

const errors = [];
const fail = (msg) => errors.push(msg);

const skillDirs = readdirSync("skills").filter((d) => statSync(join("skills", d)).isDirectory());

for (const dir of skillDirs) {
  const file = join("skills", dir, "SKILL.md");
  if (!existsSync(file)) { fail(`${dir}: missing SKILL.md`); continue; }
  const text = readFileSync(file, "utf8");
  const fm = /^---\n([\s\S]*?)\n---\n/.exec(text)?.[1];
  if (!fm) { fail(`${file}: no frontmatter`); continue; }
  const field = (k) => new RegExp(`^${k}:\\s*(.+)$`, "m").exec(fm)?.[1]?.trim();
  if (field("name") !== dir) fail(`${file}: name "${field("name")}" does not match folder`);
  if (!field("description")) fail(`${file}: missing description`);
  const userInvoked = field("disable-model-invocation") === "true";
  const yaml = join("skills", dir, "agents", "openai.yaml");
  if (!existsSync(yaml)) { fail(`${dir}: missing agents/openai.yaml`); continue; }
  const policyOff = /allow_implicit_invocation:\s*false/.test(readFileSync(yaml, "utf8"));
  if (userInvoked !== policyOff) fail(`${dir}: invocation out of sync (SKILL.md user-invoked=${userInvoked}, openai.yaml policy off=${policyOff})`);
}

const plugin = JSON.parse(readFileSync(".claude-plugin/plugin.json", "utf8"));
const listed = new Set(plugin.skills.map((p) => p.replace("./skills/", "")));
for (const d of skillDirs) if (!listed.has(d)) fail(`plugin.json does not list ${d}`);
for (const l of listed) if (!skillDirs.includes(l)) fail(`plugin.json lists missing skill ${l}`);

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) { if (!["node_modules", ".git", ".scratch"].includes(e)) yield* walk(p); }
    else if (p.endsWith(".md")) yield p;
  }
}
const mdFiles = [...walk("skills"), ...walk("docs"), "README.md", "README.th.md", "AGENTS.md"].filter(existsSync);
for (const f of mdFiles) {
  const text = readFileSync(f, "utf8").replace(/```[\s\S]*?```/g, "");
  for (const m of text.matchAll(/\]\((?!https?:|#|mailto:)([^)\s]+)\)/g)) {
    const target = resolve(dirname(f), m[1].split("#")[0]);
    if (!existsSync(target)) fail(`${f}: broken link ${m[1]}`);
  }
  if (text.includes("—")) fail(`${f}: contains an em dash`);
}

const run = (args) => spawnSync("node", args, { encoding: "utf8" });
const tokens = "examples/morning-mist/brand/tokens.json";
const c = run(["skills/design-craft/scripts/contrast.mjs", "--tokens", tokens]);
if (c.status !== 0) fail(`contrast check failed on the example:\n${c.stdout}${c.stderr}`);
const t = run(["skills/brand-system/scripts/build-theme.mjs", tokens, join(tmpdir(), "graphic-skills-theme.css")]);
if (t.status !== 0) fail(`build-theme failed on the example:\n${t.stdout}${t.stderr}`);

if (errors.length) {
  console.error(errors.map((e) => `FAIL  ${e}`).join("\n"));
  process.exit(1);
}
console.log(`ok: ${skillDirs.length} skills, ${mdFiles.length} markdown files, example tokens pass`);
