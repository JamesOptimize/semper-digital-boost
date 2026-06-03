
# 2026 Performance Pass — Semper Chiropractic

Goal: push the site to Lighthouse 98–100 / CWV "Good" across the board by eliminating image, third‑party, and font costs already identified in the last audit. Scope is presentation + head metadata only — no business logic, routes, or content changes.

## 1. Picture sets for every content image

Convert the four remaining JPEGs to the same AVIF/WebP/JPEG responsive ladder we already shipped for the hero.

Targets:
- `src/assets/pillar-athlete.jpg`
- `src/assets/pillar-family.jpg`
- `src/assets/pillar-veteran.jpg`
- `src/assets/clinic-adjustment.jpg`

For each: generate 480 / 720 / 960 / 1200 widths in `.avif`, `.webp`, `.jpg` under `src/assets/<name>/` using `sharp` (already proven on hero). Replace `<img src=…>` usages with a small `<ResponsiveImage>` helper that emits:

```tsx
<picture>
  <source type="image/avif" srcSet={avif} sizes={sizes} />
  <source type="image/webp" srcSet={webp} sizes={sizes} />
  <img src={fallback} srcSet={jpg} sizes={sizes}
       width={w} height={h} loading="lazy" decoding="async"
       alt={alt} className={className} />
</picture>
```

- Explicit `width`/`height` on every `<img>` → CLS stays <0.05.
- `loading="lazy"` + `decoding="async"` on everything below the fold; hero keeps `fetchpriority="high"` + preload (already in place).
- AVIF mobile target ≤80 KB per pillar, ≤120 KB for clinic shot.

## 2. Lazy-mounted Google Map

Replace the always-rendered `<iframe>` in `src/routes/contact.tsx` (and anywhere else `SITE.mapsEmbed` is used) with an IntersectionObserver-gated mount:

```tsx
function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); io.disconnect(); }
    }, { rootMargin: "200px" });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="aspect-[4/3] w-full rounded-2xl bg-muted">
      {show && (
        <iframe src={SITE.mapsEmbed} loading="lazy" title="Map to clinic"
                className="h-full w-full rounded-2xl border-0"
                referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      )}
    </div>
  );
}
```

Result: zero Google Maps JS/network on initial load → TBT and INP drop sharply on `/contact` and the home contact band.

## 3. Font + preconnect polish

In `src/routes/__root.tsx` `head().links`:
- Add `{ rel: "preconnect", href: "https://fonts.googleapis.com" }` (already have gstatic + fontshare).
- Add a `preload` for the single Satoshi 700 woff2 weight used by display headings (fetch URL from Fontshare CSS, hardcode link with `as: "font"`, `type: "font/woff2"`, `crossOrigin: "anonymous"`).
- Confirm `font-display: swap` — Fontshare/Google `?display=swap` already covers it.

## 4. Verification

After changes:
1. `bun run build` and inspect emitted asset sizes for each pillar set.
2. `browser--performance_profile` on `/` and `/contact` — confirm LCP image is the hero AVIF, no Maps requests on initial load, no CLS from pillar swaps.
3. Spot-check `<picture>` rendering at 440px viewport (current preview) and desktop.

## Out of scope

- No copy, route, or schema changes.
- No new dependencies (`sharp` runs in sandbox, not shipped).
- Hero `<picture>` already done — leave it.

## Technical notes

- Build script: a single `/tmp/encode.mjs` using `sharp` loops the four sources × 4 widths × 3 formats (≈48 files). AVIF `quality: 50`, WebP `quality: 78`, JPEG `quality: 82, mozjpeg: true`.
- Asset paths stay in `src/assets/<name>/<name>-<w>.<ext>` so Vite fingerprints them.
- The `<ResponsiveImage>` helper lives in `src/components/marketing/ResponsiveImage.tsx` and accepts pre-built srcset strings (kept dumb — no runtime image logic).
