import FilmCard from './FilmCard'

interface Film {
  id: string
  titre: string
  pays: string
  annee: number
  tags: string[]
  badge?: string
  thumbnail_url?: string
}

interface FilmRowProps {
  titre: string
  emoji: string
  films: Film[]
}

export default function FilmRow({ titre, emoji, films }: FilmRowProps) {
  return (
    <section style={{ padding: '32px 24px 8px' }}>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}>
        <h2 style={{
          fontSize: '16px',
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span>{emoji}</span>
          {titre}
        </h2>
        <span style={{
          fontSize: '12px',
          color: 'var(--color-gold)',
          cursor: 'pointer',
        }}>
          Voir tout →
        </span>
      </div>

      <div style={{
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '12px',
        scrollbarWidth: 'none',
      }}>
        {films.map((film) => (
          <FilmCard
            key={film.id}
            titre={film.titre}
            pays={film.pays}
            annee={film.annee}
            tags={film.tags?.[0] || ''}
            thumbnailUrl={film.thumbnail_url || ''}
          />
        ))}
      </div>

    </section>
  )
}