import React, { useState, useEffect } from 'react';
import { promoMessages } from '../data/siteData';
import './PromoBanner.css';

const PromoBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % promoMessages.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const current = promoMessages[index];

  return (
    <div className="promo-banner">
      <a href={current.link} className="promo-banner__link">
        {current.text}
      </a>
    </div>
  );
};

export default PromoBanner;
