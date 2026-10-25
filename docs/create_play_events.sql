-- Suivi des lectures de films sur christmatic.tv (pour comparer avec les vues de la playlist YouTube).
-- Deux événements par visite de page et par film : 'play' (lecture démarrée) et 'play30' (30 s de lecture cumulées,
-- seuil proche de celui qui fait compter une vue sur YouTube). Aucune donnée personnelle stockée.
-- À exécuter une fois dans le SQL Editor Supabase.

CREATE TABLE IF NOT EXISTS play_events (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  film_slug  TEXT NOT NULL,
  event      TEXT NOT NULL CHECK (event IN ('play', 'play30')),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE play_events ENABLE ROW LEVEL SECURITY;

-- Tout visiteur peut enregistrer un événement (insertion seulement)
DROP POLICY IF EXISTS "play_events_insert" ON play_events;
CREATE POLICY "play_events_insert" ON play_events
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Lecture ouverte : la page /stats affiche les totaux
DROP POLICY IF EXISTS "play_events_select" ON play_events;
CREATE POLICY "play_events_select" ON play_events
  FOR SELECT TO anon, authenticated
  USING (true);
