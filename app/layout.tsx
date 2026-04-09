import type { Metadata } from 'next'
import './globals.css'
import Nav from '../components/Nav'

export const metadata: Metadata = {
  title: 'Christmatic — Films chrétiens d\'Afrique noire',
  description: 'Servir le Seigneur Jésus-Christ à travers le cinéma africain chrétien',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
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
      </body>
    </html>
  )
}