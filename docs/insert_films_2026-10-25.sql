-- 25/10/2026 : 2 nouveaux films + carrousel de l'accueil (7 films à la une, Nora reste).
-- created_at décalé d'une seconde pour que Spirituals 5 passe avant « Un Passé qui nous hante 1 » dans le carrousel.

INSERT INTO films (titre, slug, description, annee, pays, langue, youtube_id, thumbnail_url, published_at, created_at, is_published, is_featured) VALUES
('Spirituals 5', 'spirituals-5', 'Dernier épisode de la série Spirituals. / The concluding episode of the Spirituals series.', 2026, 'Nigeria', 'en', '_MwBbFvegk0', 'https://img.youtube.com/vi/_MwBbFvegk0/hqdefault.jpg', '2026-10-25T10:00:27-07:00', now(), true, true),
('Un Passé qui nous hante 1 (Jésus Côte d''Ivoire)', 'un-passe-qui-nous-hante-1', 'Faut-il avouer son passé calamiteux à son conjoint ? / Should you confess your disastrous past to your spouse?', 2026, 'Côte d''Ivoire', 'fr', 'W7UlHhH874M', 'https://img.youtube.com/vi/W7UlHhH874M/hqdefault.jpg', '2026-10-25T06:41:43-07:00', now() + interval '1 second', true, true);

UPDATE films
SET is_featured = false
WHERE slug IN ('marie-par-prophetie-ep14', 'la-victoire-du-premier-ne');
