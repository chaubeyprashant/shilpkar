import React from 'react';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const Contact = () => {
  const [sectionRef, inView] = useInView({ rootMargin: '0px 0px -60px 0px' });

  return (
    <section id="contact" className="contact-section section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title reveal ${inView ? 'in-view' : ''}`}>Get In Touch</h2>
        <div className="contact-grid">
          <div className={`contact-info reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
            <h3>Let's create something divine.</h3>
            <p>
              For inquiries regarding specific paintings, custom commissions, or Lipan art workshops, please reach out.
            </p>
            <div className="info-item">
              <strong>Email</strong>
              <p>artist@shilpipandey.com</p>
            </div>
            <div className="info-item">
              <strong>Socials</strong>
              <p>Instagram / Facebook / Behance</p>
            </div>
          </div>
          <form className={`contact-form reveal reveal-delay-4 ${inView ? 'in-view' : ''}`} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <select required>
              <option value="">Interested in...</option>
              <option value="buy">Buying a Painting</option>
              <option value="commission">Custom Commission</option>
              <option value="lipan">Lipan Art Work</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
