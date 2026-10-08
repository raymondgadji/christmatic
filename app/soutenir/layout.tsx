import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soutenir Christmatic',
  alternates: { canonical: '/soutenir' },
}

export default function SoutenirLayout({ children }: { children: React.ReactNode }) {
  return children
}
