import { motion } from 'framer-motion';

const Contact = () => {
  const whatsappNumber = '6285738527587'; // Phone number without +
  const whatsappMessage = encodeURIComponent("Hello Fleuri Flowery! I'd like to inquire about your beautiful flowers.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="section contact">
      <div className="container contact__container">
        <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
          <h2>Mari Berkembang Bersama</h2>
          <p>Siap mewujudkan impian bunga Anda? Hubungi kami hari ini.</p>
          <div className="contact__details">
            <p><strong>Alamat:</strong> Jalan raya Kaba-kaba, Kec. Kediri, Tabanan, Bali</p>
            <p>
              <strong>Telepon:</strong> 
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact__link">
                +62 85738527587 (WhatsApp)
              </a>
            </p>
            <p>
              <strong>Surel:</strong> 
              <a href="mailto:fleuriflowery@gmail.com" className="contact__link">
                fleuriflowery@gmail.com
              </a>
            </p>
            <p>
              <strong>Instagram:</strong> 
              <a href="https://www.instagram.com/fleuri.flowery/" target="_blank" rel="noopener noreferrer" className="contact__link">
                📸 @fleuri.flowery
              </a>
            </p>
          </div>
        </motion.div>
        <motion.form 
            className="contact__form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" placeholder="Nama Anda" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Surel</label>
            <input type="email" id="email" placeholder="Email Anda" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea id="message" rows={4} placeholder="Ceritakan tentang acara Anda"></textarea>
          </div>
          <button type="submit" className="btn btn--primary">Kirim Pesan</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
