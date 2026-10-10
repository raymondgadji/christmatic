'use client'

import { useEffect, useState } from 'react'
import FilmCard from '../../components/FilmCard'
import { useAuth } from '../../components/AuthProvider'
import { useTr } from '../../components/LangProvider'
import { supabase } from '../../lib/supabase'
import type { Film } from '../../lib/types'

// Page privée : les films mis en favori par l'utilisateur connecté (non référencée par Google, voir layout.tsx).
export default function MaListePage() {
  const { user, loading, openLogin, signOut } = useAuth()
  const tr = useTr()
  const [films, setFilms] = useState<Film[] | null>(null)

  useEffect(() => {
    if (!user) {
      setFilms(null)
      return
    }
    let active = true
    supabase
      .from('favorites')
      .select('created_at, films(*)')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (!active) return
        const rows = (data ?? []) as unknown as { films: Film | Film[] | null }[]
        const list = rows
          .map((r) => (Array.isArray(r.films) ? r.films[0] : r.films))
          .filter((f): f is Film => !!f && f.is_published)
        setFilms(list)
      })
    return () => {
      active = false
    }
  }, [user])

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-titre)', fontSize: '28px', fontWeight: 500, marginBottom: '8px' }}>
        {tr('Ma liste', 'My list')}
      </h1>

      {loading ? null : !user ? (
        <div>
          <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: '0 0 20px' }}>
            {tr('Connectez-vous pour retrouver ici les films que vous avez mis de côté.', 'Log in to find here the films you saved.')}
          </p>
          <button
            type="button"
            onClick={openLogin}
            style={{ background: 'var(--color-gold)', color: '#0A0A0A', border: 'none', padding: '10px 24px', borderRadius: '20px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
          >
            {tr('Se connecter', 'Log in')}
          </button>
        </div>
      ) : (
        <>
          <p style={{ fontSize: '13px', color: 'var(--color-text-hint)', margin: '0 0 24px' }}>
            {tr('Connecté', 'Logged in')} : {user.email} ·{' '}
            <button
              type="button"
              onClick={signOut}
              style={{ background: 'none', border: 'none', color: 'var(--color-gold)', cursor: 'pointer', fontSize: '13px', padding: 0, textDecoration: 'underline' }}
            >
              {tr('Se déconnecter', 'Log out')}
            </button>
          </p>

          {films === null ? (
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{tr('Chargement…', 'Loading…')}</p>
          ) : films.length === 0 ? (
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              {tr("Votre liste est vide. Sur la page d'un film, touchez « Ajouter à ma liste » pour le retrouver ici.", 'Your list is empty. On a film page, tap “Add to my list” to find it here.')}
            </p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {films.map((f) => (
                <FilmCard
                  key={f.id}
                  titre={f.titre}
                  pays={f.pays}
                  annee={f.annee}
                  tags={(f.tags ?? []).slice(0, 2).join(' · ')}
                  thumbnailUrl={f.thumbnail_url ?? undefined}
                  slug={f.slug}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
