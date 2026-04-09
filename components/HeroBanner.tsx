export default function HeroBanner() {
  return (
    <section style={{
      padding: '48px 24px 40px',
      background: 'linear-gradient(180deg, rgba(212,168,67,0.06) 0%, transparent 100%)',
      borderBottom: '0.5px solid var(--color-border)',
    }}>

      {/* BADGE */}
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
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--color-gold)',
          display: 'inline-block',
        }}/>
        Films 100% chrétiens d&apos;Afrique noire
      </div>

      {/* TITRE */}
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
        <em style={{ fontStyle: 'normal', color: 'var(--color-gold)' }}>
          l&apos;Évangile
        </em>
      </h1>

      {/* SOUS-TITRE */}
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

      {/* BOUTONS */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <button style={{
          background: 'var(--color-gold)',
          color: '#0A0A0A',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 28px',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-corps)',
        }}>
          Regarder maintenant
        </button>
        <button style={{
          background: 'rgba(255,255,255,0.07)',
          color: 'var(--color-text-primary)',
          border: '0.5px solid rgba(255,255,255,0.15)',
          borderRadius: '8px',
          padding: '12px 28px',
          fontSize: '14px',
          fontFamily: 'var(--font-corps)',
        }}>
          Découvrir les films
        </button>
      </div>

      {/* STATS */}
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
            <div style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--color-gold)',
            }}>{stat.num}</div>
            <div style={{
              fontSize: '11px',
              color: 'var(--color-text-hint)',
              marginTop: '2px',
            }}>{stat.label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}