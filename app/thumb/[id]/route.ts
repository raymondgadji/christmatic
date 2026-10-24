// Miniature d'un film servie depuis christmatic.tv (copie de la miniature YouTube).
// Pourquoi : les réseaux sociaux (Facebook) récupèrent parfois mal les images hébergées par YouTube ;
// depuis notre propre domaine, l'aperçu des liens partagés s'affiche toujours avec son image.
// Utilisée uniquement comme `og:image` / `twitter:image` des pages film.

export const dynamic = 'force-dynamic'

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  // Seuls les identifiants YouTube valides sont acceptés (jamais d'adresse arbitraire).
  if (!YOUTUBE_ID.test(params.id)) {
    return new Response('Not found', { status: 404 })
  }

  try {
    const res = await fetch(`https://img.youtube.com/vi/${params.id}/hqdefault.jpg`, { cache: 'no-store' })
    if (!res.ok) return new Response('Not found', { status: 404 })
    const bytes = await res.arrayBuffer()
    return new Response(bytes, {
      status: 200,
      headers: {
        'Content-Type': res.headers.get('content-type') || 'image/jpeg',
        // Mise en cache longue : la miniature d'une vidéo ne change presque jamais.
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
      },
    })
  } catch {
    return new Response('Bad gateway', { status: 502 })
  }
}
