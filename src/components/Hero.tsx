import { motion } from 'framer-motion';
import FallingPetals from './FallingPetals';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <FallingPetals />
      <div className="hero__overlay"></div>
      <div className="container hero__content">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Seni Bunga di Jantung Bali
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Menciptakan momen tak terlupakan dengan bunga terbaik alam.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#gallery" className="btn btn--primary">Lihat Karya Kami</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
