import React from 'react';
import { useInView } from '../hooks/useInView';
import { customerHomes } from '../data/siteData';
import SafeImage from './SafeImage';
import './CustomerHomes.css';

const CustomerHomes = () => {
  const [ref, inView] = useInView();

  return (
    <section id="homes" className="customer-homes section-block" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'in-view' : ''}`}>
          <h2 className="section-heading">artsdivine in Your Homes</h2>
          <p className="section-subheading">
            See how collectors style traditional and contemporary artworks in living rooms, pooja spaces, and offices.
          </p>
        </div>
        <div className={`customer-homes__grid reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          {customerHomes.map((src, i) => (
            <div key={i} className="customer-homes__item">
              <SafeImage src={src} alt={`Styled home ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerHomes;
