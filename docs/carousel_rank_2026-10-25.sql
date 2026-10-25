-- Ordre du carrousel de l'accueil : champ facultatif `featured_rank` (1 = premier de la liste).
-- Les films sans rang gardent l'ordre habituel (les plus anciens d'abord, par created_at) et passent après les films classés.
-- On ne touche JAMAIS à created_at pour changer l'ordre : il sert aussi à savoir si un film est « nouveau » (partage et description bilingues).

ALTER TABLE films ADD COLUMN IF NOT EXISTS featured_rank INTEGER;

-- 25/10/2026 : Spirituals 5 en première position, Nora juste après, les autres à la suite.
UPDATE films SET featured_rank = 1 WHERE slug = 'spirituals-5';
