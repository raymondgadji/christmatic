import Link from 'next/link'
import HeroCarousel from './HeroCarousel'
import { T } from './LangProvider'

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
        { num: '200+', label: 'Films', en: 'Films' },
        { num: '5', label: 'Pays', en: 'Countries' },
        { num: 'FR & EN', label: 'Bilingue', en: 'Bilingual' },
        { num: '0€', label: 'Pour commencer', en: 'To start' },
      ].map((stat) => (
        <div key={stat.label}>
          <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-gold)' }}>{stat.num}</div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-hint)', marginTop: '2px' }}><T fr={stat.label} en={stat.en} /></div>
        </div>
      ))}
    </div>
  )
}

export default function HeroBanner({ featured }: { featured?: FeaturedFilm[] }) {
  if (featured && featured.length > 0) return <HeroCarousel films={featured} />

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
        <T fr="Films 100% chrétiens d'Afrique noire" en="100% Christian films from Black Africa" />
      </div>

      <h1 style={{
        fontFamily: 'var(--font-titre)',
        fontSize: '36px',
        fontWeight: 500,
        lineHeight: 1.25,
        marginBottom: '16px',
        maxWidth: '560px',
      }}>
        <T fr="Le cinéma noir Africain" en="African black cinema" /><br/>
        <T fr="au service de" en="at the service of" />{' '}
        <em style={{ fontStyle: 'normal', color: 'var(--color-gold)' }}><T fr="l'Évangile" en="the Gospel" /></em>
      </h1>

      <p style={{
        fontSize: '15px',
        color: 'var(--color-text-muted)',
        lineHeight: 1.7,
        maxWidth: '480px',
        marginBottom: '28px',
      }}>
        <T fr="Films chrétiens d'Afrique subsaharienne — Nollywood, Côte d'Ivoire, Kenya, Ghana. Curatés avec foi." en="Christian films from sub-Saharan Africa — Nollywood, Ivory Coast, Kenya, Ghana. Curated with faith." />
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Link href="/francais" style={btnPrimary}><T fr="Regarder maintenant" en="Watch now" /></Link>
        <Link href="/english" style={btnSecondary}><T fr="Découvrir les films" en="Discover the films" /></Link>
      </div>

      <Stats />
    </section>
  )
}
