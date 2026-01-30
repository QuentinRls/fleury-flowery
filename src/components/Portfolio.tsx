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
      title: 'Upacara Pernikahan Elegan', 
      img: event1,
      category: 'Pernikahan'
    },
    { 
      title: 'Perayaan Keluarga', 
      img: familyImg,
      category: 'Acara'
    },
    { 
      title: 'Styling Acara Korporat', 
      img: event2,
      category: 'Korporat'
    },
    { 
      title: 'Tampilan Paket Mewah Premium', 
      img: fancyPackImg,
      category: 'Produk'
    },
    { 
      title: 'Koleksi Mewah Fancy Kid', 
      img: fancyKid,
      category: 'Premium'
    },
    { 
      title: 'Paket Tiga Elegan', 
      img: packOfThree,
      category: 'Koleksi'
    },
    { 
      title: 'Rangkaian Sophisticated', 
      img: flower6,
      category: 'Bunga'
    },
    { 
      title: 'Showcase Koleksi Taman', 
      img: flower7,
      category: 'Taman'
    },
    { 
      title: 'Keindahan Botani', 
      img: flower8,
      category: 'Botani'
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
          <h2>Acara & Proyek Kami</h2>
          <p>Menampilkan kreasi bunga paling berkesan dan desain acara yang memukau</p>
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
