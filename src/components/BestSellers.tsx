import { motion } from 'framer-motion';
import bestseller1 from '../assets/new/bestseller/2FD9B77A-2DC6-4431-ACAB-DE822019E915.jpg';
import bestseller2 from '../assets/new/bestseller/4A43D3E1-8CC2-406C-AD7C-BC8A98C4CC2C.jpg';
import bestseller3 from '../assets/new/bestseller/7004AF3D-E108-427B-B6EB-2D7862586138.jpg';
import bestseller4 from '../assets/new/bestseller/7BA56CA2-6A87-4CCD-BE98-4C321E7ACD75.jpg';
import bestseller5 from '../assets/new/bestseller/7FB51D54-3B52-4BC8-ABA0-4A9B29DCD357.jpg';
import bestseller6 from '../assets/new/bestseller/9CC08E4E-E21F-43AF-875C-B9F53CFF1CFE.jpg';
import bestseller7 from '../assets/new/bestseller/AE1507EE-A610-4E0D-A1AB-82CB7CBA50E7.jpg';

const bestsellerProducts = [
  { id: 1, name: "Orange bouquet", price: "IDR 250.000", img: bestseller1 },
  { id: 2, name: "Round bouquet", price: "IDR 100.000", img: bestseller2 },
  { id: 3, name: "Thumbelina", price: "IDR 100.000", img: bestseller3 },
  { id: 4, name: "Sweetest Pink", price: "IDR 150.000", img: bestseller4 },
  { id: 5, name: "Round Flower Board", price: "IDR 250.000", img: bestseller5 },
  { id: 6, name: "Mini bouquet", price: "IDR 30.000", img: bestseller6 },
  { id: 7, name: "Popular Selection", price: "IDR 100.000", img: bestseller7 }
];

const BestSellers = () => {
  return (
    <section id="bestsellers" className="section bestsellers">
      <div className="container">
        <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
            <h2>⭐ Our Best Sellers ⭐</h2>
            <p>The most loved arrangements by our customers</p>
        </motion.div>
        <div className="gallery__grid">
          {bestsellerProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="gallery__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={`https://wa.me/6285738527587?text=Halo, saya tertarik dengan ${product.name} (${product.price}). Bisakah Anda memberikan informasi lebih lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery__link"
              >
                <div className="gallery__image-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="gallery__info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
