# Typography (Latin, and the rules every script shares)

For Thai or mixed Thai/Latin work, read [thai-typography.md](thai-typography.md) as well.

## Roles

Name the roles before choosing fonts: **display**, **heading**, **body**, **caption**, **UI**, **numerals**. One family in several weights often serves every role. Two families is the ceiling for most brands, plus a mono only when the content is code or data.

## Numbers that hold

From Matthew Butterick's [summary of key rules](https://practicaltypography.com/summary-of-key-rules.html):

- Body size: 15 to 25 px on screen, 10 to 12 pt in print.
- Line spacing: 120 to 145% of the font size (Latin).
- Line length: 45 to 90 characters including spaces.
- All caps only for less than one line; add 5 to 12% letterspacing to caps.
- Bold and italic sparingly, never together; no underlines except links.

## Scale

Pick one ratio and derive every size from `base × ratio^n`: 1.125 for dense UI, 1.2 or 1.25 for most brands (1.25, the major third, is the default), 1.333 for editorial, 1.5 and up only for posters. Round to whole pixels, name the steps as tokens, use `clamp()` for fluid web sizes.

## Pairing

- Contrast the structure, share the proportions: a geometric sans heading over a humanist text face works because x-height and width are close.
- Two faces that almost match look like a mistake; separate them clearly or use one family.
- A **superfamily** (sans and serif designed together) is the safest pair.
- Display faces carry one line at large size. Body text goes in a face built for reading.

## Classify a font before naming it

Quick Latin classes and their usual mood: humanist sans (warm, readable), geometric sans (modern, clean), grotesque or neo-grotesque (neutral, corporate), old-style serif (literary, traditional), transitional and didone serif (editorial, premium), slab (sturdy, friendly), mono (technical), script (personal, ornamental).

## Reading a font from an image

A screenshot is evidence of a font's character, not its identity. Describe it with this anatomy list, then name candidates:

1. Class (above) and **contrast** (monoline or high stroke contrast).
2. Lowercase `a` and `g`: single-storey or double-storey.
3. **Terminals**: flat, angled, rounded, or cut.
4. **Apertures** (openings of `c`, `e`, `s`): open or closed.
5. **x-height**: low, medium, or high; **width**: condensed, normal, wide.
6. Distinctive details: tails, ears, joins, numeral shapes.

State the result as "closest matches", each with a confidence, and prefer open-licensed candidates the user can use. When the user can find the source (a site's CSS, a design file's font name), that settles it.

## Licensing and delivery

- **OFL** families on Google Fonts are free for commercial use, print and web. For any other font, find the licence, including web embedding rights, before it enters the brand memory.
- Record family, source URL, and licence for every font in the brand memory.
- Web: `font-display: swap`, at most three weights per family, subset where possible, a full fallback stack, `lang` set on the document.
