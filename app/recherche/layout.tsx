import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recherche',
  robots: { index: false, follow: true },
}

export default function RechercheLayout({ children }: { children: React.ReactNode }) {
  return children
}
