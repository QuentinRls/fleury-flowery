import { motion } from 'framer-motion';

const Portfolio = () => {
  const events = [
    { 
      title: 'Elegant Wedding Ceremony', 
      img: '/src/assets/event1.jpeg',
      category: 'Wedding'
    },
    { 
      title: 'Family Celebration', 
      img: '/src/assets/family.jpeg',
      category: 'Event'
    },
    { 
      title: 'Corporate Event Styling', 
      img: '/src/assets/event2.jpeg',
      category: 'Corporate'
    },
    { 
      title: 'Premium Fancy Pack Display', 
      img: '/src/assets/fancy-pack.jpeg',
      category: 'Product'
    },
    { 
      title: 'Luxury Fancy Kid Collection', 
      img: '/src/assets/fancy-kid.jpeg',
      category: 'Premium'
    },
    { 
      title: 'Elegant Pack of Three', 
      img: '/src/assets/pack-of-three.jpeg',
      category: 'Collection'
    },
    { 
      title: 'Sophisticated Arrangement', 
      img: '/src/assets/flower6.jpeg',
      category: 'Floral'
    },
    { 
      title: 'Garden Collection Showcase', 
      img: '/src/assets/flower7.jpeg',
      category: 'Garden'
    },
    { 
      title: 'Botanical Beauty', 
      img: '/src/assets/flower8.jpeg',
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
