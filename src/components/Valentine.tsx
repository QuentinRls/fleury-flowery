import { motion } from 'framer-motion';
import valentin1 from '../assets/new/valentine/0F0CBE18-0645-4DE8-955A-92D8CEE42184.jpg';
import valentin2 from '../assets/new/valentine/3E4C53AD-9A08-48FF-8732-E0D090B462B0.jpg';
import valentin3 from '../assets/new/valentine/A603B60E-F284-4E86-9851-F75FA44B74CC.jpg';
import valentin4 from '../assets/new/valentine/B8D0048A-3258-4E78-97A7-4B7170ED9D8A.jpg';
import valentin5 from '../assets/new/valentine/DBE083D7-BF45-4197-882F-5C54475DD761.jpg';
import valentin6 from '../assets/new/valentine/F3390DF1-0931-4F51-A48D-5D0223E5B630.jpg';
import valentin7 from '../assets/new/valentine/FA4F6277-9740-487B-A999-0D015D7B272D.jpg';
import valentin8 from '../assets/new/valentine/FEA309E9-C2E4-4414-92F1-6EB2BA91766D.jpg';
import valentin9 from '../assets/new/valentine/FF195D25-6015-402A-BC0C-80B4FC24A1A2.jpg';

const valentineProducts = [
  { id: 1, name: "Choco bear", price: "IDR 220.000", img: valentin1 },
  { id: 2, name: "Beng-Beng lover", price: "IDR 250.000", img: valentin2 },
  { id: 3, name: "Strawberry milky", price: "IDR 180.000", img: valentin3 },
  { id: 4, name: "Aurora", price: "IDR 280.000", img: valentin4 },
  { id: 5, name: "Pink rosie", price: "IDR 200.000", img: valentin5 },
  { id: 6, name: " Love is red", price: "IDR 240.000", img: valentin6 },
  { id: 7, name: "Valentine's Luxury", price: "IDR 300.000", img: valentin7 },
  { id: 8, name: "Red Daisy", price: "IDR 160.000", img: valentin8 },
  { id: 9, name: "Chco Box", price: "IDR 270.000", img: valentin9 }
];

const Valentine = () => {
  return (
    <section id="valentine" className="section valentine">
      <div className="container">
        <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
            <h2>💕 Hari Valentine 💕</h2>
            <p>Ungkapkan cintamu dengan rangkaian bunga terindah kami</p>
        </motion.div>
        <div className="gallery__grid">
          {valentineProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="gallery__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${product.name} (Mulai dari ${product.price}). Bisakah Anda memberikan informasi lebih lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery__link"
              >
                <div className="gallery__image-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="gallery__info">
                  <h3>{product.name}</h3>
                  <p className="price">
                    <span className="price-label">Mulai dari</span> {product.price}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valentine;
