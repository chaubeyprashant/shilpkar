import React from 'react';
import { useInView } from '../hooks/useInView';
import { products } from '../data/siteData';
import ProductCard from './ProductCard';
import './EditorsPick.css';

const EditorsPick = () => {
  const [ref, inView] = useInView();
  const picks = products.slice(0, 8);

  return (
    <section id="gallery" className="editors-pick section-block" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'in-view' : ''}`}>
          <h2 className="section-heading">Editor&apos;s Pick</h2>
          <p className="section-subheading">Handpainted, Resin & Traditional · Curated by artsdivine</p>
        </div>
        <div className={`product-scroll reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          <div className="product-scroll__track">
            {picks.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
