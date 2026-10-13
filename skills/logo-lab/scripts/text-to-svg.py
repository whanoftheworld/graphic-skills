#!/usr/bin/env python3
"""Turn text into SVG outlines, shaped correctly for Thai and Latin.

A logo that names a font breaks wherever the font is missing. Outlines carry the letterforms
with the file. HarfBuzz does the shaping, so Thai vowels and tone marks land where the font
designer put them (naive glyph-by-glyph placement does not).

    pip install fonttools uharfbuzz
    python text-to-svg.py --font Pridi-SemiBold.ttf --text "Morning Mist" --size 120 --fill "#2f6b4f"

Prints a complete <svg> with a tight viewBox. Options:
    --letter-spacing N   extra advance per glyph in font units / 1000 of the size (Latin only; leave 0 for Thai)
    --path-only          print just the <path> element and the box as a comment, for composing lockups
Use only fonts whose licence allows outlining and embedding in a logo (OFL fonts do).
"""
import argparse
import sys

import uharfbuzz as hb
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont


def outline(font_path, text, size, spacing):
    blob = hb.Blob.from_file_path(font_path)
    hb_font = hb.Font(hb.Face(blob))
    tt = TTFont(font_path)
    glyphs = tt.getGlyphSet()
    scale = size / tt["head"].unitsPerEm

    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(hb_font, buf, {"kern": True, "liga": True})

    svg_pen = SVGPathPen(glyphs, ntos=lambda v: ("%.2f" % v).rstrip("0").rstrip("."))
    bounds = BoundsPen(glyphs)
    x = 0.0
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        name = tt.getGlyphName(info.codepoint)
        matrix = (scale, 0, 0, -scale, (x + pos.x_offset) * scale, -pos.y_offset * scale)
        glyphs[name].draw(TransformPen(svg_pen, matrix))
        glyphs[name].draw(TransformPen(bounds, matrix))
        x += pos.x_advance + spacing * tt["head"].unitsPerEm / 1000
    if bounds.bounds is None:
        sys.exit("No outlines produced; check the font covers this text.")
    return svg_pen.getCommands(), bounds.bounds


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--font", required=True)
    p.add_argument("--text", required=True)
    p.add_argument("--size", type=float, default=100)
    p.add_argument("--fill", default="#000000")
    p.add_argument("--letter-spacing", type=float, default=0)
    p.add_argument("--path-only", action="store_true")
    a = p.parse_args()

    d, (x0, y0, x1, y1) = outline(a.font, a.text, a.size, a.letter_spacing)
    pad = a.size * 0.02
    box = (x0 - pad, y0 - pad, (x1 - x0) + 2 * pad, (y1 - y0) + 2 * pad)
    path = f'<path fill="{a.fill}" d="{d}"/>'
    if a.path_only:
        print(f"<!-- box: {box[0]:.2f} {box[1]:.2f} {box[2]:.2f} {box[3]:.2f} -->")
        print(path)
    else:
        vb = " ".join(f"{v:.2f}" for v in box)
        print(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" aria-label="{a.text}">{path}</svg>')


if __name__ == "__main__":
    main()
