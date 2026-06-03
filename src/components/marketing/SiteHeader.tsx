import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import spineMark from "@/assets/spine-mark.png";
import { SocialLinks } from "@/components/marketing/SocialLinks";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const BOOK_URL = "https://semperchiro.janeapp.com/";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Semper Chiropractic home">
          <img src={spineMark} alt="" width={28} height={28} className="h-7 w-7" />
          <span className="font-display text-lg font-bold tracking-tight text-forest">
            Semper<span className="text-bronze">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-forest"
              activeProps={{ className: "text-forest" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <SocialLinks variant="header" />
          </div>
          <a
            href="tel:6782261333"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-forest transition-colors hover:bg-forest hover:text-forest-foreground md:inline-flex"
            aria-label="Call (678) 226-1333"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center rounded-full bg-forest px-5 text-sm font-semibold text-forest-foreground shadow-sm transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Book Now
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-forest md:hidden"
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
