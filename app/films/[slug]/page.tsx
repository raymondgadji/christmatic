import { supabase } from '../../../lib/supabase'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { SITE_URL } from '../../../lib/seo'

interface Props {
  params: { slug: string }
}

export const revalidate = 3600

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: film } = await supabase
    .from('films')
    .select('*')
    .eq('slug', params.slug)
    .eq('is_published', true)
    .single()

  if (!film) return {}

  const url = `${SITE_URL}/films/${film.slug}`
  const description = film.description || `${film.titre} — film chrétien de ${film.pays}, disponible gratuitement sur Christmatic.`

  return {
    title: film.titre,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'video.movie',
      url,
      title: film.titre,
      description,
      images: film.thumbnail_url ? [film.thumbnail_url] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: film.titre,
      description,
      images: film.thumbnail_url ? [film.thumbnail_url] : undefined,
    },
  }
}

export default async function FilmPage({ params }: Props) {
  const { data: film } = await supabase
    .from('films')
    .select('*')
    .eq('slug', params.slug)
    .eq('is_published', true)
    .single()

  if (!film) notFound()

  const videoJsonLd = film.youtube_id ? {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: film.titre,
    description: film.description || film.titre,
    thumbnailUrl: film.thumbnail_url || `https://img.youtube.com/vi/${film.youtube_id}/hqdefault.jpg`,
    uploadDate: film.annee ? `${film.annee}-01-01` : undefined,
    embedUrl: `https://www.youtube.com/embed/${film.youtube_id}`,
    contentUrl: `https://www.youtube.com/watch?v=${film.youtube_id}`,
    inLanguage: film.langue,
    genre: film.tags && film.tags.length > 0 ? film.tags : undefined,
    countryOfOrigin: film.pays ? { '@type': 'Country', name: film.pays } : undefined,
  } : null

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px' }}>

      {videoJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />
      )}

      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '12px', color: 'var(--color-gold)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {film.pays} · {film.annee}
        </div>
        <h1 style={{ fontFamily: 'var(--font-titre)', fontSize: '28px', fontWeight: 500, lineHeight: 1.3, marginBottom: '12px' }}>
          {film.titre}
        </h1>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {film.tags?.map((tag: string) => (
            <span key={tag} style={{ fontSize: '11px', background: 'var(--color-bg-tertiary)', color: 'var(--color-text-muted)', padding: '3px 10px', borderRadius: '20px', border: '0.5px solid var(--color-border)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {film.youtube_id && (
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px', background: '#000' }}>
          <iframe
            src={`https://www.youtube.com/embed/${film.youtube_id}?rel=0&modestbranding=1`}
            title={film.titre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
          
            <a href={`https://www.youtube.com/watch?v=${film.youtube_id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: 'absolute', bottom: '16px', right: '16px', background: '#FF0000', color: '#fff', fontSize: '12px', fontWeight: 600, padding: '6px 14px', borderRadius: '6px', textDecoration: 'none', zIndex: 10 }}
          >
            ▶ Voir sur YouTube
          </a>
        </div>
      )}

      {film.description && (
        <div style={{ background: 'var(--color-bg-secondary)', borderRadius: '8px', padding: '16px 20px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '13px', color: 'var(--color-gold)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Synopsis
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            {film.description}
          </p>
        </div>
      )}

      <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-gold)' }}>
        ← Retour à l'accueil
      </a>

    </div>
  )
}