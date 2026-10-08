-- Renseigne l'année 2026 pour les films qui n'en ont pas (17 films au 08/10/2026).
-- Ne modifie PAS les films qui ont déjà une année (2024, 2025 ou 2026).

UPDATE films
SET annee = 2026
WHERE annee IS NULL;
