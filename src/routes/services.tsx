import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { FamilyIcon, SportsIcon, VeteranIcon } from "@/components/marketing/PillarCard";
import type { ReactNode } from "react";

const pillars = [
  {
    id: "family",
    eyebrow: "Family Chiropractic",
    title: "Whole-family care, from newborns to grandparents.",
    copy:
      "Gentle, low-force techniques designed for expecting mothers, growing children, and the adults raising them. Every adjustment is calibrated to the patient — never one-size-fits-all.",
    treats: [
      "Prenatal back & pelvic pain",
      "Infant colic, latch & sleep concerns",
      "Pediatric posture & sports growth",
      "Chronic adult back, neck & headache pain",
    ],
    benefits: [
      "60-minute new patient exam",
      "Webster-informed prenatal protocols",
      "Family scheduling block hours",
    ],
    icon: FamilyIcon,
  },
  {
    id: "sports",
    eyebrow: "Sports Injury & Performance",
    title: "CCSP-certified rehab to return athletes to peak performance faster.",
    copy:
      "The same post-doctoral credential held by chiropractors who treat Olympic and professional athletes. Built for high-school standouts, collegiate competitors, and weekend warriors alike.",
    treats: [
      "Sprains, strains & soft-tissue injuries",
      "Shoulder, hip, knee & ankle dysfunction",
      "Post-concussion movement screening",
      "Return-to-play assessments",
    ],
    benefits: [
      "Movement-based diagnostic exam",
      "Soft-tissue work & mobility programming",
      "Rehab plans built around your season",
    ],
    icon: SportsIcon,
  },
  {
    id: "veteran",
    eyebrow: "Veteran & Active Lifestyle",
    title: "Disciplined care for those who serve and train.",
    copy:
      "Care tuned for active-duty, reserve, and retired service members, first responders, and anyone who trains like they do — with accountability built into every plan.",
    treats: [
      "Load-bearing spinal compression",
      "Heavy-carry, lift & impact recovery",
      "Service-connected chronic pain support",
      "High-demand athlete mobility & strength",
    ],
    benefits: [
      "Veteran-owned, veteran-operated",
      "Direct scheduling, no rotating staff",
      "Plans that fit demanding training cycles",
    ],
    icon: VeteranIcon,
  },

] as const;

const serviceLd = {
  "@context": "https://schema.org",
  "@graph": pillars.map((p) => ({
    "@type": "MedicalTherapy",
    name: p.eyebrow,
    description: p.copy,
    url: `https://www.semper-chiropractic.com/services#${p.id}`,
    provider: {
      "@type": ["MedicalBusiness", "MedicalClinic"],
      name: "Semper Chiropractic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "859 Mimosa Blvd",
        addressLocality: "Roswell",
        addressRegion: "GA",
        postalCode: "30075",
        addressCountry: "US",
      },
      telephone: "+1-678-226-1333",
    },
  })),
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Family, Sports & Veteran Chiropractic | Semper Chiropractic" },
      {
        name: "description",
        content:
          "Family chiropractic, CCSP-certified sports rehab, and veteran-tuned care in Roswell, GA. Marine discipline. Clinical excellence.",
      },
      { property: "og:title", content: "Services — Semper Chiropractic" },
      {
        property: "og:description",
        content:
          "Family, sports, and veteran chiropractic services delivered by Dr. Scrimo personally.",
      },
      { property: "og:url", content: "https://www.semper-chiropractic.com/services" },
      { property: "og:image", content: "https://www.semper-chiropractic.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Semper Chiropractic services — family, sports, and veteran care in Roswell, GA" },
      { name: "twitter:image", content: "https://www.semper-chiropractic.com/og-cover.jpg" },
      { name: "twitter:image:alt", content: "Semper Chiropractic services in Roswell, GA" },
    ],
    links: [{ rel: "canonical", href: "https://www.semper-chiropractic.com/services" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(serviceLd) }],
  }),
  component: Services,
});

function Services() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-forest md:text-6xl">
            Comprehensive chiropractic care for every stage of life.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Every service at Semper Chiropractic is delivered by Dr. Scrimo personally — no
            rotating practitioners, no shortcuts.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Jump to service">
            {pillars.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-full border border-forest/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-bronze hover:text-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              >
                {p.eyebrow}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {pillars.map((p, i) => (
          <PillarSection key={p.id} pillar={p} reverse={i % 2 === 1} />
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest p-10 text-forest-foreground md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-2 text-forest-foreground/80">
                Book a new patient exam and we'll build the right plan together.
              </p>
            </div>
            <a
              href={SITE.bookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center rounded-full bg-bronze px-7 text-base font-semibold text-bronze-foreground transition-transform duration-200 ease-out hover:scale-[1.02]"
            >
              Book New Patient Exam
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

interface PillarSectionProps {
  pillar: {
    id: string;
    eyebrow: string;
    title: string;
    copy: string;
    treats: readonly string[];
    benefits: readonly string[];
    icon: ReactNode;
  };
  reverse: boolean;
}

function PillarSection({ pillar, reverse }: PillarSectionProps) {
  return (
    <section
      id={pillar.id}
      aria-labelledby={`${pillar.id}-heading`}
      className="scroll-mt-24 border-b border-border/60 py-16 last:border-b-0 md:py-24"
    >
      <div className={`grid items-start gap-10 md:grid-cols-12 md:gap-12 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <div className="md:col-span-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-bronze/40 text-bronze" aria-hidden="true">
            {pillar.icon}
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
            {pillar.eyebrow}
          </p>
          <h2
            id={`${pillar.id}-heading`}
            className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-forest md:text-4xl"
          >
            {pillar.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75">{pillar.copy}</p>
          <a
            href={SITE.bookUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-forest px-6 text-sm font-semibold text-forest-foreground transition-transform duration-200 ease-out hover:scale-[1.02]"
          >
            Book for {pillar.eyebrow}
          </a>
        </div>

        <div className="grid gap-6 md:col-span-7 md:grid-cols-2">
          <Column title="Conditions treated" items={pillar.treats} />
          <Column title="What's included" items={pillar.benefits} />
        </div>
      </div>
    </section>
  );
}

function Column({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
        {items.map((t) => (
          <li key={t} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-bronze" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
