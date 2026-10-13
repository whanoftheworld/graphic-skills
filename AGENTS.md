# Conventions for this repo

Skills live flat in `skills/<name>/SKILL.md`, so every installer (Codex plugins, the `skills` CLI, copying by hand) finds them.

## Invocation

Every skill is either **user-invoked** or **model-invoked**:

- **User-invoked**: reachable only when the human types it. Set `disable-model-invocation: true` in `SKILL.md` and `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. The `description` is one human-facing line with no trigger phrases.
- **Model-invoked**: the default. No `disable-model-invocation`, no `policy` block. The `description` is model-facing and carries the trigger branches.

Keep the two harness settings in sync; `node scripts/check.mjs` fails when they drift. A user-invoked skill can load a model-invoked one ("Load the `x` skill: the Skill tool, or read its SKILL.md") but can never fire another user-invoked skill: when a step needs one, tell the human to type it.

## Writing a skill

- Follow `writing-for-agents`: the top of `SKILL.md` carries the steps; reference that only some branches need goes in a sibling file behind a pointer. Every step ends on a completion criterion that can be checked.
- Positive phrasing. Say the behavior you want, not the one you forbid.
- Section headings in `BRAND.md` are an interface: other skills look them up. Rename one only by updating every skill that names it, and the template in `skills/brand-context/BRAND-TEMPLATE.md`.
- Numbers come from scripts or cited sources. A new rule of thumb says where it is from, or is labeled practice.
- No em dashes in prose.

## Keeping things in step

- Adding, renaming, or removing a skill: update `.claude-plugin/plugin.json`, the README tables (English and Thai), and `skills/ask-designer/SKILL.md`, so the router never lies.
- `skills/brand-system/templates/` are copies of the worked example in `examples/morning-mist/brand/`. Edit the example, then re-copy `tokens.json` (as `tokens.template.json`) and `brand-board.html`.
- The Thai font table in `design-craft/thai-typography.md` is dated. To refresh it, repeat the method in the file.

## Before a pull request

```
node scripts/check.mjs
claude plugin validate .
```
