import React from 'react';
import { useInView } from '../hooks/useInView';
import { workshops, formatPrice } from '../data/siteData';
import SafeImage from './SafeImage';
import './Workshops.css';

const Workshops = () => {
  const [ref, inView] = useInView();

  return (
    <section id="workshops" className="workshops section-block" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'in-view' : ''}`}>
          <h2 className="section-heading">Learn Indian Artforms</h2>
          <p className="section-subheading">On-demand masterclasses with Shilpi Pandey</p>
        </div>
        <div className={`workshops__scroll reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          <div className="workshops__track">
            {workshops.map((w) => (
              <article key={w.title} className="workshop-card">
                <SafeImage src={w.image} alt={w.title} />
                <div className="workshop-card__body">
                  <h3>{w.title}</h3>
                  <p>Instructor — {w.instructor}</p>
                  <span className="workshop-card__price">{formatPrice(w.price)}</span>
                  <button type="button" className="workshop-card__btn">Enroll</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
