import { useState } from 'react';
import product1 from '../assets/product1.jpg';  
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

function ProductCarousel({ title }) {
  const products = [product1, product2, product3];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % products.length);
  const prev = () => setIndex((index - 1 + products.length) % products.length);

  return (
    <section className="product-carousel">
      <h2>{title}</h2>
      <div className="carousel">
        <button onClick={prev}>&lt;</button>
        <img src={products[index]} alt={title} />
        <button onClick={next}>&gt;</button>
      </div>
      <style>{`
        .product-carousel {
          text-align: center;
          margin: 40px 0;
        }
        .carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .carousel img {
          width: 200px;
          height: auto;
        }
        .carousel button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

export default ProductCarousel;
