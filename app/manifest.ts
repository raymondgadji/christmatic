import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: "Christmatic TV — Films chrétiens d'Afrique noire",
    short_name: 'Christmatic',
    description: "Le cinéma noir africain au service de l'Évangile : films chrétiens d'Afrique noire, gratuits, en français et en anglais.",
    lang: 'fr',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    categories: ['entertainment', 'video'],
    icons: [
      { src: '/pwa-icon/192', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/pwa-icon/512', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/pwa-icon/192', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/pwa-icon/512', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
