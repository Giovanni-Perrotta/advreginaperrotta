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
        <About />
        <PracticeAreas />
        <Commitment />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}