# CLAUDE_CHRISTMATIC.md — Christmatic
> Bible du projet. À fournir au CTO (Claude) à chaque nouvelle session de travail.
> Dernière mise à jour : 21 juillet 2026 — Sprint 4 en cours 🔄

---

## 1. Vision & Mission

**Nom du projet :** CHRISTMATIC
**Tagline :** "Servir le Seigneur Jésus-Christ à travers le cinéma"
**Concept :** Netflix dédié aux films chrétiens d'Afrique noire (Afrique subsaharienne uniquement — pas de films arabes, pas de films occidentaux)
**Mission :** Évangéliser et édifier le Corps de Christ via le cinéma africain chrétien
**Hero title officiel :** "Le cinéma noir Africain au service de l'Évangile"

### Géographie des contenus acceptés
- Afrique de l'Ouest : Nigeria (Nollywood), Ghana, Côte d'Ivoire, Sénégal, Cameroun, Bénin, Togo, Burkina Faso...
- Afrique de l'Est : Kenya, Ouganda, Tanzanie, Éthiopie...
- Afrique Centrale : RDC, Congo-Brazzaville...
- Afrique Australe : Afrique du Sud, Zimbabwe, Zambie...
- ❌ Exclus : films arabes (Maroc, Algérie, Tunisie, Égypte), films occidentaux (USA, Europe)
- ✅ Exception acceptée : films produits par des réalisateurs africains noirs vivant en diaspora (UK, etc.)

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
Auth : Supabase Auth — Sprint 4 en cours
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
/compte               → Auth (inscription/connexion) ← SPRINT 4
```

---

## 8. Base de Données

### Table films ✅ créée et peuplée (44 films)
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

## 9. Films en base (44 films en ligne + 1 en attente) ✅

### 🇫🇷 Films en Français (24 films)
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
| 11 | Captifs de l'Homme Fort | Côte d'Ivoire | — | tSSBrwK_fGw |
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

⚠️ **Note** : vérifier que le film #11 "Captifs de l'Homme Fort" a bien un youtube_id distinct de #10.

### 🇬🇧 Films in English (20 films en ligne + 1 en attente)
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

⏳ **Film #21 pas encore en ligne** — script SQL fourni, à exécuter dans Supabase SQL Editor (dashboard/project/hrdtcpksdqoispbvzftg) pour l'insérer dans la table `films`.

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
│   ├── HeroBanner.tsx         ✅
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

### Sprint 4 ← EN COURS
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
- [ ] Insérer film EN #21 : Faith That Moves Mountains (Nigeria, 2026) — script SQL prêt, à exécuter
- [ ] Auth Supabase (inscription / connexion) ← PROCHAIN
- [ ] Favoris utilisateur
- [ ] SEO (meta tags, og:image par film)
- [ ] Test mobile complet
- [ ] Stripe (après configuration statut entreprise)
- [ ] Partage diaspora France/Belgique — lancement !

---

## 13. Notes techniques importantes

- `app/soutenir/page.tsx` doit avoir `'use client'` en première ligne (styled-jsx)
- Logo texte Nav : **CHRIST** (blanc) + **MATIC** (doré) — pas CHRIS+TMATIC
- Tous les composants avec `<style jsx>` nécessitent `'use client'`
- Supabase plan FREE : se met en pause après inactivité → "Resume project" sur le dashboard

---

## 14. Règles de Travail avec Claude (CTO)

- Toujours fournir ce `CLAUDE_CHRISTMATIC.md` en début de session
- Préciser : "On travaille sur Sprint X, tâche Y"
- Coller l'erreur exacte pour debug rapide
- Un composant à la fois
- Langue : **français** discussions, **anglais** code

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
