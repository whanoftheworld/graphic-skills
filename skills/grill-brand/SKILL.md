---
name: grill-brand
description: A relentless interview that shapes a brand from a half-formed idea, or fills the gaps in an existing one.
disable-model-invocation: true
---

# Grill brand

Shape the brand by interview, the way a studio listens before it draws. Load the `brand-context`, `design-craft`, and `design-grilling` skills (the Skill tool, or read their SKILL.md), and run the interview `design-grilling` defines over the **brand tree** below. Reply in the user's language.

## Start

Find `brand/BRAND.md`. If it is missing, create `brand/` and the file from the template in `brand-context`, with the Status table at `open`. If it exists, read it and resume: start at the first node whose answer is missing from its section, and leave alone anything `decided`. Nodes parked in **Open questions** return only when the human asks. Write every closed round into the brand memory, into the section each node names below.

## The brand tree

A node opens when the nodes above it are settled.

**A. Ground** (opens first; ask what you can together)

- **A0 Name**: the brand name in Thai and Latin spellings, and whether it is final. Naming itself is outside this skill; flag a name that is still moving. → Strategy.
- **A1 Purpose**: what the business sells or does, for whom, and why it matters, in one sentence. → Strategy.
- **A2 Audience**: one real person (give them a name and a day), then the wider segment, and what they compare this brand with. → Strategy.
- **A3 Channels**: where graphics will live, in priority order (LINE OA, Instagram, Facebook, TikTok, marketplace listings, print, packaging, signage, web). This sets formats and sizes for everything later. → Strategy.
- **A4 Category**: ask the human for two or three rivals or shops they watch, then research those and one or two more of your own. Bring back the category's visual clichés for the human to react to. → Strategy.
- **A5 Onlyness** (after A1, A2, A4): finish "We are the only ___ that ___ for ___ because ___" ([Neumeier](https://danmall.com/posts/onlyness/)). Swap-test it: put a rival's name in, and if it still fits, the statement is not done. A brand with no true onlyness yet defers this node, with the reason and a working default, rather than a fabricated sentence. → Strategy.

**B. Character** (needs A)

- **B1 Personality spectrum**: place the brand from 1 to 5 between each pair, where 1 is the left word and 5 the right: playful ↔ serious, classic ↔ modern, warm ↔ cool, loud ↔ quiet, accessible ↔ premium, handmade ↔ engineered. Offer your reading from A as the recommended answer. → Personality.
- **B2 Archetype**: a primary and a secondary from the twelve commonly used (Innocent, Sage, Explorer, Outlaw, Magician, Hero, Lover, Jester, Everyman, Caregiver, Ruler, Creator), as a lens on the brand, never a label to print. → Personality.
- **B3 Say and never**: three "___ but never ___" pairs ("confident but never arrogant"). → Personality.
- **B4 Voice**: formality, and two sample lines in the brand's own language. → Voice.

**C. Taste evidence** (needs B; make the human bring things)

- **C1 Logos** they love and hate, 3 to 5 each, as images or names, each with the one attribute behind the reaction. → Taste evidence.
- **C2 Fonts** they love and hate: a name, a screenshot, or "the text on that sign", with the attribute. Read each one's anatomy with the checklist in design-craft's `typography.md` and say what it points to. → Taste evidence.
- **C3 Colors and moods**: images, products, places, or packaging that feel right. → Taste evidence.
- **C4 Borrowed feeling**: brands outside the category they would like to feel like, and brands they must not resemble. → Taste evidence.
- **C5 Constraints**: assets that must stay, colors or symbols to avoid, cultural or religious considerations, font budget (free OFL only, or paid), print needs (one-color stamps, embroidery), and languages in the logo. → Constraints.

**D. Identity call** (needs A to C; settles whether, not how)

- **D1 Symbol or wordmark**: answer the reason test in design-craft's `logo.md`. The shape itself comes later in `/logo-lab`. → Logo.

## Rules for this tree

- Taste questions cannot take a recommended answer from thin air. Derive your pick from A and B, state the derivation, and render a small A/B probe when the human stalls.
- Every image the human sends gets read in front of them: say what you see in terms of attributes, then ask whether that is what they meant.
- Reference brands are material, not templates. Take the attribute, never the look.

## Close

The interview is done when every node is `decided`, deferred (a row in **Open questions** with its reason and default), or not applicable, and any onlyness statement written passes its swap-test. Write the one-page **Summary** (purpose, onlyness, audience, personality, taste profile, in about ten lines), read it back, and get an explicit yes. Then set the confirmed pillars to `decided` in the Status table: Strategy, Personality, Constraints, Taste evidence, and Voice when its nodes are closed.

Tell the human the next command: `/design-routes`.
