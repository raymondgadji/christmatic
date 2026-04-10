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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188 49" width="120" height="31">
              <path fill="#0070E0" d="M164.01 11.446l-4.012 25.207a.643.643 0 0 0 .642.746h4.748a.701.701 0 0 0 .698-.589l4.012-25.207a.643.643 0 0 0-.642-.746h-4.748a.692.692 0 0 0-.698.589zm-5.07 7.356h-4.505a.699.699 0 0 0-.697.588l-.149.928s-3.499-3.794-9.694-1.23c-3.554 1.468-5.26 4.501-5.986 6.723 0 0-2.304 6.753 2.907 10.47 0 0 4.832 3.575 10.273-.22l-.094.592a.644.644 0 0 0 .37.686c.085.04.178.06.272.06h4.508a.692.692 0 0 0 .698-.589l2.742-17.262a.632.632 0 0 0-.149-.521.643.643 0 0 0-.496-.226zm-6.629 9.54a5.005 5.005 0 0 1-1.715 3.095 5.073 5.073 0 0 1-3.345 1.203 4.602 4.602 0 0 1-1.416-.206c-1.945-.62-3.055-2.474-2.736-4.484a5.01 5.01 0 0 1 1.717-3.093 5.08 5.08 0 0 1 3.343-1.207 4.6 4.6 0 0 1 1.416.208c1.957.616 3.062 2.473 2.741 4.485h-.005zm-24.056.477c2.443 0 4.806-.868 6.662-2.446a10.147 10.147 0 0 0 3.456-6.158c.789-4.993-3.14-9.351-8.71-9.351h-8.973a.699.699 0 0 0-.697.589L115.98 36.66a.644.644 0 0 0 .37.686c.086.04.178.06.272.06h4.751a.699.699 0 0 0 .697-.589l1.178-7.402a.692.692 0 0 1 .698-.59l4.309-.006zm3.974-8.831c-.293 1.846-1.731 3.205-4.482 3.205h-3.517l1.068-6.713h3.454c2.844.005 3.77 1.67 3.477 3.513v-.005z"/>
              <path fill="#003087" d="M110.567 19.23l-5.434 9.105-2.758-9.038a.694.694 0 0 0-.672-.495h-4.904a.526.526 0 0 0-.527.446.515.515 0 0 0 .025.247l4.942 15.224-4.47 7.174a.516.516 0 0 0 .18.728.527.527 0 0 0 .269.07h5.282a.876.876 0 0 0 .751-.42l13.804-22.667a.512.512 0 0 0 .011-.53.524.524 0 0 0-.463-.263h-5.28a.877.877 0 0 0-.756.419zm-16.548-.428H89.51a.7.7 0 0 0-.698.59l-.146.927s-3.502-3.794-9.697-1.23c-3.553 1.468-5.26 4.501-5.983 6.723 0 0-2.306 6.753 2.904 10.47 0 0 4.833 3.575 10.274-.22l-.094.592a.642.642 0 0 0 .37.686c.085.04.178.06.272.06h4.508a.701.701 0 0 0 .697-.589l2.743-17.262a.642.642 0 0 0-.37-.687.655.655 0 0 0-.272-.06zm-6.63 9.542a5.011 5.011 0 0 1-1.716 3.091 5.082 5.082 0 0 1-3.343 1.206 4.605 4.605 0 0 1-1.414-.206c-1.944-.62-3.053-2.474-2.734-4.485a5.011 5.011 0 0 1 1.723-3.098 5.082 5.082 0 0 1 3.353-1.201c.48-.005.959.065 1.417.208 1.937.616 3.04 2.472 2.72 4.485h-.005zm-24.055.476a10.284 10.284 0 0 0 6.656-2.449 10.144 10.144 0 0 0 3.452-6.156c.79-4.992-3.14-9.35-8.708-9.35H55.76a.7.7 0 0 0-.698.588l-4 25.2a.642.642 0 0 0 .37.687c.085.039.178.06.272.06h4.748a.7.7 0 0 0 .698-.59l1.176-7.402a.692.692 0 0 1 .698-.589h4.31zm3.974-8.832c-.293 1.846-1.73 3.205-4.481 3.205H59.31l1.066-6.713h3.454c2.845.005 3.77 1.671 3.478 3.513v-.005z"/>
              <path fill="#001C64" d="M32.639 12.16c.107-5.566-4.484-9.836-10.797-9.836H8.784a1.277 1.277 0 0 0-1.262 1.078L2.29 36.095a1.038 1.038 0 0 0 1.025 1.2h7.736l-1.209 7.57a1.038 1.038 0 0 0 1.025 1.2h6.302c.304 0 .575-.109.807-.306.23-.198.268-.471.316-.772l1.85-10.884c.047-.3.2-.69.431-.888.231-.198.433-.306.738-.306h3.856c6.183 0 11.428-4.395 12.387-10.507.679-4.338-1.181-8.286-4.915-10.243z"/>
              <path fill="#0070E0" d="M12.725 25.238l-1.927 12.218-1.21 7.664a1.038 1.038 0 0 0 1.026 1.199h6.67a1.276 1.276 0 0 0 1.26-1.078l1.758-11.139a1.277 1.277 0 0 1 1.261-1.078h3.926c6.183 0 11.428-4.51 12.388-10.622.68-4.338-1.504-8.286-5.238-10.243-.01.462-.05.923-.121 1.38-.959 6.11-6.206 10.621-12.387 10.621h-6.145a1.278 1.278 0 0 0-1.261 1.079"/>
              <path fill="#003087" d="M10.797 37.456h-7.76a1.037 1.037 0 0 1-1.024-1.2L7.245 3.078A1.277 1.277 0 0 1 8.506 2h13.336c6.313 0 10.904 4.594 10.797 10.159-1.571-.824-3.417-1.295-5.439-1.295H16.082a1.277 1.277 0 0 0-1.262 1.078l-2.094 13.296-1.93 12.218z"/>
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
          gap: 14px;
          background: #ffffff;
          color: #003087;
          padding: 16px 36px;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid #e0e0e0;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .btn-paypal:hover {
          box-shadow: 0 4px 20px rgba(0,112,224,0.3);
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