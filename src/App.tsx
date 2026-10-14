import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Commitment from './components/Commitment';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Privacy from './components/Privacy';

function getBasePath() {
  if (window.location.hostname === 'giovanni-perrotta.github.io') {
    return '/advreginaperrotta/';
  }

  return '/';
}

export default function App() {
  const basePath = getBasePath();

  let path = window.location.pathname;

  if (basePath !== '/') {
    path = path.replace(basePath.replace(/\/$/, ''), '');
  }

  path = path.replace(/\/$/, '') || '/';

  if (path === '/privacidade') {
    return (
      <>
        <Header />
        <Privacy />
        <Footer />
      </>
    );
  }

  if (path === '/contato') {
    return (
      <>
        <Header />
        <Contact />
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
