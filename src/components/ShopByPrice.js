import React from 'react';
import { useInView } from '../hooks/useInView';
import { priceBrackets } from '../data/siteData';
import './ShopByPrice.css';

const ShopByPrice = () => {
  const [ref, inView] = useInView();

  return (
    <section id="price" className="shop-price section-block" ref={ref}>
      <div className="container">
        <h2 className={`section-heading reveal ${inView ? 'in-view' : ''}`}>Shop by Price</h2>
        <div className={`shop-price__grid reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          {priceBrackets.map((bracket) => (
            <a key={bracket.label} href="#gallery" className="shop-price__tile">
              {bracket.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByPrice;
