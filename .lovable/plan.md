# Client Markup Remediation — Semper Chiropractic

Applies every red annotation from the 9 screenshots, with a single source of truth so facts can't drift again.

## 1. Single source of truth (`src/lib/site.ts`)

Extend the existing `SITE` config with structured fields used everywhere:

- `email` stays `care@semperchiro.com` (verified: no Gmail address exists anywhere in the codebase — that item is already clean; I'll re-verify the rendered DOM and structured data after the pass).
- `address` split into `street: "859 Mimosa Blvd"`, `city`, `state`, `zip: "30075"`, `full: "859 Mimosa Blvd, Roswell, GA 30075"`.
- `hours`: Mon–Thurs `8:00am – 1:00pm, 3:00pm – 6:00pm`; Friday `8:00am – 1:00pm`; Saturday `Appointment Only`; Sunday `Closed`.
- `credentials: ["Doctor of Chiropractic", "CCSP", "Webster Certified"]`.
- `insurance: ["BCBS", "Aetna", "Cigna", "United Healthcare", "Medicare", "Self Pay"]`.

## 2. Hours — replace all three rendered blocks

Current copy is `Mon–Fri 8:00a – 6:00p / Sat by appointment` in:

- Home "Visit the Clinic" block
- Site footer
- Contact page hours row

All three re-render from `SITE.hours`. No leftover annotation notes.

## 3. Credentials & certifications

- Home trust bar: `Doctor of Chiropractic · CCSP · Webster Certified`.
- Home insurance row: drop Humana, add Medicare and Self Pay (rendered from `SITE.insurance`).
- Meet Dr. Scrimo stat grid: Degree `Doctor of Chiropractic`; Certified `CCSP · Webster`; Service unchanged.
- Meet Dr. Scrimo body copy → "…he treats families, athletes, and active adults with the same standard he has always held: excellence."
- About timeline: Life University entry ends at "full-body biomechanics."; Today entry says "in Roswell and surrounding areas" instead of "on Mimosa Blvd".
- About page credential card/copy updated to include Webster Certified and drop "weekend warriors".

## 4. Family card + insurance FAQ

- Family Chiropractic pillar card: "Whole-family care from newborns to grandparents — gentle, pediatric, and Webster certified for prenatal care."
- FAQ answer: "We accept most major plans including BCBS, Aetna, Cigna, United Healthcare, and Medicare. We'll verify your benefits before your visit."
- Services page prenatal bullet reworded to "Webster Certified prenatal care"; "weekend warriors" removed there too.

## 5. Address presentation

Standardize every visible address and alt text to `859 Mimosa Blvd, Roswell, GA 30075` (proper casing, with ZIP). Hero location line, footer, contact, gallery caption, About clinic card all read from config.

## 6. Structured data (JSON-LD)

- `openingHoursSpecification` in `__root.tsx` (and any duplicate on home/services) rewritten as split Mon–Thu ranges (08:00–13:00, 15:00–18:00), Friday 08:00–13:00, Saturday by appointment, Sunday closed.
- `hasCredential` gains Webster Technique certification; `medicalSpecialty`/service list mentions prenatal Webster care.
- Physician/clinic `email`, `address`, and phone all sourced from config.

## 7. Copy cleanups

- Blog CTA: keep `care@semperchiro.com`, reword to "New articles are published monthly…"; "Coming soon" posts stay labeled.
- Verified there is no stray annotation text in the "Why Choose Semper" section — headings already read correctly; nothing to remove there.

## Verification

- Repo-wide grep proving zero hits for Humana, "weekend athletes"/"weekend warriors", "neuro-spinal care", "on Mimosa Blvd", and any Gmail address.
- Playwright pass on desktop + mobile across Home, About, Services, Blog, Contact; screenshots of the hours, trust bar, and credential blocks.
- JSON-LD dumped from the rendered DOM and checked for hours/credentials/email correctness.

Note: Google Business Profile hours must be updated by you in Google — I can't change that listing from here.
