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
import clinicShot from "@/assets/clinic-adjustment.jpg";
import pillarFamily from "@/assets/pillar-family.jpg";
import pillarAthlete from "@/assets/pillar-athlete.jpg";
import pillarVeteran from "@/assets/pillar-veteran.jpg";

const heroAvifSrcSet = `${heroAvif480} 480w, ${heroAvif720} 720w, ${heroAvif960} 960w, ${heroAvif1200} 1200w`;
const heroWebpSrcSet = `${heroWebp480} 480w, ${heroWebp720} 720w, ${heroWebp960} 960w, ${heroWebp1200} 1200w`;
const heroJpgSrcSet = `${heroJpg720} 720w, ${heroJpg1200} 1200w`;
const heroSizes = "(min-width: 768px) 42vw, 100vw";

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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Semper Chiropractic — Roswell, GA | Veteran-Owned Chiropractor" },
      {
        name: "description",
        content:
          "Precision chiropractic care for Roswell families, athletes, and veterans. Marine discipline. Clinical excellence. Book your new patient exam.",
      },
      { property: "og:title", content: "Semper Chiropractic — Roswell, GA" },
      {
        property: "og:description",
        content:
          "Family, sports, and veteran chiropractic care in Roswell. Book your new patient exam today.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: heroAvif720,
        imagesrcset: heroAvifSrcSet,
        imagesizes: heroSizes,
        type: "image/avif",
        fetchpriority: "high",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
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
      <Testimonials />
      <Journey />
      <Location />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-12 md:gap-8 md:pb-24 md:pt-20 lg:px-8">
        <div className="md:col-span-7 md:pr-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-bronze/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-forest">
            🪖 Veteran Owned &amp; Operated
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-forest sm:text-6xl md:text-7xl">
            Your Health is{" "}
            <span className="italic text-bronze">Your Wealth.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
            Precision chiropractic care for Roswell families, athletes, and those who serve.
            Marine discipline. Clinical excellence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.bookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-forest px-7 text-base font-semibold text-forest-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-5 w-5" />
              Book New Patient Exam
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-forest px-7 text-base font-semibold text-forest hover:bg-forest hover:text-forest-foreground"
            >
              <Phone className="h-5 w-5" />
              Call {SITE.phone}
            </a>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">
            Est. Roswell, GA • 859 Mimosa Blvd
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
          <div className="flex" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-bronze text-bronze" />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground/80">
            5.0 on Google • Verified patient reviews
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
      icon: HeartPulse,
      title: "Family Chiropractic",
      tag: "Gentle · Pediatric · Prenatal",
      copy: "Whole-family care from your newborn's first weeks to your grandparents' golden years.",
      img: pillarFamily,
    },
    {
      icon: Trophy,
      title: "Sports Injury & Performance",
      tag: "CCSP Certified",
      copy: "Get back on the field faster with rehab built on the same standards that train Olympic athletes.",
      img: pillarAthlete,
    },
    {
      icon: ShieldCheck,
      title: "Veteran & Active Lifestyle",
      tag: "Semper Fidelis",
      copy: "Built for those who serve — and the disciplined patients who train like they do.",
      img: pillarVeteran,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
          Why Choose Semper
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
          Three patients. One standard of care.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p.icon className="h-7 w-7 text-bronze" />
              <h3 className="mt-4 font-display text-xl font-bold text-forest">{p.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-foreground/55">
                {p.tag}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/75">{p.copy}</p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest hover:text-bronze"
              >
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
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
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
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
          <img
            src={clinicShot}
            alt="Dr. Scrimo delivering chiropractic adjustment in the Roswell clinic"
            width={1600}
            height={1200}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
        <div className="md:col-span-7 md:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
            Meet Dr. Scrimo
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
            Marine values.{" "}
            <span className="italic">Clinical mastery.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Before opening Semper Chiropractic, Dr. Thomas Scrimo served as a United States Marine.
            That discipline now shapes every patient interaction — from the precision of the first
            exam to the personal accountability behind every care plan.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            Trained at Life University with advanced certification in sports chiropractic (CCSP),
            he treats families, weekend athletes, and active service members with the same
            standard he once held in uniform: excellence, always.
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

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const quotes = [
    {
      quote:
        "Dr. Scrimo got me back on the field three weeks ahead of schedule. The man treats you like family.",
      name: "Marcus T.",
      role: "Roswell High lacrosse",
    },
    {
      quote:
        "Gentle, thorough, and unbelievably good with my kids. Our whole family is in his care now.",
      name: "Allison R.",
      role: "Mom of three, Roswell",
    },
    {
      quote:
        "As a vet, I trust this office completely. He gets the discipline, the body, and the mission.",
      name: "James K.",
      role: "U.S. Army (Ret.)",
    },
    {
      quote:
        "Prenatal care that actually felt safe. I walked out of every visit lighter than I came in.",
      name: "Brianna M.",
      role: "Patient, Alpharetta",
    },
  ];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
            What patients say
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
            Real outcomes from real neighbors.
          </h2>
        </div>

        <Carousel className="mt-12" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {quotes.map((q) => (
              <CarouselItem key={q.name} className="md:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col justify-between rounded-3xl bg-card p-8 ring-1 ring-border">
                  <div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-bronze text-bronze" />
                      ))}
                    </div>
                    <blockquote className="mt-5 font-display text-xl leading-snug text-forest">
                      “{q.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{q.name}</div>
                    <div className="text-xs uppercase tracking-widest text-foreground/55">
                      {q.role}
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-end gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
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
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
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
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
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

          <div className="overflow-hidden rounded-3xl ring-1 ring-border">
            <iframe
              title="Semper Chiropractic location map"
              src={SITE.mapsEmbed}
              loading="lazy"
              className="h-[380px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
