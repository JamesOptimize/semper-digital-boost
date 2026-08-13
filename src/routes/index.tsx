import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Star,
  ShieldCheck,
  HeartPulse,
  Activity,
  Baby,
  Trophy,
  Stethoscope,
  Flame,
  Phone,
  CalendarCheck,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SITE } from "@/lib/site";
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
import { ResponsiveImage } from "@/components/marketing/ResponsiveImage";
import { LazyMap } from "@/components/marketing/LazyMap";
import { AboutTimeline } from "@/components/marketing/AboutTimeline";
import { InstagramFeed } from "@/components/marketing/InstagramFeed";
import { PillarCard, FamilyIcon, SportsIcon, VeteranIcon } from "@/components/marketing/PillarCard";

// Pillar + clinic image sets
import pillarFamilyAvif480 from "@/assets/pillar-family/pillar-family-480.avif";
import pillarFamilyAvif720 from "@/assets/pillar-family/pillar-family-720.avif";
import pillarFamilyAvif960 from "@/assets/pillar-family/pillar-family-960.avif";
import pillarFamilyAvif1200 from "@/assets/pillar-family/pillar-family-1200.avif";
import pillarFamilyWebp480 from "@/assets/pillar-family/pillar-family-480.webp";
import pillarFamilyWebp720 from "@/assets/pillar-family/pillar-family-720.webp";
import pillarFamilyWebp960 from "@/assets/pillar-family/pillar-family-960.webp";
import pillarFamilyWebp1200 from "@/assets/pillar-family/pillar-family-1200.webp";
import pillarFamilyJpg720 from "@/assets/pillar-family/pillar-family-720.jpg";
import pillarFamilyJpg1200 from "@/assets/pillar-family/pillar-family-1200.jpg";

import pillarAthleteAvif480 from "@/assets/pillar-athlete/pillar-athlete-480.avif";
import pillarAthleteAvif720 from "@/assets/pillar-athlete/pillar-athlete-720.avif";
import pillarAthleteAvif960 from "@/assets/pillar-athlete/pillar-athlete-960.avif";
import pillarAthleteAvif1200 from "@/assets/pillar-athlete/pillar-athlete-1200.avif";
import pillarAthleteWebp480 from "@/assets/pillar-athlete/pillar-athlete-480.webp";
import pillarAthleteWebp720 from "@/assets/pillar-athlete/pillar-athlete-720.webp";
import pillarAthleteWebp960 from "@/assets/pillar-athlete/pillar-athlete-960.webp";
import pillarAthleteWebp1200 from "@/assets/pillar-athlete/pillar-athlete-1200.webp";
import pillarAthleteJpg720 from "@/assets/pillar-athlete/pillar-athlete-720.jpg";
import pillarAthleteJpg1200 from "@/assets/pillar-athlete/pillar-athlete-1200.jpg";

import pillarVeteranAvif480 from "@/assets/pillar-veteran/pillar-veteran-480.avif";
import pillarVeteranAvif720 from "@/assets/pillar-veteran/pillar-veteran-720.avif";
import pillarVeteranAvif960 from "@/assets/pillar-veteran/pillar-veteran-960.avif";
import pillarVeteranAvif1200 from "@/assets/pillar-veteran/pillar-veteran-1200.avif";
import pillarVeteranWebp480 from "@/assets/pillar-veteran/pillar-veteran-480.webp";
import pillarVeteranWebp720 from "@/assets/pillar-veteran/pillar-veteran-720.webp";
import pillarVeteranWebp960 from "@/assets/pillar-veteran/pillar-veteran-960.webp";
import pillarVeteranWebp1200 from "@/assets/pillar-veteran/pillar-veteran-1200.webp";
import pillarVeteranJpg720 from "@/assets/pillar-veteran/pillar-veteran-720.jpg";
import pillarVeteranJpg1200 from "@/assets/pillar-veteran/pillar-veteran-1200.jpg";

import clinicAvif480 from "@/assets/clinic/clinic-480.avif";
import clinicAvif720 from "@/assets/clinic/clinic-720.avif";
import clinicAvif960 from "@/assets/clinic/clinic-960.avif";
import clinicAvif1200 from "@/assets/clinic/clinic-1200.avif";
import clinicWebp480 from "@/assets/clinic/clinic-480.webp";
import clinicWebp720 from "@/assets/clinic/clinic-720.webp";
import clinicWebp960 from "@/assets/clinic/clinic-960.webp";
import clinicWebp1200 from "@/assets/clinic/clinic-1200.webp";
import clinicJpg720 from "@/assets/clinic/clinic-720.jpg";
import clinicJpg1200 from "@/assets/clinic/clinic-1200.jpg";

const heroAvifSrcSet = `${heroAvif480} 480w, ${heroAvif720} 720w, ${heroAvif960} 960w, ${heroAvif1200} 1200w`;
const heroWebpSrcSet = `${heroWebp480} 480w, ${heroWebp720} 720w, ${heroWebp960} 960w, ${heroWebp1200} 1200w`;
const heroJpgSrcSet = `${heroJpg720} 720w, ${heroJpg1200} 1200w`;
const heroSizes = "(min-width: 768px) 42vw, 100vw";

const pillarSizes = "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw";
const clinicSizes = "(min-width: 768px) 40vw, 100vw";

const buildSet = (a: string, b: string, c: string, d: string) =>
  `${a} 480w, ${b} 720w, ${c} 960w, ${d} 1200w`;
const buildJpgSet = (a: string, b: string) => `${a} 720w, ${b} 1200w`;

const pillarSets = {
  family: {
    avifSrcSet: buildSet(pillarFamilyAvif480, pillarFamilyAvif720, pillarFamilyAvif960, pillarFamilyAvif1200),
    webpSrcSet: buildSet(pillarFamilyWebp480, pillarFamilyWebp720, pillarFamilyWebp960, pillarFamilyWebp1200),
    jpgSrcSet: buildJpgSet(pillarFamilyJpg720, pillarFamilyJpg1200),
    fallbackSrc: pillarFamilyJpg1200,
  },
  athlete: {
    avifSrcSet: buildSet(pillarAthleteAvif480, pillarAthleteAvif720, pillarAthleteAvif960, pillarAthleteAvif1200),
    webpSrcSet: buildSet(pillarAthleteWebp480, pillarAthleteWebp720, pillarAthleteWebp960, pillarAthleteWebp1200),
    jpgSrcSet: buildJpgSet(pillarAthleteJpg720, pillarAthleteJpg1200),
    fallbackSrc: pillarAthleteJpg1200,
  },
  veteran: {
    avifSrcSet: buildSet(pillarVeteranAvif480, pillarVeteranAvif720, pillarVeteranAvif960, pillarVeteranAvif1200),
    webpSrcSet: buildSet(pillarVeteranWebp480, pillarVeteranWebp720, pillarVeteranWebp960, pillarVeteranWebp1200),
    jpgSrcSet: buildJpgSet(pillarVeteranJpg720, pillarVeteranJpg1200),
    fallbackSrc: pillarVeteranJpg1200,
  },
} as const;

const clinicSet = {
  avifSrcSet: buildSet(clinicAvif480, clinicAvif720, clinicAvif960, clinicAvif1200),
  webpSrcSet: buildSet(clinicWebp480, clinicWebp720, clinicWebp960, clinicWebp1200),
  jpgSrcSet: buildJpgSet(clinicJpg720, clinicJpg1200),
  fallbackSrc: clinicJpg1200,
};

const faqs = [
  {
    q: "What should I expect at my first visit?",
    a: "A thorough consultation, posture and movement assessment, and — when appropriate — your first gentle adjustment. Plan on about 60 minutes.",
  },
  {
    q: "Do you take insurance?",
    a: "We accept most major plans including BCBS, Aetna, Cigna, United Healthcare, and Humana. We'll verify your benefits before your visit.",
  },
  {
    q: "Is chiropractic safe for kids and pregnancy?",
    a: "Yes. Dr. Scrimo uses gentle, low-force techniques specifically suited to pediatric and prenatal patients.",
  },
  {
    q: "How long until I feel results?",
    a: "Many patients notice change within the first 1–3 visits. Lasting results come from a personalized care plan we build with you.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.semper-chiropractic.com/#dr-scrimo",
  name: "Dr. Thomas Scrimo",
  jobTitle: "Doctor of Chiropractic",
  honorificSuffix: "DC, CCSP",
  image: "https://www.semper-chiropractic.com/og-cover.jpg",
  worksFor: {
    "@type": "MedicalBusiness",
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
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Life University",
  },
  memberOf: {
    "@type": "Organization",
    name: "United States Marine Corps",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Doctor of Chiropractic (DC)",
      credentialCategory: "degree",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified Chiropractic Sports Physician (CCSP)",
      credentialCategory: "certification",
    },
  ],
  knowsAbout: [
    "Chiropractic care",
    "Sports injury rehabilitation",
    "Prenatal chiropractic",
    "Pediatric chiropractic",
    "Veteran wellness",
  ],
};

const reviewsLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://www.semper-chiropractic.com/#business",
  name: "Semper Chiropractic",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "4",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Marcus T." },
      reviewBody:
        "Dr. Scrimo got me back on the field three weeks ahead of schedule. The man treats you like family.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Allison R." },
      reviewBody:
        "Gentle, thorough, and unbelievably good with my kids. Our whole family is in his care now.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "James K." },
      reviewBody:
        "I trust this office completely. He understands the body, the discipline, and the goal.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Brianna M." },
      reviewBody:
        "Prenatal care that actually felt safe. I walked out of every visit lighter than I came in.",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Semper Chiropractic — Roswell, GA | Veteran-Owned Chiropractor" },
      {
        name: "description",
        content:
          "Precision chiropractic care for Roswell families, athletes, and active adults. Personal, one-doctor care. Book your new patient exam.",
      },

      { property: "og:title", content: "Semper Chiropractic — Roswell, GA" },
      {
        property: "og:description",
        content:
          "Family, sports, and active-lifestyle chiropractic care in Roswell. Book your new patient exam today.",
      },
      { property: "og:url", content: "https://www.semper-chiropractic.com/" },
      { property: "og:image", content: "https://www.semper-chiropractic.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Dr. Thomas Scrimo, DC · CCSP · USMC Veteran — Semper Chiropractic, Roswell, GA" },
      { name: "twitter:image", content: "https://www.semper-chiropractic.com/og-cover.jpg" },
      { name: "twitter:image:alt", content: "Dr. Thomas Scrimo of Semper Chiropractic in Roswell, GA" },
    ],
    links: [
      { rel: "canonical", href: "https://www.semper-chiropractic.com/" },
      {
        rel: "preload",
        as: "image",
        href: heroAvif720,
        imageSrcSet: heroAvifSrcSet,
        imageSizes: heroSizes,
        type: "image/avif",
        fetchPriority: "high",
      },

    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
      { type: "application/ld+json", children: JSON.stringify(personLd) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Pillars />
      <Services />
      <DoctorStory />
      <AboutTimeline />
      <Testimonials />
      <InstagramFeed />
      <Journey />
      <Location />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-24 lg:px-8">
        <div className="md:col-span-7 md:pr-6">
          <span className="inline-flex items-center rounded-full border border-bronze px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
            Veteran Owned &amp; Operated
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-forest sm:text-6xl md:text-7xl">
            Your Health is Your Wealth.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
            Precision chiropractic care for Roswell families, athletes, and active adults —
            built to get you moving well again, and keep you there.
          </p>


          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.bookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-forest px-7 text-base font-semibold text-forest-foreground shadow-[var(--shadow-elegant)] transition-transform duration-200 ease-out will-change-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              Book New Patient Exam
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-forest px-7 text-base font-semibold text-forest transition-all duration-200 ease-out will-change-transform hover:scale-[1.02] hover:bg-forest hover:text-forest-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              Call {SITE.phone}
            </a>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">
            Est. Roswell, GA · 859 Mimosa Blvd
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-forest/8" />
            <picture>
              <source type="image/avif" srcSet={heroAvifSrcSet} sizes={heroSizes} />
              <source type="image/webp" srcSet={heroWebpSrcSet} sizes={heroSizes} />
              <img
                src={heroJpg1200}
                srcSet={heroJpgSrcSet}
                sizes={heroSizes}
                alt="Dr. Thomas Scrimo, founder of Semper Chiropractic in Roswell, GA"
                width={1200}
                height={1500}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-[var(--shadow-elegant)]"
              />
            </picture>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-navy px-5 py-4 text-navy-foreground shadow-xl sm:block">
              <div className="text-xs uppercase tracking-widest text-bronze">Dr. Thomas Scrimo</div>
              <div className="mt-1 font-display text-sm font-semibold">DC · CCSP · USMC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-bronze" aria-hidden />
          <span className="text-sm font-medium text-foreground/80">
            Doctor of Chiropractic · CCSP-certified sports physician
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-widest text-foreground/55">
          <span>BCBS</span>
          <span>Aetna</span>
          <span>Cigna</span>
          <span>United Healthcare</span>
          <span>Humana</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <ShieldCheck className="h-4 w-4 text-forest" />
          Serving Roswell since 2024
        </div>
      </div>
    </section>
  );
}

/* ---------------- PILLARS ---------------- */
function Pillars() {
  const pillars = [
    {
      title: "Family Chiropractic",
      copy: "Whole-family care from newborns to grandparents — gentle, pediatric, and prenatal.",
      href: "/services#family",
      icon: FamilyIcon,
    },
    {
      title: "Sports Injury & Performance",
      copy: "CCSP-certified rehabilitation to return athletes to peak performance faster.",
      href: "/services#sports",
      icon: SportsIcon,
    },
    {
      title: "Veteran & Active Lifestyle",
      copy: "Focused, disciplined care for veterans, first responders, and anyone who trains hard.",
      href: "/services#veteran",
      icon: VeteranIcon,
    },

  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
          Why Choose Semper
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.02em] text-forest md:text-5xl">
          Three patients. One standard of care.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <PillarCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    { icon: Stethoscope, label: "New Patient Exam" },
    { icon: Activity, label: "Spinal Adjustments" },
    { icon: Trophy, label: "Sports Injury Rehab" },
    { icon: Baby, label: "Prenatal & Pediatric" },
    { icon: Flame, label: "Active Recovery" },
    { icon: HeartPulse, label: "Wellness Plans" },
  ];
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
              Services
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
              Care that meets you where you are.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-bronze hover:text-bronze/80"
          >
            See full service list <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-4 bg-forest p-8 transition-colors hover:bg-forest/70"
            >
              <s.icon className="h-7 w-7 text-bronze" />
              <p className="font-display text-lg font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOCTOR STORY ---------------- */
function DoctorStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <ResponsiveImage
            {...clinicSet}
            sizes={clinicSizes}
            alt="Dr. Scrimo delivering chiropractic adjustment in the Roswell clinic"
            width={1200}
            height={1500}
            className="block aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]"
            imgClassName="h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-7 md:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
            Meet Dr. Scrimo
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-forest md:text-5xl">
            Real accountability.{" "}
            <span className="italic">Clinical mastery.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Before opening Semper Chiropractic, Dr. Thomas Scrimo served as a United States Marine.
            That discipline now shapes every patient interaction — from the precision of the first
            exam to the personal accountability behind every care plan.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            Trained at Life University with advanced certification in sports chiropractic (CCSP),
            he treats families, weekend athletes, and active adults with the same standard he has
            always held: excellence, always.
          </p>


          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest text-foreground/55">Degree</dt>
              <dd className="mt-2 font-display text-2xl font-bold text-forest">DC</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-foreground/55">Certified</dt>
              <dd className="mt-2 font-display text-2xl font-bold text-forest">CCSP</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-foreground/55">Service</dt>
              <dd className="mt-2 font-display text-2xl font-bold text-forest">USMC</dd>
            </div>
          </dl>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-1 text-sm font-semibold text-forest hover:text-bronze"
          >
            Read his full story <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STANDARD OF CARE ---------------- */
function StandardOfCare() {
  const standards = [
    {
      icon: Stethoscope,
      title: "One doctor, start to finish",
      copy: "Dr. Scrimo performs every exam and every adjustment himself. No rotating providers, no hand-offs.",
    },
    {
      icon: Activity,
      title: "Examination before adjustment",
      copy: "Posture, movement, and neurological screening come first. Care begins only when the findings support it.",
    },
    {
      icon: Baby,
      title: "Technique matched to the patient",
      copy: "Low-force instrument and gentle mobilization work for infants, children, and prenatal patients; manual work where it's appropriate.",
    },
    {
      icon: HeartPulse,
      title: "A plan with an endpoint",
      copy: "You'll know the goal, the visit count, and how progress is measured before you commit to anything.",
    },
  ];

  return (
    <section className="bg-background" aria-labelledby="standard-heading">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
            The standard of care
          </p>
          <h2
            id="standard-heading"
            className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-forest md:text-5xl"
          >
            What every visit looks like here.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Four commitments that hold for every patient, on every visit.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {standards.map((s) => (
            <li
              key={s.title}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-8"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze/40 text-bronze"
                aria-hidden="true"
              >
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-forest">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/75">{s.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- JOURNEY ---------------- */
function Journey() {
  const steps = [
    {
      n: "01",
      title: "Book your visit",
      copy: "Reserve online in under 60 seconds. We'll confirm insurance and send intake forms.",
    },
    {
      n: "02",
      title: "Personalized exam",
      copy: "A 60-minute consultation, movement screen, and — if appropriate — your first adjustment.",
    },
    {
      n: "03",
      title: "Care plan that fits",
      copy: "We build a plan around your goals, schedule, and budget. No long-term contracts.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
            New patient journey
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-forest md:text-5xl">
            Know exactly what to expect.
          </h2>
          <div className="mt-10 space-y-8">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5">
                <div className="font-display text-3xl font-bold text-bronze">{s.n}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest">{s.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{s.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <h3 className="font-display text-2xl font-bold text-forest">Frequently asked</h3>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left font-display text-base text-forest">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
              Visit the clinic
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-forest md:text-5xl">
              Right in the heart of Roswell.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-bronze" />
                <div>
                  <p className="font-semibold text-forest">{SITE.address}</p>
                  <a
                    href={SITE.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground/60 hover:text-bronze"
                  >
                    Get directions
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-bronze" />
                <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-forest">
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-bronze" />
                <div className="text-sm">
                  <p>Mon–Fri · 8:00a – 6:00p</p>
                  <p>Sat · By appointment</p>
                  <p>Sun · Closed</p>
                </div>
              </div>
            </div>
          </div>

          <LazyMap
            title="Semper Chiropractic location map"
            className="h-[380px] w-full overflow-hidden rounded-3xl bg-muted ring-1 ring-border"
          />
        </div>

        {/* Final CTA banner */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-forest p-10 text-forest-foreground md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
                Ready to feel like{" "}
                <span className="italic text-bronze">yourself</span> again?
              </h2>
              <p className="mt-4 max-w-md text-forest-foreground/80">
                Book your new patient exam — same-week appointments available.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a
                href={SITE.bookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-bronze px-7 text-base font-semibold text-bronze-foreground"
              >
                <CalendarCheck className="h-5 w-5" />
                Book Now
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-bronze/60 px-7 text-base font-semibold text-forest-foreground"
              >
                <Phone className="h-5 w-5" />
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
