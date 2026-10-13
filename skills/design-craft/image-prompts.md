# Image prompts from the brand

Use this when an image generator is available: Codex's built-in `image_gen` tool, reached through its `imagegen` skill (`$imagegen`), or any harness image tool. The brand memory supplies the prompt; the generator supplies the picture.

## Division of labor

| Generate as an image | Keep in code (SVG, HTML, CSS) |
| --- | --- |
| photography-style scenes, illustration, textures, backgrounds, mood images, product and packaging mockups, concept art, logo concept exploration | the logo kit, all text (Thai above all), exact brand colors and color blocks, grids and layout, icons that must match a set, anything with a measurement |

Generators draw pictures well and render text, exact hex values, logos, and clear space unreliably. Codex's own `imagegen` skill says the same: it excludes work better done directly in SVG, HTML, or CSS and logo systems that already exist as vector files. So the default recipe is **image as asset, layout as code**: generate the picture, then place it in a token-built layout that adds the exact logo, type, and color.

Generate a whole composition, text included, only when the human asks for an image-first concept such as an ad mockup. Then treat every character as unverified until checked.

## Brand memory to prompt

`imagegen` uses one labeled spec for every request. Fill each line from the brand memory:

| Prompt line | Comes from |
| --- | --- |
| `Use case:` | pick the slug: `photorealistic-natural`, `product-mockup`, `ads-marketing`, `illustration-story`, `stylized-concept`, `infographic-diagram`, or `logo-brand` (concept exploration only) |
| `Asset type:` | the top channels in Strategy (for example "Instagram feed hero, 4:5, text and logo added later in HTML") |
| `Primary request:` | the brief's one-sentence message turned into a scene |
| `Style/medium:` | the imagery rules in Graphic language (light, grade, crop, illustration line) |
| `Composition/framing:` | Layout and the read order: name the calm, empty region where the HTML will put type and logo |
| `Lighting/mood:` | the personality spectrum and say/never pairs, in visual words |
| `Color palette:` | role names with the token hex values ("dominant forest green #2f6b4f, warm cream #f9f7f0, one cherry-red accent #b3342a at most once") |
| `Text (verbatim):` | only when text must live in the image; otherwise write `no text` in Constraints |
| `Constraints:` and `Avoid:` | Guardrails, plus the category clichés from Strategy ("no mascot, no bean icon, no kraft-paper texture"), plus "no logos, no watermark" |
| `Input images:` | the human's own references, each labeled with a role (`Image 1: style reference`) |

The `imagegen` skill forbids inventing palettes, slogans, or brand names the user did not imply. The brand memory is the user's own spec, so naming its palette and constraints is normalizing their request, not inventing one.

## The image recipe

Distill five to eight reusable lines (medium, light, grade, crop, palette, avoid) into **Graphic language → Image recipe** in the brand memory, with the human's approval. Start every later prompt with the recipe so a series reads as one brand.

## A filled spec

```
Use case: photorealistic-natural
Asset type: Instagram feed hero photo, 4:5; type and logo are added later in HTML
Primary request: a coffee farmer hand-picking ripe red cherries on a hillside at first light
Style/medium: documentary photograph, real skin and fabric texture, tight crop
Composition/framing: farmer and branches in the upper two thirds; lower third calm and empty for type
Lighting/mood: low sun through mist, cool shadows, quiet and precise
Color palette: muted forest greens and warm cream highlights; red only on the cherries
Constraints: no text, no logos, no watermark, no mascot, no bean icon, no kraft-paper look
```

## The image gate

Check each generated image before it enters a layout, and iterate with one targeted change at a time:

1. **Guardrails**: every Avoid item is absent.
2. **Text**: none unless requested. When requested, compare every character with the verbatim copy, Thai tone marks included. One error means regenerate without text and set the words in HTML.
3. **Palette drift**: look at the dominant hues against the tokens. Correct a small drift with a token-based grade in CSS (an overlay or duotone) instead of regenerating.
4. **Artifacts**: hands, faces, proportions, warped objects, stray logos or watermarks, invented product details.
5. **Fit**: the aspect and the empty region match the layout. The built-in tool takes the aspect from the prompt, so crop with `object-fit: cover` where it falls short.
6. **Honesty**: a generated person or place is fictional. Never present it as a real farmer, customer, or product, and never next to a claim that names a real one. Label it, or replace it with a real photograph before publishing.

## Save and record

Built-in generations land under `$CODEX_HOME/generated_images/…`. Copy the chosen image into the project (`brand/assets/images/<slug>-v1.png`; never overwrite, version the name) and reference that copy only. Store the final prompt beside it as `<slug>.prompt.md` and note in the report that the built-in tool was used.

## When there is no image tool

Do not fake one. Write the finished spec as a paste-ready block, say which tool can run it (Codex's `$imagegen`, an image-capable chat), build the layout with a clearly labeled placeholder frame of the right aspect, and let the human drop the image in.
