-- Ajoute Marié par Prophétie Ép.14 et Wealth in the Dream 3 au carrousel de l'accueil.
-- Le carrousel affiche au maximum 7 films is_featured (les plus anciens d'abord).
-- Les 5 films déjà à la une restent : Nora, Wealth in the Dream 1 et 2,
-- Le Jour où j'ai décidé de prier, Marié par Prophétie Ép.13.

UPDATE films
SET is_featured = true
WHERE slug IN ('marie-par-prophetie-ep14', 'wealth-in-the-dream-3');
