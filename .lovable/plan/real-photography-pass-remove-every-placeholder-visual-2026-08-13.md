# Real Photography Pass — Remove Every Placeholder Visual

Six real clinic photos are now available. The goal: every image on the site is a real Semper Chiropractic photo, correctly cropped for its slot, and no AI-generated or invented content remains.

## Image-by-image assessment

| Photo | Assessment | Use |
|---|---|---|
| IMG_1083 — Dr. Scrimo and his wife under the Semper banner | Best group/team shot. Bright, on-brand signage, both faces clear. Vertical, lots of headroom. | New "Meet the practice" / clinic exterior slot on home + About. Crop to 4:5 keeping the banner and both figures. |
| IMG_1137 — cervical adjustment, adult female patient | Strongest clinical hero image. Clean composition, anatomy poster adds credibility. | Replaces the "Precision adjustment" clinic photo on the home page. 3:2 landscape crop. |
| IMG_1128 — lumbar adjustment, adult female patient | Second-strongest clinical shot; shows spine chart, warm wood floor. | Replaces the athlete/active-adult pillar image. 4:5 crop tight on hands and patient. |
| IMG_0679 / IMG_0681 — pediatric adjustment | Same moment; 0681 (landscape, closer, better light) is the keeper. 0679 has a distracting foreground knee — skip. | Family/pediatric pillar image. |
| IMG_4544 — infant adjustment, baby smiling | Emotionally the best image on the site; slightly soft and shot at an odd angle. Rotate/crop to upright and use at moderate size, not as a hero. | Family care section on Services, and secondary family image. |

No real veteran photo exists. The veteran pillar's AI-generated image will be removed and replaced with a typographic credential card (forest/bronze, USMC + CCSP marks) — no stock, no invented imagery.

## Work

1. **Generate responsive ladders** for each selected photo: AVIF/WebP/JPEG at 480/720/960/1200, with intentional crops per slot (no `object-cover` guesswork on faces). Same pipeline as the existing hero.
2. **Wire into the site** through the existing `ResponsiveImage` component, with accurate, descriptive alt text naming what is happening in each photo.
3. **Delete the AI-generated placeholders**: `pillar-athlete`, `pillar-family`, `pillar-veteran`, `clinic` asset directories and every import of them.
4. **Remove remaining placeholder content**: the four invented testimonials (`Marcus T.`, `Allison R.`, `James K.`, `Brianna M.`) are fabricated social proof and a real FTC risk. Replace that section with either (a) a live Google-reviews link/rating block, or (b) a credential-and-process section, until real, attributable reviews exist. Default is (b) so nothing unverified ships.
5. **Visual QA** at mobile (440px) and desktop: verify no face is cropped, no image washes out against cream surfaces, aspect ratios are reserved to avoid layout shift, and LCP still resolves to the hero.

## Technical notes

- Crops are produced offline with PIL and committed as static asset ladders — no runtime image processing.
- Every `<picture>` keeps explicit `width`/`height`, `loading="lazy"` except the hero, and `decoding="async"`.
- Hero preload/`fetchpriority` stays on the headshot; new photos must not compete for LCP.
- Alt text is content-specific (e.g. "Dr. Scrimo performing a gentle cervical adjustment"), never decorative filler.
