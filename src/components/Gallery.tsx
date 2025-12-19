import { motion } from 'framer-motion';
import flower1 from '../assets/flower1.jpeg';
import flower2 from '../assets/flower2.jpeg';
import flower3 from '../assets/flower3.jpeg';
import flower4 from '../assets/flower4.jpeg';
import flower5 from '../assets/flower5.jpeg';
import flowerPack from '../assets/flower-pack.jpeg';
import fancyPack from '../assets/fancy-pack.jpeg';
import packOfTwo from '../assets/pack-of-two.jpeg';
import specialFlower from '../assets/special-flower.jpeg';
import fancyPack2 from '../assets/fancy-pack2.jpeg';
import blueFlower from '../assets/blue-flower.jpeg';
import fancyPack3 from '../assets/fancy-pack3.jpeg';

const products = [
  { id: 1, name: "Pink Paradise", price: "IDR 450.000", img: flower1 },
  { id: 2, name: "Summer Love", price: "IDR 550.000", img: flower2 },
  { id: 3, name: "Bali Breeze", price: "IDR 350.000", img: flower3 },
  { id: 4, name: "Sweet Romance", price: "IDR 600.000", img: flower4 },
  { id: 5, name: "Tropical Mix", price: "IDR 400.000", img: flower5 },
  { id: 6, name: "Premium Pack", price: "IDR 750.000", img: flowerPack },
  { id: 7, name: "Fancy Pack Deluxe", price: "IDR 680.000", img: fancyPack },
  { id: 8, name: "Flower Pack Two", price: "IDR 520.000", img: packOfTwo },
  { id: 9, name: "Special Flower Selection", price: "IDR 580.000", img: specialFlower },
  { id: 10, name: "Fancy Pack Three", price: "IDR 720.000", img: fancyPack2 },
  { id: 11, name: "Blue Elegance", price: "IDR 490.000", img: blueFlower },
  { id: 12, name: "Luxury Collection", price: "IDR 850.000", img: fancyPack3 }
];

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
            <h2>Best Sellers</h2>
            <p>Handpicked favorites for every occasion.</p>
        </motion.div>
        <div className="gallery__grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="gallery__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="gallery__image-wrapper">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="gallery__info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
