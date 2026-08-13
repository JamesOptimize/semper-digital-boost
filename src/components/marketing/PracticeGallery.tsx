import { Instagram, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { ScrollReveal } from "./ScrollReveal";
import { ResponsiveImage } from "./ResponsiveImage";

import teamAvif480 from "@/assets/team/team-480.avif";
import teamAvif720 from "@/assets/team/team-720.avif";
import teamAvif960 from "@/assets/team/team-960.avif";
import teamAvif1200 from "@/assets/team/team-1200.avif";
import teamWebp480 from "@/assets/team/team-480.webp";
import teamWebp720 from "@/assets/team/team-720.webp";
import teamWebp960 from "@/assets/team/team-960.webp";
import teamWebp1200 from "@/assets/team/team-1200.webp";
import teamJpg720 from "@/assets/team/team-720.jpg";
import teamJpg1200 from "@/assets/team/team-1200.jpg";

import pediatricAvif480 from "@/assets/pediatric/pediatric-480.avif";
import pediatricAvif720 from "@/assets/pediatric/pediatric-720.avif";
import pediatricAvif960 from "@/assets/pediatric/pediatric-960.avif";
import pediatricAvif1200 from "@/assets/pediatric/pediatric-1200.avif";
import pediatricWebp480 from "@/assets/pediatric/pediatric-480.webp";
import pediatricWebp720 from "@/assets/pediatric/pediatric-720.webp";
import pediatricWebp960 from "@/assets/pediatric/pediatric-960.webp";
import pediatricWebp1200 from "@/assets/pediatric/pediatric-1200.webp";
import pediatricJpg720 from "@/assets/pediatric/pediatric-720.jpg";
import pediatricJpg1200 from "@/assets/pediatric/pediatric-1200.jpg";

import lumbarAvif480 from "@/assets/lumbar/lumbar-480.avif";
import lumbarAvif720 from "@/assets/lumbar/lumbar-720.avif";
import lumbarAvif960 from "@/assets/lumbar/lumbar-960.avif";
import lumbarAvif1200 from "@/assets/lumbar/lumbar-1200.avif";
import lumbarWebp480 from "@/assets/lumbar/lumbar-480.webp";
import lumbarWebp720 from "@/assets/lumbar/lumbar-720.webp";
import lumbarWebp960 from "@/assets/lumbar/lumbar-960.webp";
import lumbarWebp1200 from "@/assets/lumbar/lumbar-1200.webp";
import lumbarJpg720 from "@/assets/lumbar/lumbar-720.jpg";
import lumbarJpg1200 from "@/assets/lumbar/lumbar-1200.jpg";

import infantAvif480 from "@/assets/infant/infant-480.avif";
import infantAvif720 from "@/assets/infant/infant-720.avif";
import infantAvif960 from "@/assets/infant/infant-960.avif";
import infantAvif1200 from "@/assets/infant/infant-1200.avif";
import infantWebp480 from "@/assets/infant/infant-480.webp";
import infantWebp720 from "@/assets/infant/infant-720.webp";
import infantWebp960 from "@/assets/infant/infant-960.webp";
import infantWebp1200 from "@/assets/infant/infant-1200.webp";
import infantJpg720 from "@/assets/infant/infant-720.jpg";
import infantJpg1200 from "@/assets/infant/infant-1200.jpg";

const set = (
  a480: string,
  a720: string,
  a960: string,
  a1200: string,
  w480: string,
  w720: string,
  w960: string,
  w1200: string,
  j720: string,
  j1200: string,
) => ({
  avifSrcSet: `${a480} 480w, ${a720} 720w, ${a960} 960w, ${a1200} 1200w`,
  webpSrcSet: `${w480} 480w, ${w720} 720w, ${w960} 960w, ${w1200} 1200w`,
  jpgSrcSet: `${j720} 720w, ${j1200} 1200w`,
  fallbackSrc: j1200,
});

const frames = [
  {
    ...set(
      teamAvif480, teamAvif720, teamAvif960, teamAvif1200,
      teamWebp480, teamWebp720, teamWebp960, teamWebp1200,
      teamJpg720, teamJpg1200,
    ),
    caption: "Dr. Thomas Scrimo and Mrs. Scrimo outside the practice on Mimosa Blvd",
    label: "The practice",
    width: 1280,
    height: 1600,
  },
  {
    ...set(
      pediatricAvif480, pediatricAvif720, pediatricAvif960, pediatricAvif1200,
      pediatricWebp480, pediatricWebp720, pediatricWebp960, pediatricWebp1200,
      pediatricJpg720, pediatricJpg1200,
    ),
    caption: "Dr. Scrimo performing a gentle pediatric adjustment on a young patient",
    label: "Pediatric care",
    width: 1080,
    height: 1350,
  },
  {
    ...set(
      lumbarAvif480, lumbarAvif720, lumbarAvif960, lumbarAvif1200,
      lumbarWebp480, lumbarWebp720, lumbarWebp960, lumbarWebp1200,
      lumbarJpg720, lumbarJpg1200,
    ),
    caption: "Dr. Scrimo delivering a lumbar adjustment in the Roswell treatment room",
    label: "Adult adjustments",
    width: 1120,
    height: 1400,
  },
  {
    ...set(
      infantAvif480, infantAvif720, infantAvif960, infantAvif1200,
      infantWebp480, infantWebp720, infantWebp960, infantWebp1200,
      infantJpg720, infantJpg1200,
    ),
    caption: "Low-force infant chiropractic care with a smiling baby on the adjusting table",
    label: "Infant care",
    width: 1080,
    height: 1350,
  },
];

const gallerySizes = "(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw";

export function PracticeGallery() {
  return (
    <section aria-labelledby="gallery-heading" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                Inside the practice
              </p>
              <h2
                id="gallery-heading"
                className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-forest md:text-5xl"
              >
                Real care, real patients, one room at a time.
              </h2>
            </div>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-forest transition-colors hover:text-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Follow @semperchiropractic
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </ScrollReveal>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {frames.map((f, i) => (
            <ScrollReveal as="li" key={f.label} delay={i * 0.07} y={24}>
              <figure className="group h-full overflow-hidden rounded-3xl bg-card ring-1 ring-border">
                <ResponsiveImage
                  avifSrcSet={f.avifSrcSet}
                  webpSrcSet={f.webpSrcSet}
                  jpgSrcSet={f.jpgSrcSet}
                  fallbackSrc={f.fallbackSrc}
                  sizes={gallerySizes}
                  alt={f.caption}
                  width={f.width}
                  height={f.height}
                  className="block aspect-[4/5] w-full overflow-hidden"
                  imgClassName="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <figcaption className="px-5 py-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
                    {f.label}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
