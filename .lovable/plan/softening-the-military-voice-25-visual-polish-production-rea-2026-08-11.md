# Softening the Military Voice (−25%) + Visual Polish + Production Readiness

Client feedback: the military framing is too heavy. The goal is to keep the veteran identity as a credible differentiator while cutting roughly a quarter of the military language so families and athletes feel equally addressed.

Current state: 74 lines across 9 files carry military phrasing (Marine, USMC, Semper Fidelis, Corps, combat, ruck, tactical, duty). Target: retire about 18–20 of those, concentrated where the language repeats rather than where it earns trust.

## What stays (trust anchors — untouched)

- "Veteran Owned & Operated" hero badge.
- The Veteran & Active Lifestyle service pillar and its `/services#veteran` section.
- `USMC` in the credentials grids on the homepage and About page.
- Person / LocalBusiness JSON-LD veteran attributes (real credentials, good for search).
- The About page's core narrative paragraph about serving as a Marine.

## What gets softened (the 25%)

Homepage (`src/routes/index.tsx`)
- Hero headline: "Marine discipline meets clinical excellence." becomes an outcome-led line focused on precision care and getting patients moving again.
- Meta title/description and OG/Twitter copy: drop "Marine discipline. Clinical excellence." in favor of family/athlete/veteran outcomes; keep "Veteran-Owned" once in the title.
- Pillar card copy: remove "Semper Fidelis" phrasing; describe the care instead.
- "Marine values." section heading and body: single reference to his Marine service retained, the second and third repetitions ("Marine precision", "active service members") replaced with plain language.

About (`src/routes/about.tsx`)
- Hero subline "Marine discipline. Clinical excellence." replaced with a discipline/accountability line free of military vocabulary.
- Meta description and OG description: one veteran mention, not two.
- Credentials row: `USMC` value stays, the "United States Marine Corps" detail line shortened.

Timeline (`src/components/marketing/AboutTimeline.tsx`)
- Section heading "From the Corps to the clinic." becomes a neutral heading such as "The path to the practice."
- Portrait overlay caption "Semper Fidelis / United States Marine Corps" reduced to a single restrained credential line.
- Timeline entries: keep the Marine Corps milestone (it is factual history), remove "Semper Fidelis ethos" and "Marine precision" from later entries.

Footer (`src/components/marketing/SiteFooter.tsx`)
- Remove the helmet emoji line entirely (per the no-emoji standard already in force).
- Collapse the two-line military blurb to one: veteran-owned care for Roswell families, athletes, and active people.

Services (`src/routes/services.tsx`)
- Veteran pillar copy: drop "Semper Fidelis isn't a slogan"; keep the audience (active-duty, reserve, retired, first responders).
- Conditions list: "Combat-load spinal compression" and "Ruck, lift & impact recovery" reworded to load-bearing/impact recovery language that still speaks to that audience; "Tactical-athlete" becomes "high-demand athlete".
- Meta: drop the trailing "Marine discipline. Clinical excellence."

Blog (`src/routes/blog.tsx`)
- Keep the Veterans post (it serves that audience), soften "former service members" to "veterans" in the excerpt.

Instagram fallback tiles (`src/components/marketing/InstagramFeed.tsx`)
- Two of the curated captions carry military phrasing; rewrite one and neutralize the other so the grid is not two-thirds military.

## Visual optimization (the 2%)

Refinement only — no new components, no layout rewrites, no new images.
- Tighten vertical rhythm on the homepage pillar/story sections to the existing `--space-*` scale so section padding is consistent rather than ad hoc.
- Normalize heading scale and `tracking-[-0.02em]` / `leading-[1.1]` treatment across homepage, About, and Services so the three pages read as one system.
- Unify card treatment: one border radius and one `--shadow-elegant` hover elevation across PillarCard, Services columns, and credential blocks.
- Bronze accent discipline: eyebrow labels, rules, and focus rings only — no bronze on large fills.
- Confirm every interactive element keeps a visible `focus-visible` bronze ring at the same offset.

## Production readiness

- Typecheck clean; no unused imports left behind by copy removal (notably image and icon imports on the homepage).
- Verify no remaining emoji anywhere in `src/`.
- Re-run the existing Playwright + axe testimonial suite for zero regressions.
- Confirm every route still has unique title/description/OG/canonical with absolute production URLs.
- Visual QA at 440px and desktop widths, checking hero `fetchpriority`/preload and the AVIF/WebP/JPEG sets are untouched so LCP and CLS hold.

## Technical notes

Copy-only edits in route and component files plus Tailwind class normalization. No changes to `ResponsiveImage`, `LazyMap`, asset pipeline, routing, schema structure, or any backend. JSON-LD veteran attributes remain because they are factual credentials, not marketing tone.
