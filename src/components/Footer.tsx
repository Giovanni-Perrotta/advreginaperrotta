export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="Dra. Regina Perrotta"
              className="footer-logo"
            />

            <div className="footer-oab">
              <span>OAB/SP 545130</span>
              <span>OAB/PR 137462</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contato</h4>

            <div className="footer-contact-item">
              <span className="footer-contact-label">WhatsApp</span>

              <a
                href="https://wa.me/5511954094265?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico."
                target="_blank"
                rel="noopener noreferrer"
              >
                11 95409-4265
              </a>

              <a
                href="https://wa.me/5544997754951?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico."
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
            <h4 className="footer-col-title">Endereços</h4>

            <div className="footer-address-block">
              <span className="footer-address-label">
                São Paulo
              </span>

              <p className="footer-address">
                Rua Prof. Luiz Eulálio Bueno Vidigal, 175 — sala 1087
                <br />
                Osasco — SP
                <br />
                CEP: 06093-085
              </p>
            </div>

            <div className="footer-address-block">
              <span className="footer-address-label">
                Paraná
              </span>

              <p className="footer-address">
                R. Antônio Buzignani, 85 — Vila Operária — Paranavaí
                <br />
                CEP: 87708-280
              </p>
            </div>

            <div className="footer-links">
              <a
                href="/privacidade"
                className="footer-link"
              >
                Política de Privacidade
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
          background-color: #7f3438;
          padding: 80px 0 32px;
          color: rgba(255,255,255,0.7);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1.25fr;
          gap: 48px;
          margin-bottom: 56px;
          align-items: start;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo {
          width: 134px;
          height: auto;
          display: block;
          object-fit: contain;
          margin-bottom: 22px;
        }

        .footer-oab {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.72);
          letter-spacing: 0.04em;
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

        .footer-contact-label,
        .footer-address-label {
          display: block;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          margin-bottom: 6px;
        }

        .footer-contact-item a {
          display: block;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.8);
          transition: color 0.3s ease;
          margin-bottom: 4px;
          text-decoration: none;
        }

        .footer-contact-item a:hover {
          color: var(--accent-400);
        }

        .footer-address-block {
          margin-bottom: 20px;
        }

        .footer-address {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          margin: 0;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }

        .footer-link {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .footer-link:hover {
          color: var(--accent-400);
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.18);
        }

        .footer-bottom p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          text-align: center;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 28px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-logo {
            width: 140px;
          }
        }
      `}</style>
    </footer>
  );
}