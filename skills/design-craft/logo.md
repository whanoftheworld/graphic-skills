# Logos and marks

## Does it need a symbol?

Sagi Haviv of Chermayeff & Geismar & Haviv starts from the premise that "there has to be a good reason for a symbol": a very long name, sub-brands to unify, or a need for visual shorthand ([interview](https://www.logodesignlove.com/sagi-haviv-interview)). Without a reason, the name set well is the logo. Answer first, then choose a type:

| Type | Fits when |
| --- | --- |
| **Wordmark** | the name is short and distinctive, or the symbol has no reason |
| **Lettermark** | the name is long and the initials are strong |
| **Symbol** (pictorial or abstract) | the brand needs a shorthand for small spaces, avatars, or many languages |
| **Combination** (symbol plus wordmark) | both a name and a shorthand are needed |
| **Emblem** (text inside a shape) | heritage or badge feel; harder to scale down |

## Criteria

From the same interview: a mark must be **simple**, because that is what lets it work for a long time; **distinctive**, because the task is to walk "the line between simplicity and distinctiveness"; **adaptable**, taking any treatment or filter; and **static-first**, never a freeze-frame of an animation. Add **appropriate**: it fits the personality and audience in the brand memory. Judge by whether it works, not by whether you like it.

## Process: concepts before shapes

1. **Research the category**: collect competitor marks and name their clichés (the cup, the leaf, the globe). Leave those clichés out unless the brand owns a twist.
2. **Concepts in words**: write 5 to 8 ideas as one sentence each, drawn from the name, the onlyness, or a real detail of the business. Cut to three on strength of idea.
3. **Thumbnails**: sketch at least a dozen small, rough marks per kept concept. Haviv sketches on paper first because "the computer will not help you connect with your creative impulses"; for an agent, the equivalent is many fast, small SVG drafts before any polish.
4. **Refine** the survivors on a grid with simple geometry, consistent stroke weight, at most two colors, no gradients or shadows in the master.
5. **Run the gauntlet** (below) and choose by results.

## The gauntlet

Render every finalist, side by side, through all of these:

1. **Favicon**: 16 and 32 px.
2. **One color**: solid black on white.
3. **Reversed**: white on the brand's darkest color.
4. **Squint**: blurred, or at 48 px; the silhouette still identifies it.
5. **Small print**: 20 mm wide.
6. **In place**: a circular avatar crop, a shop sign, a product label, a social profile.
7. **Name-swap**: put a competitor's name beside it; if the mark would fit them equally, it is not distinctive yet.

## The logo kit

Deliver five SVG masters in `brand/assets/logo/`: `logo-primary.svg` (the preferred lockup, full color), `logo-alternate.svg` (the other lockup, horizontal or stacked), `logo-icon.svg` (avatars and favicons), `logo-black.svg`, and `logo-white.svg` (reversed). A wordmark brand has no symbol, so its icon is a monogram taken from the wordmark (the first letter or a tight crop), and an alternate that would only repeat the primary is recorded as `n/a` with the reason. Set any text as **outlines**, so the file does not depend on an installed font (`logo-lab/scripts/text-to-svg.py`). Specify **clear space** in a unit taken from the mark itself (the height of a defined letter or shape), a **minimum size** in px and mm, and a **misuse** list: stretching, rotating, recoloring, adding effects, placing on busy backgrounds.

## Thai and mixed-script logos

Set Thai logotypes with tone marks checked at the smallest size ([thai-typography.md](thai-typography.md)). In a Thai and Latin lockup, align on a shared baseline or x-height and match optical weight. Keep a Latin-only or icon-only version for places where Thai will not fit.

## Honest limits

An agent can produce a sound concept and clean first-pass vectors. For a brand that will carry heavy spend, have a professional designer finish the master: optical corrections, custom lettering, and trademark checks are beyond a first pass.
