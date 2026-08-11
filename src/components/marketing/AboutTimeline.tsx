import { ScrollReveal } from "./ScrollReveal";
import { ResponsiveImage } from "./ResponsiveImage";
import { Flag, GraduationCap, Award, Stethoscope } from "lucide-react";
import heroAvif480 from "@/assets/hero/scrimo-480.avif";
import heroAvif720 from "@/assets/hero/scrimo-720.avif";
import heroAvif960 from "@/assets/hero/scrimo-960.avif";
import heroAvif1200 from "@/assets/hero/scrimo-1200.avif";
import heroWebp480 from "@/assets/hero/scrimo-480.webp";
import heroWebp720 from "@/assets/hero/scrimo-720.webp";
import heroWebp960 from "@/assets/hero/scrimo-960.webp";
import heroWebp1200 from "@/assets/hero/scrimo-1200.webp";
import heroJpg720 from "@/assets/hero/scrimo-720.jpg";
import heroJpg1200 from "@/assets/hero/scrimo-1200.jpg";

const portraitAvif = `${heroAvif480} 480w, ${heroAvif720} 720w, ${heroAvif960} 960w, ${heroAvif1200} 1200w`;
const portraitWebp = `${heroWebp480} 480w, ${heroWebp720} 720w, ${heroWebp960} 960w, ${heroWebp1200} 1200w`;
const portraitJpg = `${heroJpg720} 720w, ${heroJpg1200} 1200w`;

const timeline = [
  {
    year: "Marine Corps",
    title: "Service before medicine",
    copy: "Enlisted in the United States Marine Corps, where he built the discipline and accountability that still shape how he runs the practice.",
    Icon: Flag,
  },
  {
    year: "Life University",
    title: "Doctor of Chiropractic",
    copy: "Earned his DC from one of the most respected chiropractic programs in the country, with a focus on full-body biomechanics and neuro-spinal care.",
    Icon: GraduationCap,
  },
  {
    year: "CCSP",
    title: "Certified Chiropractic Sports Physician",
    copy: "Advanced post-doctoral certification in sports injury rehab — the same credential held by chiropractors who treat Olympic and professional athletes.",
    Icon: Award,
  },
  {
    year: "Today",
    title: "Semper Chiropractic, Roswell",
    copy: "Treating families, athletes, and active adults on Mimosa Blvd with careful precision and genuine human warmth.",
    Icon: Stethoscope,
  },
];


export function AboutTimeline() {
  return (
    <section
      id="about"
      aria-labelledby="about-timeline-heading"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid items-start gap-14 md:grid-cols-12 md:gap-12">
          {/* Portrait column */}
          <ScrollReveal className="md:col-span-5 md:sticky md:top-24">
            <div className="relative">
              <div className="absolute -inset-2 -z-10 rotate-[-2deg] rounded-[2rem] bg-bronze/20" />
              <div className="absolute -inset-1 -z-10 rotate-[1deg] rounded-[2rem] bg-forest/15" />
              <ResponsiveImage
                avifSrcSet={portraitAvif}
                webpSrcSet={portraitWebp}
                jpgSrcSet={portraitJpg}
                fallbackSrc={heroJpg1200}
                sizes="(min-width: 768px) 40vw, 100vw"
                alt="Dr. Thomas Scrimo, USMC veteran and founder of Semper Chiropractic in Roswell, GA"
                width={1200}
                height={1500}
                imgClassName="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-[var(--shadow-elegant)] ring-1 ring-bronze/30"
              />
              <div className="absolute -bottom-5 left-5 rounded-2xl bg-navy px-5 py-4 text-navy-foreground shadow-xl">
                <div className="text-[10px] uppercase tracking-[0.25em] text-bronze">
                  Semper Fidelis
                </div>
                <div className="mt-1 font-display text-sm font-semibold">
                  United States Marine Corps
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline column */}
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                The Scrimo Journey
              </p>
              <h2
                id="about-timeline-heading"
                className="mt-3 font-display text-4xl font-bold tracking-tight text-forest md:text-5xl"
              >
                From the Corps to the clinic.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/75">
                Every chapter shaped the standard of care Roswell families receive today.
              </p>
            </ScrollReveal>

            <ol
              aria-label="Dr. Scrimo's professional timeline"
              className="relative mt-12 space-y-10 border-l-2 border-bronze/30 pl-8 md:pl-10"
            >
              {timeline.map((item, i) => (
                <ScrollReveal as="li" key={item.year} delay={i * 0.08} y={28}>
                  <span
                    aria-hidden="true"
                    className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-bronze bg-cream text-bronze shadow-[0_0_0_4px_color-mix(in_oklab,var(--brand-bronze)_18%,transparent)]"
                  >
                    <item.Icon className="h-3 w-3" aria-hidden />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze">
                    <span className="sr-only">Phase: </span>
                    {item.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground/75">
                    {item.copy}
                  </p>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
