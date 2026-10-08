import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Christmatic — Films chrétiens d\'Afrique noire'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0A',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <div
            style={{
              width: 176,
              height: 176,
              background: '#D4A843',
              borderRadius: 32,
              display: 'flex',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', left: 72, top: 26, width: 32, height: 125, background: '#0A0A0A', borderRadius: 5 }} />
            <div style={{ position: 'absolute', left: 40, top: 61, width: 96, height: 32, background: '#0A0A0A', borderRadius: 5 }} />
          </div>
          <div style={{ display: 'flex', fontSize: 140, fontWeight: 700, color: '#F5F5F0' }}>
            CHRIST<span style={{ color: '#D4A843' }}>MATIC</span>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 46, color: 'rgba(245,245,240,0.6)', marginTop: 40 }}>
          Le cinéma noir Africain au service de l&apos;Évangile
        </div>
      </div>
    ),
    { ...size }
  )
}
