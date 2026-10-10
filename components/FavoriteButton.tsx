'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthProvider'
import { useTr } from './LangProvider'

// Bouton « Ma liste » d'une page film. Sans compte : ouvre la fenêtre de connexion.
export default function FavoriteButton({ filmId }: { filmId: string }) {
  const { user, loading, openLogin } = useAuth()
  const tr = useTr()
  const [fav, setFav] = useState(false)
  const [busy, setBusy] = useState(false)
  const [pending, setPending] = useState(false) // clic fait avant la connexion : on ajoute le film dès qu'elle réussit

  useEffect(() => {
    if (!user) {
      setFav(false)
      return
    }
    if (pending) return // l'ajout en attente (juste après la connexion) fixe lui-même l'état
    let active = true
    supabase
      .from('favorites')
      .select('id')
      .eq('film_id', filmId)
      .maybeSingle()
      .then(({ data }) => {
        if (active) setFav(!!data)
      })
    return () => {
      active = false
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, filmId])

  useEffect(() => {
    if (!user || !pending) return
    setPending(false)
    setFav(true)
    supabase
      .from('favorites')
      .insert({ film_id: filmId })
      .then(({ error }) => {
        // 23505 = déjà en favori : l'état voulu est atteint
        if (error && error.code !== '23505') setFav(false)
      })
  }, [user, pending, filmId])

  async function toggle() {
    if (loading || busy) return
    if (!user) {
      setPending(true)
      openLogin()
      return
    }
    setBusy(true)
    const next = !fav
    setFav(next) // affichage immédiat, annulé si l'enregistrement échoue
    const { error } = next
      ? await supabase.from('favorites').insert({ film_id: filmId })
      : await supabase.from('favorites').delete().eq('film_id', filmId)
    // 23505 = déjà en favori : l'état voulu est atteint
    if (error && error.code !== '23505') setFav(!next)
    setBusy(false)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={fav}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        fontWeight: 600,
        padding: '10px 18px',
        borderRadius: '8px',
        cursor: 'pointer',
        border: '0.5px solid var(--color-border-gold)',
        background: fav ? 'var(--color-gold)' : 'var(--color-bg-tertiary)',
        color: fav ? '#0A0A0A' : 'var(--color-text-primary)',
      }}
    >
      <span aria-hidden="true">{fav ? '♥' : '♡'}</span>
      {fav ? tr('Dans ma liste', 'In my list') : tr('Ajouter à ma liste', 'Add to my list')}
    </button>
  )
}
