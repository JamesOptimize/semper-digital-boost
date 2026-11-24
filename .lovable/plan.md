# Header logo: match the official Semper logo

## What the official logo is
- A tall forest-green spine: a smooth S-curve that ends in a row of round dots (the vertebrae).
- "SEMPER" in a classic, high-contrast serif with wide letters, all capitals.
- "CHIROPRACTIC" in small, widely spaced capitals underneath, and the tagline "HEALTH IS WEALTH" under that.
- Single green color on white. There is no gold and no navy tile in it.

## Why the current header doesn't match
- It uses a small gold spine picture on a navy square. That's a different color and shape from the real logo.
- "Semper." is set in the sans-serif page font with a gold full stop. The real logo has no full stop and uses a serif.
- The small 64px image blurs on high-resolution screens.

## Changes
1. **Redraw the spine** as a sharp, scalable drawing from the uploaded logo: the S-curve and its dots, no tile behind it. It takes the logo green in light mode and ivory/gold in dark mode, so it reads well on both.
2. **Wordmark set like the logo:** "SEMPER" in a refined serif (Cormorant Garamond, loaded once and used only here), with "CHIROPRACTIC" in small spaced capitals under it. The two lines stack inside the existing 64px header height.
3. **Tagline:** "HEALTH IS WEALTH" goes in the footer logo only. In the header it would be too small to read.
4. **Sizes:** full logo on desktop. On phones, the spine and "SEMPER" show with "CHIROPRACTIC" kept underneath at a size that's still readable, and the menu button keeps its room.
5. **Footer and browser tab icon** use the same redrawn spine so the brand looks the same everywhere.
6. Everything else in the header (centered menu, gold active line, theme switch, phone, Book Now) stays as it is.

## Checks
- Screenshots at desktop, small laptop and phone, in light and dark mode.
- Readability (contrast) check, and confirm the header doesn't move or jump as the page loads.

## Technical notes
- New `SpineLogo.tsx` inline SVG using `currentColor`. It replaces `spine-mark.png` in SiteHeader and SiteFooter, and the PNG is deleted.
- Cormorant Garamond 600 is added through the existing Google Fonts `<link>` in __root with `display=swap`, plus a size-adjusted fallback.
- The favicon is regenerated from the SVG into `public/`.
