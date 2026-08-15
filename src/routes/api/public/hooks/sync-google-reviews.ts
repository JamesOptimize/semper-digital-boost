import { createFileRoute } from "@tanstack/react-router";
import process from "node:process";

import { SITE } from "@/lib/site";

/**
 * Daily Google reviews sync, invoked by pg_cron via pg_net.
 * Public prefix (auth bypassed at the edge), so the caller is verified here
 * with the project's Supabase publishable key in the `apikey` header.
 */
function isAuthorized(request: Request) {
  const provided = request.headers.get("apikey") ?? "";
  const expected =
    process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ?? "";
  if (!expected || provided.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i += 1) {
    mismatch |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return mismatch === 0;
}

async function handle(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { syncGoogleReviews } = await import("@/lib/google-reviews.server");
    const result = await syncGoogleReviews(SITE.googlePlaceId);
    return Response.json({ success: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Google reviews sync failed:", message);
    return Response.json({ success: false, error: message }, { status: 502 });
  }
}

export const Route = createFileRoute("/api/public/hooks/sync-google-reviews")({
  server: {
    handlers: {
      POST: ({ request }) => handle(request),
      GET: ({ request }) => handle(request),
    },
  },
});
