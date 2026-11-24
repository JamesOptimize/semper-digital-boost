import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { SpineLogo } from "@/components/brand/SpineLogo";
import { ThemeToggle } from "@/components/marketing/ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

import { SITE } from "@/lib/site";
const BOOK_URL = SITE.bookUrl;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-border/70 bg-background/90 shadow-[0_8px_24px_-18px_var(--color-foreground)]"
          : "border-transparent bg-background/70"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 justify-self-start" aria-label="Semper Chiropractic home">
          <SpineLogo className="h-10 w-auto shrink-0 text-forest dark:text-bronze" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-logo text-[1.45rem] font-semibold uppercase tracking-[0.14em] text-forest">Semper</span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.32em] text-foreground/70">Chiropractic</span>
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="relative inline-flex h-10 items-center rounded-full px-3.5 text-sm font-medium text-foreground/75 transition-colors hover:text-forest after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-bronze after:transition-transform after:duration-200 hover:after:scale-x-100 data-[status=active]:text-forest data-[status=active]:after:scale-x-100"
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 justify-self-end">
          <ThemeToggle />
          <a
            href="tel:6782261333"
            className="hidden h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold text-forest transition-colors hover:bg-muted md:inline-flex"
            aria-label="Call (678) 226-1333"
          >
            <Phone className="h-4 w-4 text-bronze" aria-hidden />
            <span className="hidden whitespace-nowrap tabular-nums xl:inline">(678) 226-1333</span>
          </a>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden h-10 items-center whitespace-nowrap rounded-full bg-forest px-5 text-sm font-semibold text-forest-foreground shadow-sm transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
          >
            Book Now
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-forest md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:max-w-sm">
              <SheetTitle className="font-display text-forest">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 items-center justify-center rounded-full bg-forest text-sm font-semibold text-forest-foreground"
                >
                  Book New Patient Exam
                </a>
                <a
                  href="tel:6782261333"
                  className="flex h-12 items-center justify-center rounded-full border border-forest text-sm font-semibold text-forest"
                >
                  Call (678) 226-1333
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
