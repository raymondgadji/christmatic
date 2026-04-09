# CLAUDE.md — Christmatic
> Bible du projet. À fournir au CTO (Claude) à chaque nouvelle session de travail.
> Dernière mise à jour : avril 2026

---

## 1. Vision & Mission

**Nom du projet :** CHRISTMATIC
**Tagline :** "Servir le Seigneur Jésus-Christ à travers le cinéma"
**Concept :** Netflix dédié aux films chrétiens d'Afrique noire (Afrique subsaharienne uniquement — pas de films arabes, pas de films occidentaux)
**Mission :** Évangéliser et édifier le Corps de Christ via le cinéma africain chrétien

### Géographie des contenus acceptés
- Afrique de l'Ouest : Nigeria (Nollywood), Ghana, Côte d'Ivoire, Sénégal, Cameroun, Bénin, Togo, Burkina Faso...
- Afrique de l'Est : Kenya, Ouganda, Tanzanie, Éthiopie...
- Afrique Centrale : RDC, Congo-Brazzaville...
- Afrique Australe : Afrique du Sud, Zimbabwe, Zambie...
- ❌ Exclus : films arabes (Maroc, Algérie, Tunisie, Égypte), films occidentaux (USA, Europe)

### Deux sections principales
- 🇫🇷 **Films en Français** (Côte d'Ivoire, Cameroun, RDC, Sénégal, Bénin...)
- 🇬🇧 **Films en Anglais** (Nigeria/Nollywood, Ghana, Kenya, Afrique du Sud...)

---

## 2. Équipe

| Rôle | Personne | Compétences |
|---|---|---|
| Founder / CEO | [Prénom à compléter] | Data analyst, SQL, Python, FastAPI, HTML/CSS/JS Vanilla, Vercel, Netlify, Railway. Bootcamps Emlyon France + Simplon. |
| CTO | Claude (Anthropic) | Architecture, code, conseils techniques |

---

## 3. Marché & Positionnement

### Concurrents identifiés
| Plateforme | Type | Prix | Différence avec Christmatic |
|---|---|---|---|
| FaithStream (thefaithstream.com) | ONG africaine, lancée fév. 2026 | Gratuit (dons) | Généraliste (Kenya+Nigeria+Hollywood), non-profit, pas de niche Afrique noire uniquement |
| HCENTV | App nigériane | Inconnu | Peu visible, peu quali |
| Lewabo (africanchristianmovies.com) | Américain | Inconnu | Généraliste, UX dépassée |
| Pure Flix / Angel Studios | Américain | ~$6-13/mois | 100% américain, pas africain |

### Notre différenciation
1. **Ultra-niche** : UNIQUEMENT films chrétiens Afrique noire — la curation est la valeur
2. **Curator humain avec foi** : sélection avec discernement spirituel, pas un algorithme
3. **Bilingue FR/EN** : seule plateforme pensée pour la diaspora francophone
4. **Communauté** : commentaires, discussions, recommandations entre croyants
5. **TV-first experience** : optimisé grand écran, Android TV app dans la roadmap
6. **Modèle entrepreneurial** : pas une ONG, une startup avec une âme

---

## 4. Modèle Économique

### Phase 1 — Lancement (0-6 mois) : Gratuit total
- Objectif : construire l'audience, valider la niche
- Monétisation : bouton "Soutenir le ministère" (don libre)
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
Framework : Next.js 14+ (App Router)
Déploiement : Vercel (gratuit pour démarrer)
Style : CSS Modules + variables CSS (pas de Tailwind pour MVP)
Langue par défaut : Français (toggle FR/EN)
```

### Backend & Base de données
```
BDD : Supabase (PostgreSQL managé)
Auth : Supabase Auth (email/password + Google OAuth)
API : Next.js API Routes (pas besoin de FastAPI séparé pour MVP)
Storage : Supabase Storage (thumbnails, assets)
```

### Vidéos
```
MVP : YouTube embed (iframes sur vidéos unlisted/public)
→ Coût 0, migration possible plus tard
Futur : Cloudflare Stream (~$5/1000 min stockées)
```

### Paiement
```
Stripe (diaspora Europe/Canada)
→ Intégrer en Phase 2 uniquement
```

### Domaines
```
Principal : christmatic.tv (~40-50€/an)
Redirect : christmatic.com (~12€/an)
```

### Coûts MVP estimés
| Poste | Coût/mois |
|---|---|
| Domaines (.tv + .com) | ~5€ |
| Vercel (frontend) | 0€ |
| Supabase (DB + auth) | 0€ |
| Vidéos (YouTube embed) | 0€ |
| **Total MVP** | **~5€/mois** |

---

## 6. Charte Graphique

### Palette de couleurs
```css
--color-bg-primary:    #0A0A0A;  /* Fond principal — noir profond */
--color-bg-secondary:  #141414;  /* Fond cartes */
--color-bg-tertiary:   #1E1E1E;  /* Fond hover */
--color-gold:          #D4A843;  /* Or — couleur principale */
--color-gold-light:    #e0b84e;  /* Or hover */
--color-gold-muted:    rgba(212,168,67,0.15); /* Or fond badge */
--color-text-primary:  #F5F5F0;  /* Blanc cassé */
--color-text-muted:    rgba(245,245,240,0.55); /* Texte secondaire */
--color-text-hint:     rgba(245,245,240,0.35); /* Texte tertiaire */
--color-border:        rgba(255,255,255,0.06); /* Bordures subtiles */
--color-border-gold:   rgba(212,168,67,0.2);  /* Bordures dorées */
```

### Typographie
```
Titres    : Playfair Display (Google Fonts) — élégance, cinématographique
Corps     : Inter (Google Fonts) — lisibilité mobile-first
Fallback  : -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

### Logo
- Silhouette Afrique noire (SVG) dans un carré doré (#D4A843), border-radius 6px
- Texte : "CHRIS" blanc + "TMATIC" doré, letterspacing 2px, font-weight 600
- ❌ Pas de croix (pour ne pas réduire l'identité africaine)
- ✅ Continent africain = identité visuelle forte

### Style général
- Hero title officiel : **"Le cinéma noir Africain au service de l'Évangile"**
- Fond très sombre (noir #0A0A0A) — expérience cinéma
- Accents dorés — royauté, foi, Afrique
- Minimal, épuré, pas de kitsch religieux
- Cartes films : coins arrondis 8px, overlay gradient bottom
- Badges : "NOUVEAU", "POPULAIRE", "TOP" — fond or, texte noir

---

## 7. Structure des Pages (MVP)

```
/                     → Homepage (hero + sections FR + EN)
/films                → Catalogue complet avec filtres
/films/[slug]         → Page détail film (player + infos)
/francais             → Section Films en Français
/anglais              → Section Films en Anglais
/recherche            → Recherche par titre, pays, année
/compte               → Profil utilisateur (Phase 2)
/soutenir             → Page don / soutien ministère
```

---

## 8. Schéma Base de Données (Supabase / PostgreSQL)

```sql
-- Films
CREATE TABLE films (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titre        TEXT NOT NULL,
  titre_en     TEXT,
  slug         TEXT UNIQUE NOT NULL,
  description  TEXT,
  description_en TEXT,
  annee        INTEGER,
  pays         TEXT,               -- 'Nigeria', 'Côte d\'Ivoire', etc.
  langue       TEXT,               -- 'fr' ou 'en'
  youtube_id   TEXT,               -- ID YouTube pour embed
  thumbnail_url TEXT,
  duree_min    INTEGER,            -- durée en minutes
  tags         TEXT[],             -- ['drame', 'famille', 'évangile']
  is_featured  BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- Utilisateurs (géré par Supabase Auth + table profil)
CREATE TABLE profils (
  id           UUID PRIMARY KEY REFERENCES auth.users(id),
  pseudo       TEXT,
  langue_pref  TEXT DEFAULT 'fr',  -- 'fr' ou 'en'
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- Favoris
CREATE TABLE favoris (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id   UUID REFERENCES profils(id) ON DELETE CASCADE,
  film_id   UUID REFERENCES films(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, film_id)
);

-- Historique de visionnage
CREATE TABLE historique (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES profils(id) ON DELETE CASCADE,
  film_id      UUID REFERENCES films(id) ON DELETE CASCADE,
  progress_pct INTEGER DEFAULT 0,  -- % visionné (0-100)
  watched_at   TIMESTAMPTZ DEFAULT now()
);
```

---

## 9. Structure du Projet Next.js

```
christmatic/
├── CLAUDE.md                  ← CE FICHIER
├── christmatic_preview.html   ← Preview HTML de référence
├── .env.local                 ← Variables d'environnement (jamais committé)
├── next.config.js
├── package.json
│
├── app/                       ← App Router Next.js
│   ├── layout.tsx             ← Layout global (nav + footer)
│   ├── page.tsx               ← Homepage
│   ├── films/
│   │   ├── page.tsx           ← Catalogue
│   │   └── [slug]/page.tsx    ← Détail film
│   ├── francais/page.tsx
│   ├── anglais/page.tsx
│   └── soutenir/page.tsx
│
├── components/
│   ├── Nav.tsx
│   ├── FilmCard.tsx
│   ├── FilmRow.tsx            ← Scroll horizontal de cards
│   ├── HeroBanner.tsx
│   └── YoutubePlayer.tsx
│
├── lib/
│   ├── supabase.ts            ← Client Supabase
│   └── types.ts               ← Types TypeScript (Film, Profil, etc.)
│
└── styles/
    └── globals.css            ← Variables CSS + reset
```

---

## 10. Variables d'Environnement (.env.local)

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxx

# Stripe (Phase 2 uniquement)
# STRIPE_SECRET_KEY=sk_live_xxxx
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxx
```

---

## 11. Roadmap MVP

### Sprint 1 — Fondations (semaine 1-2)
- [ ] Créer repo GitHub `christmatic`
- [ ] Init projet Next.js 14
- [ ] Configurer Supabase (DB + Auth)
- [ ] Mettre en place charte graphique (globals.css)
- [ ] Composer la Nav + Footer
- [ ] Acheter christmatic.tv

### Sprint 2 — Catalogue (semaine 3-4)
- [ ] Créer table `films` dans Supabase
- [ ] Ajouter les 20 premiers films (YouTube IDs depuis playlist Christmatic)
- [ ] Homepage : hero + sections FR + EN
- [ ] Page `/films` avec filtres langue/pays
- [ ] Page détail `/films/[slug]` avec player YouTube

### Sprint 3 — Auth & UX (semaine 5-6)
- [ ] Auth Supabase (inscription/connexion)
- [ ] Favoris
- [ ] Historique de visionnage
- [ ] Toggle FR/EN fonctionnel
- [ ] SEO de base (meta tags, og:image)

### Sprint 4 — Lancement (semaine 7-8)
- [ ] Déploiement sur Vercel + domaine christmatic.tv
- [ ] Page "Soutenir le ministère"
- [ ] Test mobile + TV (navigateur Chrome sur TV)
- [ ] Partage sur réseaux (diaspora africaine France/Belgique)

---

## 12. Règles de Travail avec Claude (CTO)

- Toujours fournir ce CLAUDE.md en début de session
- Préciser la tâche : "On travaille sur Sprint X, tâche Y"
- Si tu copies du code, coller l'erreur exacte pour debug rapide
- On code **composant par composant**, pas tout d'un coup
- Le Founder apprend en construisant — le CTO explique chaque décision
- Langue de travail : **français** pour les discussions, **anglais** pour le code (noms de variables, commentaires)

---

## 13. Ressources & Références

- Preview HTML de référence : `christmatic_preview.html`
- Playlist YouTube source : `@Christmatic_movies`
- FaithStream (concurrent) : thefaithstream.com
- Supabase docs : supabase.com/docs
- Next.js docs : nextjs.org/docs
- Google Fonts : Playfair Display + Inter

---

*"Que tout ce que vous faites soit fait pour la gloire de Dieu." — 1 Corinthiens 10:31*
