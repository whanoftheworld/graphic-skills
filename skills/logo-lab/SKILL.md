---
name: logo-lab
description: Develop the logo from a reason and a concept, test finalists through a gauntlet, and produce the logo kit.
disable-model-invocation: true
---

# Logo lab

A logo earns its place by working: small, in one color, on a sign, in a crowd. This skill goes from the reason for a mark, through concepts and rough thumbnails, to a tested choice and a usable kit.

Load the `brand-context` and `design-craft` skills (the Skill tool, or read their SKILL.md), and read `logo.md` before starting. Reply in the user's language. The brand memory needs a chosen **Direction**; without one, tell the human to run `/design-routes`.

## 1. Settle the reason and the type

Answer, in the brand memory, whether the brand needs a symbol at all and which type of mark fits (wordmark, lettermark, symbol, combination, emblem), using the reason test and the table in `logo.md`. A wordmark must use the font decided in **Typography**; if none is decided, tell the human to run `/type-system` first.

## 2. Research the category

Collect the marks of the competitors named in Strategy. Write the clichés of the category in one line each, and the open visual space around them. Use web search or fetch for the marks you can reach; ask the human for the rest.

## 3. Concepts, then thumbnails

Write five to eight **concepts** in one sentence each, drawn from the name, the onlyness, or a true detail of the business. Cut to three with the human on strength of idea alone. For each survivor, draw at least a dozen small, rough SVG thumbnails in a single contact-sheet file, `brand/explore/logo-thumbnails.html`, then choose the strongest three to five marks in total to refine.

## 4. Refine on a grid

Refine the finalists with simple geometry on a visible grid: consistent stroke, at most two colors, no gradient or shadow in the master, optical balance over mathematical balance. Turn every wordmark into outlines with `scripts/text-to-svg.py` (`pip install fonttools uharfbuzz`; it shapes Thai marks correctly and needs the font file from the licence-checked source). For Thai or mixed lockups, follow `logo.md` and `thai-typography.md` and run the stacking test on the Thai letters.

## 5. Run the gauntlet

Build `brand/explore/logo-gauntlet.html` showing every finalist through the seven tests in `logo.md` (favicon, one color, reversed, squint, small print, in place, name-swap). Look at it rendered, screenshot it when a browser tool exists, and mark each finalist pass or fail per test. A finalist that fails a test is fixed or dropped, not excused.

## 6. Choose and build the kit

Present the results and your recommendation with the reason, and the strongest argument against it. When the human chooses, produce the five SVG masters in `brand/assets/logo/` named in `logo.md` (primary, alternate, icon, black, white). Add **clear space**, **minimum size**, and the **misuse** list to **Logo** in the brand memory, with the concept and the rejected finalists in the Decision log.

The skill is done when one logo passed the gauntlet (or each failure is documented and accepted by the human), the five SVG files exist, and the clear-space and minimum-size rules are written.

State plainly what this is: a sound concept with clean first-pass vectors. A brand carrying heavy spend should have the master finished by a professional designer.
