# Finish markup remediation + production readiness audit

## Current standing (verified)
- Core copy/hours/credential fixes from Ed's markup list are done and centralized.
- Still open:
  - Site-wide schema (`__root.tsx`) still uses old Mon–Fri 08:00–18:00 hours; no email in schema.
  - Address/schema duplicated by hand in `index.tsx`, `services.tsx`, `about.tsx` instead of reading the shared config.
  - Gallery caption and About photo alt still say "on Mimosa Blvd" (flagged phrasing).
  - Blog CTA promises "New articles are published monthly".

## Steps
1. Schema: swap root hours for the shared `OPENING_HOURS_LD`, add email; make home/services schema read address from shared config.
2. Copy: gallery caption + About alt -> "in Roswell, GA"; About stat detail uses shared address; soften blog CTA (no publishing cadence promise).
3. Repo-wide sweep for every banned string (weekend warriors/athletes, neuro-spinal, "on Mimosa Blvd", Gmail, Humana, old hours).
4. Verification:
   - Build log clean; run existing Playwright/axe tests.
   - Playwright screenshots desktop 1280 + mobile 390 of Home, About, Services, Contact, footer; check hours, trust bar, credentials, insurance row.
   - Parse JSON-LD from rendered HTML and confirm hours/email/address match.
   - Check per-route head metadata and console errors.
5. Report results plus off-site item: Google Business Profile hours must be updated by the practice.
