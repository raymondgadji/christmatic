import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const SIZES = [180, 192, 512]

// Icône de l'app : fond jaune plein cadre + croix noire centrée (zone de sécurité "maskable" respectée)
export async function GET(_request: Request, { params }: { params: { size: string } }) {
  const size = Number(params.size)
  if (!SIZES.includes(size)) return new Response('Not found', { status: 404 })

  const bar = Math.round(size * 0.12)
  const vHeight = Math.round(size * 0.56)
  const hWidth = Math.round(size * 0.36)
  const radius = Math.round(size * 0.015)

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#D4A843' }}>
        <div style={{ position: 'absolute', left: Math.round((size - bar) / 2), top: Math.round(size * 0.22), width: bar, height: vHeight, background: '#0A0A0A', borderRadius: radius }} />
        <div style={{ position: 'absolute', left: Math.round((size - hWidth) / 2), top: Math.round(size * 0.38), width: hWidth, height: bar, background: '#0A0A0A', borderRadius: radius }} />
      </div>
    ),
    { width: size, height: size }
  )
}
