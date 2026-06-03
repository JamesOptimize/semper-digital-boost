import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "li";
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  once = true,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay },
    },
  };

  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </Comp>
  );
}
