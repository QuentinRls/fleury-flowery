import { motion } from 'framer-motion';
import event1 from '../assets/event1.jpeg';
import familyImg from '../assets/family.jpeg';
import event2 from '../assets/event2.jpeg';
import fancyPackImg from '../assets/fancy-pack.jpeg';
import fancyKid from '../assets/fancy-kid.jpeg';
import packOfThree from '../assets/pack-of-three.jpeg';
import flower6 from '../assets/flower6.jpeg';
import flower7 from '../assets/flower7.jpeg';
import flower8 from '../assets/flower8.jpeg';

const Portfolio = () => {
  const events = [
    { 
      title: 'Elegant Wedding Ceremony', 
      img: event1,
      category: 'Wedding'
    },
    { 
      title: 'Family Celebration', 
      img: familyImg,
      category: 'Event'
    },
    { 
      title: 'Corporate Event Styling', 
      img: event2,
      category: 'Corporate'
    },
    { 
      title: 'Premium Fancy Pack Display', 
      img: fancyPackImg,
      category: 'Product'
    },
    { 
      title: 'Luxury Fancy Kid Collection', 
      img: fancyKid,
      category: 'Premium'
    },
    { 
      title: 'Elegant Pack of Three', 
      img: packOfThree,
      category: 'Collection'
    },
    { 
      title: 'Sophisticated Arrangement', 
      img: flower6,
      category: 'Floral'
    },
    { 
      title: 'Garden Collection Showcase', 
      img: flower7,
      category: 'Garden'
    },
    { 
      title: 'Botanical Beauty', 
      img: flower8,
      category: 'Botanical'
    }
  ];

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2>Our Events & Projects</h2>
          <p>Showcasing our most memorable floral creations and stunning event designs</p>
        </motion.div>
        <div className="portfolio__grid">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              className="portfolio__item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={event.img} alt={event.title} />
              <div className="portfolio__overlay">
                <div className="portfolio__content">
                  <h3>{event.title}</h3>
                  <p className="portfolio__category">{event.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
