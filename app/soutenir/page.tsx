'use client'

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
            <svg width="80" height="20" viewBox="0 0 124 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z" fill="white"/>
              <path d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802L84.45 25.088a.57.57 0 0 0 .564.658h3.502a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.979-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.710 2.741-7.312 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.564-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z" fill="white" opacity="0.7"/>
              <path d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2.021 7.435 7.435 0 0 1-2.537 1.181 11.53 11.53 0 0 1-3.214.42h-.764a2.305 2.305 0 0 0-2.272 1.941l-.07.374-1.026 6.499-.047.239c-.012.076-.032.114-.059.139a.158.158 0 0 1-.103.038H7.266z" fill="white"/>
              <path d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326a1.338 1.338 0 0 0-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 0 0 .695.814h4.881a1.17 1.17 0 0 0 1.156-.988l.048-.248.916-5.814.059-.32a1.17 1.17 0 0 1 1.156-.988h.728c4.715 0 8.405-1.914 9.484-7.452.45-2.312.217-4.243-.975-5.604a4.652 4.652 0 0 0-1.297-1.096z" fill="white" opacity="0.7"/>
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