# assets/

| File           | Size    | Used for                                   |
|----------------|---------|--------------------------------------------|
| `headshot.jpg` | 203 KB  | Square photo in the About section (800×800), from `IMG_7967.webp` |
| `face.jpg`     | ~20 KB  | Small round avatar at the top, face crop of the same photo |
| `avatar.jpg`   | 121 KB  | Fallback if `headshot.jpg` is missing (graduation photo crop) |
| `og.png`       | 680 KB  | Preview image when the link is shared on LinkedIn and similar sites |
| `cv.pdf`       | 3.9 MB  | Download CV button. Worth compressing, it is large for a CV |
| `IMG_7967.webp`, `shajee.jpg` | | Camera originals. Gitignored, kept only on your computer |

Institution logos are drawn by the page itself as coloured initials, so they
cannot break. To use a real logo, add e.g. `itmo.svg` here and set
`logo: "assets/itmo.svg"` on that entry in `data.js`.

`og.png` still shows the graduation photo. Tell Claude if you want it
regenerated from the new photo.
