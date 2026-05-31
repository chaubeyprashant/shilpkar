import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { contactEmail } from '../data/siteData';
import SocialLinks from './SocialLinks';
import './Contact.css';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
  website: '',
};

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [ref, inView] = useInView();
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      if (formData.website) {
        setStatus({
          type: 'success',
          message: 'Thanks! Your enquiry has been sent. We will get back to you soon.',
        });
        setFormData(initialFormState);
        return;
      }

      if (!WEB3FORMS_KEY) {
        throw new Error('Web3Forms key is missing');
      }

      const name = formData.name.trim();
      const email = formData.email.trim();
      const phone = formData.phone.trim();
      const interest = formData.interest.trim();
      const message = formData.message.trim();

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry: ${interest} (${name})`,
          from_name: 'artsdivine Website',
          email,
          name,
          phone: phone || 'Not provided',
          interest,
          message,
          to: 'divinearts134@gmail.com',
          botcheck: '',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit enquiry');
      }

      setStatus({
        type: 'success',
        message: 'Thanks! Your enquiry has been sent. We will get back to you soon.',
      });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: `Could not send right now (${error.message || 'unknown error'}). Please email directly: divinearts134@gmail.com`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <p>{contactEmail}</p>
            </div>
            <div className="info-item">
              <strong>Services</strong>
              <p>Resin art · Original paintings · Custom commissions · Masterclasses</p>
            </div>
            <div className="info-item">
              <strong>Follow Us</strong>
              <SocialLinks />
            </div>
          </div>
          <form
            className={`contact-form reveal reveal-delay-4 ${inView ? 'in-view' : ''}`}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number (optional)"
              value={formData.phone}
              onChange={handleChange}
              inputMode="tel"
              pattern="[0-9+()\\-\\s]{7,20}"
              title="Please enter a valid contact number"
            />
            <select name="interest" value={formData.interest} onChange={handleChange} required>
              <option value="">Interested in...</option>
              <option value="buy">Buying a Painting</option>
              <option value="commission">Custom Commission</option>
              <option value="resin">Resin Art</option>
              <option value="lipan">Lipan Art Work</option>
              <option value="workshop">Workshop / Masterclass</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              value={formData.website || ''}
              onChange={handleChange}
              className="contact-form__honeypot"
              aria-hidden="true"
            />
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p className={`form-status form-status--${status.type}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
