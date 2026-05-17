import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__main container">
      <div className="footer__col">
        <h4>Collections</h4>
        <ul>
          <li><a href="#gallery">All Artworks</a></li>
          <li><a href="#artforms">Resin Art</a></li>
          <li><a href="#gallery">Spiritual & Devotional</a></li>
          <li><a href="#gallery">Ready to Ship</a></li>
          <li><a href="#price">Shop by Price</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Artforms</h4>
        <ul>
          <li><a href="#artforms">Resin Art</a></li>
          <li><a href="#artforms">Madhubani</a></li>
          <li><a href="#artforms">Pichwai</a></li>
          <li><a href="#artforms">Kalamkari</a></li>
          <li><a href="#artforms">Lippan Kaam</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Explore</h4>
        <ul>
          <li><a href="#about">About Shilpi</a></li>
          <li><a href="#workshops">Workshops</a></li>
          <li><a href="#homes">In Your Homes</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__col footer__col--contact">
        <h4>Contact</h4>
        <p><strong>Email</strong><br />artist@shilpipandey.com</p>
        <p><strong>Commissions</strong><br />Resin art · Paintings · Lipan art</p>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="container footer__bottom-inner">
        <p>&copy; {new Date().getFullYear()} Shilpi Pandey Art. All rights reserved.</p>
        <span className="footer__brand">SHILPI PANDEY</span>
        <a href="#home">Back to Top</a>
      </div>
    </div>
    <div className="footer__about container">
      <p>
        Shilpi Pandey brings divinity and culture to life through 10+ years of artistic excellence—specializing in
        spiritual art, resin art, traditional Indian styles, and contemporary masterpieces for collectors worldwide.
      </p>
    </div>
  </footer>
);

export default Footer;
