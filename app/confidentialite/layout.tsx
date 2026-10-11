import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Ce que Christmatic enregistre (et ce qu’il n’enregistre pas) : aucun compte nécessaire pour regarder les films ; e-mail et favoris seulement si vous vous connectez.',
  alternates: { canonical: '/confidentialite' },
}

export default function ConfidentialiteLayout({ children }: { children: React.ReactNode }) {
  return children
}
