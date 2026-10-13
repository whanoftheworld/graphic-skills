---
name: color-system
description: Choose the brand palette from meaning, category, and contrast, build the tonal scales, and prove every text pair passes.
disable-model-invocation: true
---

# Color system

Color is the fastest signal a brand sends and the easiest to get wrong without numbers. This skill chooses the palette with reasons, builds scales, and checks each pairing by script.

Load the `brand-context`, `design-craft`, and `design-grilling` skills (the Skill tool, or read their SKILL.md), and read `color.md`. Reply in the user's language. The brand memory needs a `decided` **Direction** (a chosen route, or "existing identity" kept at intake); without one, tell the human to run `/design-routes`.

## 1. Gather the evidence

From the brand memory: personality, the chosen route's palette sketch, color items in Taste evidence (read each image for hue, saturation, and temperature), constraints from the intake (colors to keep or avoid), and the logo if one is decided. Research the competitors' dominant colors and write the **category color map**: the colors to avoid blending into and the open space.

## 2. Choose the roles

Propose, with a one-line reason each, the **brand primary**, **secondary**, **accent**, and the neutral family tint. Offer two alternatives for the primary that differ on one axis (hue, or saturation) so the human can compare by eye: render `brand/explore/palette.html` with each option on a sample post, a button row, and body text, and look at it rendered. Ask which feels like the brand.

## 3. Build and prove

For each chosen color run design-craft's `palette.mjs "#hex" --json <name>`, and put the scales into `brand/tokens.json` (see TOKENS.md in `brand-context`: create the file from the template when missing, merge when present), with the exact brand hex pinned to its nearest step. Add semantic colors (success, warning, danger, info) tuned to sit beside the brand colors, and a **surface** and **text** family from the neutrals.

Declare every text-on-background pair the brand will use (body on base surface, on raised surface, on brand primary, accent on dark, each button state) under `$extensions["graphic-skills"].pairs`, with `need` set to `text`, `large`, or `ui`. Run design-craft's `contrast.mjs --tokens brand/tokens.json`. Adjust steps until every pair passes, and record the final ratios in the **Color** table.

## 4. Extend

- **Dark mode** for screen brands: derive, do not invert (see `color.md`), and re-run the pairs.
- **Print**: give the nearest CMYK or Pantone for each brand color, marked approximate and needing a proof, and define the one-color version.
- **Grayscale test**: view the palette desaturated and confirm hierarchy survives without hue.

The skill is done when every role has a hex and a scale in the tokens, every declared pair passes its required ratio (or has a named exception the human accepted), the human chose from the rendered palette page, and the **Color** section and Decision log are written, including the alternatives rejected. Set Color to `decided`.
