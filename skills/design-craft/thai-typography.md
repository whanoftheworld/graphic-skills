# Thai typography

Thai layout has a thin official rulebook: the W3C [Thai Layout Requirements](https://www.w3.org/TR/2024/DNOTE-thai-lreq-20240815) note still lists line height, letter-spacing, italics, and emphasis as open questions. The rules below are therefore **practice**: widely used, checked by rendering, and overruled by what the specimen shows.

## The first fork: looped or loopless

Thai letterforms come in two families of shape. **Looped** (ตัวมีหัว) closes the head of letters such as ข ช ม พ into a visible counter; it reads traditional, formal, and familiar to older readers. **Loopless** (ตัวไม่มีหัว) opens or removes the loops; it reads modern, light, and approachable. IBM Plex Sans Thai ships both as separate families, and its designers describe the looped style as more familiar to older readers and the loopless as simplified and relaxed ([Fontpad](https://www.fontpad.co.uk/?p=1772)). Hold one form across the brand unless the contrast is the idea.

## Thai fonts on Google Fonts (OFL, free for commercial use)

Source: the Google Fonts catalogue metadata, 2026-10-13, 33 families with a Thai subset. **Form** was measured by rendering ข ช ม พ from each family's regular weight and counting enclosed counters (none in ข and ช means loopless); it is not taken from foundry notes. Re-run the same check when a family matters. Every family below also includes Latin glyphs.

| Form | Family | Kind | Designer |
| --- | --- | --- | --- |
| Looped | Sarabun | Sans | Suppakit Chalermlarp |
| Looped | Noto Sans Thai Looped | Sans | Google |
| Looped | IBM Plex Sans Thai Looped | Sans | Mike Abbink, Bold Monday |
| Looped | Bai Jamjuree, Chakra Petch, Fahkwang, K2D, Kodchasan, KoHo, Niramit | Sans | Cadson Demak |
| Looped | Noto Serif Thai | Serif | Google |
| Looped | Maitree, Pridi, Taviraj, Trirong | Serif | Cadson Demak |
| Looped | Charm, Itim, Mali | Handwriting | Cadson Demak |
| Loopless | Noto Sans Thai | Sans | Google |
| Loopless | IBM Plex Sans Thai | Sans | Mike Abbink, Bold Monday |
| Loopless | Anuphan, Athiti, Kanit, Krub, Mitr, Prompt | Sans | Cadson Demak |
| Loopless | Chonburi | Display serif | Cadson Demak |
| Loopless | Pattaya | Display | Cadson Demak |
| Loopless | Charmonman, Sriracha | Handwriting | Cadson Demak |
| Loopless | Playpen Sans Thai | Handwriting | TypeTogether and others |
| Mixed | Thasadith | Sans | Cadson Demak |
| Mixed | Srisakdi | Display | Cadson Demak |

Feel is not in the metadata, so judge it from the specimen. Known anchors: Kanit and Prompt are geometric and modern, Mitr is rounded and heavy, Sarabun is neutral text, Chakra Petch is angular and technical, the serifs (Pridi, Taviraj, Trirong, Maitree, Noto Serif Thai) are editorial.

## Practice rules

- **Line height**: body text from 1.5 to 1.8. Thai stacks up to three levels above a consonant (base, vowel, tone mark) and one below; headlines can drop to 1.3 only after the stacking test below shows no collision or clipping.
- **Letter-spacing**: keep Thai at 0. Tracking pulls vowels and tone marks away from their consonant.
- **Emphasis**: use weight or color. Thai has no true italic tradition, and a synthesized slant distorts the stacked marks.
- **Alignment**: left-align. Thai spaces separate phrases, not words (W3C), so justified text opens uneven gaps.
- **Size**: start body copy at 16 px on screen. Thai glyphs look smaller than Latin at the same size, and 14 px is tight.
- **Line breaks**: set `lang="th"` so browsers use dictionary-based breaking; never insert manual breaks mid-word. To control a headline, use a zero-width space (U+200B) at the break you want.
- **Numerals**: Arabic digits (0 to 9) for modern brands; Thai digits (๑ ๒ ๓) for a traditional or official tone. Choose once.

## Mixed Thai and Latin

Prefer one family that carries both scripts, since every family above does. When the Latin is a different font, match **x-height** and weight, then order the stack Latin first, Thai second, so Latin letters use the first font and Thai code points fall through to the second:

```css
body { font-family: "Inter", "Noto Sans Thai", system-ui, sans-serif; letter-spacing: 0; line-height: 1.6; }
```

A logo lockup of Thai and Latin aligns on a shared baseline or x-height; give the Thai the same optical weight as the Latin, not the same point size.

## The stacking test

Render this string at the smallest and largest sizes in use, and check that no mark collides, clips, or detaches:

```
ป้ายผู้ใหญ่ ฝั่งฟื้น กรุ๊ปปั๊ม ญุฐู ที่นี่ ๑๒๓ 123
```

Tall consonants (ป ฝ ฟ) with a vowel and tone mark above them are the usual casualties; ญ and ฐ with a vowel below test the descender.

## Licensing beyond Google Fonts

Commercial Thai foundry fonts and fonts bundled with an operating system carry separate web, app, and print licences. Record the licence for each in the brand memory before a client or campaign depends on it.
