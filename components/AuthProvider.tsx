'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { useTr } from './LangProvider'

interface AuthContextValue {
  user: User | null
  loading: boolean
  openLogin: () => void
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  openLogin: () => {},
  signOut: async () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

// Connexion facultative : on regarde les films sans compte ; le compte sert aux favoris (« Ma liste »).
// Méthode : adresse e-mail + code à 6 chiffres reçu par e-mail (pas de mot de passe, pas de lien :
// un lien s'ouvrirait dans le navigateur et non dans la PWA installée).
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let active = true
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return
      setUser(data.session?.user ?? null)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
      if (session) setOpen(false) // connexion réussie : on ferme la fenêtre
    })
    return () => {
      active = false
      sub.subscription.unsubscribe()
    }
  }, [])

  const openLogin = useCallback(() => setOpen(true), [])
  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, openLogin, signOut }}>
      {children}
      {open && !user && <LoginModal onClose={() => setOpen(false)} />}
    </AuthContext.Provider>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '8px',
  border: '0.5px solid var(--color-border-gold)',
  background: 'var(--color-bg-tertiary)',
  color: 'var(--color-text-primary)',
  fontSize: '16px', // 16px : évite le zoom automatique sur iPhone
  outline: 'none',
} as const

const buttonStyle = {
  width: '100%',
  padding: '12px 18px',
  borderRadius: '8px',
  border: 'none',
  background: 'var(--color-gold)',
  color: '#0A0A0A',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
} as const

function LoginModal({ onClose }: { onClose: () => void }) {
  const tr = useTr()
  const [step, setStep] = useState<'email' | 'code'>('email')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function sendCode(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const clean = email.trim().toLowerCase()
    if (!clean.includes('@')) {
      setError(tr('Entrez une adresse e-mail valide.', 'Please enter a valid email address.'))
      return
    }
    setBusy(true)
    const { error } = await supabase.auth.signInWithOtp({
      email: clean,
      options: { shouldCreateUser: true },
    })
    setBusy(false)
    if (error) {
      setError(
        error.status === 429
          ? tr('Trop de demandes. Patientez une minute puis réessayez.', 'Too many requests. Wait a minute and try again.')
          : tr("Impossible d'envoyer le code. Réessayez dans un instant.", 'Could not send the code. Please try again in a moment.')
      )
      return
    }
    setEmail(clean)
    setStep('code')
  }

  async function verifyCode(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const token = code.replace(/\s/g, '')
    if (token.length < 6) {
      setError(tr('Le code contient 6 chiffres.', 'The code has 6 digits.'))
      return
    }
    setBusy(true)
    const { error } = await supabase.auth.verifyOtp({ email, token, type: 'email' })
    setBusy(false)
    if (error) {
      setError(tr('Code incorrect ou expiré. Vérifiez-le ou demandez-en un nouveau.', 'Incorrect or expired code. Check it or request a new one.'))
      return
    }
    // la session est reçue par onAuthStateChange : la fenêtre se ferme toute seule
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={tr('Connexion', 'Log in')}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.75)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'var(--color-bg-secondary, #141414)',
          border: '0.5px solid var(--color-border-gold)',
          borderRadius: '12px',
          padding: '24px',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          aria-label={tr('Fermer', 'Close')}
          style={{ position: 'absolute', top: '10px', right: '14px', background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '22px', cursor: 'pointer' }}
        >
          ×
        </button>

        <h2 style={{ fontFamily: 'var(--font-titre)', fontSize: '22px', fontWeight: 500, margin: '0 0 8px', color: 'var(--color-gold)' }}>
          {step === 'email' ? tr('Ma liste', 'My list') : tr('Entrez votre code', 'Enter your code')}
        </h2>

        {step === 'email' ? (
          <form onSubmit={sendCode}>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: '0 0 16px' }}>
              {tr(
                'Connectez-vous pour garder vos films favoris et les retrouver sur tous vos appareils. Pas de mot de passe : nous vous envoyons un code par e-mail. Les films restent gratuits, avec ou sans compte.',
                'Log in to keep your favorite films and find them on all your devices. No password: we email you a code. Films stay free, with or without an account.'
              )}
            </p>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={tr('votre@email.com', 'your@email.com')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              autoFocus
            />
            {error && <p style={{ color: '#E5484D', fontSize: '13px', margin: '10px 0 0' }}>{error}</p>}
            <div style={{ marginTop: '14px' }}>
              <button type="submit" disabled={busy} style={{ ...buttonStyle, opacity: busy ? 0.6 : 1 }}>
                {busy ? tr('Envoi…', 'Sending…') : tr('Recevoir mon code', 'Send me the code')}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={verifyCode}>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: '0 0 16px' }}>
              {tr('Un code à 6 chiffres a été envoyé à', 'A 6-digit code was sent to')} <strong style={{ color: 'var(--color-text-primary)' }}>{email}</strong>.{' '}
              {tr('Pensez à regarder vos courriers indésirables.', 'Remember to check your spam folder.')}
            </p>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="123456"
              maxLength={8}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ''))}
              style={{ ...inputStyle, letterSpacing: '6px', textAlign: 'center', fontSize: '22px' }}
              autoFocus
            />
            {error && <p style={{ color: '#E5484D', fontSize: '13px', margin: '10px 0 0' }}>{error}</p>}
            <div style={{ marginTop: '14px' }}>
              <button type="submit" disabled={busy} style={{ ...buttonStyle, opacity: busy ? 0.6 : 1 }}>
                {busy ? tr('Vérification…', 'Checking…') : tr('Me connecter', 'Log in')}
              </button>
            </div>
            <button
              type="button"
              onClick={() => { setStep('email'); setCode(''); setError('') }}
              style={{ marginTop: '12px', background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {tr("Changer d'adresse e-mail ou renvoyer un code", 'Change email address or resend the code')}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
