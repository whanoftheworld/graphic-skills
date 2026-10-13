---
name: brand-system
description: Compile the decided logo, type, and color into design tokens, a CSS theme, a brand board, and written guidelines.
disable-model-invocation: true
---

# Brand system

Guidelines are what let a brand survive other people's hands: the NASA Graphics Standards Manual is the famous case, one binder that told everyone how typography, color, stationery, signage, and vehicles carried the identity (Danne & Blackburn, 1975; [reissued by Standards Manual](https://standardsmanual.com/products/nasa-graphics-standards-manual)). This skill compiles what the human decided into the same kind of artifact: tokens a machine reads, a theme a page loads, a board a person looks at, and rules everyone follows.

Load the `brand-context` and `design-craft` skills (the Skill tool, or read their SKILL.md). Reply in the user's language.

## 1. Check the pillars

Read the Status table. Logo, Typography, and Color must be `decided`. For any that is not, name it and tell the human which command to run (`/logo-lab`, `/type-system`, `/color-system`), then stop. Graphic language, Layout, and Voice may be filled in here, with the human's confirmation.

## 2. Write the tokens

Complete `brand/tokens.json`. When it already exists (`/type-system` and `/color-system` create it), merge in what is missing and keep what the human decided; otherwise create it from [templates/tokens.template.json](templates/tokens.template.json), replacing every value including `$description`. The group names are in TOKENS.md in `brand-context`. The file is DTCG-style (`$value`, `$type`, aliases like `{color.brand.700}`), with hex strings for color. Groups: `color`, `font`, `size`, `leading`, `space`, `radius`, `shadow`, an optional `dark` group of overrides, `fontImport` (the Google Fonts URL), and the contrast pairs under `$extensions["graphic-skills"].pairs`.

Then run both checks from the project root, with `<design-craft>` and `<brand-system>` standing for those skills' folders, and fix the tokens until each exits 0:

```
node <design-craft>/scripts/contrast.mjs --tokens brand/tokens.json
node <brand-system>/scripts/build-theme.mjs brand/tokens.json brand/theme.css
```

`theme.css` is generated; edit the tokens, never the CSS.

## 3. Build the brand board

Create `brand/brand-board.html` from [templates/brand-board.html](templates/brand-board.html): one page that links `theme.css` and shows the idea, the logo kit with clear space, the palette with roles and contrast ratios, the type specimens, the graphic-language motifs, the layout rules, voice samples, and do and don't. The template is a worked example; replace all of its content. Search the finished file for the sample content listed in the template's header comment (the sample brand names, the sample person and route names, the sample hex values, the sample fonts); none may remain.

Look at the board rendered at 390 px and 1280 px, and take a screenshot when a browser tool exists.

## 4. Write the guidelines

Complete the brand memory so a stranger could use the brand correctly:

- **Logo**: clear space, minimum sizes, misuse (from `/logo-lab`).
- **Color**: roles, proportions, the contrast table (from the script).
- **Typography**: roles, scale, per-script line heights.
- **Graphic language**: three motifs at most, each as a rule (see `graphic-language.md`), plus the **Image recipe** when an image generator is in use (see `image-prompts.md`).
- **Layout**: grid, margins, the spacing scale, and the composition rule for each top channel from Strategy.
- **Voice**: tone, register, words used and avoided.
- **Accessibility floor** and **Guardrails**.

Offer to add the pointer line to `AGENTS.md` or `CLAUDE.md` (see `brand-context`).

## 5. Done

The skill is done when both scripts exit 0 with every declared pair passing, the board was seen rendered with no sample content left, every Status row reads `decided` or `deferred` with a reason (set each completed pillar to `decided` as the human confirms it), and the human confirmed the guidelines. Tell them the next commands: `/design-brief`, then `/make-graphic`.
