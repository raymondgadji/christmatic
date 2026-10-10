'use client'

import Link from 'next/link'
import { useAuth } from './AuthProvider'

// Dans le menu : « Se connecter » (sans compte) ou « Ma liste » (connecté).
export default function NavAccount() {
  const { user, loading, openLogin } = useAuth()

  if (loading) return null

  if (user) {
    return (
      <Link href="/ma-liste" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
        ♥ Ma liste
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={openLogin}
      style={{ fontSize: '13px', color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    >
      Se connecter
    </button>
  )
}
