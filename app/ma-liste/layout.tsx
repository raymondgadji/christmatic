import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ma liste',
  robots: { index: false, follow: false },
}

export default function MaListeLayout({ children }: { children: React.ReactNode }) {
  return children
}
