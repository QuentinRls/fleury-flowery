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
  { id: 1, name: "Pink Paradise", img: flower1 },
  { id: 2, name: "Summer Love", img: flower2 },
  { id: 3, name: "Bali Breeze", img: flower3 },
  { id: 4, name: "Sweet Romance", img: flower4 },
  { id: 5, name: "Tropical Mix", img: flower5 },
  { id: 6, name: "Premium Pack", img: flowerPack },
  { id: 7, name: "Fancy Pack Deluxe", img: fancyPack },
  { id: 8, name: "Flower Pack Two", img: packOfTwo },
  { id: 9, name: "Special Flower Selection", img: specialFlower },
  { id: 10, name: "Fancy Pack Three", img: fancyPack2 },
  { id: 11, name: "Blue Elegance", img: blueFlower },
  { id: 12, name: "Luxury Collection", img: fancyPack3 }
];

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div 
            className="section-header"
            style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
            <h2>Galeri</h2>
            <p>Pilihan terbaik untuk setiap momen spesial</p>
        </div>
        <div className="gallery__grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="gallery__item"
            >
              <a 
                href={`https://wa.me/6285738527587?text=Halo, saya tertarik dengan ${product.name}. Bisakah Anda memberikan informasi lebih lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery__link"
              >
                <div className="gallery__image-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="gallery__info">
                  <h3>{product.name}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
