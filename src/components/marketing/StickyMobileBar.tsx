import { Phone, CalendarCheck } from "lucide-react";

const BOOK_URL = "https://semperchiro.janeapp.com/";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2.5 shadow-lg backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-forest text-sm font-semibold text-forest-foreground"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Now
        </a>
        <a
          href="tel:6782261333"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-forest text-forest"
          aria-label="Call clinic"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
