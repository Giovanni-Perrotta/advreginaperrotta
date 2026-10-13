export default function Footer() {
  return (
    <footer id="rodape" className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="Dra. Regina Perrotta"
              className="footer-logo"
            />
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contato</h4>

            <div className="footer-contact-item">
              <span className="footer-contact-label">Telefone</span>

              <a
                href="https://wa.me/551195494265"
                target="_blank"
                rel="noopener noreferrer"
              >
                11 9549-4265
              </a>

              <a
                href="https://wa.me/5544997754951"
                target="_blank"
                rel="noopener noreferrer"
              >
                44 99775-4951
              </a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-label">E-mail</span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=assistenciajuridica@advreginaperrotta.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <p>
            © 2026 Regina Perrotta. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--primary-900);
          padding: 80px 0 32px;
          color: rgba(255,255,255,0.7);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
          align-items: start;
        }

        .footer-brand {
          display: flex;
          align-items: flex-start;
        }

        .footer-logo {
          width: 150px;
          height: 150px;
          object-fit: contain;
          display: block;
        }

        .footer-col-title {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-400);
          margin-bottom: 24px;
        }

        .footer-contact-item {
          margin-bottom: 20px;
        }

        .footer-contact-label {
          display: block;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 6px;
        }

        .footer-contact-item a {
          display: block;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.7);
          transition: color 0.3s ease;
          margin-bottom: 2px;
          text-decoration: none;
        }

        .footer-contact-item a:hover {
          color: var(--accent-400);
        }

        .footer-address {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-link {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .footer-link:hover {
          color: var(--accent-400);
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footer-bottom p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          text-align: center;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-logo {
            width: 130px;
            height: 130px;
          }
        }
      `}</style>
    </footer>
  );
}