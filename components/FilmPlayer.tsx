'use client'

import { useEffect, useRef } from 'react'

interface Props {
  src: string
  title: string
}

type FullscreenEl = HTMLDivElement & { webkitRequestFullscreen?: () => void }
type FullscreenDoc = Document & { webkitFullscreenElement?: Element | null; webkitExitFullscreen?: () => void }

function currentFullscreenElement() {
  const d = document as FullscreenDoc
  return d.fullscreenElement || d.webkitFullscreenElement || null
}

function exitAllFullscreen() {
  const d = document as FullscreenDoc
  try {
    if (d.exitFullscreen) d.exitFullscreen().catch(() => {})
    else d.webkitExitFullscreen?.()
  } catch {
    // rien à quitter
  }
}

// Lecteur du film : pleine largeur sur téléphone, bouton « Plein écran » (bascule en paysage quand le navigateur le permet)
export default function FilmPlayer({ src, title }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const nested = useRef(false)

  useEffect(() => {
    // Le lecteur YouTube a son propre bouton plein écran : il s'empile sur le nôtre (2 niveaux).
    // Quand l'utilisateur quitte le niveau YouTube, on quitte aussi le nôtre : un seul « exit » suffit.
    const onChange = () => {
      const fs = currentFullscreenElement()
      if (fs && fs.tagName === 'IFRAME') {
        nested.current = true
        return
      }
      if (fs && fs === ref.current && nested.current) {
        nested.current = false
        exitAllFullscreen()
        return
      }
      if (!fs) {
        nested.current = false
        try {
          screen.orientation?.unlock?.()
        } catch {
          // non pris en charge : sans effet
        }
      }
    }
    document.addEventListener('fullscreenchange', onChange)
    document.addEventListener('webkitfullscreenchange', onChange)
    return () => {
      document.removeEventListener('fullscreenchange', onChange)
      document.removeEventListener('webkitfullscreenchange', onChange)
    }
  }, [])

  async function goFullscreen() {
    const el = ref.current as FullscreenEl | null
    if (!el) return
    try {
      if (el.requestFullscreen) await el.requestFullscreen()
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
      else return
      try {
        await (screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> }).lock?.('landscape')
      } catch {
        // verrouillage non disponible : le plein écran reste actif
      }
    } catch {
      // plein écran refusé par le navigateur : le lecteur YouTube garde son propre bouton
    }
  }

  return (
    <div className="film-player-wrap">
      <div className="film-player" ref={ref}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <button type="button" className="film-player-fs" onClick={goFullscreen} aria-label="Plein écran">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
        </svg>
        Plein écran
      </button>
    </div>
  )
}
