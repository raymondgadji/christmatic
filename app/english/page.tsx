import { supabase } from '../../lib/supabase'
import FilmCard from '../../components/FilmCard'

export const revalidate = 3600

export default async function PageAnglais() {
  const { data: films } = await supabase
    .from('films')
    .select('*')
    .eq('langue', 'en')
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  return (
    <div style={{ padding: '32px 24px' }}>

      <div style={{ marginBottom: '32px' }}>
        <div style={{
          fontSize: '12px',
          color: 'var(--color-gold)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>
          Catalogue complet
        </div>
        <h1 style={{
          fontFamily: 'var(--font-titre)',
          fontSize: '28px',
          fontWeight: 500,
        }}>
          🇬🇧 Films in English
        </h1>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-text-muted)',
          marginTop: '8px',
        }}>
          {films?.length || 0} films — Nigeria, Ghana, Kenya...
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '20px',
      }}>
        {films?.map((film) => (
          <FilmCard
            key={film.id}
            titre={film.titre}
            pays={film.pays}
            annee={film.annee}
            tags={film.tags?.[0] || ''}
            thumbnailUrl={film.thumbnail_url || ''}
            slug={film.slug}
          />
        ))}
      </div>

    </div>
  )
}