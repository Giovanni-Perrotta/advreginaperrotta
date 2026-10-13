import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Commitment from './components/Commitment';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Frase institucional */}
        <section className="quote-section">
          <div className="quote-content">
            <span className="quote-author">Dra. Regina Perrotta</span>

            <blockquote>
              “O Direito deveria ser inerente à existência humana, jamais algo
              pelo qual fosse necessário lutar. Mas, quando é negado, violado
              ou usurpado, cabe ao advogado ser a mão firme que o sustenta, a
              voz que o reivindica e a confiança de quem precisa vê-lo
              restabelecido.”
            </blockquote>
          </div>
        </section>

        <About />
        <PracticeAreas />
        <Commitment />
        <FAQ />
      </main>

      <Footer />

      <style>{`
        .quote-section {
          background-color: #fdf3f2;
          padding: 72px 24px;
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .quote-content {
          max-width: 620px;
        }

        .quote-author {
          display: block;
          margin-bottom: 10px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: var(--primary-700);
          letter-spacing: 0.04em;
        }

        .quote-content blockquote {
          margin: 0;
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          line-height: 1.15;
          font-weight: 400;
          color: var(--primary-700);
        }

        @media (max-width: 768px) {
          .quote-section {
            padding: 60px 24px;
          }

          .quote-content blockquote {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}