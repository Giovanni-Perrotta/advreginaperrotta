import { FormEvent, useState } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setSent(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('_subject', 'Novo contato pelo site — Regina Perrotta Advocacia');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_replyto', String(formData.get('email') || ''));

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/assistenciajuridica@advreginaperrotta.com.br',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      form.reset();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contato" className="contact">
      <div className="contact-container">

        <div className="contact-intro">
          <span className="section-label">Contato</span>

          <h1>Entre em contato</h1>

          <p>
            Para informações, orientações e atendimento jurídico, entre em
            contato pelos canais abaixo.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span className="contact-detail-label">Telefone</span>
              <a href="tel:+551195494265">11 9549-4265</a>
              <a href="tel:+5544997754951">44 99775-4951</a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">E-mail</span>
              <a href="mailto:assistenciajuridica@advreginaperrotta.com.br">
                assistenciajuridica@advreginaperrotta.com.br
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">
                Endereço profissional
              </span>

              <p>
                Rua Prof. Luiz Eulálio Bueno Vidigal, 175 — sala 1087
                <br />
                Osasco — SP
                <br />
                CEP: 06093-085
              </p>
            </div>

          </div>
        </div>

        <div className="contact-form-wrap">

          <div className="contact-form-header">
            <h2>Fale comigo</h2>
            <p>
              Preencha os dados abaixo e envie sua mensagem.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="form-row">

              <div className="form-field">
                <label htmlFor="nome">
                  Nome <span>*</span>
                </label>

                <input
                  id="nome"
                  name="Nome"
                  type="text"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="sobrenome">
                  Sobrenome <span>*</span>
                </label>

                <input
                  id="sobrenome"
                  name="Sobrenome"
                  type="text"
                  placeholder="Seu sobrenome"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label htmlFor="email">
                  E-mail <span>*</span>
                </label>

                <input
                  id="email"
                  name="E-mail"
                  type="email"
                  placeholder="Seu e-mail"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="endereco">
                  Endereço
                </label>

                <input
                  id="endereco"
                  name="Endereço"
                  type="text"
                  placeholder="Seu endereço"
                />
              </div>

            </div>

            <div className="form-field">
              <label htmlFor="telefone">
                Telefone
              </label>

              <input
                id="telefone"
                name="Telefone"
                type="tel"
                placeholder="Seu telefone"
              />
            </div>

            <div className="form-field">
              <label htmlFor="assunto">
                Assunto <span>*</span>
              </label>

              <input
                id="assunto"
                name="Assunto"
                type="text"
                placeholder="Assunto da mensagem"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="mensagem">
                Mensagem <span>*</span>
              </label>

              <textarea
                id="mensagem"
                name="Mensagem"
                placeholder="Escreva sua mensagem"
                rows={6}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={sending}
            >
              {sending ? 'Enviando...' : 'Enviar mensagem'}
            </button>

            {sent && (
              <div className="form-success">
                Sua mensagem foi enviada com sucesso.
              </div>
            )}

            {error && (
              <div className="form-error">
                Não foi possível enviar a mensagem. Tente novamente ou entre
                em contato pelo telefone ou e-mail.
              </div>
            )}

          </form>
        </div>

      </div>

      <style>{`
        .contact {
          min-height: 100vh;
          background-color: var(--neutral-50);
          padding: 150px 0 100px;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-intro {
          padding-top: 20px;
        }

        .contact-intro h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.1;
          color: var(--primary-700);
          margin: 12px 0 24px;
        }

        .contact-intro > p {
          max-width: 520px;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--neutral-600);
          margin-bottom: 56px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-detail {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .contact-detail-label {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-600);
          margin-bottom: 10px;
        }

        .contact-detail a,
        .contact-detail p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--neutral-700);
          text-decoration: none;
          margin: 0;
        }

        .contact-detail a:hover {
          color: var(--primary-700);
        }

        .contact-form-wrap {
          background-color: #fff;
          padding: 48px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .contact-form-header {
          margin-bottom: 32px;
        }

        .contact-form-header h2 {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 400;
          color: var(--primary-700);
          margin-bottom: 8px;
        }

        .contact-form-header p {
          font-size: 0.9rem;
          color: var(--neutral-500);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
        }

        .form-field label {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--primary-700);
          margin-bottom: 7px;
        }

        .form-field label span {
          color: var(--primary-700);
        }

        .form-field input,
        .form-field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid var(--neutral-300);
          background-color: #fff;
          padding: 12px 13px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--neutral-700);
          outline: none;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 130px;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          border-color: var(--primary-600);
          box-shadow: 0 0 0 2px rgba(74, 14, 18, 0.08);
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: var(--neutral-400);
        }

        .contact-submit {
          width: 100%;
          border: none;
          background-color: var(--primary-700);
          color: #fff;
          padding: 14px 20px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          cursor: pointer;
          transition:
            background-color 0.3s ease,
            opacity 0.3s ease;
        }

        .contact-submit:hover {
          background-color: var(--primary-900);
        }

        .contact-submit:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .form-success {
          padding: 12px 14px;
          background-color: #eef7ef;
          border: 1px solid #c8dfca;
          color: #315d36;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .form-error {
          padding: 12px 14px;
          background-color: #fff1f1;
          border: 1px solid #e1bcbc;
          color: #7a2020;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .contact {
            padding: 130px 0 80px;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .contact-form-wrap {
            padding: 36px;
          }
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 0 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .contact-form-wrap {
            padding: 28px 22px;
          }
        }
      `}</style>
    </section>
  );
}