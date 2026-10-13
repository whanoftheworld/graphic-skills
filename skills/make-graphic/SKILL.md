---
name: make-graphic
description: Build the graphic from a brief and the brand tokens, render it, check it, and export it.
disable-model-invocation: true
---

# Make graphic

Take a brief and the brand memory and produce the finished graphic: a layout built from tokens only, rendered to an image, checked, and exported.

Load the `brand-context` and `design-craft` skills (the Skill tool, or read their SKILL.md), and read `layout.md`, plus `thai-typography.md` when Thai appears. Reply in the user's language. With no brief, write the message, viewer, format, and copy in four lines, show them to the human, and proceed once they confirm; for anything larger, tell them to run `/design-brief`.

With no brand memory, build an **unbranded sketch**: a minimal inline token block (a system font stack, black, white, one neutral accent), labeled unbranded in the handover, and suggest `/brand-intake` or `/grill-brand`.

## 1. Plan the read order

Before any markup, write the **read order** in three lines: what is read first, second, third, and the lever (size, color, position, space) that makes each so. Choose the grid, the type roles, and the two or three brand levers from the brief. One idea per graphic.

## 2. Build with tokens only

Write the graphic as one HTML file (or SVG) at `brand/applications/<slug>/index.html` sized to the export (scaling below), importing `brand/theme.css` with `<link>` and styling only through `var(--…)` tokens. A value the tokens lack is added to `tokens.json` and rebuilt first (`/brand-system` owns that step; ask the human if the brand memory is not yet compiled). Use the logo kit files from `brand/assets/logo/`, at their stated clear space and minimum size.

Token sizes are tuned for screens, so a 1080 px canvas needs them scaled: design at half size (540 × 675 for a 4:5 post) and apply `zoom: 2` to the canvas, which exports at full size with every token intact.

**Imagery.** Shapes, type, icons, and the logo are code. When the layout needs photography, illustration, a texture, or a background and an image generator is available (on Codex, the `imagegen` skill), write the prompt from the brand memory as `image-prompts.md` in design-craft describes (the same method as `/brand-image`), generate, run its image gate, save the accepted image under `brand/assets/images/`, and place it with `object-fit: cover` and a token-based scrim. The exact logo, all text, and exact color blocks stay in code. Without a generator, use a flat token color field or a labeled placeholder frame and offer the paste-ready prompt.

Copy comes from the brief. A number, quote, or claim the human did not supply is a visible placeholder, never invented.

Common canvases (confirm current specs before use): Instagram feed 1080 × 1350 (4:5), square 1080 × 1080, story or reel 1080 × 1920, Facebook or link preview 1200 × 630, YouTube thumbnail 1280 × 720, LINE Official Account rich menu 2500 × 1686 or 2500 × 843, print A4 210 × 297 mm with 3 mm bleed. For print, set the page in millimetres with `@page { size: 210mm 297mm; margin: 0 }`, include the bleed, export a PDF through the browser tool's print-to-PDF, and use raster images at 300 dpi or more at final size.

## 3. Render and look

Render at the export size and look at the result: the harness's browser tool, or `npx playwright screenshot --viewport-size=<w>,<h> --wait-for-timeout=800 <file.html> <out.png>`. Fonts load from the network, so wait for them before capture.

## 4. Gate

Fix each failure and re-render until all pass:

1. **Squint test** and **thumbnail test** at 200 px wide: the three reads appear in the planned order.
2. **Tokens only**: search the file for raw hex colors and literal `font-family` values; none outside the token import.
3. **Contrast**: run design-craft's `contrast.mjs` on every text and background pair used. For text over an image, sample the hex values of the busiest region under the text (read the pixels in the browser, or crop and look them up), test the worst one, and add a token scrim until it passes.
4. **Thai** (when present): the stacking test string renders without collision or clipping at the smallest size used.
5. **Brand rules**: the logo has its clear space and version; the guardrails in the brand memory hold.
6. **Honest copy**: every figure and claim traces to the brief.

## 5. Export and hand over

Export PNG (and the HTML or SVG source) into the application folder, and save `notes.md` beside it with the brief's path, the read order, the image prompts used, and the gate results, so `/design-critique` can find them after a `/clear`. Hand over the file path, the read order you built, and the gate results in three lines. For a deeper review, tell the human to run `/design-critique` on the export.

The skill is done when the export exists at the brief's size and all six gate checks pass in the last render.
