import { motion } from 'framer-motion';

const Founders = () => {
  const founders = [
    { 
      name: 'Sista', 
      img: '/src/assets/sista.png',
      role: 'Creative Director & Head Florist',
      bio: 'With over 15 years of experience in floral design, Sista brings innovative vision and artistic excellence to every creation. Her passion for sustainable floristry shapes the heart of Fleuri Flowery.'
    },
    { 
      name: 'Dinda', 
      img: '/src/assets/dinda.jpeg',
      role: 'Operations Manager & Botanist',
      bio: 'Dinda ensures every arrangement meets our highest standards while maintaining our commitment to eco-friendly practices. Her botanical knowledge ensures freshness and quality in every bouquet.'
    }
  ];

  return (
    <section id="founders" className="section founders">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2>Meet Our Team</h2>
          <p>Passionate artisans dedicated to bringing floral dreams to life</p>
        </motion.div>
        <div className="founders__grid">
          {founders.map((founder, index) => (
            <motion.div 
              key={index}
              className="founders__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="founders__image-wrapper">
                <img src={founder.img} alt={founder.name} />
              </div>
              <div className="founders__content">
                <h3>{founder.name}</h3>
                <p className="founders__role">{founder.role}</p>
                <p className="founders__bio">{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
