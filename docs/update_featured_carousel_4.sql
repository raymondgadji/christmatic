-- 05/11/2026 : carrousel de l'accueil (7 films). Demande de Raymond : garder Spirituals 5 et Nora, garder The Price of One Mistake,
-- puis mettre les films partagés ce jour en commençant par Lost and Bound (4 places : Lost and Bound, Labels, Wishlist, Rebuild).
-- Ordre : featured_rank (1 = premier). Les films retirés perdent leur rang.

UPDATE films SET is_featured = false, featured_rank = NULL
WHERE slug IN ('un-passe-qui-nous-hante-1', 'wealth-in-the-dream', 'wealth-in-the-dream-2', 'wealth-in-the-dream-3');

UPDATE films SET is_featured = true, featured_rank = 1 WHERE slug = 'spirituals-5';
UPDATE films SET is_featured = true, featured_rank = 2 WHERE slug = 'nora';
UPDATE films SET is_featured = true, featured_rank = 3 WHERE slug = 'the-price-of-one-mistake';
UPDATE films SET is_featured = true, featured_rank = 4 WHERE slug = 'lost-and-bound';
UPDATE films SET is_featured = true, featured_rank = 5 WHERE slug = 'labels';
UPDATE films SET is_featured = true, featured_rank = 6 WHERE slug = 'wishlist';
UPDATE films SET is_featured = true, featured_rank = 7 WHERE slug = 'rebuild-new-wine-season-2';
