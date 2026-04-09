import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{
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
          <svg width="18" height="22" viewBox="0 0 100 120" fill="#0A0A0A">
            <path d="M38,4 C32,4 24,8 20,14 C16,20 14,26 16,32 C10,36 6,42 8,50 C10,58 14,62 12,70 C10,78 14,86 20,92 C26,98 34,104 40,108 C46,112 52,114 56,112 C62,108 68,102 72,96 C76,88 78,80 76,72 C80,68 84,62 82,54 C80,46 76,42 74,36 C78,30 76,22 70,16 C64,10 56,6 50,4 C46,3 42,4 38,4 Z"/>
          </svg>
        </div>
        <span style={{
          fontFamily: 'var(--font-corps)',
          fontSize: '16px',
          fontWeight: 600,
          letterSpacing: '2px',
          color: 'var(--color-text-primary)',
        }}>
          CHRIS<span style={{ color: 'var(--color-gold)' }}>TMATIC</span>
        </span>
      </Link>

      {/* LIENS */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'var(--color-gold)' }}>
          Accueil
        </Link>
        <Link href="/francais" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
          🇫🇷 Français
        </Link>
        <Link href="/anglais" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
          🇬🇧 Anglais
        </Link>
      </div>

      {/* TOGGLE FR/EN */}
      <div style={{
        display: 'flex',
        gap: '2px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '6px',
        padding: '3px',
      }}>
        <button style={{
          fontSize: '11px',
          padding: '3px 8px',
          borderRadius: '4px',
          border: 'none',
          background: 'var(--color-gold)',
          color: '#0A0A0A',
          fontWeight: 600,
        }}>FR</button>
        <button style={{
          fontSize: '11px',
          padding: '3px 8px',
          borderRadius: '4px',
          border: 'none',
          background: 'transparent',
          color: 'var(--color-text-muted)',
        }}>EN</button>
      </div>

    </nav>
  )
}