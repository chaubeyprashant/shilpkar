import React from 'react';
import { trustBadges } from '../data/siteData';
import './TrustStrip.css';

const TrustStrip = () => (
  <section className="trust-strip">
    <div className="container trust-strip__grid">
      {trustBadges.map((badge) => (
        <div key={badge.title} className="trust-strip__item">
          <strong>{badge.title}</strong>
          <span>{badge.subtitle}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
