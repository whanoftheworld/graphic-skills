---
name: design-brief
description: Turn a graphic request into a one-page brief (message, audience, format, copy, success test) before anything is designed.
disable-model-invocation: true
---

# Design brief

Most weak graphics come from a missing decision, not a missing skill: nobody said what the one message was, or where it would be seen. This skill settles those decisions in a short interview and writes them down for `/make-graphic`.

Load the `brand-context` and `design-grilling` skills (the Skill tool, or read their SKILL.md). Reply in the user's language. If there is no brand memory, say so and follow `brand-context`.

## Interview

Run `design-grilling` over this tree. Skip any node the request already answers, and take facts from the brand memory instead of asking (the channels, the audience, the voice).

- **Message**: the single thing the viewer should do, feel, or know, in one sentence. Two messages mean two graphics.
- **Viewer and moment**: who sees it, where, in how many seconds (scrolling a feed, walking past a window, holding a package).
- **Format**: the channel, then its canvas. Confirm current platform specs before fixing a size; they change.
- **Copy**: which words are supplied, which you write, and in which languages. Mark every claim, price, date, and number as supplied by the human or as a placeholder.
- **Required elements**: logo version, legal lines, contact, price, a call to action.
- **Brand levers**: which parts of the brand carry this piece (the color block, the photography, the display type), taken from the brand memory.
- **Success test**: how the human will judge it, stated in terms a check can answer (readable at 200 px wide, the offer is the first read, the logo has clear space).
- **Constraints and variants**: print specs and bleed, deadline, the sizes to adapt it to.

## Write

Save `brand/briefs/<yyyy-mm-dd>-<slug>.md` with those nine headings, the human's words quoted where they chose them, and the success test as a checklist. Read it back in plain words and get an explicit yes.

The brief is done when the message fits one sentence, the canvas size is fixed, every number or claim in the copy has a named source, and the success test is checkable. Then tell the human to run `/make-graphic` on it.
