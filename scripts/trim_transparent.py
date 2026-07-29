#!/usr/bin/env python3
"""Trim the transparent border around a PNG, optionally re-pad to an aspect ratio.

Usage:
  python3 scripts/trim_transparent.py <input.png> <output.png> [pad_pct] [aspect]

Why: some exported boat photos have large transparent margins, so when the
<img> is displayed at the same width as the tightly-cropped photos, the boat
looks smaller. Trimming to the opaque bounding box makes the subject fill the
frame. Passing an aspect ratio (e.g. 2.073 = the shared 767x370 series-photo
ratio) then pads the trimmed subject back out to that ratio so it renders at the
SAME footprint as the other series photos.

Example (S One hero photo, matched to the other series photos):
  python3 scripts/trim_transparent.py \
    Final_NoBackground/LargeNoBackgroundSOne-Red.png \
    Final_NoBackground/NoBackgroundS-ONE-fitted.png 2 2.073
"""
import sys
from PIL import Image

def main():
    inp, outp = sys.argv[1], sys.argv[2]
    pad_pct = float(sys.argv[3]) if len(sys.argv) > 3 else 2.0
    aspect = float(sys.argv[4]) if len(sys.argv) > 4 else None

    im = Image.open(inp).convert("RGBA")
    bbox = im.split()[-1].getbbox()  # opaque bounding box
    if not bbox:
        print("image is fully transparent; nothing to trim")
        return
    left, upper, right, lower = bbox
    w, h = right - left, lower - upper
    px, py = int(w * pad_pct / 100), int(h * pad_pct / 100)
    box = (max(0, left - px), max(0, upper - py),
           min(im.width, right + px), min(im.height, lower + py))
    im = im.crop(box)

    if aspect:
        w, h = im.size
        if w / h < aspect:            # too tall/narrow -> pad sides
            new_w = round(h * aspect)
            canvas = Image.new("RGBA", (new_w, h), (0, 0, 0, 0))
            canvas.paste(im, ((new_w - w) // 2, 0))
        else:                          # too wide -> pad top/bottom
            new_h = round(w / aspect)
            canvas = Image.new("RGBA", (w, new_h), (0, 0, 0, 0))
            canvas.paste(im, (0, (new_h - h) // 2))
        im = canvas

    im.save(outp)
    print(f"{outp} {im.size} ratio {round(im.size[0]/im.size[1], 3)}")

if __name__ == "__main__":
    main()
