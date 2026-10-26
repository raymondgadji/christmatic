-- 26/10/2026 : nouvel ordre du carrousel de l'accueil (colonne featured_rank, voir carousel_rank_2026-10-25.sql).
-- Les films sans rang passent APRÈS les films classés : Nora doit donc avoir un rang pour rester 2e.
-- Ordre voulu : 1 Spirituals 5, 2 Nora, 3 The Price of One Mistake, 4 Un Passé qui nous hante 1, puis Wealth in the Dream 1, 2, 3 (sans rang, par created_at).

UPDATE films SET featured_rank = 2 WHERE slug = 'nora';
UPDATE films SET featured_rank = 3 WHERE slug = 'the-price-of-one-mistake';
UPDATE films SET featured_rank = 4 WHERE slug = 'un-passe-qui-nous-hante-1';
