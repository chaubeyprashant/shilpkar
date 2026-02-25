import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './Gallery.css';

const categories = [
  'Spiritual & Devotional',
  'Traditional Indian Art',
  'Lipan Art Gallery',
  'Modern & Creative',
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [sectionRef, inView] = useInView({ rootMargin: '0px 0px -80px 0px' });

  return (
    <section id="gallery" className="gallery-section section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title reveal ${inView ? 'in-view' : ''}`}>The Collection</h2>
        <div className={`category-filters reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <div
              key={item}
              className={`gallery-item reveal ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              <div className="item-image">
                <img src={`https://picsum.photos/id/${item + 20}/600/800`} alt="Painting" />
                <div className="item-overlay">
                  <button className="inquire-btn">Inquire / Buy</button>
                </div>
              </div>
              <div className="item-info">
                <h3>Masterpiece {item}</h3>
                <p>Acrylic on Canvas</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
