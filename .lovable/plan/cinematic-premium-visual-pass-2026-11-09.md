# Cinematic premium visual pass

Visual-only change. Every word, credential, hour, address, insurance entry, review quote and page structure stays exactly as it is.

## Direction
- **Before:** light cream pages, forest green and bright bronze, flat white cards. It reads clean and clinical, but every section has the same visual weight.
- **After:** near-black charcoal as the main surface, with warm ivory text and a soft, muted gold accent. Forest green stays as a quiet supporting color so the brand is still recognizable. Light sections (for example Location and Journey) stay as warm ivory "breathing" bands, so long pages never feel heavy.

## Focus areas
1. **Color and typography system**
   - New tokens: charcoal, deeper ink, ivory, a desaturated gold, glass surface, glass border, inner glow and a soft lighting gradient.
   - Headlines: Satoshi, heavier weight, tighter letter-spacing and line-height, with fluid sizes from mobile to desktop.
   - Body text: Inter at 16–18px, around 1.65 line-height, and contrast of at least 4.5:1 on dark backgrounds.
2. **Hero ("Your Health is Your Wealth")**
   - Dark backdrop with one soft warm light glow behind the headline, plus a faint vignette. This is done with plain CSS gradients, with no extra images or scripts.
   - Headline is larger and tighter, with one subtle gold word accent.
   - Doctor photo gets a refined frame: thin gold hairline border, gentle gradient fade at the bottom and a consistent 4:5 shape.
   - The Veteran Owned pill and the CCSP and Webster credentials line stay prominent as glass chips.
3. **Three pillar cards**
   - Glass cards with a light background blur, a thin ivory border, a soft top inner highlight and a subtle lift on hover.
   - Photos are cropped to one consistent shape, with a soft dark gradient at the bottom so text stays readable.
4. **Meet Dr. Scrimo**
   - Portrait in the same framed style as the hero, with a soft light behind it.
   - Credentials (CCSP, Webster, Veteran Owned) appear as a row of glass badges.
   - Story text stays readable at a comfortable line length.
5. **Review block**
   - Glass review cards, gold stars, the rating badge shown as a glass chip and quotes in larger, refined type. Quotes are not changed.
6. **Header, footer and mobile bar** are matched to the dark theme. Tap targets stay at least 44px.

## Performance guardrails
- Background blur is used only on the cards (pillars, credentials, reviews). It is turned off when the device asks for reduced transparency or reduced motion, and switches to a solid fill on small screens if it causes lag.
- Lighting effects are pure CSS gradients, with no new images or fonts.
- The existing optimized photo sets and the fast-loading hero photo setup stay as they are.

## Technical details
- `src/styles.css`: redefine `:root` tokens (background, foreground, card, muted, border, primary as gold) and add `--glass-*`, `--glow-hero` and `--shadow-elegant` tokens. Add `@utility glass-card`, `glow-hero` and `frame-photo`. No hardcoded color classes in components.
- `src/routes/index.tsx`: restyle Hero, TrustBar, Pillars, DoctorStory and StandardOfCare by changing class names only.
- `PillarCard.tsx`, `GoogleReviews.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx` and `StickyMobileBar.tsx`: change tokens and classes only.
- About, Services, Contact and Blog pick up the new tokens automatically. Spot-fix any contrast issues.
- QA: Playwright screenshots at 1280 and 390 wide, run the existing axe accessibility test and grep-diff to confirm no visible text changed.
