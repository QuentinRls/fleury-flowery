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
          <h2>Rooted in Bali, Blooming Worldwide</h2>
          <p>
            Inspired by the lush landscapes and vibrant culture of Bali, we bring a touch of paradise to every arrangement. 
            Our passion is to craft floral stories that speak to the heart, using locally sourced blooms and sustainable practices.
          </p>
          <p>
            Since 2012, Fleuri Flowery has been transforming special moments into unforgettable memories. Whether it's a grand wedding ceremony, 
            a corporate gala, or a simple gesture of love, we pour our soul into every petal, leaf, and stem.
          </p>
          <p className="about__highlight">
            <strong>Our Commitment:</strong> We believe in sustainable floristry that celebrates nature while respecting it. 
            Every arrangement is handcrafted with eco-friendly practices and the finest locally-sourced blooms.
          </p>
          <a href="#contact" className="btn btn--primary">Start Your Floral Journey</a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
