'use client'

import { useEffect, useMemo, useState } from 'react'
import FilmCard from '../../components/FilmCard'
import { useTr } from '../../components/LangProvider'
import { supabase } from '../../lib/supabase'

interface SearchFilm {
  id: string
  titre: string
  slug: string
  pays: string
  annee: number
  tags: string[] | null
  thumbnail_url: string | null
}

// Sans accents ni majuscules : « marie prophetie » retrouve « Marié par Prophétie ».
function normalize(s: string) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

// Recherche de films par titre (ou pays, ou thème). Page non référencée par Google (voir layout.tsx).
export default function RecherchePage() {
  const tr = useTr()
  const [films, setFilms] = useState<SearchFilm[] | null>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    // Un lien comme /recherche?q=nora pré-remplit la recherche.
    try {
      const q = new URLSearchParams(window.location.search).get('q')
      if (q) setQuery(q)
    } catch {
      // sans paramètre : champ vide
    }
    let active = true
    supabase
      .from('films')
      .select('id, titre, slug, pays, annee, tags, thumbnail_url')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (active) setFilms((data ?? []) as SearchFilm[])
      })
    return () => {
      active = false
    }
  }, [])

  const results = useMemo(() => {
    if (!films) return []
    const words = normalize(query).split(/\s+/).filter(Boolean)
    if (words.length === 0) return films
    return films.filter((f) => {
      const haystack = normalize([f.titre, f.pays, ...(f.tags ?? [])].join(' '))
      return words.every((w) => haystack.includes(w))
    })
  }, [films, query])

  const searching = query.trim().length > 0

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-titre)', fontSize: '28px', fontWeight: 500, marginBottom: '16px' }}>
        {tr('Rechercher un film', 'Search for a film')}
      </h1>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={tr('Titre du film, pays…', 'Film title, country…')}
        aria-label={tr('Rechercher un film', 'Search for a film')}
        autoFocus
        autoComplete="off"
        style={{
          width: '100%',
          boxSizing: 'border-box',
          background: 'var(--color-bg-secondary)',
          color: 'var(--color-text-primary)',
          border: '0.5px solid var(--color-border-gold)',
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '16px',
          fontFamily: 'var(--font-corps)',
          marginBottom: '16px',
        }}
      />

      {films === null ? (
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{tr('Chargement…', 'Loading…')}</p>
      ) : (
        <>
          <p style={{ fontSize: '13px', color: 'var(--color-text-hint)', margin: '0 0 20px' }}>
            {searching
              ? `${results.length} ${results.length > 1 ? tr('résultats', 'results') : tr('résultat', 'result')}`
              : `${films.length} ${tr('films', 'films')}`}
          </p>

          {results.length === 0 ? (
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              {tr('Aucun film ne correspond à cette recherche.', 'No film matches this search.')}
            </p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {results.map((f) => (
                // largeur fixe : un titre long ne doit pas écarter les vignettes
                <div key={f.id} style={{ width: '140px' }}>
                  <FilmCard
                    titre={f.titre}
                    pays={f.pays}
                    annee={f.annee}
                    tags={(f.tags ?? []).slice(0, 2).join(' · ')}
                    thumbnailUrl={f.thumbnail_url ?? undefined}
                    slug={f.slug}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
