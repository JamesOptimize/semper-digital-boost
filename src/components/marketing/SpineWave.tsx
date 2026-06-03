import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface SpineWaveProps {
  className?: string;
}

/**
 * Decorative animated "spine wave" — a flowing SVG path that draws itself
 * when scrolled into view. Pointer-events disabled and aria-hidden so it
 * never blocks interaction or affects LCP (no images, ~1KB inline SVG).
 */
export function SpineWave({ className }: SpineWaveProps) {
  const ref = useRef<SVGSVGElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 160"
      fill="none"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <linearGradient id="spineWaveGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-bronze)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--brand-bronze)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--brand-bronze)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 0 80 C 100 20, 200 140, 300 80 S 500 20, 600 80 S 800 140, 900 80 S 1100 20, 1200 80"
        stroke="url(#spineWaveGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
      />
      <motion.path
        d="M 0 80 C 100 20, 200 140, 300 80 S 500 20, 600 80 S 800 140, 900 80 S 1100 20, 1200 80"
        stroke="var(--brand-bronze)"
        strokeWidth="0.75"
        strokeDasharray="3 9"
        strokeLinecap="round"
        opacity={0.45}
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  );
}
