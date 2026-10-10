import Link from 'next/link'
import NavAccount from './NavAccount'
import LangToggle from './LangToggle'
import { T } from './LangProvider'

export default function Nav() {
  return (
    <nav className="site-nav" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      borderBottom: '0.5px solid var(--color-border-gold)',
      background: 'var(--color-bg-primary)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>

      {/* LOGO */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          background: 'var(--color-gold)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="18" height="22" viewBox="0 0 100 120" fill="#0A0A0A" aria-hidden="true">
            <rect x="40" y="6" width="20" height="108" rx="3" />
            <rect x="14" y="34" width="72" height="20" rx="3" />
          </svg>
        </div>
        <span style={{
          fontFamily: 'var(--font-corps)',
          fontSize: '16px',
          fontWeight: 600,
          letterSpacing: '2px',
          color: 'var(--color-text-primary)',
        }}>
          CHRIST<span style={{ color: 'var(--color-gold)' }}>MATIC</span>
        </span>
      </Link>

      {/* LIENS */}
      <div className="site-nav-links" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'var(--color-gold)' }}>
          <T fr="Accueil" en="Home" />
        </Link>
        <Link href="/francais" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
          🇫🇷 Français
        </Link>
        <Link href="/english" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
          🇬🇧 English
        </Link>
        <NavAccount />
        <Link href="/soutenir" style={{
          fontSize: '13px',
          color: '#0A0A0A',
          background: 'var(--color-gold)',
          padding: '5px 14px',
          borderRadius: '20px',
          fontWeight: 600,
          textDecoration: 'none',
        }}>
          🙏 <T fr="Soutenir" en="Support" />
        </Link>
      </div>

      {/* TOGGLE FR/EN */}
      <LangToggle />

    </nav>
  )
}