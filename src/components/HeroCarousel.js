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

  const overlayClass = [
    'hero-carousel__overlay',
    slide.lightOverlay && 'hero-carousel__overlay--light',
    slide.overlay === 'left' && 'hero-carousel__overlay--left',
  ].filter(Boolean).join(' ');

  return (
    <section
      id="home"
      className="hero-carousel"
      style={{ backgroundColor: slide.bgColor || '#2d1d3f' }}
    >
      {heroSlides.map((s, i) => (
        <SafeImage
          key={i}
          src={s.image}
          alt={s.alt || ''}
          className={`hero-carousel__slide ${i === active ? 'hero-carousel__slide--active' : ''} ${s.fit === 'contain' ? 'hero-carousel__slide--contain' : ''}`}
          style={{
            objectPosition: s.objectPosition || 'center center',
            objectFit: s.fit || 'cover',
          }}
          loading={i === 0 ? 'eager' : 'lazy'}
          aria-hidden={i !== active}
        />
      ))}
      <div className={overlayClass} />
      <div className={`hero-carousel__content ${slide.lightOverlay ? 'hero-carousel__content--minimal' : ''}`}>
        {slide.subtitle && <p className="hero-carousel__subtitle">{slide.subtitle}</p>}
        {slide.title && <h1 className="hero-carousel__title">{slide.title}</h1>}
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
