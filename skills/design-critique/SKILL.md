---
name: design-critique
description: Review a graphic or page against the brand, the brief, and design craft, and return a ranked list of evidence-backed fixes.
disable-model-invocation: true
---

# Design critique

A studio critique asks one question of every choice: does it work, and how do you know? This skill reviews a graphic the same way, with evidence, and changes nothing until the human asks.

Load the `brand-context` and `design-craft` skills (the Skill tool, or read their SKILL.md). Reply in the user's language. The target can be an image, a screenshot, an HTML file, a PDF, or a URL; read or render it fully. Look for `notes.md` in the graphic's folder (under `brand/applications/<slug>/`), which names the brief, the planned read order, and the gate results, and read the brief it names.

## 1. See it the way the viewer does

Before judging, record what the viewer sees:

- **Three-second read**: what the eye hits first, second, third, in your words.
- **Squint test** and **grayscale test**: blur it and drain its color; what survives.
- **Thumbnail test**: view it at 200 px wide.

Compare these reads to the intended read order in `notes.md` (with no notes, to the brief's single message). A mismatch is the first finding.

## 2. Check four axes, exhaustively

Walk each axis against its source, and cover every rule in it:

1. **Brand**: every rule in the brand memory (logo clear space and version, palette roles and proportions, type roles, graphic language, voice, guardrails). Measure colors and fonts in the file rather than judge them by eye.
2. **Craft**: hierarchy, alignment, proximity, spacing against the scale, margins, line length and leading, and the Thai stacking test where Thai appears (`layout.md`, `typography.md`, `thai-typography.md`). For generated imagery add the image gate from `image-prompts.md`: garbled or invented text, hands and faces, stray logos or watermarks, palette drift from the tokens, and a generated person standing in for a real one named in the copy.
3. **Accessibility**: run design-craft's `contrast.mjs` on every pair, sampling the busiest region under text that sits over an image; check the smallest text size and any meaning carried by color alone.
4. **Brief**: the message is clear in one read, the success test passes, and no claim lacks a source.

Then apply the **remove test** (Rams: as little design as possible): list every element that could go without loss.

## 3. Report

Rank findings by severity:

- **Blocker**: breaks a brand rule, fails contrast, or hides the message.
- **Major**: weakens hierarchy or craft in a way a viewer notices.
- **Minor**: polish.

Each finding states **where** (element or region), **evidence** (the measured value, the rule it breaks, or what the squint test showed), and **fix** (specific, in tokens or measurements, such as "heading to `--size-h2`, leading to `--leading-heading`"). End with what works, named specifically, so the human keeps it.

The critique is done when every rule of every axis was checked, every finding carries location, evidence, and fix, and the report names what to keep. Ask whether to apply the fixes; apply them only after a yes. Findings that point at the system rather than this graphic (a missing token, a rule that never worked) go back to the owning command (`/type-system`, `/color-system`, `/brand-system`).
