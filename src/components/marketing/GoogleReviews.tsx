import { Star, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { ScrollReveal } from "./ScrollReveal";
import type { PublicReview, ReviewsPayload } from "@/lib/reviews.functions";

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={label}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={
            i <= Math.round(rating)
              ? "h-4 w-4 fill-bronze text-bronze"
              : "h-4 w-4 text-foreground/25"
          }
          aria-hidden
        />
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function ReviewCard({ review }: { review: PublicReview }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-elegant)]">
      <Stars rating={review.rating} label={`${review.rating} out of 5 stars`} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:10] overflow-hidden">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        {review.authorPhotoUrl ? (
          <img
            src={review.authorPhotoUrl}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="h-9 w-9 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest/10 text-xs font-semibold text-forest">
            {initials(review.authorName)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-forest">
            {review.authorName}
          </span>
          <span className="block text-xs text-foreground/55">
            Google review{review.relativeTime ? ` · ${review.relativeTime}` : ""}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function GoogleRatingBadge({ rating, reviewCount }: Pick<ReviewsPayload, "rating" | "reviewCount">) {
  if (rating == null || !reviewCount) return null;
  return (
    <a
      href={SITE.googleReviewsUrl}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-foreground/75 transition-colors hover:border-bronze hover:text-forest"
    >
      <Stars rating={rating} label={`${rating} out of 5 stars on Google`} />
      <span className="font-semibold text-forest">{rating.toFixed(1)}</span>
      <span className="text-xs text-foreground/60">{reviewCount} Google reviews</span>
    </a>
  );
}

export function GoogleReviews({ rating, reviewCount, reviews }: ReviewsPayload) {
  if (reviews.length === 0) return null;

  return (
    <section id="reviews" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
                Verified Google Reviews
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.01em] text-forest sm:text-4xl">
                What Roswell patients say.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/70">
                Pulled directly from our Google Business Profile and refreshed every day — never
                edited, never written for us.
              </p>
            </div>
            {rating != null && reviewCount ? (
              <div className="shrink-0 rounded-2xl border border-border bg-background px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-bold text-forest">
                    {rating.toFixed(1)}
                  </span>
                  <Stars rating={rating} label={`${rating} out of 5 stars on Google`} />
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest text-foreground/55">
                  {reviewCount} reviews on Google
                </p>
              </div>
            ) : null}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review, index) => (
            <ScrollReveal key={review.id} delay={index * 0.08}>
              <ReviewCard review={review} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest underline-offset-4 hover:underline"
          >
            Read every review on Google
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={SITE.googleWriteReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 underline-offset-4 hover:text-forest hover:underline"
          >
            Leave a review
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
