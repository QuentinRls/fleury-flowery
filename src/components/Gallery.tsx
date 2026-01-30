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
import additional1 from '../assets/new/valentine/0F0CBE18-0645-4DE8-955A-92D8CEE42184.jpg';
import additional2 from '../assets/new/valentine/3E4C53AD-9A08-48FF-8732-E0D090B462B0.jpg';
import additional3 from '../assets/new/valentine/A603B60E-F284-4E86-9851-F75FA44B74CC.jpg';
import additional4 from '../assets/new/valentine/B8D0048A-3258-4E78-97A7-4B7170ED9D8A.jpg';
import additional5 from '../assets/new/valentine/DBE083D7-BF45-4197-882F-5C54475DD761.jpg';
import additional6 from '../assets/new/valentine/F3390DF1-0931-4F51-A48D-5D0223E5B630.jpg';
import additional7 from '../assets/new/valentine/FA4F6277-9740-487B-A999-0D015D7B272D.jpg';
import additional8 from '../assets/new/valentine/FEA309E9-C2E4-4414-92F1-6EB2BA91766D.jpg';
import additional9 from '../assets/new/valentine/FF195D25-6015-402A-BC0C-80B4FC24A1A2.jpg';
import additional10 from '../assets/new/bestseller/2FD9B77A-2DC6-4431-ACAB-DE822019E915.jpg';
import additional11 from '../assets/new/bestseller/4A43D3E1-8CC2-406C-AD7C-BC8A98C4CC2C.jpg';
import additional12 from '../assets/new/bestseller/7004AF3D-E108-427B-B6EB-2D7862586138.jpg';
import additional13 from '../assets/new/bestseller/7BA56CA2-6A87-4CCD-BE98-4C321E7ACD75.jpg';
import additional14 from '../assets/new/bestseller/7FB51D54-3B52-4BC8-ABA0-4A9B29DCD357.jpg';
import additional15 from '../assets/new/bestseller/9CC08E4E-E21F-43AF-875C-B9F53CFF1CFE.jpg';
import additional16 from '../assets/new/bestseller/AE1507EE-A610-4E0D-A1AB-82CB7CBA50E7.jpg';

const products = [
  { id: 1, name: "Pink Paradise", price: "IDR 180.000", img: flower1 },
  { id: 2, name: "Summer Love", price: "IDR 220.000", img: flower2 },
  { id: 3, name: "Bali Breeze", price: "IDR 150.000", img: flower3 },
  { id: 4, name: "Sweet Romance", price: "IDR 250.000", img: flower4 },
  { id: 5, name: "Tropical Mix", price: "IDR 170.000", img: flower5 },
  { id: 6, name: "Premium Pack", price: "IDR 280.000", img: flowerPack },
  { id: 7, name: "Fancy Pack Deluxe", price: "IDR 260.000", img: fancyPack },
  { id: 8, name: "Flower Pack Two", price: "IDR 200.000", img: packOfTwo },
  { id: 9, name: "Special Flower Selection", price: "IDR 240.000", img: specialFlower },
  { id: 10, name: "Fancy Pack Three", price: "IDR 290.000", img: fancyPack2 },
  { id: 11, name: "Blue Elegance", price: "IDR 190.000", img: blueFlower },
  { id: 12, name: "Luxury Collection", price: "IDR 300.000", img: fancyPack3 },
  { id: 13, name: "Romantic Rose", price: "IDR 210.000", img: additional1 },
  { id: 14, name: "Love's Heart", price: "IDR 230.000", img: additional2 },
  { id: 15, name: "Passion Blooms", price: "IDR 180.000", img: additional3 },
  { id: 16, name: "Affection Bouquet", price: "IDR 270.000", img: additional4 },
  { id: 17, name: "Eternal Tenderness", price: "IDR 200.000", img: additional5 },
  { id: 18, name: "Blooming Love", price: "IDR 240.000", img: additional6 },
  { id: 19, name: "Valentine's Luxury", price: "IDR 295.000", img: additional7 },
  { id: 20, name: "Rose Dream", price: "IDR 185.000", img: additional8 },
  { id: 21, name: "Heart Declaration", price: "IDR 255.000", img: additional9 },
  { id: 22, name: "Classic Elegance", price: "IDR 175.000", img: additional10 },
  { id: 23, name: "Privileged Moment", price: "IDR 155.000", img: additional11 },
  { id: 24, name: "Flower of Excellence", price: "IDR 180.000", img: additional12 },
  { id: 25, name: "Prestige Aroma", price: "IDR 165.000", img: additional13 },
  { id: 26, name: "Timeless Bouquet", price: "IDR 195.000", img: additional14 },
  { id: 27, name: "Beauty Signature", price: "IDR 210.000", img: additional15 },
  { id: 28, name: "Popular Selection", price: "IDR 160.000", img: additional16 }
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
