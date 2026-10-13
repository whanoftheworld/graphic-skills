---
name: design-craft
description: Design fundamentals reference covering hierarchy, layout and grids, typography (Latin and Thai), color and contrast, logo craft, graphic language, and brand-aware image prompts. Use when making or judging any visual design decision, or when a graphic skill points here.
---

# Design craft

Six laws sit under every file here. Each file adds the numbers and checks for its area.

1. **One idea per graphic.** A graphic carries one message; everything else serves it or goes.
2. **Read order.** The viewer reads in at most three levels: first, second, third. Size, weight, color, contrast, position, and space build the order; the **squint test** (blur the graphic until detail dissolves) proves it survived.
3. **Restraint.** Remove until removal hurts. Dieter Rams: "as little design as possible", and "thorough down to the last detail" ([ten principles](https://www.vitsoe.com/gb/about/good-design)).
4. **System over one-offs.** Values come from tokens. A new value is a new token, decided once.
5. **Evidence over taste.** A contrast ratio, a line length, a measured size beats an adjective. Run the scripts below instead of estimating.
6. **Function judges form.** A mark or layout is chosen by whether it works at its real size, in its real place, for its real viewer.

## Pick the file

| The decision | Read |
| --- | --- |
| Hierarchy, grid, spacing, alignment, composition, thumbnails | [layout.md](layout.md) |
| Type scale, pairing, readability, licensing, reading a font from an image | [typography.md](typography.md) |
| Thai script, or Thai mixed with Latin, including the verified Thai font list | [thai-typography.md](thai-typography.md) |
| Palette, tonal scales, contrast, dark mode, print color | [color.md](color.md) |
| Logo concept, construction, testing, the logo kit | [logo.md](logo.md) |
| Imagery, icons, patterns, motion, honest content | [graphic-language.md](graphic-language.md) |
| Prompting an image generator from the brand (Codex `imagegen`), and checking the result | [image-prompts.md](image-prompts.md) |

## Scripts

Run them from the project root with Node, giving the path to this skill's folder (the folder that holds this `SKILL.md`), written `<design-craft>` below. They have no other dependencies.

- `node <design-craft>/scripts/contrast.mjs "#fg" "#bg"` or `--tokens brand/tokens.json`: WCAG 2.2 ratio and pass/fail; exits 1 on a failing pair.
- `node <design-craft>/scripts/palette.mjs "#base"` or `"#base" --json <name>`: an 11-step OKLCH tonal scale with contrast against white and black.

Other skills name these as design-craft's `contrast.mjs` and `palette.mjs`; resolve them the same way.
