---
name: brand-intake
description: Hand over an existing brand (logo, fonts, colors, guidelines, past work) so the agent memorizes it and audits it.
disable-model-invocation: true
---

# Brand intake

The first move of every studio is to look at what exists before proposing anything. This skill takes everything the human already has, memorizes it in the brand memory, and audits it for gaps and contradictions.

Load the `brand-context` and `design-craft` skills (the Skill tool, or read their SKILL.md). Reply in the user's language.

## 1. Set up

Find or create `brand/` and the brand memory. If `BRAND.md` already exists, this run is an **update**: merge into it, show what changed, and overwrite nothing the human marked `decided` without asking. Create `brand/inbox/`, `brand/assets/{logo,fonts,images,references}/`.

## 2. Collect

Ask the human to hand over whatever they have, in any form, then stop asking and look at it:

- Logo files (SVG best, then PNG or PDF), and any older versions.
- Fonts in use: files, names, or screenshots of text they like.
- Colors: hex codes, swatches, or images that carry them.
- Brand guidelines, decks, or a past designer's files.
- Past work: posts, flyers, packaging, signage, the website or social handles.
- References: logos, fonts, and brands they love or hate, with any reason they already have.

Files go in `brand/inbox/` or are given by path or URL. An image attached only in chat is recorded by description; ask for the original file when it is a logo.

## 3. Extract what is there

Read every item yourself rather than asking the human to describe it.

- **Logos**: for SVG, read the fills and `font-family` straight from the source. For raster, note resolution and flag low quality.
- **Colors**: exact hex from SVG, CSS, or the human. Colors you estimate from an image are marked `estimated`, and the human confirms them.
- **Fonts**: take names from files and CSS; for images, follow "Reading a font from an image" in `typography.md` and report closest matches with confidence.
- **Websites**: fetch the page and its CSS for `font-family`, color values, and spacing. A page that renders only through JavaScript may hide them; say so.
- **Guidelines and past work**: read them fully; list the rules they state and the rules the work actually follows.

File each original into `brand/assets/…`; leave originals untouched. Record each font's source and licence, and copy font files only when the licence allows.

## 4. Audit

Write what you found as facts, separate from what should change. For each pillar (logo, typography, color, graphic language, layout, voice):

- **Established**: used consistently, with evidence.
- **Inconsistent**: name the contradiction (three different blues, four fonts) and where each appears.
- **Missing**: nothing exists to observe.

Compute, never guess: run `scripts/contrast.mjs` (in `design-craft`) on every text and background color pair found. Check the logo at 16 px and in one color. Compare the palette and marks with the category's competitors.

## 5. Write and read back

Write the **Observed** content into the brand memory with every pillar's status (`observed`, `open`, or `deferred`), each taste-evidence item with the attribute the human gave, and a Decision log row for anything the human confirmed. Then read back, in plain words, what you memorized and what you found wrong, and ask for corrections.

The intake is done when every file and link the human gave is cataloged or skipped with a stated reason, every pillar has a status with evidence, every contrast figure was computed, and the human confirmed the read-back.

Then recommend the next command: gaps in strategy, personality, or taste lead to `/grill-brand`; a coherent identity that needs consolidating leads to `/brand-system`; a tired identity that needs a new look leads to `/design-routes`.
