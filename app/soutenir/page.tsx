export default function SoutenirPage() {
  return (
    <main className="soutenir-page">
      <div className="soutenir-container">

        {/* Header */}
        <div className="soutenir-header">
          <div className="soutenir-icon">🙏</div>
          <h1 className="soutenir-title">Soutenir le Ministère</h1>
          <p className="soutenir-subtitle">
            Chaque don permet à Christmatic de continuer à mettre le cinéma africain chrétien au service de l&apos;Évangile.
          </p>
        </div>

        {/* Vision */}
        <div className="soutenir-vision">
          <p>
            Christmatic est une plateforme à but spirituel. Nous sélectionnons avec discernement
            des films chrétiens d&apos;Afrique noire pour évangéliser et édifier le Corps de Christ —
            en France, en Belgique, au Canada et partout dans la diaspora africaine.
          </p>
          <p>
            Vos dons couvrent les frais techniques (hébergement, domaines) et nous permettent
            de continuer à grandir pour la gloire de Dieu.
          </p>
        </div>

        {/* Utilisation des dons */}
        <div className="soutenir-usages">
          <h2>Vos dons servent à</h2>
          <div className="usage-grid">
            <div className="usage-card">
              <span className="usage-icon">🌍</span>
              <span>Maintenir la plateforme en ligne</span>
            </div>
            <div className="usage-card">
              <span className="usage-icon">🎬</span>
              <span>Ajouter de nouveaux films chrétiens</span>
            </div>
            <div className="usage-card usage-card--highlight">
              <span className="usage-icon">📺</span>
              <div>
                <strong>Développer l&apos;application Android TV</strong>
                <p>
                  Notre grande vision : une app Android TV pour regarder Christmatic
                  directement sur votre télévision — comme Netflix, mais pour l&apos;Évangile.
                </p>
              </div>
            </div>
            <div className="usage-card">
              <span className="usage-icon">✝️</span>
              <span>Étendre la portée de l&apos;Évangile</span>
            </div>
          </div>
        </div>

        {/* Bouton don PayPal */}
        <div className="soutenir-cta">
          <h2>Faire un don</h2>
          <p className="cta-desc">Montant libre — en toute grâce, selon votre cœur.</p>
          <a
            href="https://paypal.me/christmatic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-paypal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.144 19.532l1.049-5.751c.11-.606.691-1.002 1.304-.99 1.73.033 5.026.04 6.731-1.808 1.877-2.04 1.52-5.124.02-6.408C14.548 3.085 12.637 3 10.5 3H4.183a1.5 1.5 0 0 0-1.48 1.249L.553 17.241A1 1 0 0 0 1.54 18.4h4.108a1.5 1.5 0 0 0 1.496-1.368zM16.083 9.5c.069 2.705-1.822 4.5-5.583 4.5H9l1-5.5h1.5c2.088 0 4.52.222 4.583 1z"/>
              <path d="M21.5 9c.552 0 1.053.246 1.39.64.338.392.474.912.38 1.421l-1.308 7.15A1.5 1.5 0 0 1 20.484 19.5H17l1.5-8.5h2.25c.276 0 .5-.224.5-.5V9h.25z" opacity=".5"/>
            </svg>
            Soutenir via PayPal
          </a>
          <p className="cta-note">
            Vous serez redirigé vers PayPal. Votre don est sécurisé.
          </p>
        </div>

        {/* Verset */}
        <div className="soutenir-verset">
          <p>
            &ldquo;Que chacun donne comme il l&apos;a résolu en son cœur, sans tristesse ni contrainte ;
            car Dieu aime celui qui donne avec joie.&rdquo;
          </p>
          <span>— 2 Corinthiens 9:7</span>
        </div>

      </div>

      <style jsx>{`
        .soutenir-page {
          min-height: 100vh;
          padding: 60px 20px 80px;
          background: var(--color-bg-primary);
        }

        .soutenir-container {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .soutenir-header { text-align: center; }

        .soutenir-icon { font-size: 48px; margin-bottom: 16px; }

        .soutenir-title {
          font-family: var(--font-titre);
          font-size: 2.4rem;
          color: var(--color-gold);
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .soutenir-subtitle {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          line-height: 1.7;
          margin: 0;
        }

        .soutenir-vision {
          border-left: 3px solid var(--color-gold);
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .soutenir-vision p {
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0;
        }

        .soutenir-usages h2 {
          font-family: var(--font-titre);
          color: var(--color-text-primary);
          font-size: 1.3rem;
          margin: 0 0 20px;
        }

        .usage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .usage-card {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .usage-card--highlight {
          grid-column: 1 / -1;
          border-color: var(--color-border-gold);
          background: var(--color-gold-muted);
          align-items: flex-start;
        }

        .usage-card--highlight strong {
          display: block;
          color: var(--color-gold);
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .usage-card--highlight p {
          margin: 0;
          color: var(--color-text-muted);
          font-size: 0.88rem;
          line-height: 1.6;
        }

        .usage-icon { font-size: 22px; flex-shrink: 0; }

        .soutenir-cta {
          text-align: center;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-gold);
          border-radius: 16px;
          padding: 40px 32px;
        }

        .soutenir-cta h2 {
          font-family: var(--font-titre);
          color: var(--color-text-primary);
          font-size: 1.5rem;
          margin: 0 0 8px;
        }

        .cta-desc { color: var(--color-text-muted); margin: 0 0 28px; }

        .btn-paypal {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0070BA;
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }

        .btn-paypal:hover {
          background: #005ea6;
          transform: translateY(-2px);
        }

        .cta-note {
          color: var(--color-text-hint);
          font-size: 0.82rem;
          margin: 16px 0 0;
        }

        .soutenir-verset {
          text-align: center;
          padding: 32px;
          border-top: 1px solid var(--color-border);
        }

        .soutenir-verset p {
          font-family: var(--font-titre);
          font-style: italic;
          color: var(--color-text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0 0 8px;
        }

        .soutenir-verset span { color: var(--color-gold); font-size: 0.88rem; }

        @media (max-width: 600px) {
          .soutenir-title { font-size: 1.8rem; }
          .usage-grid { grid-template-columns: 1fr; }
          .usage-card--highlight { grid-column: 1; }
          .soutenir-cta { padding: 28px 20px; }
          .btn-paypal { width: 100%; justify-content: center; }
        }
      `}</style>
    </main>
  );
}