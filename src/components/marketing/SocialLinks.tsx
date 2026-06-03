import { Instagram, Facebook, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";

const links = [
  { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
  { href: SITE.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: SITE.social.facebook, label: "Facebook", Icon: Facebook },
] as const;

interface SocialLinksProps {
  variant?: "footer" | "header";
  className?: string;
}

export function SocialLinks({ variant = "footer", className }: SocialLinksProps) {
  const isHeader = variant === "header";
  const base = isHeader
    ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-forest transition-colors hover:bg-forest hover:text-forest-foreground"
    : "group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-navy-foreground/80 transition-all hover:border-bronze hover:bg-bronze/10 hover:text-bronze hover:-translate-y-0.5";
  const iconSize = isHeader ? "h-4 w-4" : "h-5 w-5";

  return (
    <ul className={`flex items-center gap-2 ${className ?? ""}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Semper Chiropractic on ${label}`}
            title={label}
            className={base}
          >
            <Icon className={iconSize} aria-hidden />
            {!isHeader && (
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bronze px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-bronze-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
