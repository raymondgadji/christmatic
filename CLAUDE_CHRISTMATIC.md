# CLAUDE_CHRISTMATIC.md — Christmatic
> Bible du projet. À fournir au CTO (Claude) à chaque nouvelle session de travail.
> Dernière mise à jour : 8 octobre 2026 — Sprint 4 terminé ✅, Sprint 5 à démarrer, catalogue à 105 films (104 en ligne)

---

## 1. Vision & Mission

**Nom du projet :** CHRISTMATIC
**Tagline :** "Servir le Seigneur Jésus-Christ à travers le cinéma"
**Concept :** le « Netflix » des films en Christ africains — dédié aux films chrétiens d'Afrique noire (Afrique subsaharienne uniquement — pas de films arabes, pas de films occidentaux), pour le public francophone et anglophone en quête de contenu gospel africain
**Mission :** Évangéliser et édifier le Corps de Christ via le cinéma africain chrétien
**Hero title officiel :** "Le cinéma noir Africain au service de l'Évangile"

### Géographie des contenus acceptés
- Afrique de l'Ouest : Nigeria (Nollywood), Ghana, Côte d'Ivoire, Sénégal, Cameroun, Bénin, Togo, Burkina Faso...
- Afrique de l'Est : Kenya, Ouganda, Tanzanie, Éthiopie...
- Afrique Centrale : RDC, Congo-Brazzaville...
- Afrique Australe : Afrique du Sud, Zimbabwe, Zambie...
- ❌ Exclus : films arabes (Maroc, Algérie, Tunisie, Égypte), films occidentaux mainstream non-issus de la diaspora noire
- ✅ Exception acceptée : films produits par des réalisateurs africains noirs vivant en diaspora (UK, etc.)
- ✅ **Ligne éditoriale élargie (22 juillet 2026)** : la diaspora noire au sens large est désormais acceptée — créateurs afro-descendants (Afro-Américains, Afro-Caribéens, Black British...), pas seulement les réalisateurs nés en Afrique. Décision volontaire de Raymond pour élargir le vivier de contenu chrétien noir en anglais (ex. scène FSM/Christian movies afro-américaine). Le critère reste : contenu chrétien/évangélique + créateurs noirs, peu importe le pays de naissance.

### Deux sections principales
- 🇫🇷 **Films en Français** (Côte d'Ivoire, Cameroun, RDC, Sénégal, Bénin, Gabon...)
- 🇬🇧 **Films in English** (Nigeria/Nollywood, Ghana, Kenya, Afrique du Sud...)

---

## 2. Équipe

| Rôle | Personne | Compétences |
|---|---|---|
| Founder / CEO | Raymond Gadji | Data analyst, SQL, Python, FastAPI, HTML/CSS/JS Vanilla, Next.js (en apprentissage), Vercel, Netlify, Railway. Bootcamps Emlyon France + Simplon. |
| CTO | Claude (Anthropic) | Architecture, code, conseils techniques |

---

## 3. Marché & Positionnement

### Concurrents identifiés
| Plateforme | Type | Prix | Différence avec Christmatic |
|---|---|---|---|
| FaithStream (thefaithstream.com) | ONG africaine, lancée fév. 2026 | Gratuit (dons) | Généraliste, non-profit, pas de niche Afrique noire |
| HCENTV | App nigériane | Inconnu | Peu visible, peu quali |
| Lewabo (africanchristianmovies.com) | Américain | Inconnu | Généraliste, UX dépassée |
| Pure Flix / Angel Studios | Américain | ~$6-13/mois | 100% américain, pas africain |

### Notre différenciation
1. **Ultra-niche** : UNIQUEMENT films chrétiens Afrique noire — la curation est la valeur
2. **Curator humain avec foi** : sélection avec discernement spirituel, pas un algorithme
3. **Bilingue FR/EN** : seule plateforme pensée pour la diaspora francophone
4. **Communauté** : commentaires, discussions, recommandations entre croyants
5. **TV-first experience** : optimisé grand écran, Android TV app dans la roadmap
6. **Modèle entrepreneuriel** : pas une ONG, une startup avec une âme

---

## 4. Modèle Économique

### Phase 1 — Lancement (0-6 mois) : Gratuit total ← ON EST ICI
- Objectif : construire l'audience, valider la niche
- Monétisation : bouton "Soutenir le ministère" (don libre via PayPal) ✅
- KPI cible : 500 utilisateurs actifs

### Phase 2 — Croissance (6-12 mois) : Freemium
- **Gratuit** : accès limité (ex: 10 films/mois), avec bandeau discret
- **Christmatic+** : ~4,99€/mois — accès illimité, offline, sans pub, TV app
- Continuer le bouton don

### Phase 3 — Scale (12 mois+) : Android TV App
- App Android TV (Leanback) pour regarder sur télévision
- Partenariats avec producteurs africains chrétiens
- Monétisation publicitaire éthique (partenaires chrétiens uniquement)

### Marchés cibles
- **Priorité 1** : Diaspora africaine en France, Belgique, Suisse, Canada
- **Priorité 2** : Afrique subsaharienne (pouvoir d'achat plus faible, pricing adapté)

---

## 5. Stack Technique

### Frontend
```
Framework : Next.js 14.2.35 (App Router)
Déploiement : Vercel ✅ EN LIGNE
URL live : christmatic.tv ✅ (domaine principal)
URL live alt : www.christmatic.tv ✅
URL fallback : christmatic.vercel.app ✅
Style : CSS variables globales (globals.css) — pas de Tailwind
Langue par défaut : Français (toggle FR/EN)
Node.js : v22.22.2 (LTS)
npm : 10.9.7
```

### Backend & Base de données
```
BDD : Supabase (PostgreSQL managé) ✅
URL Supabase : https://hrdtcpksdqoispbvzftg.supabase.co
Region : West EU (Ireland)
Package : @supabase/supabase-js
Auth : Supabase Auth — prévu Sprint 5
⚠️ Plan FREE — se met en pause après inactivité → cliquer "Resume project"
```

### Vidéos
```
MVP : YouTube embed (iframes sur vidéos publiques) ✅
Thumbnails : https://img.youtube.com/vi/[youtube_id]/hqdefault.jpg
Bouton fallback "Voir sur YouTube" pour films bloqués ✅
Futur : Cloudflare Stream
```

### Domaines ✅ CONNECTÉS
```
Principal : christmatic.tv ✅ connecté à Vercel (record A → 216.198.79.1)
www       : www.christmatic.tv ✅ connecté à Vercel (record A → 216.198.79.1)
Redirect  : christmatic.com ✅ redirige (301) vers https://www.christmatic.tv
```

### Paiements
```
PayPal : paypal.me/christmatic ✅ actif
Stripe : ⏳ à configurer (nécessite statut entreprise)
```

### Logos PayPal disponibles
```
Logo_Alternative.svg      ← utilisé sur /soutenir (logo complet, couleurs officielles)
PayPal_Logo2014.svg       ← logo texte seul (bleu #003087 + #0070E0)
PayPal_Logo_Icon_2014.svg ← icône P seule (pour petits espaces)
```

### Coûts MVP actuels
| Poste | Coût/mois |
|---|---|
| christmatic.tv | ~2.5€ |
| christmatic.com | 0€ (1ère année) |
| Vercel | 0€ |
| Supabase | 0€ |
| **Total** | **~2.5€/mois** |

---

## 6. Charte Graphique

### Palette de couleurs
```css
--color-bg-primary:    #0A0A0A;
--color-bg-secondary:  #141414;
--color-bg-tertiary:   #1E1E1E;
--color-gold:          #D4A843;
--color-gold-light:    #e0b84e;
--color-gold-muted:    rgba(212,168,67,0.15);
--color-text-primary:  #F5F5F0;
--color-text-muted:    rgba(245,245,240,0.55);
--color-text-hint:     rgba(245,245,240,0.35);
--color-border:        rgba(255,255,255,0.06);
--color-border-gold:   rgba(212,168,67,0.2);
--font-titre:          'Playfair Display', Georgia, serif;
--font-corps:          'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Logo
- Silhouette Afrique noire (SVG) dans un carré doré (#D4A843), border-radius 6px
- Texte : "CHRIST" blanc + "MATIC" doré, letterspacing 2px, font-weight 600
- ⚠️ Orthographe correcte : CHRIST + MATIC (pas CHRIS + TMATIC)

### Style général
- Fond très sombre (noir #0A0A0A) — expérience cinéma
- Accents dorés — royauté, foi, Afrique
- Cartes films : 140px x 200px, coins arrondis 8px, overlay gradient bottom

---

## 7. Structure des Pages

```
/                     → Homepage ✅ EN LIGNE
/francais             → Catalogue FR ✅ EN LIGNE
/english              → Catalogue EN ✅ EN LIGNE
/films/[slug]         → Détail film + player YouTube ✅ EN LIGNE
/soutenir             → Don PayPal ✅ EN LIGNE
/stats                → Stats catalogue + lien Vercel Analytics ✅ EN LIGNE
/compte               → Auth (inscription/connexion) ← SPRINT 5
```

---

## 8. Base de Données

### Table films ✅ créée et peuplée (105 films)
```sql
CREATE TABLE films (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titre        TEXT NOT NULL,
  slug         TEXT UNIQUE NOT NULL,
  description  TEXT,
  annee        INTEGER,
  pays         TEXT,
  langue       TEXT CHECK (langue IN ('fr', 'en')),
  youtube_id   TEXT,
  thumbnail_url TEXT,
  duree_min    INTEGER,
  tags         TEXT[],
  is_featured  BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at   TIMESTAMPTZ DEFAULT now()
);
```

### Tables Sprint 4 (à créer)
```sql
CREATE TABLE profils (
  id           UUID PRIMARY KEY REFERENCES auth.users(id),
  pseudo       TEXT,
  langue_pref  TEXT DEFAULT 'fr',
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE favoris (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id   UUID REFERENCES profils(id) ON DELETE CASCADE,
  film_id   UUID REFERENCES films(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, film_id)
);
```

---

## 9. Films en base (105 films — 104 en ligne + 1 dépublié) ✅

### 🇫🇷 Films en Français (50 films — 49 en ligne + 1 dépublié)
| # | Titre | Pays | Année | YouTube ID |
|---|---|---|---|---|
| 1 | Elle refuse de coucher avec son Patron | Cameroun | — | sUVfzeEaI2Q |
| 2 | Un Coeur pour Pardonner | Gabon/Cameroun | — | evM4mH5EyWI |
| 3 | Chambre Haute | Gabon/Cameroun | — | _TCrgCrYaSo |
| 4 | Ennemi Invisible | Côte d'Ivoire | — | TlF77UIpiwQ |
| 5 | Il fait toute chose en son Temps | Cameroun | — | TQAanLqtw7U |
| 6 | Sous l'Emprise de l'esprit de l'amertume | Cameroun | — | 41wR9JHMnrY |
| 7 | Pourquoi Moi ? La Foi de Madame Yevedo | Gabon | — | 8LB-kB7Rieg |
| 8 | Sacrilège | Côte d'Ivoire | — | 4Qgml4diAV0 |
| 9 | Le Temps de la Fin | RDC | — | SBITkDa2oMU |
| 10 | Deborah — Réfère toi à tes racines | Côte d'Ivoire | — | tSSBrwK_fGw |
| 11 | Captifs de l'Homme Fort | Côte d'Ivoire | — | pTk0kCA687U |
| 12 | Malédiction Héréditaire | Côte d'Ivoire | — | p6k6SoG0pL0 |
| 13 | Jacob M'Mayami | Côte d'Ivoire | — | r7MvTknBUtQ |
| 14 | La Repentance 2 | Côte d'Ivoire | — | mPKFSruDgSs |
| 15 | La Repentance 1 | Côte d'Ivoire | — | pRDxLDVrhno |
| 16 | Les Rescapés de l'Enfer | Côte d'Ivoire | — | 6OzVDV9Q14M |
| 17 | Jésus Christ, la Solution | Côte d'Ivoire | — | LK9VqUFeTT0 |
| 18 | Et si Demain était Aujourd'hui | Côte d'Ivoire | — | lXL2Zq55neI |
| 19 | Le réparateur de brèches | Gabon | — | XreXsbAhsB4 |
| 20 | Libéré du Péché | Cameroun | 2026 | diwJ-mHxt3k |
| 21 | J'ai envoyé mes photos intimes à mon Pasteur par erreur | Togo | 2025 | Aq68-veGkoY |
| 22 | Le Pardon | Cameroun | 2025 | 6KAHYdweIW0 |
| 23 | La Puissance de la Prière dans le Combat II — Ep. 1 | Togo | 2025 | UTaOapEN3_c |
| 24 | LA MAUVAISE BOUCHE | Cameroun | 2026 | 2knhXoVkqNo |
| 25 | Marié par Prophétie — Épisode 1 (7SELAH) | Cameroun | 2026 | 5Go7cz94hm0 |
| 26 | Marié par Prophétie — Épisode 2 (7SELAH) | Cameroun | 2026 | 4r8Znaka2dQ |
| 27 | Marié par Prophétie — Épisode 3 (7SELAH) | Cameroun | 2026 | M2TvJl8KRcI |
| 28 | Marié par Prophétie — Épisode 4 (7SELAH) | Cameroun | 2026 | Kws-Cf9muqY |
| 29 | Marié par Prophétie — Épisode 5 (7SELAH) | Cameroun | 2026 | mMoxUuQd4n4 |
| 30 | Prophet Suddenly 4 (VF) | Nigeria | 2026 | CzqCe0Md8jI |
| 31 | Chez le Pasteur — Épisode 1 : La guerre des pagnes (Serge Fonda TV) | Cameroun | 2026 | GLrOnXQk6t8 |
| 32 | Le Chemin (Pasteur Thimothée et Joëlle M. Kabasele) | RDC | 2026 | H_8Px2fkMXo |
| 33 | Marié par Prophétie — Épisode 6 (7SELAH) | Cameroun | 2026 | -tAz-a-LJu8 |
| 34 | Marié par Prophétie — Épisode 7 (7SELAH) | Cameroun | 2026 | CWLQCs81AYY |
| 35 | Marié par Prophétie — Épisode 8 (7SELAH) | Cameroun | 2026 | 1t1prVdzbrg |
| 36 | Marié par Prophétie — Épisode 9 (7SELAH) | Cameroun | 2026 | JTngSKRHNkU |
| 37 | Marié par Prophétie — Épisode 10 (7SELAH) | Cameroun | 2026 | 4_kVvuOsg7o |
| 38 | Marié par Prophétie — Épisode 11 (7SELAH) | Cameroun | 2026 | -7xrcy4peiY |
| 39 | Marié par Prophétie — Épisode 12 (7SELAH) | Cameroun | 2026 | kwqb0jcGRAs |
| 40 | Mes Larmes, un Souvenir (Jésus Côte d'Ivoire) | Côte d'Ivoire | — | urddeaWJsQ0 |
| 41 | Œil pour Œil, Dent pour Dent (Ciné-Leçon) | Côte d'Ivoire | — | FIygU0OOmIw |
| 42 | Acte Abominable (Ciné-Leçon) | Côte d'Ivoire | — | HHDuxIB8R_o |
| 43 | Voisinage Toxique (Ciné-Leçon) | Côte d'Ivoire | — | 2EFB6LnN8dM |
| 44 | Juste une Nuit (Ciné-Leçon) | Côte d'Ivoire | — | qJbQ1cfKqts |
| 45 | Presque pour la Vie (The Triumphant Christian Films) | Cameroun | — | n7wb-cRFBP4 |
| 46 | Marié par Prophétie — Épisode 13 (7SELAH) | Cameroun | 2026 | LrTfUEM-nZM |
| 47 | Le Jour où j'ai décidé de prier (Horanoia TV) | RDC | 2026 | N0eIUDWzeMk |
| 48 | La Victoire du Premier-né (Jésus Côte d'Ivoire) | Côte d'Ivoire | — | 2QxrJe-fzEY |
| 49 | Le Pacte du Mal (Ciné-Leçon) | Côte d'Ivoire | — | ja5kYJcHlKI |
| 50 | Marié par Prophétie — Épisode 14 (7SELAH) | Cameroun | 2026 | sDle9yzvHrg |

✅ Films #46-47 en ligne (29/09/2026). Même lot : youtube_id de #11 "Captifs de l'Homme Fort" corrigé → `pTk0kCA687U`.

✅ Films #38-45 en ligne (ajoutés le 21 septembre 2026 via recensement automatique de la playlist YouTube, voir section 15bis).

⚠️ **Note** : vérifier que le film #11 "Captifs de l'Homme Fort" a bien un youtube_id distinct de #10.

✅ Film #28 en ligne.

✅ Film #29 en ligne (confirmé via Facebook Sharing Debugger — og:image correcte).

✅ Film #30 en ligne.

✅ Film #33 en ligne (confirmé par Raymond le 18 août 2026).

✅ Film #32 en ligne (confirmé par Raymond le 18 août 2026 — https://www.christmatic.tv/films/le-chemin).

✅ Film #34 en ligne (confirmé par Raymond le 18 août 2026).

✅ Film #35 en ligne (confirmé par Raymond le 26 août 2026 — Marié par Prophétie Ép.8, https://www.christmatic.tv/films/marie-par-prophetie-ep8).

✅ Film #36 en ligne (confirmé par Raymond le 28 août 2026 — Marié par Prophétie Ép.9, https://www.christmatic.tv/films/marie-par-prophetie-ep9).

✅ Film #37 en ligne (confirmé par Raymond le 4 septembre 2026 — Marié par Prophétie Ép.10, https://www.christmatic.tv/films/marie-par-prophetie-ep10).

🚫 **Film #31 dépublié (1er août 2026)** — vidéo YouTube supprimée par l'uploader (Serge Fonda TV). `is_published = false` en base, données conservées. Réactiver avec `UPDATE films SET is_published = true WHERE slug = 'chez-le-pasteur-ep1-guerre-des-pagnes';` si un nouveau lien apparaît.

### 🇬🇧 Films in English (55 films en ligne)
| # | Titre | Pays | Année | YouTube ID |
|---|---|---|---|---|
| 1 | When God is Silent | Nigeria | — | E4HdiMNLh0w |
| 2 | The Space Between Us | Nigeria | — | THeU4f2V9gY |
| 3 | Spirituals 4 | Nigeria | — | y41jI31M-3Y |
| 4 | Prophet Suddenly 3 | Nigeria | — | m2BNiZWbV50 |
| 5 | Prophet Suddenly 2 | Nigeria | — | lb9YjxjWOyU |
| 6 | Prophet Suddenly 1 | Nigeria | — | QIoUmnSkOXE |
| 7 | Disconnected | Nigeria | 2026 | jgA3ZnhLukk |
| 8 | Disconnected 2 | Nigeria | 2026 | OSIzU6wdFdw |
| 9 | This Bed I Made | Ghana | 2026 | W1nC1C3lpmI |
| 10 | Pastor's Marriage Counsellors | Nigeria | — | 8X12rBSXvKY |
| 11 | Spirituals 3 | Nigeria | — | pRPFMJXefv0 |
| 12 | Spirituals 2 | Nigeria | — | QafCUG04yGs |
| 13 | Spirituals 1 | Nigeria | — | wbexvRPd0Go |
| 14 | Ghetto Gospel | Nigeria | — | WdpFDuaaB14 |
| 15 | Secrets of Our Pastor's Bed | Nigeria | — | dHXQGNCwqkY |
| 16 | A Love Like Raymond | Nigeria | — | EbM0v7IwPOc |
| 17 | Love in the Guest Room | Nigeria | — | FKe3cVTo4Fs |
| 18 | Beware of Deceptive Brothers in Church | Nigeria | — | vWh2D9leIWs |
| 19 | SPIRIT OF INFIRMITY \|\| LATEST NIGERIA CHRISTIAN MOVIE \|\| THE WINLOS | Nigeria | 2026 | rz2GgEcylJo |
| 20 | The Fall — A Pastor's Secret Affair | Nigeria | 2026 | hEXurrIzAHI |
| 21 | Faith That Moves Mountains \| Short Gospel Film | Nigeria | 2026 | jhioSiVp_WY |
| 22 | CHOICES — A Powerful Christian Movie on Decisions and Faith | USA (diaspora noire) | 2026 | rpWVRsuRpZ8 |
| 23 | The Wedding Gift (The Only Laurel / THE WINLOS) | Nigeria | 2026 | prAWOgmD3eg |
| 24 | THE BLOT — A Powerful Christian Movie About Hidden Sin, Mercy and Redemption | Nigeria | 2026 | gItkfWKhK-s |
| 25 | Prophet Suddenly 4 | Nigeria | 2026 | UjlbcOR7CfI |
| 26 | Blind Worshippers (Amplifiers TV, Prophet Silas) | Nigeria | 2026 | gQGMIu4gtNk |
| 27 | God in the Room (The Essence TV) | Nigeria | 2026 | M2mJQH-luxw |
| 28 | Open Door (Ese Talks Studio) | Nigeria | — | iTxHkJGN_wI |
| 29 | Open Door 2 (Ese Talks Studio) | Nigeria | — | 7mDcOuiYxU0 |
| 30 | After Genesis (G9Studios, Ola Adene) | Nigeria | 2025 | q0z6LTLl2W0 |
| 31 | After Genesis 2 (G9Studios, Ola Adene) | Nigeria | 2026 | O9UDYDjdvps |
| 32 | She Loved the Wrong Guy (The Winlos) | Nigeria | — | 4D6Bvxm9FmY |
| 33 | Silent Proposal (The Winlos) | Nigeria | — | 2nyO9chO6OM |
| 34 | The Unhealed Prophet (Fejosbaba TV) | Nigeria | 2026 | A2CubclB_Po |
| 35 | Behind Her (Fejosbaba TV) | Nigeria | 2026 | C4UnPAhSyUs |
| 36 | The Baby Christian (Anora MediaTV) | Nigeria | — | ZNebZZGjCO4 |
| 37 | When Past Knocks (Flaming Sword Movies) | USA (diaspora noire) | — | NrirQtwLUio |
| 38 | The First Ministry (Biodun Stephen) | Nigeria | 2026 | k-ApyygFibs |
| 39 | Stain on the Altar (Whitestone Studios) | Nigeria | 2026 | Z8g7b8IF4_g |
| 40 | Broken Vow (Whitestone Studios) | Nigeria | 2026 | nbO_2w2LOoQ |
| 41 | Nora (AT Films Production) — 360K vues en 3 jours, is_featured | Nigeria | 2026 | KCpWrmUFRnM |
| 42 | Stormed (Mount Zion / Damilola Mike-Bamiloye) | Nigeria | 2026 | vuCoPHVBVZM |
| 43 | Pastor Must Hear (Anora MediaTV) | Nigeria | 2026 | W2d-LoMuIU0 |
| 44 | Wealth in the Dream (GACEM Films) | Nigeria | 2026 | 4fgnC_DoLzg |
| 45 | Wealth in the Dream 2 (GACEM Films) | Nigeria | 2026 | a3zjLHuHFHY |
| 46 | Rebranded (Revelation Cinemas TV) | Nigeria | 2026 | CL3fCFCbe2E |
| 47 | The Evangelist (Calvary Movies TV) | Nigeria | 2026 | owFodw12DeE |
| 48 | At Mercy's Feet (Tiwalara TV) | Nigeria | 2026 | yKkjoCXU_bA |
| 49 | Sleeping Prophecy (Fejosbaba TV) | Nigeria | 2026 | 1N6AmUZ6v3k |
| 50 | The Password (Fejosbaba TV) | Nigeria | 2026 | UFXS0UtmU0I |
| 51 | Alejo Oloore: The Messenger of Good Fortune (REHODRAM Films) | Nigeria | — | vjzr9A-5Yps |
| 52 | Lagos to Gomorrah (2nd Touch Production) | Nigeria | 2026 | AvzyBgOvgic |
| 53 | The Last Door (Fejosbaba TV) | Nigeria | 2026 | UZFMIF2Fa-o |
| 54 | Wealth in the Dream 3 (GACEM Films) | Nigeria | 2026 | 49SNelgOT9k |
| 55 | BUSY — Letter to the Church (God Said Media) | Nigeria | — | lnry1Ipw5Xk |

✅ Films FR #48-50 + EN #53-55 en ligne (08/10/2026, SQL exécuté par Raymond, vérifiés HTTP 200 + og:image OK + descriptions affichées). Recensement playlist : 105 vidéos annoncées, 100 lisibles (5 masquées/indisponibles), 6 nouveaux films. Pays de BUSY (God Said Media) confirmé Nigeria par Raymond. #48 sans description (aucune sur YouTube ni sur le web). SQL conservé dans `docs/insert_films_2026-10-08.sql`. Sharing Debugger Facebook à faire si partage.

✅ Films #51-52 en ligne (30/09/2026, confirmés par Raymond + vérifiés HTTP 200 + og:image OK). Recensement playlist : 99 vidéos affichées, 97 lisibles, 2 nouvelles. **Lot 3 (2 films) : Sharing Debugger + partage Facebook prévus le 01/10/2026** (gabarit « » + 7 groupes, voir mémoire christmatic_facebook_sharing_queue).

✅ Films #41-50 en ligne (29/09/2026, vérifiés + Sharing Debugger fait pour les 12).

✅ Films #28-40 en ligne (ajoutés le 21 septembre 2026 via recensement automatique de la playlist YouTube, voir section 15bis).

✅ Film #22 en ligne — premier film de la diaspora noire élargie (voir section 1). Film #23 confirmé en ligne également.

✅ Films #24-25 en ligne.

✅ Films #26-27 en ligne (confirmés par Raymond le 18 août 2026).

---

## 10. Structure du Projet

```
christmatic/
├── CLAUDE_CHRISTMATIC.md      ← CE FICHIER (racine)
├── docs/
│   └── christmatic_preview.html
├── .env.local                 ← jamais committé
├── next.config.mjs            ← eslint + typescript ignorés au build
├── package.json
├── tsconfig.json
│
├── app/
│   ├── layout.tsx             ✅ Nav + Footer
│   ├── page.tsx               ✅ Homepage Supabase
│   ├── globals.css            ✅ Charte graphique
│   ├── francais/page.tsx      ✅ Catalogue FR
│   ├── english/page.tsx       ✅ Catalogue EN
│   ├── films/[slug]/page.tsx  ✅ Détail + player YouTube
│   └── soutenir/page.tsx      ✅ Don PayPal — 'use client'
│
├── components/
│   ├── Nav.tsx                ✅ avec bouton 🙏 Soutenir
│   ├── HeroBanner.tsx         ✅ Hero "À la une" (wrapper : carrousel si films, sinon hero texte)
│   ├── HeroCarousel.tsx       ✅ Carrousel auto (5 s) des films `is_featured` — **max 7** (relevé de 5 à 7 le 08/10/2026 pour ajouter Marié par Prophétie Ép.14 et Wealth in the Dream 3 via `docs/update_featured_carousel.sql` ; puis Marié par Prophétie Ép.13 remplacé par La Victoire du Premier-né via `docs/update_featured_carousel_2.sql`), du plus ancien au plus récent ; piloté depuis Supabase (29/09/2026 : Nora, Wealth in the Dream 1 & 2, Le Jour où j'ai décidé de prier, Marié par Prophétie Ép.13)
│   ├── FilmCard.tsx           ✅ cliquable avec Link
│   └── FilmRow.tsx            ✅
│
└── lib/
    ├── supabase.ts            ✅
    └── types.ts               ✅
```

---

## 11. Variables d'Environnement (.env.local)

```bash
NEXT_PUBLIC_SUPABASE_URL=https://hrdtcpksdqoispbvzftg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[ta clé anon — ne jamais committer]
```

⚠️ Ces variables sont aussi configurées dans Vercel → Project Settings → Environment Variables

---

## 12. Roadmap MVP

### Sprint 1 ✅ TERMINÉ
- [x] Repo GitHub `raymondgadji/christmatic` (public)
- [x] Next.js 14.2.35 initialisé
- [x] Charte graphique globals.css
- [x] Nav + Footer + HeroBanner + FilmCard + FilmRow
- [x] Homepage assemblée

### Sprint 2 ✅ TERMINÉ
- [x] Supabase créé (West EU Ireland)
- [x] Table `films` PostgreSQL
- [x] 24 vrais films insérés avec thumbnails YouTube
- [x] Homepage connectée à Supabase

### Sprint 3 ✅ TERMINÉ
- [x] Page `/films/[slug]` avec player YouTube
- [x] Bouton "Voir sur YouTube" pour films bloqués
- [x] Page `/francais` catalogue complet (18 films)
- [x] Page `/english` catalogue complet (6 films)
- [x] Déploiement sur Vercel → christmatic.vercel.app
- [x] Domaines christmatic.tv + christmatic.com achetés sur Ionos
- [x] christmatic.tv connecté à Vercel (record A → 216.198.79.1)
- [x] www.christmatic.tv connecté à Vercel
- [x] christmatic.com redirige (301) vers christmatic.tv
- [x] Certificat SSL actif

### Sprint 4 ✅ TERMINÉ
- [x] Page `/soutenir` avec bouton PayPal (logo officiel) ✅
- [x] Lien 🙏 Soutenir dans la Nav ✅
- [x] PayPal `paypal.me/christmatic` créé ✅
- [x] Corrections YouTube IDs films FR (9, 10, 12, 13) ✅
- [x] Nouveau film FR : Le réparateur de brèches (Gabon) ✅
- [x] Nouveaux films EN : Disconnected 1&2, This Bed I Made ✅
- [x] Nouveaux films EN : Pastor's Marriage Counsellors, Spirituals 1/2/3, Ghetto Gospel, Secrets of Our Pastor's Bed, A Love Like Raymond, Love in the Guest Room ✅
- [x] Nouveau film EN : Beware of Deceptive Brothers in Church ✅
- [x] Nouveau film EN : Spirit of Infirmity (The Winlos) ✅
- [x] Nouveaux films FR : Libéré du Péché, J'ai envoyé mes photos intimes à mon Pasteur par erreur, Le Pardon, La Puissance de la Prière dans le Combat II ✅
- [x] Nouveau film EN : The Fall — A Pastor's Secret Affair (2026) ✅
- [x] Nouveau film FR : LA MAUVAISE BOUCHE (Cameroun, 2026) ✅
- [x] Film EN #21 : Faith That Moves Mountains (Nigeria, 2026) ✅
- [x] Série FR "Marié par Prophétie" Ép. 1-8 (Cameroun, 7SELAH) ✅
- [x] Ligne éditoriale élargie à la diaspora noire au sens large (Afro-Américains inclus) — décision du 22 juillet 2026, voir section 1 ✅
- [x] Film EN #22 : CHOICES (USA, diaspora noire, 2026) ✅
- [x] Film FR #28 : Marié par Prophétie — Épisode 4 (Cameroun, 7SELAH, 2026) ✅
- [x] Film EN #23 : The Wedding Gift (Nigeria, THE WINLOS) ✅
- [x] Films FR #29-30 : Marié par Prophétie Ép.5, Prophet Suddenly 4 (VF) ✅
- [x] Film FR #32 : Le Chemin (RDC) ✅
- [x] Films EN #24-25 : THE BLOT, Prophet Suddenly 4 ✅
- [x] Films EN #26-27 : Blind Worshippers, God in the Room ✅
- [x] Film FR #31 dépublié — Chez le Pasteur Ep.1 (vidéo YouTube supprimée par l'uploader, 1er août 2026) ✅
- [x] GEO implémenté : Schema.org JSON-LD (Organization, WebSite, FAQPage, VideoObject par film), robots.txt (autorise GPTBot/ClaudeBot/PerplexityBot/CCBot), sitemap.xml dynamique, llms.txt ✅
- [x] SEO par film : `generateMetadata()` dynamique + og:image dimensionnée (480×360) sur `/films/[slug]` ✅
- [x] Image Open Graph par défaut (1200×630, `next/og`) pour les pages sans image dédiée ✅
- [x] Page `/stats` (statistiques catalogue) + Vercel Analytics installé ✅
- [x] Piège Data Cache Next.js / Supabase résolu (`cache: 'no-store'` forcé dans `lib/supabase.ts`) ✅

### Sprint 5 ← PROCHAIN
- [ ] Auth Supabase (inscription / connexion)
- [ ] Favoris utilisateur
- [ ] Test mobile complet
- [ ] Stripe (après configuration statut entreprise)
- [ ] Partage diaspora France/Belgique — lancement !

---

## 13. Notes techniques importantes

- **GEO (Generative Engine Optimization)** implémenté (inspiré du pattern cv-ats.com — 3 scripts JSON-LD séparés, pas de `@graph`, plus lisible par ChatGPT) :
  - `app/layout.tsx` : JSON-LD `Organization` + `WebSite` (toutes les pages) + metadata OpenGraph/Twitter
  - `app/page.tsx` : JSON-LD `FAQPage` (5 questions/réponses sur Christmatic)
  - `app/films/[slug]/page.tsx` : `generateMetadata()` dynamique par film + JSON-LD `VideoObject`
  - `app/robots.ts` : autorise explicitement GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, CCBot, Google-Extended
  - `app/sitemap.ts` : sitemap.xml dynamique généré depuis la table `films`
  - `public/llms.txt` : résumé du site façon llmstxt.org
  - `lib/seo.ts` : constante `SITE_URL`
- Toutes les pages qui lisent Supabase (`page.tsx`, `english/page.tsx`, `francais/page.tsx`, `films/[slug]/page.tsx`) ont `export const dynamic = 'force-dynamic'` (changé le 22 juillet 2026, remplace l'ancien `revalidate = 3600`) : chaque visite refait la requête Supabase en direct, un `INSERT` dans `films` est visible immédiatement, sans délai ni redeploy. À reconsidérer (repasser en ISR avec un `revalidate` court) si le trafic grossit et que le coût des requêtes Supabase devient un sujet.
- ⚠️ **Piège important (découvert 22 juillet 2026)** : `dynamic = 'force-dynamic'` sur une page ne suffit **pas toujours** à empêcher le Data Cache de Next.js de mettre en cache les appels internes de `supabase-js` (son `fetch` interne n'est pas automatiquement marqué `no-store`). Résultat vécu : le film CHOICES existait en base (confirmé via requête directe à l'API Supabase) mais n'apparaissait pas sur le site déployé. Fix dans [lib/supabase.ts](lib/supabase.ts) : le client Supabase force `cache: 'no-store'` sur chaque requête via l'option `global.fetch`. Si un futur ajout de film n'apparaît pas malgré une donnée correcte en base, vérifier ce point en premier avant de chercher ailleurs.
- **Image de partage (Open Graph) — 26 juillet 2026** : `app/opengraph-image.tsx` génère une image de partage par défaut (logo + tagline, 1200×630, via `next/og`, `runtime = 'edge'` — le runtime `node` par défaut plante au build statique sur Windows, erreur `Invalid URL` dans `@vercel/og`, garder `edge`) pour toutes les pages sans image dédiée (accueil, `/francais`, `/english`, `/soutenir`). Les pages film ont leur propre `og:image` (thumbnail YouTube) avec `width`/`height` explicites (480×360) — nécessaire pour que l'aperçu s'affiche correctement dans le composeur de post Facebook (le Sharing Debugger, plus tolérant, l'affichait déjà sans).
- ⚠️ **Rappel Facebook — à faire à chaque nouveau film si Raymond compte le partager** : Facebook met en cache le scrape d'une URL indéfiniment. Après un ajout de film (ou tout changement d'og:image/titre/description), aller sur https://developers.facebook.com/tools/debug/ , coller l'URL du film, cliquer **"Scrape Again"** avant de partager sur Facebook — sinon l'ancien aperçu (souvent sans image) reste affiché.
- **Boutons de partage (08/10/2026)** : `components/ShareButtons.tsx` (composant client) sur chaque page film, entre le lecteur et le synopsis — « Partager sur WhatsApp » (lien `wa.me`, message FR/EN selon `film.langue`, même gabarit que les posts Facebook, titre sans le studio), « Partager sur Facebook » (`sharer.php?u=`) et « Copier le lien ». Chaque clic est compté dans la table Supabase `share_clicks` (`film_slug`, `channel` = whatsapp | facebook | copy) créée par `docs/create_share_clicks.sql` (à exécuter une fois dans le SQL Editor Supabase) ; les totaux s'affichent sur `/stats` (section « Partages depuis les pages film », avec un message de repli tant que la table n'existe pas). Suivi maison choisi car les événements personnalisés Vercel Analytics ne sont pas garantis sur le plan gratuit.
- **Logo + LinkedIn (08/10/2026)** : le logo (carré jaune de la Nav `components/Nav.tsx` ET de l'image de partage `app/opengraph-image.tsx`) contient désormais une **croix** noire (deux rectangles) à la place de l'ancien dessin abstrait. Bouton « Partager sur LinkedIn » ajouté dans `ShareButtons` (pages film, `linkedin.com/sharing/share-offsite/?url=`, clics comptés dans `share_clicks` — nécessite `docs/add_linkedin_share_channel.sql` à exécuter une fois dans Supabase) + lien « Partager Christmatic sur LinkedIn » dans le footer (site entier). LinkedIn met en cache les aperçus (~7 jours) : après tout changement d'image/titre, passer par le **Post Inspector** (https://www.linkedin.com/post-inspector/) pour forcer la relecture, comme le Sharing Debugger pour Facebook.
- **PWA (08/10/2026)** : le site est installable. `app/manifest.ts` (nom Christmatic TV, `display: standalone`, fond/thème `#0A0A0A`), icônes générées par `app/pwa-icon/[size]/route.tsx` (180/192/512, fond jaune + croix noire, edge runtime, utilisables « any » et « maskable »), `public/sw.js` (service worker **réseau d'abord** : seule la page `/offline` est mise en cache, affichée sans connexion ; ne jamais cacher les pages/vidéos de façon agressive, risque de contenu périmé), page `app/offline/page.tsx`, composant `components/PwaInstall.tsx` (enregistre le SW, bouton « Installer l'app Christmatic » sur Android/Chrome, aide « Partager puis Sur l'écran d'accueil » sur iPhone, dans le footer), `themeColor` + `appleWebApp` + `apple-touch-icon` dans `app/layout.tsx`. Les films restent des iframes YouTube lues dans le contexte de la playlist (`?list=PLdp5bJ0vPgXSKs0uq8h8DK7UpVlJz3v3Z`, vérifié sur les 104 pages) : la PWA ne change rien au comptage des vues. ⚠️ Pour changer l'icône : désinstaller puis réinstaller l'app (Android/Chrome met l'icône en cache à l'installation). En cas de changement du SW, incrémenter `CACHE` dans `public/sw.js`.
- **Preuve GEO — Google AI Overview cite Christmatic en n°1 (capture du 02/10/2026, `docs/google-ai-overview-2026-10-02.jpg`)** : sur la requête naturelle « comment regarder des films chrétiens noir africains comme sur netflix, connais-tu une application… », l'AI Overview de Google ouvre par « 1. La plateforme spécialisée : Christmatic », la décrit comme « le Netflix des films chrétiens d'Afrique noire » avec un catalogue en français et en anglais (Nigéria, Cameroun, Côte d'Ivoire, Gabon, Togo, Ghana). Le texte reprend presque mot pour mot la description du site (metadata du layout, JSON-LD, `llms.txt`) : le travail GEO porte ses fruits. Réserves : une seule capture, les AI Overviews varient selon l'utilisateur, le lieu et le moment. À suivre : Google Search Console (rapport « Fonctionnalités génératives IA ») une fois la propriété ajoutée, et les visites chatgpt.com dans Vercel Analytics.
- `app/soutenir/page.tsx` doit avoir `'use client'` en première ligne (styled-jsx)
- Logo texte Nav : **CHRIST** (blanc) + **MATIC** (doré) — pas CHRIS+TMATIC
- Tous les composants avec `<style jsx>` nécessitent `'use client'`
- Supabase plan FREE : se met en pause après inactivité → "Resume project" sur le dashboard
- **Analytics (26 juillet 2026)** : `@vercel/analytics` installé (`<Analytics />` dans `app/layout.tsx`) — trafic/visiteurs consultables sur vercel.com/raymondgadjis-projects/christmatic/analytics. Page `app/stats/page.tsx` : stats du catalogue (total, FR/EN, par pays, derniers ajouts) calculées depuis Supabase + lien vers ce dashboard (le dashboard Vercel Analytics n'est pas embeddable/interrogeable en API sur le plan gratuit).

---

## 14. Règles de Travail avec Claude (CTO)

- Toujours fournir ce `CLAUDE_CHRISTMATIC.md` en début de session
- Préciser : "On travaille sur Sprint X, tâche Y"
- Coller l'erreur exacte pour debug rapide
- Un composant à la fois
- Langue : **français** discussions, **anglais** code

---

## 15bis. Procédure : synchroniser la playlist YouTube → Supabase

**Playlist source** : "Christmatic TV 100% african Gospel films" — https://www.youtube.com/playlist?list=PLdp5bJ0vPgXSKs0uq8h8DK7UpVlJz3v3Z (chaîne de Raymond, publique, 85 vidéos au 21 sept. 2026)

Raymond ajoute ses nouveaux films à cette playlist. À chaque session où il demande de "recenser les nouveaux films", Claude doit :

1. **Extraire la playlist** : ouvrir l'URL dans l'outil navigateur (Claude in Chrome), puis exécuter ce script JS dans la page pour lire `window.ytInitialData` (fonctionne dès le chargement initial, pas besoin de scroller jusqu'à ~85-100 vidéos ; les vidéos supprimées/privées sont automatiquement absentes du résultat) :
   ```js
   const data = window.ytInitialData;
   function findContents(obj, results) {
     if (!obj || typeof obj !== 'object') return;
     if (obj.playlistVideoRenderer) {
       const r = obj.playlistVideoRenderer;
       results.push({ id: r.videoId, title: r.title?.runs?.map(x=>x.text).join('') || r.title?.simpleText, index: r.index?.simpleText });
     }
     for (const k in obj) if (typeof obj[k] === 'object') findContents(obj[k], results);
   }
   const results = []; findContents(data, results); results;
   ```
   (Le résultat JSON peut dépasser la limite d'affichage de l'outil JS → le stocker dans `window.__playlistResults` puis le lire par tranches de 10 avec `.slice(i, i+10)`.)
2. **Comparer** chaque `videoId` extrait avec la colonne `youtube_id` des films déjà listés en section 9 de ce fichier (source de vérité tenue à jour à chaque ajout) → les IDs absents sont les nouveaux films.
3. **Identifier le pays** via l'API oEmbed publique (pas besoin d'auth) :
   `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ID&format=json` → champ `author_name` (nom de la chaîne). Chaînes déjà repérées : **7Selah** → Cameroun ("Marié par Prophétie"), **The Winlos** → Nigeria, **Fejosbaba TV** → Nigeria, **G9Studios / Ola Adene** → Nigeria, **Whitestone Studios** → Nigeria, **Biodun Stephen / BIODUNSTEPHEN TV** → Nigeria, **Ese Talks Studio** → Nigeria, **Flaming Sword Movies (FSM)** → USA (diaspora noire, comme le film CHOICES déjà en base). Chaîne inconnue → marquer "à confirmer" et laisser Raymond trancher avant d'exécuter le SQL.
4. **Générer le SQL** `INSERT INTO films (...)` avec les mêmes règles que d'habitude (voir section 1 "Workflow d'ajout de film") : slug en kebab-case du titre, `thumbnail_url` = `https://img.youtube.com/vi/{id}/hqdefault.jpg`, `langue` déduite du titre (fr/en), `annee` = **vraie année de mise en ligne YouTube** (champ `publishDate` de la page watch du film ; décision de Raymond le 08/10/2026 : on ne met jamais une année inventée — ne pas mettre 2026 par défaut) ; ⚠️ 17 films ont été mis à 2026 provisoirement via `docs/update_annee_2026.sql`, à corriger avec les vraies dates ; `is_published = true`, `is_featured = false`, `description` : voir étape 5bis (NULL seulement si aucune source fiable).
5. **Écrire le SQL dans un fichier** `docs/insert_films_AAAA-MM-JJ.sql` (outil Write, UTF-8, un seul `INSERT` multi-lignes, une ligne par film) — **ne pas le donner en bloc dans le chat** : le copier-coller depuis le terminal corrompt le texte (caractères manquants, erreur `42601` vécue le 08/10/2026). Raymond ouvre le fichier (VS Code / Bloc-notes), Ctrl+A, Ctrl+C, colle dans le SQL Editor Supabase et clique Run (Claude n'a pas d'accès direct à la base). Réponse attendue : *Success. No rows returned*. Ensuite Claude vérifie lui-même les pages en ligne (HTTP 200, og:image, description, nombre de `/films/` dans le sitemap), puis Raymond passe par le Sharing Debugger si le film doit être partagé (voir section 9).
5bis. **Descriptions** : les lire sur la page YouTube du film (`shortDescription` via `fetch('/watch?v=ID')` dans l'onglet YouTube), reformuler en 1-2 phrases dans la langue du film ; si YouTube n'en a pas, chercher sur le web ; si rien de fiable, laisser `NULL` (ne jamais inventer de synopsis). Mettre la description dans l'`INSERT`. La page film l'utilise comme meta description (sinon texte générique "film chrétien de {pays}, disponible gratuitement sur Christmatic").
6. Une fois confirmé, mettre à jour la section 9 et les compteurs de ce fichier.

---

## 15ter. Procédure : campagne de partage Facebook (page + groupes)

> **RÈGLE PERMANENTE (Raymond, 08/10/2026) — texte de chaque post Facebook, pour TOUS les films :**
> ```
> 🎬 « {Titre} » est maintenant disponible sur Christmatic TV 100% African Gospel films.
> 👉 https://www.christmatic.tv/films/{slug}
> 🙏 Le cinéma noir africain au service de l'Évangile
> ```
> `{Titre}` = titre du film SANS le studio entre parenthèses, entre guillemets français « ». Jamais « Nouveau sur Christmatic ! » (abandonné). Demander l'accord de Raymond avant chaque clic sur « Post ».

**Page Facebook** : https://www.facebook.com/christmatictv (Raymond y est connecté et administrateur). Objectif : partager chaque nouveau film sur la page ET dans les groupes Facebook chrétiens dont Raymond est membre, à un rythme choisi par lui (ex. ~5 films par session, pas tout d'un coup).

Procédure par film (établie le 21 septembre 2026) :
1. **Rafraîchir le cache Facebook** : Sharing Debugger `https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fwww.christmatic.tv%2Ffilms%2F{slug}` → cliquer "Fetch new information" (ou "Scrape Again") → vérifier visuellement l'aperçu (image/titre corrects).
2. Aller sur `https://www.facebook.com/post/create` (poste en tant que Page).
3. Cliquer sur "Share to groups" (scroller un peu dans le panneau de gauche pour le voir) → cocher les **7 groupes** (depuis le 29/09/2026), un clic à la fois avec un screenshot après chaque clic (les positions changent après chaque coche ; les `ref_` du bouton Done se périment) : Évangile en ligne, LES AMIS DE JESUS CHRIST, L'Afrique aux africains et les africains pour Jésus, Jésus est ma force je prie Jésus, 100% JÉSUS., Jésus T'aime et Il a donné sa vie pour toi sur la Croix ❤️, **CHRÉTIENS DE TOUTES LES NATIONS**. Vérifier « 7 Facebook groups selected » et « Share to story : Off » avant de poster.
4. Coller le texte dans "What's on your mind" avec ce gabarit (**NOUVEAU depuis le 30/09/2026, demandé par Raymond**) :
   ```
   🎬 « {Titre} » est maintenant disponible sur Christmatic TV 100% African Gospel films.
   👉 https://www.christmatic.tv/films/{slug}
   🙏 Le cinéma noir africain au service de l'Évangile
   ```
   (Titre entre guillemets français « », pas de point final après « Évangile ». L'ancien gabarit « Nouveau sur Christmatic ! … » est abandonné.) La carte de lien (image + titre) se génère automatiquement. Si elle reste sans image : Debugger → « Scrape Again » (erreur 429 YouTube possible, relire la page Debugger), puis attendre 10-15 min et repartir d'une page `post/create` neuve (`navigate` avec `force: true`).
5. **Toujours montrer l'aperçu à Raymond et attendre sa confirmation explicite avant de cliquer sur "Post"** (action publique irréversible).
6. Mettre à jour le suivi ci-dessous après chaque lot partagé.

**Suivi de la campagne (mis à jour le 08/10/2026 d'après la mémoire de projet `christmatic_facebook_sharing_queue.md`)** :
- ✅ Lot 1 (21 films du 21/09) : tous partagés (clôturé le 24/09). ✅ Lot 2 (12 films du 29/09) : tous partagés (clôturé le 30/09). Raymond a décidé le 30/09 d'**oublier les films anciens** : on ne partage que les nouveaux films.
- ✅ Lot 3 CLÔTURÉ le 08/10/2026 : ✅ Alejo Oloore (`alejo-oloore-the-messenger-of-good-fortune`) partagé le 08/10/2026 ; ✅ Lagos to Gomorrah (`lagos-to-gomorrah`) partagé le 08/10/2026. **File d'attente Facebook entièrement vide au 08/10/2026 : tous les films du catalogue récent sont partagés.**
- ✅ Lot 4 CLÔTURÉ le 08/10/2026 (6 films partagés, 7 groupes, Page incluse) : ✅ La Victoire du Premier-né (`la-victoire-du-premier-ne`) partagé le 08/10/2026 ; ✅ Le Pacte du Mal (`le-pacte-du-mal`) partagé le 08/10/2026 ; ✅ Marié par Prophétie Ép.14 (`marie-par-prophetie-ep14`) partagé le 08/10/2026 ; ✅ The Last Door (`the-last-door`) partagé le 08/10/2026 ; ✅ Wealth in the Dream 3 (`wealth-in-the-dream-3`) partagé le 08/10/2026 ; ✅ BUSY (`busy-letter-to-the-church`) partagé le 08/10/2026.
- Note : « She Loved the Wrong Guy » (EN #32) a été renommé **In Love with a Playboy** (slug `in-love-with-a-playboy`) pour matcher l'affiche.
- Rythme choisi par Raymond : ~5 films par session
- **Piège Facebook découvert le 22/09/2026** : l'image d'un lien tout juste scrapé peut ne pas être disponible immédiatement côté Facebook (message Debugger *"images are processed asynchronously"*) — cliquer "Scrape Again" une seconde fois (~5-10s après) jusqu'à ce que l'image apparaisse, puis repartir d'une page `post/create` fraîche (le composer garde en cache le 1er scrape sans image). Et : toujours vérifier que le clic dans le champ de texte a bien pris le focus (taper un mot test avant le message complet) — sinon les caractères tapés (le "/" de l'URL) sont interprétés comme des raccourcis clavier Facebook et peuvent activer "Share to story" par erreur.

**Analyse d'audience (22/09/2026, Vercel Analytics 30 jours + /stats)** — voir dashboards : `vercel.com/raymondgadjis-projects/christmatic/analytics` et `christmatic.tv/stats` :
- 137 visiteurs (+95%), 341 pages vues (+148%) sur 30 jours — pic net fin de période, corrélé au démarrage de la campagne Facebook le 21/09.
- Référents : facebook.com + m.facebook.com = 45 visiteurs (~33% du trafic, 1er canal) ; chatgpt.com = 10 visiteurs (le GEO commence à porter ses fruits) ; google.com = 10, bing.com = 7 (SEO organique modeste mais réel) ; koush.app = 2.
- Pays : USA 34% (diaspora, 1er pays devant les pays africains eux-mêmes), France 12%, Côte d'Ivoire 9%, Bénin 7%, RDC 7%.
- Mobile 54% / Desktop 46%. Taux de rebond 56% (en baisse de 12 pts vs période précédente, mais encore élevé).
- **Pistes d'audience identifiées** (à discuter avec Raymond avant implémentation) :
  1. Aucun bouton de partage (WhatsApp notamment) sur les pages film actuellement — or WhatsApp est le canal de diffusion n°1 de la diaspora africaine ; un bouton "Partager sur WhatsApp" sur `/films/[slug]` pourrait créer une boucle virale gratuite.
  2. Le GEO (llms.txt, JSON-LD, robots.txt) fonctionne déjà (10 visiteurs via ChatGPT) — enrichir les descriptions/FAQ par film pourrait amplifier cet effet.
  3. Aucune trace de soumission à Google Search Console dans la doc — vérifier/soumettre le sitemap pour accélérer l'indexation et obtenir les requêtes de recherche tapées par les utilisateurs.
  4. Trafic USA dominant (diaspora) mais aucun canal Instagram/TikTok exploité à ce jour — extraits vidéo courts (trailers) pourraient toucher cette audience différemment du texte+lien Facebook.
  5. Taux de rebond élevé — une section "films similaires" en bas de page film pourrait retenir davantage les visiteurs après une vue.

---

## 15. Ressources

- Site live : **christmatic.tv** ✅
- Repo GitHub : github.com/raymondgadji/christmatic (public)
- Supabase : supabase.com/dashboard/project/hrdtcpksdqoispbvzftg
- Playlist YouTube : @Christmatic_movies
- PayPal don : paypal.me/christmatic
- Concurrent : thefaithstream.com
- Google Fonts : Playfair Display + Inter
- Ionos (domaines) : christmatic.tv + christmatic.com

---

*"Que tout ce que vous faites soit fait pour la gloire de Dieu." — 1 Corinthiens 10:31*
