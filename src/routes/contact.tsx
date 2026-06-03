import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { SITE } from "@/lib/site";
import { LazyMap } from "@/components/marketing/LazyMap";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Semper Chiropractic, Roswell GA" },
      {
        name: "description",
        content:
          "Visit Semper Chiropractic at 859 Mimosa Blvd, Roswell, GA. Call (678) 226-1333 or send us a message.",
      },
      { property: "og:title", content: "Contact Semper Chiropractic" },
      { property: "og:description", content: "Reach the Semper Chiropractic team in Roswell." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Enter a valid email").max(160),
  phone: z.string().min(7, "Enter a valid phone").max(20),
  message: z.string().min(5, "Tell us a little more").max(1200),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Frontend-only for now — will wire up delivery when Lovable Cloud is enabled.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — we'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Toaster richColors position="top-center" />
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">Contact</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-forest md:text-6xl">
        Let's get you scheduled.
      </h1>

      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <aside className="md:col-span-5 space-y-6">
          <InfoRow icon={MapPin} label="Clinic">
            {SITE.address}
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm text-foreground/60 hover:text-bronze"
            >
              Get directions
            </a>
          </InfoRow>
          <InfoRow icon={Phone} label="Phone">
            <a href={`tel:${SITE.phoneRaw}`} className="hover:text-bronze">
              {SITE.phone}
            </a>
          </InfoRow>
          <InfoRow icon={Mail} label="Email">
            <a href={`mailto:${SITE.email}`} className="hover:text-bronze">
              {SITE.email}
            </a>
          </InfoRow>
          <InfoRow icon={Clock} label="Hours">
            Mon–Fri 8:00a – 6:00p
            <br />
            Sat by appointment · Sun closed
          </InfoRow>

          <LazyMap
            title="Semper Chiropractic map"
            className="h-[260px] w-full overflow-hidden rounded-3xl bg-muted ring-1 ring-border"
          />
        </aside>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 space-y-5 rounded-3xl bg-card p-8 ring-1 ring-border"
          noValidate
        >
          <Field name="name" label="Full name" error={errors.name} />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="email" type="email" label="Email" error={errors.email} />
            <Field name="phone" type="tel" label="Phone" error={errors.phone} />
          </div>
          <Field
            name="message"
            label="How can we help?"
            error={errors.message}
            multiline
          />

          <p className="text-xs text-foreground/55">
            We never share your info. Please don't include sensitive medical history here — we'll
            collect that securely at your visit.
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-7 text-sm font-semibold text-forest-foreground disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-foreground/55">
          {label}
        </div>
        <div className="mt-1 font-semibold text-forest">{children}</div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  multiline,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  multiline?: boolean;
}) {
  const cls =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20";
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      {multiline ? (
        <textarea name={name} rows={5} className={cls} maxLength={1200} />
      ) : (
        <input name={name} type={type} className={cls} maxLength={160} />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
