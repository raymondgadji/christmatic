-- Carrousel de l'accueil : retire Marié par Prophétie Ép.13, ajoute La Victoire du Premier-né.
-- Reste à 7 films à la une.

UPDATE films
SET is_featured = false
WHERE slug = 'marie-par-prophetie-ep13';

UPDATE films
SET is_featured = true
WHERE slug = 'la-victoire-du-premier-ne';
