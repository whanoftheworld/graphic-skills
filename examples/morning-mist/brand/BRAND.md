# Morning Mist Roasters (ไร่หมอกเช้า): brand memory

> A fictional example brand, built end to end with graphic-skills to show what each command leaves behind. Headings are stable (other skills look them up). Content is in the user's language.

## Status

| Pillar | Status | Source / note |
| --- | --- | --- |
| Strategy | decided | `/grill-brand` rounds 1 to 3 |
| Personality | decided | `/grill-brand` round 3 |
| Taste evidence | decided | `/grill-brand` round 4; 9 items below |
| Direction | decided | `/design-routes`: route B, Field Notes |
| Logo | decided | `/logo-lab`; kit in `assets/logo/` |
| Typography | decided | `/type-system`; looped Thai throughout |
| Color | decided | `/color-system`; 17 pairs pass (`node contrast.mjs --tokens tokens.json`) |
| Graphic language | decided | `/brand-system` |
| Layout | decided | `/brand-system` |
| Voice | decided | `/grill-brand` round 3 |

## Strategy

- **Purpose**: Roast single-origin coffee from small farms in northern Thailand so that people taste where their coffee comes from.
- **Onlyness**: We are the only roaster in Chiang Mai that prints the farmer's name and the altitude on every bag, for home brewers who want to know where their coffee came from. (Swap-test: with a competitor's name in place the sentence is false, because no neighbour prints the farmer.)
- **Audience**: Pim, 29, a freelance illustrator in Chiang Mai. She brews pour-over at home, orders beans on LINE OA and Instagram, and reads the bag before she reads the price. Segment: home brewers aged 25 to 40 who buy online.
- **Channels and formats**: 1. Instagram feed (1080 × 1350). 2. Bag label and box. 3. LINE OA broadcasts and rich menu (2500 × 843). 4. Marketplace listing images (1080 × 1080).
- **Category and competitors**: specialty roasters. Category clichés: kraft paper, a coffee-bean icon, brown and cream, hand-drawn mountains, a handwritten script logo.

## Personality

- **Say / never**: warm but never rustic-kitsch; precise but never clinical; local but never touristy.
- **Spectrum** (1 to 5): playful 2 · classic 3 · warm 4 · quiet 3 · accessible 4 · handmade 4
- **Archetype**: primary Explorer, secondary Caregiver.
- **Voice sample lines**: "ถั่วจากไร่คุณสมศรี สูง 1,350 เมตร คั่วอ่อน กลิ่นลิ้นจี่" · "Grown at 1,350 m. Roasted light. Read the bag."

## Taste evidence

| Item | Kind | Like or dislike | The exact attribute | File or link |
| --- | --- | --- | --- | --- |
| Botanical specimen labels | layout | like | small data rows under a name, thin rules, nothing decorative | reference image (not included in this example) |
| Seed-packet typography | font | like | a serif with real personality, set small and tight | reference image (not included in this example) |
| A bright cartoon-mascot roaster | logo | dislike | a mascot makes the brand a joke; we are serious about farmers | reference link (not included in this example) |
| Kraft-paper bag with a bean icon | layout | dislike | exactly the category cliché | reference image (not included in this example) |
| A pale-green tea packaging | color | like | muted green on warm white feels calm and fresh, not "natural-product" | reference image (not included in this example) |
| A neon coffee-chain logo | color | dislike | saturated red-orange shouts; ours should be heard from close | reference link (not included in this example) |
| A museum identity | brand | like | one idea applied the same way everywhere | reference link (not included in this example) |
| A hand-lettered script wordmark | logo | dislike | cannot be read at 16 px | reference link (not included in this example) |
| Rounded geometric sans (display) | font | dislike | too "app", not "farm" | reference image (not included in this example) |

Type DNA from the liked fonts: serif, moderate contrast, warm terminals, tight setting, comfortable at small sizes.

## Direction

**Route B, Field Notes**: the bag reads like a labelled specimen from a real farm. Data (farmer, altitude, variety, process) is the hero, set in a warm Thai serif; a sun behind morning mist is the one picture.

Rejected: **Route A, Kraft Craft** (paper, hand lettering, mascots: the category's default look, so it fails the onlyness test) and **Route C, Bright Counter** (saturated flat color and chunky sans: loud and playful, which contradicts "serious about farmers").

## Logo

Concept: a sun rising behind bands of mist. Type: combination mark (icon plus wordmark), because the icon must work as a LINE OA avatar and a favicon where the full name cannot fit. Files in `assets/logo/` (`logo-primary.svg`, `logo-alternate.svg`, `logo-icon.svg`, `logo-black.svg`, `logo-white.svg`), text set as outlines.

- **Clear space**: one band-gap-to-band module on every side, taken as the height of the capital "M" of the wordmark.
- **Minimum size**: icon 16 px / 5 mm; primary lockup 120 px / 25 mm wide.
- **Misuse**: no stretching, no recoloring outside green, black, white, no effects, no placement on photography without a flat color field behind.

## Typography

| Role | Family | Weight | Notes |
| --- | --- | --- | --- |
| Display, heading | Pridi (looped Thai serif, Google Fonts, OFL) | 600 | headings tight at `--leading-heading` 1.3 |
| Body, UI, numerals | IBM Plex Sans Thai Looped (OFL) | 400, 500, 600 | Latin from the same family; Arabic digits |

- **Scale**: 1.25 (major third) from 16 px: 12.8, 16, 20, 25, 31.2, 39.1, 48.8, 61 px.
- **Line height**: body 1.7 (Thai), headings 1.3, Latin-only display 1.15. Letter-spacing 0 for Thai. No italics for Thai.
- **Why looped**: the loopless faces read "tech"; looped reads crafted and traditional, matching the liked seed-packet type. Stacking test passed in the specimen at 12 px and 61 px.

## Color

| Role | Token | Hex |
| --- | --- | --- |
| Brand primary (forest green) | `color.brand.700` | `#2f6b4f` |
| Accent (coffee-cherry red) | `color.accent.600` | `#b3342a` |
| Page surface (warm cream) | `color.neutral.50` | `#f9f7f0` |
| Sunken surface | `color.neutral.100` | `#efede5` |
| Text primary | `color.neutral.950` | `#1d1a13` |
| Text secondary | `color.neutral.700` | `#5c584b` |
| Deep surface | `color.brand.950` | `#002213` |

Proportions: about 60% cream, 30% green and ink, 10% cherry red (one use per piece). Category map: competitors sit in brown and black; green on cream is open space. Contrast: 17 pairs declared in `tokens.json`, all pass; body text on page is 16.2:1, accent on page 5.69:1, border on page 3.14:1. Dark mode is derived (surfaces from the warm black, brand lightened to step 400), and its pairs pass. Print: approximate CMYK values only, proof before print and match against a physical Pantone book; a one-color green version exists for stamps.

## Graphic language

1. **Specimen label**: name in Pridi, then data rows in small caps-free Plex with hairline rules (farmer, altitude, variety, process).
2. **Mist bands**: horizontal bands taken from the icon, used as dividers and image masks, never as decoration over text.
3. **Real farm photography**: soft morning light, cool shadows, the farmer in frame when possible, cropped tight.

## Layout

Grid: 4 columns on phone, 12 on wide, 24 px margins on phone. Spacing from the scale 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. One focal point per graphic; the data block (the label) is always the second read after the photograph or the name.

## Voice

Plain, specific, a little formal in Thai (ครับ/ค่ะ used sparingly), numbers over adjectives. Words used: ไร่, ระดับความสูง, คั่วอ่อน, farmer's name. Words avoided: "premium", "authentic", "artisan".

## Accessibility floor

Body text 4.5:1 minimum (the tokens' pairs prove it), smallest text 12 px in labels and 16 px in body, color never the only signal.

## Guardrails

- Show the farmer's name and altitude on every product graphic.
- Place the logo on a flat color field when the background is a photograph.
- Use cherry red once per piece, for the single thing that matters.

## Decision log

| Date | Decision | Why | Alternatives rejected |
| --- | --- | --- | --- |
| 2026-10-13 | Route B, Field Notes | passes the onlyness swap-test; honors the specimen-label taste | A, Kraft Craft (category default); C, Bright Counter (too loud) |
| 2026-10-13 | Looped Thai (Pridi + IBM Plex Sans Thai Looped) | crafted and traditional tone; both families OFL | loopless Prompt and Kanit (read "tech") |
| 2026-10-13 | Icon: sun behind three mist bands | one shape, one color, reads at 16 px | seed-packet badge (too detailed at 16 px); bean icon (category cliché) |
| 2026-10-13 | Green 700 `#2f6b4f` as primary | open space in the category map; 5.87:1 on cream | warm brown (category default); blue-green (looked like a bank) |
