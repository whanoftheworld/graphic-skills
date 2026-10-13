---
name: design-routes
description: Explore three genuinely different visual directions for the brand, see them side by side, and pick one.
disable-model-invocation: true
---

# Design routes

Studios do not show one look and defend it, and they do not show twenty. They present a few **routes**: complete, different answers to the same brief, each visible enough to judge. This skill builds three and ends with one chosen.

Load the `brand-context` and `design-craft` skills (the Skill tool, or read their SKILL.md). Reply in the user's language. If the brand memory has no `decided` Strategy and Personality, tell the human to run `/grill-brand` (or `/brand-intake`) first: routes drawn without them are decoration.

## 1. Brief yourself

Read Strategy, Personality, and Taste evidence from the brand memory. Write a five-line **route brief**: the onlyness, the audience, the three most important channels, the personality spectrum, the taste profile in attributes. Put it at the top of the page you build in step 3.

## 2. Make three routes that differ

Each route is a named, one-line idea (a metaphor or stance, not a mood board of adjectives) with concrete choices for:

- **Personality position**: where it sits on the spectrum.
- **Type**: two specific families (Thai and Latin where the brand needs both; see `thai-typography.md`).
- **Color**: three to five hex values with roles.
- **Logo approach**: wordmark, symbol, or combination, and the idea behind it.
- **Graphic language**: the shape language and the one recurring device.
- **Risk**: who this route would put off, and what could go wrong.

**Three-axis rule**: any two routes must differ on at least three of personality position, type class, color temperature or saturation, logo approach, layout density, imagery (photo, illustration, type only), and shape language. Three palettes on one skeleton are one route in three colors; discard and redo them.

At least one route must honor the taste evidence closely, and at least one must challenge it with a reasoned bet. Say which is which.

## 3. Make them visible

Build one self-contained page, `brand/explore/routes.html`, with fonts loaded from Google Fonts. Each route gets a panel showing: the name and idea, the wordmark set in the route's type and color, the swatches with hex and role, a type specimen with a Thai line and a Latin line, and a sample graphic (a 4:5 post built in CSS using the brand's real name and one real line of copy). Use only the brand's own content; invent no metrics or testimonials.

When an image generator is available (on Codex, the `imagegen` skill; see `image-prompts.md` in design-craft), give each route one generated hero image made from the route's own style lines, so the human compares real imagery, not flat placeholders. Otherwise use a flat color field labeled with the photography direction.

Then look at it. Open the page with a browser tool at 390 px and 1280 px wide and take a screenshot; confirm no horizontal scroll, no clipped Thai tone marks, and readable text. With no browser tool, tell the human to open the file and say what they see.

## 4. Present, recommend, choose

Name your recommended route and the reason in two sentences, and the strongest argument against it. Ask the human to pick one, mix named elements from two, or reject all with the reason (a rejection is evidence for the next round).

Write the chosen route into **Direction** field by field (route and idea, personality position, type, color, logo approach, graphic language), naming the source route of each field in a mix, and list the rejected routes with the reason. Later commands read these fields from the brand memory, so the choice must live there and not only in `routes.html`. Set Direction to `decided` and add a Decision log row. The skill is done when three routes passed the three-axis rule, the page was seen rendered, and the human chose or mixed one.

Then suggest `/type-system`, `/logo-lab`, and `/color-system`, in that order, each refining what the chosen route sketched.
