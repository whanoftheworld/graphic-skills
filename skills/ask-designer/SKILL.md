---
name: ask-designer
description: Ask which graphic skill or flow fits your situation. A router over the skills in this repo.
disable-model-invocation: true
---

# Ask designer

You don't remember every command, so ask. Before stating what a command does or telling the human to skip a step, read that skill's SKILL.md; the summaries here orient you.

Studios converge on one order of work (see [the research notes](https://github.com/whanoftheworld/graphic-skills/blob/main/docs/research.md)): **listen, define, explore routes, build the system, apply, critique**, looping back when later work exposes an earlier gap. The commands follow it, and the **brand memory** (`brand/BRAND.md`) is the baton they pass. Every command reads it and writes to it, so you can `/clear` the context between commands without losing anything.

## Where are you?

| Your situation | Start with |
| --- | --- |
| I have a logo, fonts, colors, or past work | `/brand-intake` |
| I only have a business and a feeling | `/grill-brand` |
| My brand is a mess or inconsistent | `/brand-intake` (it audits, and you pick the canonical version of anything inconsistent), then `/brand-system` |
| The brand is clear and I need a look | `/design-routes` (needs strategy and personality decided; `/grill-brand` fills them) |
| I need a photo, illustration, texture, or background | `/brand-image`, then `/make-graphic` places it |
| I need a post, poster, or banner now | `/design-brief`, then `/make-graphic` |
| Is this design any good? | `/design-critique` |

## The main flow: brand from nothing to system

1. **Ground the brand.** `/brand-intake` memorizes and audits what exists. `/grill-brand` interviews you about what is missing (purpose, audience, onlyness, personality, the logos and fonts you love and why). With assets and gaps, run intake first.
2. **Explore routes.** `/design-routes` shows three genuinely different directions side by side; you pick or mix one.
3. **Build the pieces.** Each refines the chosen route, and the order is a recommendation, not a rule:
   - `/type-system` first, because a wordmark depends on the typeface.
   - `/logo-lab` next: reason for a mark, concepts, thumbnails, the gauntlet, the logo kit.
   - `/color-system` last, because color is judged best beside the logo, and every text pair is proven by script.
4. **Compile the system.** `/brand-system` turns the decisions into tokens, a CSS theme, a brand board, and written guidelines.

## The apply loop: every graphic after that

1. `/design-brief` settles the message, viewer, format, and copy.
2. `/brand-image` when the graphic needs a picture. On Codex the built-in image generator (`$imagegen`) makes it, prompted from your brand memory so palette, light, and guardrails carry over.
3. `/make-graphic` builds the layout from tokens, places the image, adds the exact logo and type (which a generator cannot draw reliably), renders, and gates it.
4. `/design-critique` reviews the result with evidence. System-level findings send you back to step 3 or 4 of the main flow.

## Underneath

Three model-invoked skills run beneath the commands, and the agent loads them on its own: **brand-context** (reads the brand memory before any graphic work), **design-craft** (hierarchy, typography with Thai, color, logo craft, image prompting, plus the contrast and palette scripts), and **design-grilling** (the interview method behind `/grill-brand`, `/color-system`, `/type-system`, and `/design-brief`). Type their names directly only when the words, not the process, are the problem.

## When the loop goes back

Design is not linear. A new competitor, a failed gauntlet, or a critique finding can reopen an earlier decision: set that pillar's status back to `open` in the brand memory, rerun its command, and let `/brand-system` recompile.
