import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <motion.div 
        className="marquee-content"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear" 
        }}
      >
        <span>🌸 Same Day Delivery in Bali 🌸 Fresh Flowers Daily 🌸 Custom Bouquets 🌸 Weddings & Events 🌸 Free Delivery in Ubud 🌸</span>
        <span>🌸 Same Day Delivery in Bali 🌸 Fresh Flowers Daily 🌸 Custom Bouquets 🌸 Weddings & Events 🌸 Free Delivery in Ubud 🌸</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
