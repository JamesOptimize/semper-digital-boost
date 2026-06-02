
## Scope

Build the Semper Chiropractic marketing site in this Lovable project (TanStack Start + Tailwind v4 — not Webflow; same visual outcome, code we can keep iterating on). Foundation = chosen Direction 1 (Editorial Trust), refined with your locked brand tokens and the homepage architecture you specified.

## Brand system (locked into `src/styles.css`)

- `--brand-forest: #0A3D2A` (primary)
- `--brand-bronze: #D4A017` (accent, veteran)
- `--brand-cream: #F8F5F0` (background/neutral)
- `--brand-navy: #0C2340` (deep surfaces, footer)
- Foreground/border/muted tokens derived from these in oklch
- Headings: Satoshi Variable · Body: Inter (loaded via Fontshare/Google)
- Radius, shadow, motion tokens defined once and reused

## Routes

```
src/routes/
  __root.tsx          shell, sitewide meta, Organization + LocalBusiness JSON-LD, sticky mobile Book/Call bar
  index.tsx           Homepage (long-scroll, sections below)
  about.tsx           Dr. Scrimo full bio, Marine story, Life University, philosophy
  services.tsx        Detailed service cards + FAQs
  blog.tsx            Index of wellness posts (static MDX-style list; placeholder posts to start)
  contact.tsx         Map, hours, NAP, contact form (validated, HIPAA-conscious)
```

Each route gets its own `head()` with unique title / description / og:* / canonical. Hero/portrait image wired into og:image where it exists.

## Homepage sections (in order)

1. **Nav** — wordmark + spine/wave mark, desktop menu, mobile hamburger (shadcn Sheet), green Book Now pill always visible
2. **Hero** — veteran pill, serif headline "Your Health is Your Wealth.", sub-copy, primary Book + secondary Call CTAs, micro NAP line, portrait of Dr. Scrimo
3. **Trust bar** — Google rating, insurance logos (Aetna, BCBS, Cigna, UHC, Humana), "Serving Roswell" line
4. **Why Choose Semper** — 3 editorial cards: Family Chiropractic · Sports Injury & Rehab (CCSP) · Veteran & Active Lifestyle
5. **Services overview** — icon grid (New Patient Exam, Adjustments, Sports Injury, Prenatal/Pediatric, Wellness) → `/services`
6. **Dr. Scrimo story** — portrait + bio block + credential stats (DC, CCSP, Life University, USMC)
7. **Testimonials** — quote-forward editorial carousel (embla), real patient quotes
8. **New Patient Journey** — 3-step "what to expect" + FAQ accordion (shadcn Accordion, also emitted as FAQPage JSON-LD)
9. **Location** — embedded Google Map iframe + hours grid + final full-width CTA banner
10. **Footer** — NAP, hours, social, fine print

**Sticky mobile bottom bar** (Book + Call) rendered from `__root.tsx`, hidden ≥ md.

## Imagery

Generated via the image tool, saved to `src/assets/`, imported as ES6:
- Hero portrait of Dr. Scrimo (warm, editorial)
- Clinic interior / adjustment action shot
- Family, athlete, veteran lifestyle vignettes for pillar cards
- Spine/wave brand mark (transparent PNG)

All `<img>` get descriptive alt text and explicit width/height to avoid CLS. WebP via Vite build.

## SEO + AI-search readiness

- Per-route `<title>`, `<meta description>`, og:title/description/url, canonical on leaf routes only
- JSON-LD: `LocalBusiness` + `MedicalBusiness` + `Person` (Dr. Scrimo) in `__root.tsx`; `FAQPage` on homepage; `BreadcrumbList` on sub-pages
- Single `<h1>` per route, semantic landmark structure, one `<main>`
- `public/robots.txt` + `public/sitemap.xml` with the five routes
- Target phrases woven into copy and meta: "chiropractor Roswell GA", "sports injury chiropractor", "veteran chiropractor Roswell", "family chiropractic Roswell"

## Conversions

- Primary CTA links to Jane App booking URL (placeholder until you confirm the exact URL)
- Secondary CTA = `tel:6782261333`
- Sticky mobile Book/Call bar
- Contact form validates with zod (name/email/phone/message, length + format limits), shows toast on submit; wired to a no-op handler initially — once you confirm Lovable Cloud + an email service, I'll connect real delivery

## Accessibility & performance

- WCAG AA contrast on all token combinations
- Focus rings on all interactive elements; icon-only buttons get `aria-label`
- Tap targets ≥ 44×44 on mobile
- Lazy-load below-the-fold images, preload hero
- Restrained motion (fade/rise on scroll via Framer Motion, hover-lift on cards) — respects `prefers-reduced-motion`

## Out of scope (call out for follow-ups)

- **Webflow export** — this build lives in code (TanStack Start). Same visual result, but no Webflow project file. Confirm if that's a blocker.
- **AI chatbot** — needs Lovable Cloud + AI Gateway; will enable on a follow-up turn if you want it now
- **Dark mode toggle** — easy to add; flagged as a v1.1 polish item to keep launch focused
- **A/B testing hooks, GA4, Hotjar** — script slots ready; I'll wire them once you provide measurement IDs
- **Real testimonials, real Jane App URL, real insurance logo files** — using clearly-marked placeholders until you supply assets

## Technical notes

- `src/styles.css`: extend `:root` with the brand tokens above; map them in `@theme inline`
- Fonts loaded via `<link>` in `__root.tsx` head with `preconnect` to fonts.gstatic
- Reusable section components under `src/components/marketing/` (Hero, TrustBar, PillarCards, Services, AboutBlock, Testimonials, Journey, LocationCta, StickyMobileBar, SiteHeader, SiteFooter)
- Embla for the testimonial carousel (already in shadcn)
- All page metadata via TanStack `head()` — title lives inside `meta` array
