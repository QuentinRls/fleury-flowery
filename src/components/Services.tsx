import { motion } from 'framer-motion';

const services = [
  { 
    title: "Wedding Florals", 
    desc: "Breathtaking custom arrangements for your special day. From bouquets to ceremonies, we create unforgettable moments.",
    icon: "💍",
    details: "Custom designs, seasonal blooms, full event coordination"
  },
  { 
    title: "Event Styling", 
    desc: "Transform corporate and private events with stunning floral installations and centerpieces.",
    icon: "🎉",
    details: "Centerpieces, decorations, thematic arrangements"
  },
  { 
    title: "Floral Workshops", 
    desc: "Learn the art of floral arrangement from our expert designers. Perfect for groups and individuals.",
    icon: "✂️",
    details: "Hands-on classes, beginner to advanced, team building"
  },
  {
    title: "Subscription Boxes",
    desc: "Receive fresh, beautifully arranged flowers delivered to your door weekly or monthly.",
    icon: "🌸",
    details: "Fresh weekly deliveries, customizable arrangements"
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive floral solutions for every occasion</p>
        </motion.div>
        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="services__icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="services__desc">{service.desc}</p>
              <p className="services__details">{service.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
