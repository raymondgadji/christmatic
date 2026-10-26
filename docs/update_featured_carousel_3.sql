-- 26/10/2026 : carrousel de l'accueil. Retire « Le Jour où j'ai décidé de prier », ajoute « The Price of One Mistake ».
-- Reste à 7 films à la une. L'ordre vient de featured_rank (Spirituals 5 = 1) puis created_at croissant.

UPDATE films SET is_featured = false WHERE slug = 'le-jour-ou-jai-decide-de-prier';
UPDATE films SET is_featured = true WHERE slug = 'the-price-of-one-mistake';
