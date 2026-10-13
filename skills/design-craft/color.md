# Color

## Roles, not swatches

Name every color by its job: **brand primary** (the dominant color people remember), **secondary**, **accent** (rare, one purpose), **neutrals** (a tinted gray family for text, borders, surfaces), **semantic** (success, warning, danger, info), **surface** (background levels), **text** (primary, secondary, disabled). Start from a 60 / 30 / 10 split of dominant, supporting, accent, and adjust by eye.

Most small brands need no more than four hues including the neutrals.

## Choosing the brand color

1. **Category codes**: list the competitors' colors. Differ from the pack on purpose, or match it on purpose; never drift into it by accident.
2. **Personality**: color psychology is weak evidence, so treat a color's "meaning" as a hypothesis to test against the audience, not a rule. Aaker's five personality dimensions (sincerity, excitement, competence, sophistication, ruggedness) are a useful vocabulary for the brief, not a lookup table.
3. **Context**: cultural associations vary by country and audience; ask local people rather than assume.
4. **Medium**: a color chosen on screen must survive print, one-color use, and a dark background.

Choose a specific, ownable hue rather than the default of the category's template.

## Build the scale in OKLCH

OKLCH keeps lightness perceptually even, so steps 50 to 950 behave predictably. Run `node scripts/palette.mjs "#base"` to get 11 steps and their contrast against white and black, then pin the exact brand hex to the step it sits nearest. Tint the neutrals toward the brand hue at low chroma so grays belong to the palette.

## Contrast numbers (WCAG 2.2)

Source: [Understanding SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

- Normal text: **4.5:1**. Large text (18 pt, or 14 pt bold; about 24 px or 18.5 px bold): **3:1**.
- Non-text parts that carry meaning (icons, input borders, focus rings, chart marks): **3:1** (SC 1.4.11).
- Enhanced level: **7:1** for body text where a reader may struggle.
- Ratios are thresholds: 4.499 fails. Check with `node scripts/contrast.mjs`, never by eye.
- Logotypes are exempt from the rule, but a logo that cannot be read has failed its job; check it anyway.

Declare each planned text/background pair in `tokens.json` under `$extensions["graphic-skills"].pairs` and run `node scripts/contrast.mjs --tokens brand/tokens.json`; it exits 1 when a pair fails.

## Beyond contrast

- **Never color alone**: pair color with a shape, label, or weight; run the grayscale test.
- **Dark mode** is re-derived, not inverted: lower the chroma, lift surfaces in small lightness steps, and re-run every pair.
- **Print** differs from screen. Give the nearest CMYK or Pantone value, label it "approximate, proof before print", and plan a one-color version for stamps, embroidery, and newsprint.
- **Near-black text** (a tinted dark) on a warm or cool off-white reads calmer than pure black on pure white.
- **Saturated colors on dark backgrounds** vibrate; reduce chroma.
