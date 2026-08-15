import process from "node:process";

/**
 * Server-only Google reviews helpers.
 *
 * Reviews are pulled from the Google Places API (New) through the Lovable
 * connector gateway. Google's official API returns at most the 5 most recent
 * reviews per place plus the authoritative overall rating and total review
 * count — there is no compliant endpoint that returns the full review history.
 * Every review we have ever seen is persisted, so the archive grows over time
 * as new reviews appear in that rolling window.
 */

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

const FIELD_MASK = [
  "id",
  "displayName",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews",
].join(",");

export type GooglePlacePayload = {
  id?: string;
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    name?: string;
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    publishTime?: string;
    googleMapsUri?: string;
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
};

function requireGatewayCredentials() {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!lovableApiKey || !mapsKey) {
    throw new Error(
      "Google Maps connector credentials are missing (LOVABLE_API_KEY / GOOGLE_MAPS_API_KEY).",
    );
  }
  return { lovableApiKey, mapsKey };
}

function describeMapsForbidden(body: string) {
  if (body.includes("API_KEY_HTTP_REFERRER_BLOCKED")) {
    return 'Google Maps server key is referrer-restricted. Set the server key\'s application restrictions to "None" or "IP addresses".';
  }
  if (body.includes("API_KEY_SERVICE_BLOCKED")) {
    return "Google Maps server key does not allow the Places API. Add Places API (New) to the key's allowed-APIs list.";
  }
  return `Google Maps request was denied (403): ${body}`;
}

export async function fetchPlaceWithReviews(placeId: string): Promise<GooglePlacePayload> {
  const { lovableApiKey, mapsKey } = requireGatewayCredentials();

  const response = await fetch(
    `${GATEWAY_URL}/places/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
    {
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": mapsKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
    },
  );

  if (!response.ok) {
    const body = await response.text();
    console.error(`Google Places request failed [${response.status}]: ${body}`);
    if (response.status === 403) throw new Error(describeMapsForbidden(body));
    throw new Error(`Google Places request failed [${response.status}]: ${body}`);
  }

  return (await response.json()) as GooglePlacePayload;
}

/** Stable per-review key: the trailing segment of the Places review resource name. */
function reviewKeyFrom(name: string | undefined, fallback: string) {
  if (!name) return fallback;
  const parts = name.split("/");
  return parts[parts.length - 1] || fallback;
}

export async function syncGoogleReviews(placeId: string) {
  const place = await fetchPlaceWithReviews(placeId);
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const reviews = (place.reviews ?? []).flatMap((review, index) => {
    const text = review.originalText?.text ?? review.text?.text ?? null;
    const rating = review.rating;
    if (typeof rating !== "number") return [];
    return [
      {
        place_id: placeId,
        review_key: reviewKeyFrom(review.name, `${placeId}-${index}`),
        author_name: review.authorAttribution?.displayName ?? "Google reviewer",
        author_photo_url: review.authorAttribution?.photoUri ?? null,
        author_profile_url: review.authorAttribution?.uri ?? null,
        rating: Math.round(rating),
        text,
        relative_time: review.relativePublishTimeDescription ?? null,
        review_url: review.googleMapsUri ?? null,
        published_at: review.publishTime ?? null,
        updated_at: new Date().toISOString(),
      },
    ];
  });

  if (reviews.length > 0) {
    const { error } = await supabaseAdmin
      .from("google_reviews")
      .upsert(reviews, { onConflict: "review_key" });
    if (error) throw new Error(`Failed to store reviews: ${error.message}`);
  }

  const { error: statsError } = await supabaseAdmin.from("google_place_stats").upsert(
    {
      place_id: placeId,
      display_name: place.displayName?.text ?? null,
      rating: place.rating ?? null,
      user_rating_count: place.userRatingCount ?? null,
      maps_uri: place.googleMapsUri ?? null,
      last_synced_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "place_id" },
  );
  if (statsError) throw new Error(`Failed to store place stats: ${statsError.message}`);

  return {
    placeId,
    reviewsSeen: reviews.length,
    rating: place.rating ?? null,
    userRatingCount: place.userRatingCount ?? null,
  };
}
