export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="footer-logo-placeholder">
              <div className="footer-logo-symbol">⚖</div>
              <div className="footer-logo-name">Dra. Regina Perrotta</div>
              <div className="footer-logo-subtitle">
                ADVOCACIA & CIDADANIA
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contato</h4>

            <div className="footer-contact-item">
              <span className="footer-contact-label">Telefone</span>
              <a href="tel:+551195494265">11 9549-4265</a>
              <a href="tel:+5544997754951">44 99775-4951</a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-label">E-mail</span>
              <a href="mailto:assistenciajuridica@advreginaperrotta.com.br">
                assistenciajuridica@advreginaperrotta.com.br
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Endereço</h4>

            <p className="footer-address">
              Rua Prof. Luiz Eulálio Bueno Vidigal, 175 — sala 1087
              <br />
              Osasco — SP
              <br />
              CEP: 06093-085
            </p>

            <div className="footer-links">
              <a href="#" className="footer-link">
                Política de Privacidade
              </a>

              <a href="#" className="footer-link">
                LGPD
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Regina Perrotta. Todos os direitos reservados.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #d9a6a1;
          padding: 48px 0 24px;
          color: var(--primary-900);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.2fr;
          gap: 70px;
          align-items: start;
          max-width: 900px;
          margin: 0 auto 42px;
        }

        /* MARCA */

        .footer-logo-placeholder {
          width: 128px;
          height: 128px;
          background-color: var(--primary-900);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .footer-logo-symbol {
          font-size: 2.2rem;
          line-height: 1;
          color: var(--accent-400);
          margin-bottom: 8px;
        }

        .footer-logo-name {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          color: var(--accent-400);
          margin-bottom: 4px;
        }

        .footer-logo-subtitle {
          font-family: var(--font-sans);
          font-size: 0.38rem;
          letter-spacing: 0.16em;
          color: var(--accent-400);
        }

        /* TÍTULOS */

        .footer-col-title {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--primary-900);
          margin-bottom: 20px;
        }

        /* CONTATO */

        .footer-contact-item {
          margin-bottom: 18px;
        }

        .footer-contact-label {
          display: block;
          font-size: 0.68rem;
          color: rgba(70, 20, 24, 0.65);
          margin-bottom: 5px;
        }

        .footer-contact-item a {
          display: block;
          font-size: 0.78rem;
          color: var(--primary-900);
          margin-bottom: 2px;
          transition: opacity 0.3s ease;
        }

        .footer-contact-item a:hover {
          opacity: 0.65;
        }

        /* ENDEREÇO */

        .footer-address {
          font-size: 0.78rem;
          color: var(--primary-900);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .footer-link {
          font-size: 0.72rem;
          color: var(--primary-900);
          transition: opacity 0.3s ease;
        }

        .footer-link:hover {
          opacity: 0.65;
        }

        /* COPYRIGHT */

        .footer-bottom {
          max-width: 900px;
          margin: 0 auto;
          padding-top: 22px;
          border-top: 1px solid rgba(70, 20, 24, 0.2);
        }

        .footer-bottom p {
          font-size: 0.68rem;
          color: rgba(70, 20, 24, 0.6);
          text-align: center;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 50px 24px 24px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-logo-placeholder {
            margin: 0 auto;
          }

          .footer-col {
            text-align: center;
          }

          .footer-links {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}