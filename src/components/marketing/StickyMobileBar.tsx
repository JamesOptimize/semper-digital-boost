import { useEffect, useState } from "react";
import { Phone, CalendarCheck, X } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Mobile booking bar. Fixed + transform-only animation => zero layout shift.
 * Space is reserved by the root wrapper's bottom padding.
 * Dismissal lives in component state: it persists across in-app navigation
 * and resets on the next full page load.
 */
export function StickyMobileBar() {
  const [revealed, setRevealed] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [formFocus, setFormFocus] = useState(false);

  useEffect(() => {
    const reveal = () => setRevealed(true);
    const timer = window.setTimeout(reveal, 1500);
    const onScroll = () => {
      if (window.scrollY > 120) reveal();
    };
    const isField = (t: EventTarget | null) =>
      t instanceof HTMLElement && t.matches("input, textarea, select");
    const onFocusIn = (e: FocusEvent) => isField(e.target) && setFormFocus(true);
    const onFocusOut = (e: FocusEvent) => isField(e.target) && setFormFocus(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  if (dismissed) return null;
  const visible = revealed && !formFocus;

  return (
    <div
      role="region"
      aria-label="Book an appointment"
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-navy px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[var(--shadow-elegant)] transition-transform duration-300 ease-out md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex items-center gap-2">
        <a
          href={SITE.bookUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Book New Patient Exam on Jane App (opens in new tab)"
          className="flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-bronze px-4 text-sm font-semibold text-bronze-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">Book New Patient Exam</span>
        </a>
        <a
          href={`tel:${SITE.phoneRaw}`}
          aria-label={`Call Semper Chiropractic at ${SITE.phone}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-forest/60 text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <Phone className="h-5 w-5" aria-hidden />
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss booking bar"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground/70 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
