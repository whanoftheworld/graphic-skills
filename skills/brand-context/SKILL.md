---
name: brand-context
description: Load the project's brand memory (brand/BRAND.md) before any graphic or visual work, and define its format. Use when asked to design, make, edit, or judge a logo, poster, social post, banner, slide, packaging, UI, colors, fonts, theme, or any brand, CI, or identity question; or when another graphic skill needs the brand.
---

# Brand context

The **brand memory** is `brand/BRAND.md` in the working directory, beside `tokens.json` and `theme.css` once they exist. A project with several brands keeps one folder each at `brands/<slug>/`; ask which one when the request doesn't say. A graphic made without the brand memory is generic by construction, so every graphic decision starts here.

## Load

1. Read `BRAND.md` in full, then `tokens.json` and `theme.css` when present.
2. Read the **Status** table. `decided` binds the work. `observed` is the default, and you flag every departure from it. `open` or missing means ask the one question that unblocks, or make a **provisional** choice and log it.
3. Take every color, font, and space value from the tokens. A value the tokens lack is a new token, added there first.

## When the brand memory is missing

Tell the human in one line: "No brand memory yet. Type `/brand-intake` if you have existing logo, fonts, or colors, or `/grill-brand` to shape one from scratch." You cannot fire those yourself, since only the human can. If they want to proceed anyway, label the output **unbranded sketch** and keep it plain.

## Writing to the brand memory

- Start from [BRAND-TEMPLATE.md](BRAND-TEMPLATE.md) when creating the file. Section headings stay in English because other skills look them up; the content is in the user's language.
- Edit in place, one fact in one place. Every change to a pillar adds a **Decision log** row: date, decision, why, alternatives rejected.
- Keep the file short enough to read in one pass. Detail that outgrows it moves to a sibling file the section points at.
- Status vocabulary: `open` (nobody decided), `observed` (found in existing assets, not yet validated), `decided` (the human confirmed), `deferred` (parked, with a reason).
- Offer once to add a one-line pointer to the project's `AGENTS.md` or `CLAUDE.md`: "Brand memory lives in `brand/BRAND.md`; read it before any graphic work."
