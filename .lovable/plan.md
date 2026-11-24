# Dark / Light Theme Switch

## Goal
Add a sun/moon toggle so visitors can switch between the current dark cinematic look and a light version built from the original company colors (Forest #0A3D2A, Bronze #D4A017, Cream #F8F5F0, Navy #0C2340). No text, hours, credentials or layout change.

## Light palette
- Page background: Cream #F8F5F0; cards slightly whiter
- Headings/body: Navy #0C2340 ink
- Primary buttons/accents: Bronze, deepened where needed so gold text passes WCAG AA on cream
- Inverse band (Services): Forest green #0A3D2A with cream text
- Glass cards become frosted white with thin forest/bronze hairlines; hero glow becomes a soft warm bronze wash

## Behavior
- Toggle in the header (desktop and mobile menu), 44px touch target, labeled "Switch to light/dark mode"
- Default: dark (current look). Remembers the visitor's choice on return
- No flash of the wrong theme on load (tiny inline script sets the theme before paint)
- Browser bar color updates to match

## Verification
- axe WCAG AA on all five pages in both themes at 375px and 1280px
- Screenshots of home, About, Services, Contact in light mode
- CLS unchanged; booking bar, reviews, map unaffected

## Technical details
- src/styles.css: keep current tokens as dark; add `.light` (html class) block overriding the same brand/semantic tokens (forest, bronze, bronze-deep, cream, navy, background, foreground, card, muted, border, glass vars, glow, shadow)
- src/components/marketing/ThemeToggle.tsx: reads/writes localStorage in effects only (hydration-safe), toggles class on documentElement, updates meta theme-color
- src/routes/__root.tsx: inline pre-paint script in head; suppressHydrationWarning on html
- SiteHeader.tsx: mount toggle; fix any hardcoded color classes found during QA
