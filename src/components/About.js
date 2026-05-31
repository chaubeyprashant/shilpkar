import React from 'react';
import { useInView } from '../hooks/useInView';
import { IMAGES } from '../data/images';
import SafeImage from './SafeImage';
import './About.css';

const About = () => {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="featured-artist section-block" ref={ref}>
      <div className="container featured-artist__inner">
        <div className={`featured-artist__content reveal ${inView ? 'in-view' : ''}`}>
          <h2 className="section-heading section-heading--left">Featured Artist</h2>
          <h3 className="featured-artist__name">artsdivine</h3>
          <p>
            With over 10 years of professional experience, artsdivine is a visionary art studio dedicated to
            capturing the essence of spirituality and tradition. The studio fuses ancient Indian techniques—Mandalas,
            Lipan Art, Madhubani, Pichwai, and Resin Art—with contemporary creative expression.
          </p>
          <p>
            From glossy resin coasters and fluid wall panels to intricate devotional compositions, each piece reflects
            deep cultural roots and a commitment to preserving India&apos;s artistic heritage for collectors worldwide.
          </p>
          <a href="#gallery" className="featured-artist__cta">Explore Collection</a>
        </div>
        <div className={`featured-artist__visual reveal reveal-delay-3 ${inView ? 'in-view' : ''}`}>
          <SafeImage src={IMAGES.artist} alt="artsdivine at work" />
        </div>
      </div>
    </section>
  );
};

export default About;
