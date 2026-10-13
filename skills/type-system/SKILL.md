---
name: type-system
description: Choose the brand's fonts from evidence (liked fonts, screenshots, constraints) and define the full type system, Thai and Latin.
disable-model-invocation: true
---

# Type system

Fonts are the brand's voice. This skill turns the fonts a human likes, and the constraints they live under, into a chosen pairing and a complete system of roles, sizes, and rules.

Load the `brand-context`, `design-craft`, and `design-grilling` skills (the Skill tool, or read their SKILL.md). Read `typography.md`, and `thai-typography.md` whenever the brand uses Thai. Reply in the user's language.

## 1. Read the type DNA

From the brand memory take the chosen route, personality, and every font in Taste evidence. For each liked or disliked font (a name, a file, or a screenshot), write its anatomy by the checklist in `typography.md` and name the attribute the human gave. Summarize the **type DNA**: the class, contrast, proportions, and mood that the liked fonts share and the disliked ones lack. Ask for more references if fewer than three exist.

## 2. Fix the constraints

Settle with the human (interview rounds, `design-grilling`): the **languages** to set (Thai, English, both), the **media** (web, social, print, signage), the **budget** (free OFL only, or paid licences), the **looped or loopless** preference for Thai, and any font that must stay.

## 3. Shortlist and show

Pick three to five **pairings** (display or heading plus text; one family alone counts as a pairing) that fit the DNA and constraints. Prefer families that ship both scripts. For Thai, choose from the verified list in `thai-typography.md` unless a licensed font is in scope. Give each pairing a one-line rationale tied to the type DNA.

Build `brand/explore/type-specimen.html`, loading each family from Google Fonts. Show every pairing side by side with the brand's real name and tagline, a headline, a paragraph at body size, the numerals, and the test strings below. Then look at it: render at 390 px and 1280 px, take screenshots when a browser tool exists, and confirm the Thai marks neither collide nor clip.

```
Latin: Hamburgefonstiv 0123456789 &?!@
Thai stacking: ป้ายผู้ใหญ่ ฝั่งฟื้น กรุ๊ปปั๊ม ญุฐู ที่นี่ ๑๒๓ 123
```

## 4. Choose and specify

When the human picks, define the system and write it into **Typography** and, where tokens exist, into `tokens.json`:

- **Roles**: display, heading, body, caption, UI, numerals, each with family, weight, and case.
- **Scale**: one ratio (default 1.25) and the size ladder derived from it, in px or rem.
- **Line height per script**: Latin at 1.2 to 1.5 by size, Thai at 1.5 to 1.8 for body and 1.3 or more for headings once the stacking test passed. Letter-spacing 0 for Thai.
- **Fallback stack** with Latin first and Thai second where scripts mix, and the Google Fonts URL with only the weights used.
- **Source and licence** of every family, with the URL.

The skill is done when each family has a verified licence and source, the scale and line heights are written, the stacking test passed in the rendered specimen, and the human confirmed the pairing. Log the choice and the rejected pairings in the Decision log.
