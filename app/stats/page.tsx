import { supabase } from '../../lib/supabase'

export const dynamic = 'force-dynamic'

export default async function StatsPage() {
  const { data: films } = await supabase
    .from('films')
    .select('langue, pays, titre, created_at')
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  const total = films?.length || 0
  const totalFr = films?.filter((f) => f.langue === 'fr').length || 0
  const totalEn = films?.filter((f) => f.langue === 'en').length || 0

  const parPays = (films || []).reduce((acc: Record<string, number>, f) => {
    acc[f.pays] = (acc[f.pays] || 0) + 1
    return acc
  }, {})

  const derniersAjouts = (films || []).slice(0, 5)

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '32px 24px' }}>

      <div style={{ marginBottom: '32px' }}>
        <div style={{
          fontSize: '12px',
          color: 'var(--color-gold)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>
          Christmatic
        </div>
        <h1 style={{
          fontFamily: 'var(--font-titre)',
          fontSize: '28px',
          fontWeight: 500,
        }}>
          Statistiques
        </h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        marginBottom: '32px',
      }}>
        {[
          { label: 'Films au total', value: total },
          { label: 'Films en Français', value: totalFr },
          { label: 'Films in English', value: totalEn },
        ].map((stat) => (
          <div key={stat.label} style={{
            background: 'var(--color-bg-secondary)',
            border: '0.5px solid var(--color-border)',
            borderRadius: '8px',
            padding: '16px',
          }}>
            <div style={{ fontSize: '28px', fontWeight: 600, color: 'var(--color-gold)' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '13px', color: 'var(--color-gold)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Films par pays
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {Object.entries(parPays)
            .sort((a, b) => b[1] - a[1])
            .map(([pays, count]) => (
              <div key={pays} style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '14px',
                color: 'var(--color-text-muted)',
                padding: '6px 0',
                borderBottom: '0.5px solid var(--color-border)',
              }}>
                <span>{pays}</span>
                <span style={{ color: 'var(--color-text-primary)' }}>{count}</span>
              </div>
            ))}
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '13px', color: 'var(--color-gold)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          5 derniers ajouts
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {derniersAjouts.map((f) => (
            <div key={f.titre} style={{
              fontSize: '14px',
              color: 'var(--color-text-muted)',
              padding: '6px 0',
              borderBottom: '0.5px solid var(--color-border)',
            }}>
              {f.titre}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: 'var(--color-bg-secondary)',
        border: '0.5px solid var(--color-border-gold)',
        borderRadius: '8px',
        padding: '16px 20px',
      }}>
        <h2 style={{ fontSize: '13px', color: 'var(--color-gold)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Trafic & visiteurs
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '12px', lineHeight: 1.6 }}>
          Le trafic (visiteurs, pages vues) est suivi via Vercel Analytics — le dashboard complet reste privé à ton compte Vercel, pas embeddable ici.
        </p>
        <a
          href="https://vercel.com/raymondgadjis-projects/christmatic/analytics"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontSize: '13px',
            color: '#0A0A0A',
            background: 'var(--color-gold)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Voir le dashboard Vercel Analytics →
        </a>
      </div>

    </div>
  )
}
