import React from 'react';
import { socialLinks } from '../data/siteData';
import './SocialLinks.css';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.2" cy="6.8" r="1.1" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 8.5h2.5l-.5 3H14v9h-3.5v-9H9v-3h1.5V7.2c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .18 2 .18V6H14c-.9 0-1.2.55-1.2 1.1V8.5z" />
  </svg>
);

const icons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

const SocialLinks = ({ variant = 'default', showLabels = true }) => (
  <div className={`social-links social-links--${variant}`}>
    {socialLinks.map((link) => {
      const Icon = icons[link.id];
      return (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__item"
          aria-label={`Follow artsdivine on ${link.label}`}
        >
          <span className="social-links__icon">
            <Icon />
          </span>
          {showLabels && (
            <span className="social-links__text">
              <strong>{link.label}</strong>
              <span>{link.handle}</span>
            </span>
          )}
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
