'use client'

import { useEffect, useState } from 'react'

interface InstallEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

// Enregistre le service worker et propose l'installation de l'app (bouton Android/Chrome, aide iPhone)
export default function PwaInstall() {
  const [installEvent, setInstallEvent] = useState<InstallEvent | null>(null)
  const [isIos, setIsIos] = useState(false)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    }

    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true
    setInstalled(standalone)
    setIsIos(/iphone|ipad|ipod/i.test(navigator.userAgent) && !standalone)

    const onPrompt = (e: Event) => {
      e.preventDefault()
      setInstallEvent(e as InstallEvent)
    }
    const onInstalled = () => {
      setInstalled(true)
      setInstallEvent(null)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (installed) return null

  async function install() {
    if (!installEvent) return
    await installEvent.prompt()
    await installEvent.userChoice
    setInstallEvent(null)
  }

  if (installEvent) {
    return (
      <p style={{ marginTop: '10px' }}>
        <button
          type="button"
          onClick={install}
          style={{
            background: 'var(--color-gold)',
            color: '#0A0A0A',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 18px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Installer l&apos;app Christmatic
        </button>
      </p>
    )
  }

  if (isIos) {
    return (
      <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--color-text-muted)' }}>
        Installer l&apos;app sur iPhone : touchez « Partager » puis « Sur l&apos;écran d&apos;accueil ».
      </p>
    )
  }

  return null
}
