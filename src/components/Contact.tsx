export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-label">Contato</span>

          <h1 className="contact-title">
            Entre em contato
          </h1>

          <p className="contact-intro">
            Para informações, orientações e atendimento jurídico, entre em
            contato pelos canais abaixo.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Telefone</span>

              <a href="tel:+551195494265">
                11 9549-4265
              </a>

              <a href="tel:+5544997754951">
                44 99775-4951
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">E-mail</span>

              <a href="mailto:assistenciajuridica@advreginaperrotta.com.br">
                assistenciajuridica@advreginaperrotta.com.br
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">Endereço profissional</span>

              <p>
                Rua Prof. Luiz Eulálio Bueno Vidigal, 175 — sala 1087
                <br />
                Osasco — SP
                <br />
                CEP: 06093-085
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Fale comigo</h2>

            <form>
              <div className="contact-field">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Telefone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Seu telefone"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Como posso ajudar?"
                />
              </div>

              <button type="submit" className="contact-submit">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
          min-height: 100vh;
          background-color: var(--neutral-50);
          padding: 160px 0 100px;
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .contact-header {
          max-width: 700px;
          margin-bottom: 70px;
        }

        .contact-header .section-label {
          margin-bottom: 14px;
        }

        .contact-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          color: var(--primary-900);
          margin-bottom: 20px;
        }

        .contact-intro {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--neutral-600);
          max-width: 600px;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: start;
        }

        .contact-info {
          padding-top: 8px;
        }

        .contact-item {
          margin-bottom: 38px;
        }

        .contact-label {
          display: block;
          margin-bottom: 10px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent-600);
        }

        .contact-item a,
        .contact-item p {
          display: block;
          margin: 0 0 5px;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--neutral-700);
          text-decoration: none;
        }

        .contact-item a:hover {
          color: var(--primary-700);
        }

        .contact-form {
          background-color: #fff;
          padding: 42px;
          box-shadow: var(--shadow-md);
        }

        .contact-form h2 {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 400;
          color: var(--primary-900);
          margin-bottom: 30px;
        }

        .contact-field {
          margin-bottom: 22px;
        }

        .contact-field label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--neutral-700);
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid var(--neutral-200);
          background-color: #fff;
          color: var(--neutral-800);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
        }

        .contact-field textarea {
          resize: vertical;
        }

        .contact-field input:focus,
        .contact-field textarea:focus {
          border-color: var(--accent-500);
        }

        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border: 1px solid var(--primary-900);
          background-color: var(--primary-900);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-submit:hover {
          background-color: var(--primary-700);
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 130px 0 70px;
          }

          .contact-header {
            margin-bottom: 50px;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .contact-form {
            padding: 28px 22px;
          }
        }
      `}</style>
    </section>
  );
}