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

Then look at it. Open the page with a browser tool at 390 px and 1280 px wide and take a screenshot; confirm no horizontal scroll, no clipped Thai tone marks, and readable text. With no browser tool, tell the human to open the file and say what they see.

## 4. Present, recommend, choose

Name your recommended route and the reason in two sentences, and the strongest argument against it. Ask the human to pick one, mix named elements from two, or reject all with the reason (a rejection is evidence for the next round).

Record the choice in **Direction** with the rejected routes and why, update the Status table, and add a Decision log row. The skill is done when three routes passed the three-axis rule, the page was seen rendered, and the human chose or mixed one.

Then suggest `/type-system`, `/logo-lab`, and `/color-system`, in that order, each refining what the chosen route sketched.
