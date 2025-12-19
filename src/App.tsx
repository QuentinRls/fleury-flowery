import Header from './components/Header';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Founders from './components/Founders';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <Marquee />
      <Header />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Founders />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
