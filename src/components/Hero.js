import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header id="home" className="hero-section">
      <div className="hero-bg">
        <div className="hero-bg-image" />
        <div className="hero-bg-overlay" />
      </div>
      <div className={`hero-content ${mounted ? 'hero-content--visible' : ''}`}>
        <h2 className="hero-subtitle">Professional Artist</h2>
        <h1 className="hero-title">Shilpi Pandey</h1>
        <p className="hero-description">
          Bringing divinity and culture to life through 10+ years of artistic excellence.
          Specializing in Spiritual Art, Traditional Indian styles, and contemporary masterpieces.
        </p>
        <div className="hero-cta">
          <a href="#gallery" className="btn btn-primary">View Collection</a>
          <a href="#contact" className="btn btn-secondary">Inquire Now</a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </header>
  );
};

export default Hero;
