-- 05/11/2026 : carrousel de l'accueil à 10 films (limite passée de 7 à 10 dans app/page.tsx, demande de Raymond).
-- Ajoute les 3 derniers films partagés ce jour, à la suite des 7 déjà en place (rangs 8 à 10).

UPDATE films SET is_featured = true, featured_rank = 8 WHERE slug = 'marry-your-kind';
UPDATE films SET is_featured = true, featured_rank = 9 WHERE slug = 'slaughters-clinic';
UPDATE films SET is_featured = true, featured_rank = 10 WHERE slug = 'for-this-cause';
