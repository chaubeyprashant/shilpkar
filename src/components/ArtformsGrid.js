import React from 'react';
import { useInView } from '../hooks/useInView';
import { artforms } from '../data/siteData';
import SafeImage from './SafeImage';
import './ArtformsGrid.css';

const ArtformsGrid = () => {
  const [ref, inView] = useInView();

  return (
    <section id="artforms" className="artforms section-block" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'in-view' : ''}`}>
          <h2 className="section-heading">Shop Authentic Indian Art</h2>
          <p className="section-subheading">Explore traditional artforms by Shilpi Pandey</p>
        </div>
        <div className="artforms__grid">
          {artforms.map((item, i) => (
            <a
              key={item.name}
              href="#gallery"
              className={`artforms__card reveal reveal-delay-${(i % 3) + 1} ${inView ? 'in-view' : ''}`}
            >
              <SafeImage src={item.image} alt={item.name} />
              <div className="artforms__info">
                <h3>Buy {item.name} Paintings</h3>
                <p>{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtformsGrid;
