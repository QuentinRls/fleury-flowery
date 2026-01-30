import { motion } from 'framer-motion';
import familyImg from '../assets/family.jpeg';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about__container">
        <motion.div 
          className="about__image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={familyImg} alt="Fleuri Flowery Team" />
        </motion.div>
        <motion.div 
          className="about__content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Berakar di Bali, Mekar ke Seluruh Dunia</h2>
          <p>
            Terinspirasi oleh lanskap hijau dan budaya yang semarak di Bali, kami menghadirkan sentuhan surga di setiap rangkaian.
            Gairah kami adalah menciptakan kisah bunga yang menyentuh hati, menggunakan bunga lokal dan praktik berkelanjutan.
          </p>
          <p>
            Sejak 2012, Fleuri Flowery telah mengubah momen spesial menjadi kenangan tak terlupakan. Baik itu upacara pernikahan besar,
            gala perusahaan, atau sekadar ungkapan cinta sederhana, kami menuangkan jiwa kami di setiap kelopak, daun, dan batang.
          </p>
          <p className="about__highlight">
            <strong>Komitmen Kami:</strong> Kami percaya pada florist berkelanjutan yang merayakan alam sambil menghormatinya.
            Setiap rangkaian dibuat dengan tangan menggunakan praktik ramah lingkungan dan bunga lokal terbaik.
          </p>
          <a href="#contact" className="btn btn--primary">Mulai Perjalanan Bunga Anda</a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
