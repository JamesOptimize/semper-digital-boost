import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { StickyMobileBar } from "@/components/marketing/StickyMobileBar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-forest">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Please try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-forest-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "Physician"],
  name: "Semper Chiropractic",
  image: "/og-cover.jpg",
  telephone: "+1-678-226-1333",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "859 Mimosa Blvd",
    addressLocality: "Roswell",
    addressRegion: "GA",
    postalCode: "30075",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 34.0232, longitude: -84.3616 },
  areaServed: ["Roswell", "Alpharetta", "Milton", "Atlanta"],
  founder: {
    "@type": "Person",
    name: "Dr. Thomas Scrimo",
    jobTitle: "Doctor of Chiropractic, USMC Veteran",
    alumniOf: "Life University",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Semper Chiropractic — Veteran-Owned Chiropractor in Roswell, GA" },
      {
        name: "description",
        content:
          "Precision chiropractic care for Roswell families, athletes, and veterans. Marine discipline. Clinical excellence. Book your new patient exam today.",
      },
      { name: "theme-color", content: "#0A3D2A" },
      { property: "og:site_name", content: "Semper Chiropractic" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Semper Chiropractic — Veteran-Owned Chiropractor in Roswell, GA" },
      { name: "twitter:title", content: "Semper Chiropractic — Veteran-Owned Chiropractor in Roswell, GA" },
      { name: "description", content: "Semper Shine is a modern, mobile-first website designed to attract new patients to Semper Chiropractic." },
      { property: "og:description", content: "Semper Shine is a modern, mobile-first website designed to attract new patients to Semper Chiropractic." },
      { name: "twitter:description", content: "Semper Shine is a modern, mobile-first website designed to attract new patients to Semper Chiropractic." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/5JAJQCRzbbMfRQ9fSpySEIitRfk1/social-images/social-1780496216122-IMG_0456.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/5JAJQCRzbbMfRQ9fSpySEIitRfk1/social-images/social-1780496216122-IMG_0456.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://api.fontshare.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pb-20 md:pb-0">
          <Outlet />
        </main>
        <SiteFooter />
        <StickyMobileBar />
      </div>
    </QueryClientProvider>
  );
}
