import React from 'react';
import { useInView } from '../hooks/useInView';
import { quickCategories } from '../data/siteData';
import SafeImage from './SafeImage';
import './QuickCategories.css';

const QuickCategories = () => {
  const [ref, inView] = useInView();

  return (
    <section className="quick-categories section-block" ref={ref}>
      <div className="container">
        <div className={`quick-categories__grid reveal ${inView ? 'in-view' : ''}`}>
          {quickCategories.map((cat, i) => (
            <a
              key={cat.title}
              href={cat.href}
              className={`quick-categories__card reveal reveal-delay-${i + 1} ${inView ? 'in-view' : ''}`}
            >
              <SafeImage src={cat.image} alt={cat.title} />
              <span className="quick-categories__label">{cat.title}</span>
            </a>
          ))}
        </div>
        </div>
    </section>
  );
};

export default QuickCategories;
