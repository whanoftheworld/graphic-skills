# Research notes: how top designers work, and what graphic-skills took from it

Researched 2026-10-13. Each claim below says where it came from and how well it was checked. Where the sources were thin, this page says so instead of filling the gap.

## The order of work

Independent sources describe the same shape: understand first, define, explore a few distinct options, build a system, apply it, and loop back when the work exposes a gap.

| Source | What it says | Used in |
| --- | --- | --- |
| Alina Wheeler, *Designing Brand Identity* | Five phases: conducting research, clarifying strategy, designing identity, creating touchpoints, managing assets. In an interview she says each phase has a fixed set of tasks and the next starts only when the current one is complete. (Phase names confirmed from library catalogue records and her interview on [LogoGeek](https://logogeek.uk/podcast10).) | `/brand-intake` and `/grill-brand` (phases 1 and 2), `/design-routes`, `/type-system`, `/logo-lab`, `/color-system` (phase 3), `/design-brief` and `/make-graphic` (phase 4), `/brand-system` (phase 5) |
| Design Council, [Framework for Innovation](https://www.designcouncil.org.uk/our-resources/framework-for-innovation/) | The Double Diamond: Discover, Define, Develop, Deliver, alternating widening and narrowing, "not strictly linear", teams loop back. | The loop in `/ask-designer`; `/design-routes` diverges to three, then converges to one |
| Wolff Olins (via [Creative Bloq](https://www.creativebloq.com/branding/how-approach-new-branding-project-wolff-olins-way-111413551), seen only as a search summary) | Their brief answers two questions, what is special about the client and what the world needs; for their own rebrand they started from culture, and asked first whether a mark was needed at all. | `/grill-brand` (onlyness, category), `/logo-lab` step 1 |
| Sagi Haviv, [interview](https://www.logodesignlove.com/sagi-haviv-interview) | "There has to be a good reason for a symbol." A mark must be simple and walk "the line between simplicity and distinctiveness"; it must take any treatment and work static. Sketch first. Choose by function, not taste. "Presentation is everything": a mark was approved only after being shown in real applications. | `logo.md`, `/logo-lab` (reason test, thumbnails, gauntlet), `/design-routes` (show routes in use) |
| Marty Neumeier, onlyness (secondary: [Dan Mall](https://danmall.com/posts/onlyness/)) | Every brand should say what it is the only one of; test by putting a competitor's name in the sentence. | `/grill-brand` node A5 |
| Dieter Rams, [ten principles](https://www.vitsoe.com/gb/about/good-design) | "Good design is as little design as possible"; "thorough down to the last detail"; honest; long-lasting. | `design-craft` (restraint), `/design-critique` (remove test) |
| NASA Graphics Standards Manual, Danne & Blackburn, 1975 ([Standards Manual](https://standardsmanual.com/products/nasa-graphics-standards-manual)) | A single manual set the standard for typography, color, stationery, signage, and vehicles. | `/brand-system` |

## Numbers the skills enforce

| Number | Source | Where |
| --- | --- | --- |
| Body 15 to 25 px on screen; line spacing 120 to 145%; 45 to 90 characters per line; all caps under a line, with 5 to 12% letterspacing | Matthew Butterick, [Practical Typography](https://practicaltypography.com/summary-of-key-rules.html) | `typography.md` |
| Contrast 4.5:1 normal text, 3:1 large text (18 pt, or 14 pt bold), 3:1 for non-text parts, 7:1 enhanced; thresholds are not rounded | W3C, [WCAG 2.2 SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | `color.md`, `contrast.mjs` |
| Design token shape (`$value`, `$type`, `{alias}`) | [Design Tokens Format Module](https://www.designtokens.org/TR/drafts/format/), a community-group draft, not a standard | `tokens.json`, `build-theme.mjs` |

## Thai typography

- The W3C [Thai Layout Requirements](https://www.w3.org/TR/2024/DNOTE-thai-lreq-20240815) note leaves line height, letter-spacing, italics, and emphasis as open questions, and states that Thai spaces separate phrases, not words. So the Thai rules in `thai-typography.md` are labeled **practice** and are meant to be confirmed by rendering the stacking test.
- Looped and loopless forms: IBM Plex Sans Thai ships both; its designers describe looped as more familiar to older readers and loopless as simplified and relaxed ([Fontpad](https://www.fontpad.co.uk/?p=1772)).
- The Google Fonts Thai list is from the catalogue metadata (33 families with a Thai subset). The looped, loopless, or mixed label for each family is **our own measurement**: render ข ช ม พ from the regular weight and count enclosed counters. No foundry document was used.

## Personality vocabulary

Aaker's five brand personality dimensions (sincerity, excitement, competence, sophistication, ruggedness) were confirmed from several secondary summaries of the 1997 paper. The twelve archetypes (Innocent, Sage, Explorer, Outlaw, Magician, Hero, Lover, Jester, Everyman, Caregiver, Ruler, Creator) are the commonly used set from Mark and Pearson's *The Hero and the Outlaw*; the book's table of contents was not retrievable, so treat the list as a lens, never as a lookup table. Color psychology is weak evidence, and `color.md` says so.

## What was not found, and not claimed

- **Pentagram, Michael Bierut, Paula Scher**: searches returned the books and case studies but no primary account of their process. Nothing is attributed to them.
- **Paul Rand's logo criteria**: a seven-part list circulates online, but no source retrieved it from Rand's own writing, so it is not used.
- **Wolff Olins and Collins process pages**: the Wolff Olins article body could not be fetched; only the search summary above was available. No Collins process detail was found.
- **How many options studios present**: sources disagree (Haviv's firm is known for presenting one idea; other studios present several). `/design-routes` presents three because a non-designer needs contrast to know what they like, and says which route it recommends.

## Why the skills are shaped this way

- **A brand memory file** (`brand/BRAND.md`) carries every decision between commands and sessions, so no command depends on a long chat and any agent can pick up the work. It follows the "baton" idea of Matt Pocock's skills, where state lives in files.
- **User-invoked commands, model-invoked references.** The commands you type (`/grill-brand`, `/logo-lab`) orchestrate; three reference skills (`brand-context`, `design-craft`, `design-grilling`) load on their own. This is the split used by [mattpocock/skills](https://github.com/mattpocock/skills), including the router skill (`/ask-designer`, like `/ask-matt`) and the Codex `agents/openai.yaml` policy that keeps typed-only skills out of implicit invocation ([Codex skills docs](https://learn.chatgpt.com/docs/build-skills.md)).
- **Scripts for numbers.** An agent estimating a contrast ratio or a tonal scale is guessing; `contrast.mjs` and `palette.mjs` compute them and exit non-zero on failure, which gives each command a checkable "done".
- **Show, don't tell.** Every exploration command renders HTML you can look at (routes, type specimen, palette, logo gauntlet), because taste is easier to point at than to describe.
