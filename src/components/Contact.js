import React from 'react';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="contact-section section-block" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'in-view' : ''}`}>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">Commissions · Purchases · Workshops · Art Advisory</p>
        </div>
        <div className="contact-grid">
          <div className={`contact-info reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
            <h3>Let&apos;s create something divine.</h3>
            <p>
              For inquiries about paintings, resin art, custom commissions, or Lipan & resin workshops, reach out directly.
            </p>
            <div className="info-item">
              <strong>Email</strong>
              <p>artist@shilpipandey.com</p>
            </div>
            <div className="info-item">
              <strong>Services</strong>
              <p>Resin art · Original paintings · Custom commissions · Masterclasses</p>
            </div>
          </div>
          <form
            className={`contact-form reveal reveal-delay-4 ${inView ? 'in-view' : ''}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <select required>
              <option value="">Interested in...</option>
              <option value="buy">Buying a Painting</option>
              <option value="commission">Custom Commission</option>
              <option value="resin">Resin Art</option>
              <option value="lipan">Lipan Art Work</option>
              <option value="workshop">Workshop / Masterclass</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
