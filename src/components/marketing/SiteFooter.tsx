import { Link } from "@tanstack/react-router";
import spineMark from "@/assets/spine-mark.png";
import { SocialLinks } from "@/components/marketing/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={spineMark} alt="" width={32} height={32} className="h-8 w-8" />
              <span className="font-display text-xl font-bold tracking-tight">
                Semper Chiropractic
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-navy-foreground/70">
              Veteran-owned chiropractic care for Roswell families, athletes, and active adults.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-bronze">
              Veteran owned &amp; operated
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-navy-foreground/50">
                Follow Semper
              </p>
              <SocialLinks variant="footer" />
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-bronze">
              Visit
            </h3>
            <address className="mt-4 not-italic text-sm text-navy-foreground/80">
              859 Mimosa Blvd
              <br />
              Roswell, GA 30075
              <br />
              <a className="mt-2 inline-block hover:text-bronze" href="tel:6782261333">
                (678) 226-1333
              </a>
            </address>
            <div className="mt-4 text-sm text-navy-foreground/70">
              Mon–Fri 8a–6p
              <br />
              Sat by appointment
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-bronze">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/about", "About Dr. Scrimo"],
                ["/services", "Services"],
                ["/blog", "Wellness Blog"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-navy-foreground/80 hover:text-bronze">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Semper Chiropractic. All rights reserved.</p>
          <p>Serving Roswell, Alpharetta, Milton &amp; greater North Atlanta.</p>
        </div>
      </div>
    </footer>
  );
}
