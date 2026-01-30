import { motion } from 'framer-motion';
import sistaImg from '../assets/sista.jpeg';
import dindaImg from '../assets/dinda.jpeg';

const Founders = () => {
  const founders = [
    { 
      name: 'Dwi', 
      img: sistaImg,
      bio: 'Menghadirkan visi inovatif dan keunggulan artistik untuk setiap kreasi. Gairahnya untuk florist berkelanjutan membentuk jantung Fleuri Flowery.'
    },
    { 
      name: 'Dinda', 
      img: dindaImg,
      bio: 'Dinda memastikan setiap rangkaian memenuhi standar tertinggi kami sambil mempertahankan komitmen kami terhadap praktik ramah lingkungan. Pengetahuan botaninya memastikan kesegaran dan kualitas di setiap buket.'
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
          <h2>Tim Kami</h2>
          <p>Seniman berdedikasi yang menghadirkan impian bunga menjadi kenyataan</p>
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
