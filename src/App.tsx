import { useEffect, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Commitment from './components/Commitment';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Privacy from './components/Privacy';

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (hash === '#/contato') {
    return (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    );
  }

  if (hash === '#/privacidade') {
    return (
      <>
        <Header />
        <Privacy />
        <Footer />
      </>
    );
  }

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
