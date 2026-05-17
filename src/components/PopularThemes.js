import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { popularThemes } from '../data/siteData';
import './PopularThemes.css';

const PopularThemes = () => {
  const [active, setActive] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section className="popular-themes section-block" ref={ref}>
      <div className="container">
        <h2 className={`section-heading section-heading--left reveal ${inView ? 'in-view' : ''}`}>Popular Themes</h2>
        <div className={`popular-themes__pills reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          {popularThemes.map((theme) => (
            <button
              key={theme}
              type="button"
              className={`popular-themes__pill ${active === theme ? 'popular-themes__pill--active' : ''}`}
              onClick={() => setActive(active === theme ? null : theme)}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularThemes;
