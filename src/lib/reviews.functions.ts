import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import process from "node:process";

export type PublicReview = {
  id: string;
  authorName: string;
  authorPhotoUrl: string | null;
  rating: number;
  text: string | null;
  relativeTime: string | null;
  reviewUrl: string | null;
  publishedAt: string | null;
};

export type ReviewsPayload = {
  rating: number | null;
  reviewCount: number | null;
  lastSyncedAt: string | null;
  reviews: PublicReview[];
};

export const EMPTY_REVIEWS: ReviewsPayload = {
  rating: null,
  reviewCount: null,
  lastSyncedAt: null,
  reviews: [],
};

/**
 * Public, unauthenticated read of the stored Google reviews. Safe to call from
 * a public route loader during SSR/prerender: it never throws, so a backend
 * hiccup degrades to a hidden section instead of a failed render.
 */
export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<ReviewsPayload> => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) return EMPTY_REVIEWS;

    try {
      const supabase = createClient(url, key, {
        auth: { persistSession: false, autoRefreshToken: false },
      });

      const [reviewsResult, statsResult] = await Promise.all([
        supabase
          .from("google_reviews")
          .select(
            "id, author_name, author_photo_url, rating, text, relative_time, review_url, published_at",
          )
          .eq("is_hidden", false)
          .order("published_at", { ascending: false })
          .limit(12),
        supabase
          .from("google_place_stats")
          .select("rating, user_rating_count, last_synced_at")
          .limit(1)
          .maybeSingle(),
      ]);

      if (reviewsResult.error) {
        console.error("Failed to read google_reviews", reviewsResult.error);
      }

      const stats = statsResult.data as
        | { rating: number | null; user_rating_count: number | null; last_synced_at: string | null }
        | null;

      const rows = (reviewsResult.data ?? []) as Array<{
        id: string;
        author_name: string;
        author_photo_url: string | null;
        rating: number;
        text: string | null;
        relative_time: string | null;
        review_url: string | null
        published_at: string | null;
      }>;

      return {
        rating: stats?.rating ?? null,
        reviewCount: stats?.user_rating_count ?? null,
        lastSyncedAt: stats?.last_synced_at ?? null,
        reviews: rows
          .filter((row) => (row.text ?? "").trim().length > 0)
          .map((row) => ({
            id: row.id,
            authorName: row.author_name,
            authorPhotoUrl: row.author_photo_url,
            rating: row.rating,
            text: row.text,
            relativeTime: row.relative_time,
            reviewUrl: row.review_url,
            publishedAt: row.published_at,
          })),
      };
    } catch (error) {
      console.error("getGoogleReviews failed", error);
      return EMPTY_REVIEWS;
    }
  },
);
