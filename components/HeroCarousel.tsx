'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { FeaturedFilm } from './HeroBanner'

const INTERVAL_MS = 5000

const btnPrimary = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  background: 'var(--color-gold)',
  color: '#0A0A0A',
  borderRadius: '8px',
  padding: '12px 28px',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'var(--font-corps)',
  textDecoration: 'none',
} as const

const btnSecondary = {
  display: 'inline-flex',
  alignItems: 'center',
  background: 'rgba(255,255,255,0.1)',
  color: 'var(--color-text-primary)',
  border: '0.5px solid rgba(255,255,255,0.2)',
  borderRadius: '8px',
  padding: '12px 28px',
  fontSize: '14px',
  fontFamily: 'var(--font-corps)',
  textDecoration: 'none',
} as const

function formatMeta(film: FeaturedFilm) {
  return [
    film.pays,
    film.annee,
    film.duree_min ? `${Math.floor(film.duree_min / 60)}h${String(film.duree_min % 60).padStart(2, '0')}` : null,
    film.langue === 'en' ? 'Anglais' : 'Français',
  ].filter(Boolean).join(' · ')
}

export default function HeroCarousel({ films }: { films: FeaturedFilm[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (films.length < 2) return
    const id = setInterval(() => setActive((i) => (i + 1) % films.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [films.length, active])

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Films à la une"
      style={{
        position: 'relative',
        minHeight: 'clamp(420px, 62vh, 620px)',
        overflow: 'hidden',
        borderBottom: '0.5px solid var(--color-border)',
        background: 'var(--color-bg-primary)',
      }}
    >
      <h1 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
        Christmatic — le cinéma noir africain au service de l&apos;Évangile
      </h1>
      {films.map((film, i) => {
        const isActive = i === active
        return (
          <div
            key={film.slug}
            aria-hidden={!isActive}
            aria-roledescription="diapositive"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'flex-end',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 900ms ease',
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            <div aria-hidden style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${film.backdrop_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 25%',
            }} />
            <div aria-hidden style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0.1) 75%), linear-gradient(0deg, #0A0A0A 0%, rgba(10,10,10,0) 45%)',
            }} />

            <div style={{ position: 'relative', padding: '48px 16px 56px', maxWidth: '640px', width: '100%', boxSizing: 'border-box', marginLeft: 'clamp(0px, 2vw, 8px)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-gold-muted)',
                border: '0.5px solid var(--color-border-gold)',
                borderRadius: '20px',
                padding: '5px 14px',
                fontSize: '12px',
                color: 'var(--color-gold)',
                marginBottom: '16px',
                backdropFilter: 'blur(4px)',
              }}>
                🔥 À la une
              </div>

              <h2 style={{
                fontFamily: 'var(--font-titre)',
                fontSize: film.titre.length > 24 ? 'clamp(30px, 6vw, 52px)' : 'clamp(40px, 8vw, 72px)',
                fontWeight: 600,
                lineHeight: 1.08,
                margin: '0 0 12px',
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}>
                {film.titre}
              </h2>

              <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: '0 0 16px' }}>{formatMeta(film)}</p>

              {film.description && (
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--color-text-primary)',
                  margin: '0 0 24px',
                  maxWidth: '520px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {film.description}
                </p>
              )}

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: film.description ? 0 : '8px' }}>
                <Link href={`/films/${film.slug}`} style={btnPrimary} tabIndex={isActive ? 0 : -1}>▶ Regarder maintenant</Link>
                <Link href={film.langue === 'en' ? '/english' : '/francais'} style={btnSecondary} tabIndex={isActive ? 0 : -1}>Découvrir les films</Link>
              </div>
            </div>
          </div>
        )
      })}

      {films.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: 'calc(16px + clamp(0px, 2vw, 8px))',
          display: 'flex',
          gap: '8px',
          zIndex: 1,
        }}>
          {films.map((film, i) => (
            <button
              key={film.slug}
              type="button"
              aria-label={`Afficher ${film.titre}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: i === active ? 'var(--color-gold)' : 'rgba(255,255,255,0.35)',
                transition: 'width 300ms ease, background 300ms ease',
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
