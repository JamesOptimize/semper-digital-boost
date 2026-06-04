import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { ResponsiveImage } from "@/components/marketing/ResponsiveImage";
import { AboutTimeline } from "@/components/marketing/AboutTimeline";
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

const credentials = [
  { label: "Service", value: "USMC", detail: "United States Marine Corps" },
  { label: "Degree", value: "DC", detail: "Doctor of Chiropractic, Life University" },
  { label: "Certification", value: "CCSP", detail: "Certified Chiropractic Sports Physician" },
  { label: "Clinic", value: "Roswell, GA", detail: "859 Mimosa Blvd" },
];

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
      { property: "og:image", content: "https://www.semper-chiropractic.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Dr. Thomas Scrimo, founder of Semper Chiropractic, Roswell GA" },
      { name: "twitter:image", content: "https://www.semper-chiropractic.com/og-cover.jpg" },
      { name: "twitter:image:alt", content: "Dr. Thomas Scrimo, founder of Semper Chiropractic" },
    ],
    links: [{ rel: "canonical", href: "https://www.semper-chiropractic.com/about" }],
  }),
  component: About,
});

function About() {
  return (
    <article>
      {/* Hero strip */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">About</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-forest md:text-6xl">
            The man behind Semper.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Marine discipline. Clinical excellence. A single doctor, accountable to every patient
            who walks through the door.
          </p>
        </div>
      </section>

      {/* Portrait + narrative */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
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
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7">
            <p>
              Dr. Thomas Scrimo grew up understanding service before he understood medicine.
              Before earning his Doctorate of Chiropractic from{" "}
              <strong className="text-forest">Life University</strong>, he served as a United
              States Marine — and the values forged in uniform became the operating system of
              his practice.
            </p>
            <p>
              With advanced certification as a{" "}
              <strong className="text-forest">Certified Chiropractic Sports Physician (CCSP)</strong>,
              Dr. Scrimo treats elite athletes, weekend warriors, families, and active service
              members with the same standard of care: excellence, accountability, and the kind
              of personal attention that big-box clinics simply don't offer.
            </p>
            <blockquote className="border-l-2 border-bronze pl-5 font-display text-2xl italic text-forest">
              "Your health is your wealth. Everything else depends on it."
              <footer className="mt-2 text-sm not-italic text-foreground/60">— Dr. Scrimo</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Credentials block */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
            Credentials
          </p>
          <dl className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {credentials.map((c) => (
              <div key={c.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  {c.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold text-forest">{c.value}</dd>
                <p className="mt-1 text-sm text-foreground/65">{c.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Timeline */}
      <AboutTimeline />

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest p-10 text-forest-foreground md:p-12">
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-4xl">
            Ready when you are.
          </h2>
          <p className="mt-2 max-w-xl text-forest-foreground/80">
            {SITE.address}. Reserve your new patient exam online or call the clinic directly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE.bookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-full bg-bronze px-6 text-sm font-semibold text-bronze-foreground transition-transform duration-200 ease-out hover:scale-[1.02]"
            >
              Book New Patient Exam
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex h-12 items-center rounded-full border border-bronze/60 px-6 text-sm font-semibold text-forest-foreground transition-colors hover:bg-bronze/10"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
