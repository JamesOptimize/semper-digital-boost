import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export interface PillarCardProps {
  title: string;
  copy: string;
  href: string;
  icon: ReactNode;
}

export function PillarCard({ title, copy, href, icon }: PillarCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)]">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze/40 text-bronze"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-forest">{title}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-foreground/75">{copy}</p>
      <Link
        to={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}

/* Minimal single-stroke SVG icons */

export const FamilyIcon = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="8" cy="7" r="2.5" />
    <circle cx="16" cy="7" r="2.5" />
    <path d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
    <path d="M11 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
  </svg>
);

export const SportsIcon = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h4l2-6 4 12 2-6h4" />
  </svg>
);

export const VeteranIcon = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
  </svg>
);
