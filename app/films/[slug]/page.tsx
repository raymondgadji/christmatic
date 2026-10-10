import { supabase } from '../../../lib/supabase'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { SITE_URL, isBilingualFilm } from '../../../lib/seo'
import ShareButtons from '../../../components/ShareButtons'
import FilmPlayer from '../../../components/FilmPlayer'
import FavoriteButton from '../../../components/FavoriteButton'
import { T } from '../../../components/LangProvider'
import Country from '../../../components/Country'

interface Props {
  params: { slug: string }
}

export const dynamic = 'force-dynamic'

// Playlist YouTube "Christmatic TV 100% african Gospel films" : chaque film est lu dans son contexte
// pour que les lectures sur christmatic.tv comptent comme des vues de la playlist.
const YOUTUBE_PLAYLIST_ID = 'PLdp5bJ0vPgXSKs0uq8h8DK7UpVlJz3v3Z'

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
      images: film.thumbnail_url ? [{
        url: film.thumbnail_url,
        width: 480,
        height: 360,
        alt: film.titre,
      }] : undefined,
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
    // Date + heure + fuseau (exigé par Google). published_at = vraie date de mise en ligne YouTube ; repli provisoire sur l'année tant que la colonne n'est pas remplie.
    uploadDate: film.published_at || (film.annee ? `${film.annee}-01-01T00:00:00+00:00` : undefined),
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
          <Country pays={film.pays} /> · {film.annee}
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
        <FilmPlayer
          src={`https://www.youtube.com/embed/${film.youtube_id}?list=${YOUTUBE_PLAYLIST_ID}&rel=0&modestbranding=1`}
          title={film.titre}
        />
      )}

      <div style={{ marginBottom: '12px' }}>
        <FavoriteButton filmId={film.id} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <ShareButtons titre={film.titre} slug={film.slug} langue={film.langue} siteUrl={SITE_URL} bilingual={isBilingualFilm(film.created_at)} />
      </div>

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
        ← <T fr="Retour à l'accueil" en="Back to home" />
      </a>

    </div>
  )
}