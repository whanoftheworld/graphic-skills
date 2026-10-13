# Tokens

`brand/tokens.json` holds every value a graphic may use. `brand/theme.css` is generated from it by `build-theme.mjs` (in the `brand-system` skill). The file is DTCG-style: `$value`, `$type`, `{aliases}`, and hex strings for color.

## Who writes it

Whichever command first needs a token creates the file by copying `templates/tokens.template.json` from the `brand-system` skill and replacing its values. Every later command **merges into it** and never overwrites a group the human decided. `/brand-system` completes the file and verifies it.

## Group names

Other skills and the brand board depend on these names.

| Path | Holds |
| --- | --- |
| `color.brand.<50…950>`, `color.accent.<50…950>`, `color.neutral.<50…950>` | scales from `palette.mjs --json <name>` pasted inside `color`; the exact brand hex pinned to its nearest step |
| `color.primary`, `color.secondary` | aliases to a brand and an accent step |
| `color.surface.{base,sunken,brand,deep}`, `color.text.{primary,secondary,onBrand,onAccent}`, `color.border.{subtle,strong}`, `color.semantic.{success,warning,danger}` | role aliases to scale steps |
| `font.display`, `font.body`, `font.weight.*`, `fontImport` | font stacks as arrays, weights, the Google Fonts CSS URL with only the weights in use |
| `size.*` (rem), `leading.*`, `space.*` (px), `radius.*`, `shadow.*` | the type scale, line heights, spacing scale, corners, elevation |
| `dark.color.*` | overrides that mirror `color` paths for dark mode |
| `$extensions["graphic-skills"].pairs` | `{ "fg": "{color.text.primary}", "bg": "{color.surface.base}", "use": "body text", "need": "text", "mode": "light" }`, with `need` one of `text` (4.5:1), `large` (3:1), `ui` (3:1) and `mode` `light` or `dark` |

## Checks

Run both from the project root, using the paths of the installed skills:

```
node <design-craft>/scripts/contrast.mjs --tokens brand/tokens.json
node <brand-system>/scripts/build-theme.mjs brand/tokens.json brand/theme.css
```

The first exits 1 when a declared pair misses its ratio. The second exits 1 when an alias points at a token that does not exist.
