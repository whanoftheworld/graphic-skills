#!/usr/bin/env python3
"""Turn text into SVG outlines, shaped correctly for Thai and Latin.

A logo that names a font breaks wherever the font is missing. Outlines carry the letterforms
with the file. HarfBuzz does the shaping, so Thai vowels and tone marks land where the font
designer put them (naive glyph-by-glyph placement does not).

    pip install fonttools uharfbuzz
    python text-to-svg.py --font Pridi-SemiBold.ttf --text "Morning Mist" --size 120 --fill "#2f6b4f"
    python text-to-svg.py --font "NotoSansThai[wdth,wght].ttf" --wght 600 --text "ไร่หมอกเช้า" --size 80

The font must be a TTF or OTF file (static or variable), not woff2. A variable font is frozen at
--wght (default: its default instance).

Prints a complete <svg> with a tight viewBox. Options:
    --letter-spacing N   extra advance per glyph in font units / 1000 of the size (Latin only; leave 0 for Thai)
    --path-only          print just the <path> element and the box as a comment, for composing lockups
Use only fonts whose licence allows outlining and embedding in a logo (OFL fonts do).
"""
import argparse
import io
import sys

try:
    import uharfbuzz as hb
    from fontTools.pens.boundsPen import BoundsPen
    from fontTools.pens.svgPathPen import SVGPathPen
    from fontTools.pens.transformPen import TransformPen
    from fontTools.ttLib import TTFont
except ImportError:
    sys.exit("Missing packages. Run: pip install fonttools uharfbuzz")


def load(font_path, wght):
    tt = TTFont(font_path)
    if "fvar" in tt:
        from fontTools.varLib import instancer

        axes = {"wght": wght} if wght is not None else {}
        tt = instancer.instantiateVariableFont(tt, {**{a.axisTag: a.defaultValue for a in tt["fvar"].axes}, **axes})
    data = io.BytesIO()
    tt.save(data)
    raw = data.getvalue()
    return TTFont(io.BytesIO(raw)), hb.Font(hb.Face(hb.Blob(raw)))


def outline(font_path, text, size, spacing, wght=None):
    tt, hb_font = load(font_path, wght)
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
    p.add_argument("--wght", type=float, default=None, help="weight for a variable font")
    p.add_argument("--path-only", action="store_true")
    a = p.parse_args()

    d, (x0, y0, x1, y1) = outline(a.font, a.text, a.size, a.letter_spacing, a.wght)
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
