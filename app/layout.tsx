import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Nav from '../components/Nav'
import { SITE_URL } from '../lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Christmatic — Films chrétiens d\'Afrique noire',
    template: '%s | Christmatic',
  },
  description: 'Christmatic est la plateforme de streaming gratuite dédiée aux films et séries chrétiens d\'Afrique noire : Nigeria, Cameroun, Côte d\'Ivoire, Gabon, Togo, Ghana... en français et en anglais.',
  keywords: ['films chrétiens', 'cinéma chrétien africain', 'Nollywood chrétien', 'films évangéliques', 'série chrétienne', 'films chrétiens Cameroun', 'films chrétiens Nigeria', 'christian movies Africa'],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Christmatic',
    title: 'Christmatic — Films chrétiens d\'Afrique noire',
    description: 'Servir le Seigneur Jésus-Christ à travers le cinéma africain chrétien',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christmatic — Films chrétiens d\'Afrique noire',
    description: 'Servir le Seigneur Jésus-Christ à travers le cinéma africain chrétien',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Christmatic',
  url: SITE_URL,
  description: 'Plateforme de cinéma chrétien dédiée aux films et séries d\'Afrique noire (Nollywood chrétien, cinéma francophone chrétien)',
  foundingDate: '2026',
  sameAs: ['https://www.youtube.com/@Christmatic_movies'],
  knowsAbout: ['Cinéma chrétien', 'Films Nollywood', 'Séries chrétiennes africaines', 'Évangélisation par le cinéma'],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Christmatic',
  url: SITE_URL,
  inLanguage: ['fr', 'en'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {/* GEO — Schema.org JSON-LD : scripts séparés (pas de @graph, meilleure lecture par les LLM) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Nav />
        <main>
          {children}
        </main>
        <footer style={{
          padding: '16px 24px',
          textAlign: 'center',
          borderTop: '0.5px solid var(--color-border)',
          marginTop: '48px',
        }}>
          <p style={{
            fontSize: '11px',
            color: 'var(--color-text-hint)',
            letterSpacing: '1px',
          }}>
            CHRISTMATIC · Servir le Seigneur Jésus-Christ à travers le cinéma
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}