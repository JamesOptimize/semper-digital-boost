import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { ResponsiveImage } from "@/components/marketing/ResponsiveImage";
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

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Thomas Scrimo — Semper Chiropractic, Roswell" },
      {
        name: "description",
        content:
          "Marine veteran, Life University-trained Doctor of Chiropractic, and CCSP-certified sports injury specialist serving Roswell, GA.",
      },
      { property: "og:title", content: "About Dr. Thomas Scrimo" },
      {
        property: "og:description",
        content: "The Marine values and clinical training behind Semper Chiropractic.",
      },
      { property: "og:url", content: "https://www.semper-chiropractic.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.semper-chiropractic.com/about" }],
  }),
  component: About,
});

function About() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">About</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-forest md:text-6xl">
        The man behind <span className="italic">Semper</span>.
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <ResponsiveImage
            avifSrcSet={portraitAvif}
            webpSrcSet={portraitWebp}
            jpgSrcSet={portraitJpg}
            fallbackSrc={heroJpg1200}
            sizes="(min-width: 768px) 40vw, 100vw"
            alt="Dr. Thomas Scrimo, founder of Semper Chiropractic"
            width={1080}
            height={1350}
            imgClassName="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            Dr. Thomas Scrimo grew up understanding service before he understood medicine.
            Before earning his Doctorate of Chiropractic from{" "}
            <strong className="text-forest">Life University</strong>, he served as a United States
            Marine — and the values forged in uniform became the operating system of his practice.
          </p>
          <p>
            With advanced certification as a{" "}
            <strong className="text-forest">Certified Chiropractic Sports Physician (CCSP)</strong>,
            Dr. Scrimo treats elite athletes, weekend warriors, families, and active service
            members with the same standard of care: excellence, accountability, and the kind of
            personal attention that big-box clinics simply don't offer.
          </p>
          <p>
            Semper Chiropractic opened in Roswell with one mission — to be the place where the
            community comes to feel like themselves again. Marine discipline. Clinical mastery.
            Real human care.
          </p>
          <blockquote className="border-l-4 border-bronze pl-5 font-display text-2xl italic text-forest">
            “Your health is your wealth. Everything else depends on it.”
            <footer className="mt-2 text-sm not-italic text-foreground/60">— Dr. Scrimo</footer>
          </blockquote>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-forest p-10 text-forest-foreground md:p-12">
        <h2 className="font-display text-3xl font-bold">Visit Semper Chiropractic</h2>
        <p className="mt-2 text-forest-foreground/80">{SITE.address}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={SITE.bookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center rounded-full bg-bronze px-6 text-sm font-semibold text-bronze-foreground"
          >
            Book New Patient Exam
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex h-12 items-center rounded-full border border-bronze/60 px-6 text-sm font-semibold text-forest-foreground"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </article>
  );
}
