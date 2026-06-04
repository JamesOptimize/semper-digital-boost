import { createFileRoute, Link } from "@tanstack/react-router";

const posts = [
  {
    slug: "back-on-the-field-faster",
    title: "Back on the field faster: a sports injury recovery framework",
    excerpt:
      "How CCSP-trained chiropractic care shortens return-to-play timelines for high school and collegiate athletes.",
    date: "Coming soon",
    tag: "Sports",
  },
  {
    slug: "gentle-pediatric-chiropractic",
    title: "What 'gentle' actually means in pediatric chiropractic",
    excerpt:
      "A primer for Roswell parents on what to expect when bringing a child in for the first time.",
    date: "Coming soon",
    tag: "Family",
  },
  {
    slug: "veterans-and-spinal-health",
    title: "Veterans and spinal health: a longer view",
    excerpt:
      "Why former service members benefit from a long-horizon, discipline-first approach to wellness.",
    date: "Coming soon",
    tag: "Veterans",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Wellness Blog — Semper Chiropractic, Roswell GA" },
      {
        name: "description",
        content:
          "Practical chiropractic, mobility, and recovery insights from Dr. Thomas Scrimo, DC, CCSP — Roswell, Georgia.",
      },
      { property: "og:title", content: "Wellness Blog — Semper Chiropractic" },
      {
        property: "og:description",
        content: "Practical chiropractic, mobility, and recovery insights.",
      },
      { property: "og:url", content: "https://www.semper-chiropractic.com/blog" },
      { property: "og:image", content: "https://www.semper-chiropractic.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Semper Chiropractic wellness blog by Dr. Thomas Scrimo" },
      { name: "twitter:image", content: "https://www.semper-chiropractic.com/og-cover.jpg" },
      { name: "twitter:image:alt", content: "Semper Chiropractic wellness blog" },
    ],
    links: [{ rel: "canonical", href: "https://www.semper-chiropractic.com/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">Wellness blog</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-forest md:text-6xl">
        Field notes from the clinic.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        Practical insights on mobility, recovery, and family wellness — written from a working
        chiropractic practice in Roswell.
      </p>

      <div className="mt-14 divide-y divide-border border-y border-border">
        {posts.map((p) => (
          <article key={p.slug} className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
            <div className="text-xs font-semibold uppercase tracking-widest text-bronze md:col-span-2">
              {p.tag}
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-2xl font-bold leading-snug text-forest group-hover:text-bronze md:text-3xl">
                <Link to="/blog">{p.title}</Link>
              </h2>
              <p className="mt-2 text-foreground/70">{p.excerpt}</p>
            </div>
            <div className="text-sm text-foreground/55 md:col-span-2 md:text-right">{p.date}</div>
          </article>
        ))}
      </div>

      <p className="mt-12 text-sm text-foreground/55">
        New articles publish monthly. Have a question you'd like answered? Email{" "}
        <a className="text-forest underline underline-offset-4" href="mailto:care@semperchiro.com">
          care@semperchiro.com
        </a>
        .
      </p>
    </div>
  );
}
