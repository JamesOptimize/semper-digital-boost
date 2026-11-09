# Performance and technical quality pass

This pass changes nothing you can see on the page: no layout, colors or wording. It only changes how things load and the hidden business information that Google reads.

## What the audit found

- **Hero photo delay on desktop.** The photo is already marked to load first and is preloaded. However, it is set to "decode in the background", so the browser paints the headline before the photo. This is the visible lag.
- **Logo mark.** The small spine logo in the header and footer is a 34 KB PNG, even though it is only shown at 28–32px. It should be about 2–3 KB.
- **Fonts.** Inter loads 5 weights, including 300, which looks unused. Satoshi loads 4 weights. Both font services use `display=swap`, which is good. There is no font-size matched fallback, so text can reflow slightly when the real fonts arrive. The Google Fonts stylesheet host also has no preconnect.
- **Saturday hours in Google's business data.** Saturday is listed with opens and closes both set to 00:00. Google reads that as closed all day, which conflicts with "Appointment Only".
- **Credentials in Google's business data.** The sitewide business data names Dr. Scrimo but does not include his credentials. CCSP and Webster appear only in a separate block on the homepage, and the two blocks are not linked together.
- **Already fine.** Every photo uses an AVIF, WebP and JPG set with width and height attributes. Practice photos load lazily, and review avatars are sized and lazy. The map loads only when scrolled into view.

## Changes

1. **Hero photo loads with the headline.**
   - Remove the background-decode setting from the hero photo only.
   - Keep the high-priority flag and the AVIF preload. Make sure the preload's sizes exactly match the photo's sizes, so the browser never downloads two copies.
2. **Logo.** Re-export the spine mark as a small 64px image (2x sharp) and keep its size attributes.
3. **Fonts.**
   - Drop Inter 300 if a code search confirms it is unused.
   - Add a preconnect for the Google Fonts stylesheet.
   - Add size-matched local fallback fonts (Arial metrics tuned to Inter and Satoshi), so text barely shifts when the web fonts swap in.
   - Add no new font files.
4. **Google business data.**
   - Combine everything into one linked business and physician record in the sitewide data: name, address, phone, `care@semperchiro.com`, website, social profiles, map location, and Mon–Thurs 8–1 and 3–6 plus Fri 8–1.
   - Saturday: remove it from the regular hours and mark it "by appointment only" in the business description and `hoursAvailable` notes. Sunday stays out of the hours, which Google reads as closed.
   - Dr. Scrimo: Doctor of Chiropractic, CCSP and Webster Certified as credentials, linked to the business.
   - The homepage physician block will point to the same record instead of repeating it.
   - The FAQ and service blocks stay as they are.
5. **Core Web Vitals check.**
   - Check real visitor speed data if any exists.
   - Then measure locally at 375px and at desktop: when the main image appears, how much the layout shifts, and whether the booking bar and glass blur cause scroll jank (main-thread time during scroll).
   - Fix only what the measurements show.
6. **Accessibility re-check.**
   - Re-run the contrast scan on all five pages at 375px and 1280px.
   - Check the heading order (one main headline, no skipped levels) and the page landmarks (one main area, plus the header, footer and booking-bar region) on Home, About, Services, Contact and Blog.

## Report you will get

- Every optimization made, with before and after numbers: logo size, the hero image's load timing, layout shift and font weights.
- Confirmation that no visible text changed, checked by comparing each page's visible text before and after.
- Any remaining notes, for example whether Google's own Rich Results Test should be run on the live site after publishing.

## Technical details

- `src/routes/index.tsx`
  - Hero `<img>`: drop `decoding="async"`.
  - Verify that `imageSizes` and `heroSizes` match.
  - Replace the standalone Person JSON-LD with a reference by `@id` to `#physician`.
- `src/routes/__root.tsx`
  - Font links: preconnect to `fonts.googleapis.com`, trimmed weights.
  - Rebuild `localBusinessLd` as an `@graph` holding:
    - a `MedicalBusiness` node (`#clinic`) with `url`, `email`, `sameAs` and `openingHoursSpecification`;
    - a `Physician` node (`#physician`) with `hasCredential` ×3 and `worksFor` pointing to `#clinic`.
- `src/lib/site.ts`: remove the Saturday entry from `OPENING_HOURS_LD`. Saturday's appointment-only status goes into the business description and the `hoursAvailable` note instead.
- `src/styles.css`: add `@font-face` fallbacks using `size-adjust`, `ascent-override` and `descent-override`, then append them to `--font-sans` and `--font-display`.
- `src/assets/spine-mark.png`: re-encode to 64×64 with sharp or ImageMagick.
- Verification:
  - a Playwright script measuring LCP, CLS and the timing of the hero image versus the h1;
  - an axe scan;
  - a heading and landmark dump;
  - a visible-text diff;
  - parse and validate the JSON-LD.
