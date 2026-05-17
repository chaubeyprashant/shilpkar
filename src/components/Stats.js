import React from 'react';
import { useInView } from '../hooks/useInView';
import { stats } from '../data/siteData';
import './Stats.css';

const Stats = () => {
  const [ref, inView] = useInView();

  return (
    <section className="stats section-block" ref={ref}>
      <div className="container">
        <h2 className={`stats__title reveal ${inView ? 'in-view' : ''}`}>
          Preserving Heritage Through Art
        </h2>
        <div className={`stats__grid reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <span className="stats__value">{s.value}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
