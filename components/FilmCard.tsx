interface FilmCardProps {
  titre: string
  pays: string
  annee: number
  tags: string
  badge?: string
  thumbnailUrl?: string
}

export default function FilmCard({
  titre,
  pays,
  annee,
  tags,
  badge,
  thumbnailUrl,
}: FilmCardProps) {
  return (
    <div style={{ flex: '0 0 140px', cursor: 'pointer' }}>

      <div style={{
        width: '140px',
        height: '200px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '8px',
        backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : 'none',
        backgroundColor: 'var(--color-bg-tertiary)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

        {badge && (
          <div style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'var(--color-gold)',
            color: '#0A0A0A',
            fontSize: '9px',
            fontWeight: 700,
            padding: '3px 6px',
            borderRadius: '3px',
            letterSpacing: '0.5px',
          }}>
            {badge}
          </div>
        )}

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '70px',
          background: 'linear-gradient(transparent, rgba(10,10,10,0.95))',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '8px',
        }}>
          <span style={{
            fontSize: '10px',
            color: 'rgba(245,245,240,0.8)',
            background: 'rgba(0,0,0,0.5)',
            padding: '2px 6px',
            borderRadius: '3px',
          }}>
            {pays}
          </span>
        </div>

      </div>

      <div style={{
        fontSize: '12px',
        color: 'var(--color-text-primary)',
        lineHeight: 1.3,
        marginBottom: '3px',
        fontWeight: 500,
      }}>
        {titre}
      </div>
      <div style={{
        fontSize: '11px',
        color: 'var(--color-text-hint)',
      }}>
        {annee} · {tags}
      </div>

    </div>
  )
}