export const metadata = { title: 'Hors connexion', robots: { index: false } }

export default function OfflinePage() {
  return (
    <div style={{ maxWidth: '520px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ fontSize: '12px', color: 'var(--color-gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
        Christmatic
      </div>
      <h1 style={{ fontFamily: 'var(--font-titre)', fontSize: '28px', fontWeight: 500, marginBottom: '16px' }}>
        Vous êtes hors connexion
      </h1>
      <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
        Les films se regardent en ligne. Reconnectez-vous à internet, puis réessayez.
      </p>
      <a href="/" style={{ display: 'inline-block', background: 'var(--color-gold)', color: '#0A0A0A', padding: '10px 24px', borderRadius: '20px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
        Réessayer
      </a>
    </div>
  )
}
