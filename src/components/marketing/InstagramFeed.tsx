import { useEffect, useState } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/site";
import { ScrollReveal } from "./ScrollReveal";

interface InstagramPost {
  id: string;
  permalink: string;
  caption?: string;
  thumbnail: string;
}

const CACHE_KEY = "semper:ig-feed:v1";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const FEED_URL: string | undefined = undefined; // wire to a server endpoint when IG token available

const FALLBACK: InstagramPost[] = [
  {
    id: "f1",
    permalink: SITE.social.instagram,
    caption: "Marine discipline. Clinical mastery. Family-first care.",
    thumbnail: "",
  },
  {
    id: "f2",
    permalink: SITE.social.instagram,
    caption: "Same-week new patient exams in the heart of Roswell.",
    thumbnail: "",
  },
  {
    id: "f3",
    permalink: SITE.social.instagram,
    caption: "CCSP-certified sports rehab — built for athletes who don't quit.",
    thumbnail: "",
  },
  {
    id: "f4",
    permalink: SITE.social.instagram,
    caption: "Gentle prenatal & pediatric chiropractic for the whole family.",
    thumbnail: "",
  },
  {
    id: "f5",
    permalink: SITE.social.instagram,
    caption: "Veteran owned. Veteran trusted. Semper Fidelis.",
    thumbnail: "",
  },
  {
    id: "f6",
    permalink: SITE.social.instagram,
    caption: "Your health is your wealth — invest in it weekly.",
    thumbnail: "",
  },
];

function readCache(): InstagramPost[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts: number; posts: InstagramPost[] };
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed.posts;
  } catch {
    return null;
  }
}

function writeCache(posts: InstagramPost[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), posts }));
  } catch {
    /* quota / private mode — ignore */
  }
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>(() => readCache() ?? FALLBACK);
  const [isLive, setIsLive] = useState<boolean>(() => Boolean(readCache()));

  useEffect(() => {
    if (!FEED_URL) return; // no endpoint configured → keep fallback gracefully
    let cancelled = false;
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 4000);

    (async () => {
      try {
        const res = await fetch(FEED_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { posts: InstagramPost[] };
        if (cancelled || !Array.isArray(data.posts) || data.posts.length === 0) return;
        const trimmed = data.posts.slice(0, 6);
        writeCache(trimmed);
        setPosts(trimmed);
        setIsLive(true);
      } catch {
        // graceful: keep fallback already in state
      } finally {
        clearTimeout(t);
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(t);
    };
  }, []);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
              <Instagram className="h-4 w-4" /> From the clinic
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
              Follow the work in motion.
            </h2>
            <p className="mt-3 text-base text-foreground/70">
              Patient wins, recovery tips, and behind-the-scenes from Mimosa Blvd.
              {!isLive && (
                <span className="ml-1 text-foreground/50">(highlights shown — live feed loads when available)</span>
              )}
            </p>
          </div>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-bronze/60 px-5 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-bronze hover:text-bronze-foreground"
          >
            @semperchiropractic <ExternalLink className="h-4 w-4" />
          </a>
        </ScrollReveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {posts.map((post, i) => (
            <ScrollReveal as="li" key={post.id} delay={i * 0.05}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-forest ring-1 ring-bronze/20 transition-all hover:-translate-y-1 hover:ring-bronze"
              >
                {post.thumbnail ? (
                  <img
                    src={post.thumbnail}
                    alt={post.caption ?? "Instagram post"}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-forest via-forest to-navy p-4 text-center">
                    <Instagram className="absolute right-3 top-3 h-4 w-4 text-bronze/70" />
                    <p className="font-display text-xs leading-snug text-forest-foreground/90">
                      {post.caption}
                    </p>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Instagram
                  className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 text-bronze opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </a>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
