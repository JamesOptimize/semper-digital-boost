CREATE TABLE public.google_reviews (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  place_id text NOT NULL,
  review_key text NOT NULL UNIQUE,
  author_name text NOT NULL,
  author_photo_url text,
  author_profile_url text,
  rating smallint NOT NULL,
  text text,
  relative_time text,
  review_url text,
  published_at timestamptz,
  is_hidden boolean NOT NULL DEFAULT false,
  is_featured boolean NOT NULL DEFAULT false,
  first_seen_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX google_reviews_published_at_idx ON public.google_reviews (published_at DESC);

CREATE TABLE public.google_place_stats (
  place_id text NOT NULL PRIMARY KEY,
  display_name text,
  rating numeric(2,1),
  user_rating_count integer,
  maps_uri text,
  last_synced_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.google_reviews TO anon, authenticated;
GRANT ALL ON public.google_reviews TO service_role;
GRANT SELECT ON public.google_place_stats TO anon, authenticated;
GRANT ALL ON public.google_place_stats TO service_role;

ALTER TABLE public.google_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.google_place_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visible reviews are public" ON public.google_reviews
  FOR SELECT TO anon, authenticated USING (is_hidden = false);

CREATE POLICY "Place stats are public" ON public.google_place_stats
  FOR SELECT TO anon, authenticated USING (true);

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER google_reviews_touch_updated_at
  BEFORE UPDATE ON public.google_reviews
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER google_place_stats_touch_updated_at
  BEFORE UPDATE ON public.google_place_stats
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();