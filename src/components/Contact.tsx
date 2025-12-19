import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__container">
        <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
          <h2>Let's Bloom Together</h2>
          <p>Ready to bring your floral vision to life? Contact us today.</p>
          <div className="contact__details">
            <p><strong>Address:</strong> Fleuri Flowery, Banjar Juntal, Kaba-Kaba</p>
            <p><strong>Phone:</strong> +62 812 3456 7890</p>
            <p><strong>Email:</strong> hello@fleuri.flowery.com</p>
            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/fleuri.flowery/" target="_blank" rel="noopener noreferrer">📸 @fleuriflowery</a></p>
          </div>
        </motion.div>
        <motion.form 
            className="contact__form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} placeholder="Tell us about your event"></textarea>
          </div>
          <button type="submit" className="btn btn--primary">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
