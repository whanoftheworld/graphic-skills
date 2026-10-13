---
name: brand-image
description: Generate on-brand imagery (photos, illustrations, textures, backgrounds, mockups) with the image generator, using the brand memory to write the prompt.
disable-model-invocation: true
---

# Brand image

On Codex, the built-in image generator makes the picture; this skill makes the prompt. It turns the brand memory (palette, imagery rules, guardrails, the clichés to avoid) into a precise image spec, generates, checks the result against the brand, and saves it where the project can use it.

Load the `brand-context` and `design-craft` skills (the Skill tool, or read their SKILL.md), and read `image-prompts.md` in `design-craft` before writing any prompt. Reply in the user's language. If the brand memory has no decided **Direction** or **Graphic language**, offer `/design-routes` and `/brand-system` first, since an image prompt without them is generic. Proceed provisionally only when the human asks, and log it.

## 1. Pin down the image

Ask only what the brand memory and the request leave open, in one round of three questions or fewer: what the image shows, where it will be used (channel and aspect), and whether any text must appear in it. Default to **no text in the image**; type belongs in the layout.

## 2. Find the generator

Use the harness image tool. On Codex, load the `imagegen` skill (built in; `$imagegen`) and use its built-in `image_gen` tool, one call per asset or variant. If no image tool exists, follow "When there is no image tool" in `image-prompts.md`: deliver the finished spec and stop short of pretending.

## 3. Write the spec

Fill the labeled spec from `image-prompts.md`, line by line, from the brand memory. Start with the **image recipe** if the brand has one. Label every reference image by role. Show the human the final spec in a short block with the result.

## 4. Generate and gate

Generate, then run the **image gate** from `image-prompts.md` on the output: guardrails, text, palette drift, artifacts, fit, honesty. Iterate with one targeted change per round and repeat the constraints each time, for at most three rounds. If the third round still fails the gate, report what blocks it and offer a different approach (a real photograph, a vector illustration, a simpler scene).

## 5. Save and record

Copy the accepted image into `brand/assets/images/<slug>-v1.png`, save its final prompt as `<slug>.prompt.md` beside it, and report the saved path, the prompt, and that the built-in tool was used. With the human's approval, add the lines that worked to **Graphic language → Image recipe** and a Decision log row.

The skill is done when the image file sits inside the project at the needed aspect, it passed the image gate (or each failure is named and accepted by the human), and its prompt is saved.

Then suggest `/make-graphic`: it places the image in a token-built layout with the exact logo and type, which a generator cannot draw reliably.
