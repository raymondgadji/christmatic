-- Favoris (« Ma liste ») : un utilisateur connecté met des films de côté.
-- À exécuter une fois dans le SQL Editor Supabase.
-- Chaque ligne = un film mis en favori par un utilisateur. Seul son propriétaire peut la lire, l'ajouter ou la supprimer.

CREATE TABLE IF NOT EXISTS favorites (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  film_id    UUID NOT NULL REFERENCES films(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, film_id)
);

CREATE INDEX IF NOT EXISTS favorites_user_idx ON favorites (user_id, created_at DESC);

ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "favorites_select_own" ON favorites;
CREATE POLICY "favorites_select_own" ON favorites
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "favorites_insert_own" ON favorites;
CREATE POLICY "favorites_insert_own" ON favorites
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "favorites_delete_own" ON favorites;
CREATE POLICY "favorites_delete_own" ON favorites
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);
