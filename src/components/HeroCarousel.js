import React, { useState, useEffect } from 'react';
import { heroSlides } from '../data/siteData';
import SafeImage from './SafeImage';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => {
    setActive((i) => (i + dir + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[active];

  return (
    <section id="home" className="hero-carousel">
      {heroSlides.map((s, i) => (
        <SafeImage
          key={i}
          src={s.image}
          alt=""
          className={`hero-carousel__slide ${i === active ? 'hero-carousel__slide--active' : ''}`}
          aria-hidden={i !== active}
        />
      ))}
      <div className="hero-carousel__overlay" />
      <div className="hero-carousel__content">
        <p className="hero-carousel__subtitle">{slide.subtitle}</p>
        <h1 className="hero-carousel__title">{slide.title}</h1>
        <a href={slide.href} className="hero-carousel__cta">{slide.cta}</a>
      </div>
      <button type="button" className="hero-carousel__arrow hero-carousel__arrow--prev" onClick={() => go(-1)} aria-label="Previous slide">
        ‹
      </button>
      <button type="button" className="hero-carousel__arrow hero-carousel__arrow--next" onClick={() => go(1)} aria-label="Next slide">
        ›
      </button>
      <div className="hero-carousel__dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-carousel__dot ${i === active ? 'hero-carousel__dot--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
