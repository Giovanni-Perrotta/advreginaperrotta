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

    formData.append(
      '_subject',
      'Novo contato pelo site — Regina Perrotta Advocacia'
    );
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_replyto', String(formData.get('E-mail') || ''));

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/regislegisassessoria@gmail.com',
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

      const result = await response.json();
      if (result.success !== 'true' && result.success !== true) {
        throw new Error('Envio não confirmado pelo serviço');
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
              <span className="contact-detail-label">WhatsApp</span>

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

            <div className="contact-detail">
              <span className="contact-detail-label">E-mail</span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=regislegisassessoria@gmail.com"
