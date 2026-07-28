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
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 110,
              height: 110,
              background: '#D4A843',
              borderRadius: 20,
              display: 'flex',
            }}
          />
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, color: '#F5F5F0' }}>
            CHRIST<span style={{ color: '#D4A843' }}>MATIC</span>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 32, color: 'rgba(245,245,240,0.6)', marginTop: 28 }}>
          Le cinéma noir Africain au service de l&apos;Évangile
        </div>
      </div>
    ),
    { ...size }
  )
}
