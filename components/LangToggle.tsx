'use client'

import { useLang } from './LangProvider'

// Sélecteur FR / EN du menu : change la langue de toute l'interface et la mémorise sur l'appareil.
export default function LangToggle() {
  const { lang, setLang } = useLang()

  const style = (active: boolean) => ({
    fontSize: '11px',
    padding: '3px 8px',
    borderRadius: '4px',
    border: 'none',
    background: active ? 'var(--color-gold)' : 'transparent',
    color: active ? '#0A0A0A' : 'var(--color-text-muted)',
    fontWeight: active ? 600 : 400,
    cursor: 'pointer',
  }) as const

  return (
    <div
      className="site-nav-lang"
      role="group"
      aria-label="Langue / Language"
      style={{ display: 'flex', gap: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '3px' }}
    >
      <button type="button" onClick={() => setLang('fr')} aria-pressed={lang === 'fr'} style={style(lang === 'fr')}>FR</button>
      <button type="button" onClick={() => setLang('en')} aria-pressed={lang === 'en'} style={style(lang === 'en')}>EN</button>
    </div>
  )
}
