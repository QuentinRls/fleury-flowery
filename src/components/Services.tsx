import { motion } from 'framer-motion';

const services = [
  { 
    title: "Bunga Pernikahan", 
    desc: "Rangkaian custom yang menakjubkan untuk hari spesial Anda. Dari buket hingga upacara, kami ciptakan momen tak terlupakan.",
    icon: "💍",
    details: "Desain custom, bunga musiman, koordinasi acara lengkap"
  },
  { 
    title: "Styling Acara", 
    desc: "Ubah acara korporat dan pribadi dengan instalasi bunga dan centerpiece yang memukau.",
    icon: "🎉",
    details: "Centerpiece, dekorasi, rangkaian tematik"
  },
  { 
    title: "Workshop Bunga", 
    desc: "Pelajari seni merangkai bunga dari desainer ahli kami. Sempurna untuk grup dan individu.",
    icon: "✂️",
    details: "Kelas praktek, pemula hingga mahir, team building"
  },
  {
    title: "Paket Berlangganan",
    desc: "Terima bunga segar yang dirangkai indah dikirim ke pintu Anda setiap minggu atau bulan.",
    icon: "🌸",
    details: "Pengiriman segar mingguan, rangkaian yang dapat disesuaikan"
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
          <h2>Layanan Kami</h2>
          <p>Solusi bunga lengkap untuk setiap acara</p>
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
