-- Suivi des clics sur les boutons de partage (WhatsApp / Facebook / Copier le lien) des pages film.
-- À exécuter une fois dans le SQL Editor Supabase.

CREATE TABLE IF NOT EXISTS share_clicks (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  film_slug  TEXT NOT NULL,
  channel    TEXT NOT NULL CHECK (channel IN ('whatsapp', 'facebook', 'copy')),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE share_clicks ENABLE ROW LEVEL SECURITY;

-- Tout visiteur peut enregistrer un clic (insertion seulement)
DROP POLICY IF EXISTS "share_clicks_insert" ON share_clicks;
CREATE POLICY "share_clicks_insert" ON share_clicks
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Lecture ouverte : la page /stats affiche les totaux (aucune donnée personnelle stockée)
DROP POLICY IF EXISTS "share_clicks_select" ON share_clicks;
CREATE POLICY "share_clicks_select" ON share_clicks
  FOR SELECT TO anon, authenticated
  USING (true);
