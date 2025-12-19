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
          Floral Artistry in the Heart of Bali
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Creating unforgettable moments with nature's finest blooms.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#gallery" className="btn btn--primary">View Our Work</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
