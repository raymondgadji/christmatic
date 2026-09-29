import Link from 'next/link'

export interface FeaturedFilm {
  titre: string
  slug: string
  pays: string
  annee: number | null
  duree_min: number | null
  langue: string
  description: string | null
  backdrop_url: string
}

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

function Stats() {
  return (
    <div style={{
      display: 'flex',
      gap: '32px',
      marginTop: '36px',
      paddingTop: '24px',
      borderTop: '0.5px solid var(--color-border)',
      flexWrap: 'wrap',
    }}>
      {[
        { num: '200+', label: 'Films' },
        { num: '5', label: 'Pays' },
        { num: 'FR & EN', label: 'Bilingue' },
        { num: '0€', label: 'Pour commencer' },
      ].map((stat) => (
        <div key={stat.label}>
          <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-gold)' }}>{stat.num}</div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-hint)', marginTop: '2px' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

function FeaturedHero({ film }: { film: FeaturedFilm }) {
  const meta = [
    film.pays,
    film.annee,
    film.duree_min ? `${Math.floor(film.duree_min / 60)}h${String(film.duree_min % 60).padStart(2, '0')}` : null,
    film.langue === 'en' ? 'Anglais' : 'Français',
  ].filter(Boolean).join(' · ')

  return (
    <section style={{
      position: 'relative',
      minHeight: 'clamp(420px, 62vh, 620px)',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      borderBottom: '0.5px solid var(--color-border)',
    }}>
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

      <div style={{ position: 'relative', padding: '48px 16px 40px', maxWidth: '640px', width: '100%', boxSizing: 'border-box', marginLeft: 'clamp(0px, 2vw, 8px)' }}>
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

        <h1 style={{
          fontFamily: 'var(--font-titre)',
          fontSize: 'clamp(40px, 8vw, 72px)',
          fontWeight: 600,
          lineHeight: 1.05,
          margin: '0 0 12px',
          textShadow: '0 2px 12px rgba(0,0,0,0.6)',
        }}>
          {film.titre}
        </h1>

        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: '0 0 16px' }}>{meta}</p>

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
          <Link href={`/films/${film.slug}`} style={btnPrimary}>▶ Regarder maintenant</Link>
          <Link href={film.langue === 'en' ? '/english' : '/francais'} style={btnSecondary}>Découvrir les films</Link>
        </div>
      </div>
    </section>
  )
}

export default function HeroBanner({ featured }: { featured?: FeaturedFilm | null }) {
  if (featured) return <FeaturedHero film={featured} />

  return (
    <section style={{
      padding: '48px 24px 40px',
      background: 'linear-gradient(180deg, rgba(212,168,67,0.06) 0%, transparent 100%)',
      borderBottom: '0.5px solid var(--color-border)',
    }}>
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
        marginBottom: '20px',
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block' }}/>
        Films 100% chrétiens d&apos;Afrique noire
      </div>

      <h1 style={{
        fontFamily: 'var(--font-titre)',
        fontSize: '36px',
        fontWeight: 500,
        lineHeight: 1.25,
        marginBottom: '16px',
        maxWidth: '560px',
      }}>
        Le cinéma noir Africain<br/>
        au service de{' '}
        <em style={{ fontStyle: 'normal', color: 'var(--color-gold)' }}>l&apos;Évangile</em>
      </h1>

      <p style={{
        fontSize: '15px',
        color: 'var(--color-text-muted)',
        lineHeight: 1.7,
        maxWidth: '480px',
        marginBottom: '28px',
      }}>
        Films chrétiens d&apos;Afrique subsaharienne — Nollywood, Côte d&apos;Ivoire,
        Kenya, Ghana. Curatés avec foi.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Link href="/francais" style={btnPrimary}>Regarder maintenant</Link>
        <Link href="/english" style={btnSecondary}>Découvrir les films</Link>
      </div>

      <Stats />
    </section>
  )
}
