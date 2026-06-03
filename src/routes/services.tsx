import { createFileRoute } from "@tanstack/react-router";
import { Activity, Baby, Flame, HeartPulse, Stethoscope, Trophy } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Family, Sports & Veteran Chiropractic | Semper Chiropractic" },
      {
        name: "description",
        content:
          "Spinal adjustments, sports injury rehab, prenatal & pediatric care, wellness plans, and active recovery in Roswell, GA.",
      },
      { property: "og:title", content: "Services — Semper Chiropractic" },
      {
        property: "og:description",
        content: "Comprehensive chiropractic services for every stage of life.",
      },
      { property: "og:url", content: "https://www.semper-chiropractic.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://www.semper-chiropractic.com/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Stethoscope,
    title: "New Patient Exam",
    copy: "A 60-minute consultation with a full movement screen, posture analysis, and a clear care plan.",
  },
  {
    icon: Activity,
    title: "Spinal Adjustments",
    copy: "Precise, evidence-based adjustments tailored to the technique your body responds to best.",
  },
  {
    icon: Trophy,
    title: "Sports Injury & Rehab",
    copy: "CCSP-certified rehab for athletes — from high school sprinters to weekend warriors.",
  },
  {
    icon: Baby,
    title: "Prenatal & Pediatric",
    copy: "Gentle, low-force techniques designed for expecting mothers and growing kids.",
  },
  {
    icon: Flame,
    title: "Active Recovery",
    copy: "Soft-tissue work, mobility coaching, and recovery protocols for the disciplined patient.",
  },
  {
    icon: HeartPulse,
    title: "Wellness Plans",
    copy: "Ongoing care built around your goals, schedule, and budget — no long-term contracts.",
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">Services</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold tracking-tight text-forest md:text-6xl">
        Comprehensive chiropractic care for every stage of life.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/75">
        Every service at Semper Chiropractic is delivered by Dr. Scrimo personally — no rotating
        practitioners, no shortcuts.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="flex flex-col rounded-3xl bg-card p-8 ring-1 ring-border transition-shadow hover:shadow-xl"
          >
            <s.icon className="h-8 w-8 text-bronze" />
            <h2 className="mt-5 font-display text-2xl font-bold text-forest">{s.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">{s.copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-forest p-10 text-forest-foreground md:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
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
            className="inline-flex h-14 items-center rounded-full bg-bronze px-7 text-base font-semibold text-bronze-foreground"
          >
            Book New Patient Exam
          </a>
        </div>
      </div>
    </div>
  );
}
