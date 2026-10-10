'use client'

import Link from 'next/link'
import { useAuth } from './AuthProvider'
import { T } from './LangProvider'

// Dans le menu : « Se connecter » (sans compte) ou « Ma liste » (connecté).
export default function NavAccount() {
  const { user, loading, openLogin } = useAuth()

  if (loading) return null

  if (user) {
    return (
      <Link href="/ma-liste" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
        ♥ <T fr="Ma liste" en="My list" />
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={openLogin}
      style={{ fontSize: '13px', color: 'var(--color-text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    >
      <T fr="Se connecter" en="Log in" />
    </button>
  )
}
