import { supabase } from '../../../lib/supabase'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export default async function FilmPage({ params }: Props) {
  const { data: film } = await supabase
    .from('films')
    .select('*')
    .eq('slug', params.slug)
    .eq('is_published', true)
    .single()

  if (!film) notFound()

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px' }}>

      {/* TITRE + PAYS */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          fontSize: '12px',
          color: 'var(--color-gold)',
          marginBottom: '8px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          {film.pays} · {film.annee}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-titre)',
          fontSize: '28px',
          fontWeight: 500,
          lineHeight: 1.3,
          marginBottom: '12px',
        }}>
          {film.titre}
        </h1>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {film.tags?.map((tag: string) => (
            <span key={tag} style={{
              fontSize: '11px',
              background: 'var(--color-bg-tertiary)',
              color: 'var(--color-text-muted)',
              padding: '3px 10px',
              borderRadius: '20px',
              border: '0.5px solid var(--color-border)',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* PLAYER YOUTUBE */}
      {film.youtube_id && (
        <div style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '24px',
          background: '#000',
        }}>
          <iframe
            src={`https://www.youtube.com/embed/${film.youtube_id}?rel=0&modestbranding=1`}
            title={film.titre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              border: 'none',
            }}
          />
        </div>
      )}

      {/* DESCRIPTION */}
      {film.description && (
        <div style={{
          background: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '24px',
        }}>
          <h2 style={{
            fontSize: '13px',
            color: 'var(--color-gold)',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            Synopsis
          </h2>
          <p style={{
            fontSize: '14px',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
          }}>
            {film.description}
          </p>
        </div>
      )}

      {/* RETOUR */}
      <a href="/" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '13px',
        color: 'var(--color-gold)',
      }}>
        ← Retour à l'accueil
      </a>

    </div>
  )
}