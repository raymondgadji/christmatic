'use client'

import { useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'
import { useTr } from './LangProvider'

interface Props {
  src: string
  title: string
  filmSlug?: string
}

// Compte les lectures (table play_events) sans jamais bloquer ni casser le lecteur.
function trackPlay(slug: string, event: 'play' | 'play30') {
  try {
    supabase
      .from('play_events')
      .insert({ film_slug: slug, event })
      .then(() => {}, () => {})
  } catch {
    // le suivi est facultatif
  }
}

type FullscreenEl = HTMLDivElement & { webkitRequestFullscreen?: () => void }
type FullscreenDoc = Document & { webkitFullscreenElement?: Element | null; webkitExitFullscreen?: () => void }
type LockableOrientation = ScreenOrientation & { lock?: (o: string) => Promise<void> }

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

// Après le plein écran, certains Android laissent la page dézoomée (« petit écran ») :
// on impose brièvement une échelle minimale de 1, puis on restaure la balise viewport d'origine.
function resetPageScale() {
  const meta = document.querySelector('meta[name="viewport"]')
  if (!meta) return
  const original = meta.getAttribute('content') || 'width=device-width, initial-scale=1'
  meta.setAttribute('content', 'width=device-width, initial-scale=1, minimum-scale=1')
  window.setTimeout(() => meta.setAttribute('content', original), 400)
  window.dispatchEvent(new Event('resize'))
}

// Lecteur du film : pleine largeur sur téléphone, bouton « Plein écran » qui passe AUTOMATIQUEMENT en paysage.
// ⚠️ Décision de Raymond : ne jamais retirer le plein écran automatique en paysage (meilleure expérience utilisateur).
export default function FilmPlayer({ src, title, filmSlug }: Props) {
  const tr = useTr()
  const ref = useRef<HTMLDivElement>(null)
  const nested = useRef(false)
  const orientationBefore = useRef<string>('')

  // Suivi des lectures : on écoute l'état du lecteur YouTube (postMessage, le paramètre enablejsapi=1 est dans `src`).
  // 'play' = lecture démarrée ; 'play30' = 30 s de lecture cumulées. Une seule fois de chaque par visite de la page.
  // Aucun effet sur le plein écran ni sur l'affichage : en cas d'erreur, rien ne se passe.
  useEffect(() => {
    if (!filmSlug) return
    const iframe = ref.current?.querySelector('iframe')
    if (!iframe) return

    let started = false
    let reached30 = false
    let watched = 0
    let ticker: number | undefined
    let handshake: number | undefined
    let heard = false
    let tries = 0

    function say() {
      try {
        iframe?.contentWindow?.postMessage(JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }), 'https://www.youtube.com')
      } catch {
        // pas encore prêt
      }
    }

    function stopTicker() {
      if (ticker !== undefined) {
        window.clearInterval(ticker)
        ticker = undefined
      }
    }

    function onMessage(e: MessageEvent) {
      if (e.origin !== 'https://www.youtube.com' || e.source !== iframe?.contentWindow) return
      let data: { event?: string; info?: unknown } | null = null
      try {
        data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
      } catch {
        return
      }
      if (!data) return
      heard = true
      let state: number | undefined
      if (data.event === 'onStateChange' && typeof data.info === 'number') state = data.info
      else if (data.event === 'infoDelivery' && data.info && typeof (data.info as { playerState?: unknown }).playerState === 'number') {
        state = (data.info as { playerState: number }).playerState
      }
      if (state === undefined) return
      if (state === 1) {
        if (!started) {
          started = true
          trackPlay(filmSlug as string, 'play')
        }
        if (!reached30 && ticker === undefined) {
          ticker = window.setInterval(() => {
            watched += 1
            if (watched >= 30 && !reached30) {
              reached30 = true
              trackPlay(filmSlug as string, 'play30')
              stopTicker()
            }
          }, 1000)
        }
      } else {
        stopTicker()
      }
    }

    window.addEventListener('message', onMessage)
    iframe.addEventListener('load', say)
    say()
    // YouTube ne répond qu'une fois son lecteur prêt : on retente chaque seconde (20 fois au plus) jusqu'à sa première réponse.
    handshake = window.setInterval(() => {
      tries += 1
      if (heard || tries > 20) {
        window.clearInterval(handshake)
        return
      }
      say()
    }, 1000)

    return () => {
      window.removeEventListener('message', onMessage)
      iframe.removeEventListener('load', say)
      stopTicker()
      if (handshake !== undefined) window.clearInterval(handshake)
    }
  }, [filmSlug])

  useEffect(() => {
    // À la sortie : on remet l'orientation d'origine (portrait) puis on libère la rotation, et on remet la page à l'échelle normale.
    function restorePage() {
      const so = screen.orientation as LockableOrientation | undefined
      const before = orientationBefore.current
      if (so && before.startsWith('portrait') && so.lock) {
        so.lock(before)
          .catch(() => {})
          .finally(() => window.setTimeout(() => {
            try {
              so.unlock?.()
            } catch {
              // non pris en charge
            }
          }, 700))
      } else {
        try {
          so?.unlock?.()
        } catch {
          // non pris en charge
        }
      }
      resetPageScale()
      window.setTimeout(resetPageScale, 600)
      window.setTimeout(resetPageScale, 1300)
    }

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
        restorePage()
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
    orientationBefore.current = screen.orientation?.type || ''
    try {
      if (el.requestFullscreen) await el.requestFullscreen()
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
      else return
      try {
        await (screen.orientation as LockableOrientation).lock?.('landscape')
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
      <button type="button" className="film-player-fs" onClick={goFullscreen} aria-label={tr('Plein écran', 'Full screen')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
        </svg>
        {tr('Plein écran', 'Full screen')}
      </button>
    </div>
  )
}
