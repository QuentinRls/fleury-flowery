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
import Valentine from './components/Valentine';
import BestSellers from './components/BestSellers';

function App() {
  return (
    <div className="app">
      <Marquee />
      <Header />
      <main>
        <Hero />
        <Valentine />
        <BestSellers />
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
