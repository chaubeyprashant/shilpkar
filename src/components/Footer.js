import React from 'react';
import { useInView } from '../hooks/useInView';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -50px 0px' });

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className={`footer-content reveal ${inView ? 'in-view' : ''}`}>
          <p>&copy; {new Date().getFullYear()} Shilpi Pandey Art. All rights reserved.</p>
          <div className="footer-logo">SHILPI PANDEY</div>
          <div className="footer-socials">
            <a href="#home">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
