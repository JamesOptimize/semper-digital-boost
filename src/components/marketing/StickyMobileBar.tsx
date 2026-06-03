import { Phone, CalendarCheck, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2.5 shadow-lg backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={SITE.bookUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-forest text-sm font-semibold text-forest-foreground"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Now
        </a>
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-forest text-forest"
          aria-label="Call clinic"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={SITE.social.instagram}
          target="_blank"
          rel="noreferrer noopener"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze text-bronze"
          aria-label="Semper Chiropractic on Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

