import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BotTypes from './components/BotTypes';
import SeoText from './components/SeoText';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <BotTypes />
        <SeoText />
        <Pricing />
        <FAQ />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
