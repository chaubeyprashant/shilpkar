import React, { useMemo, useState } from 'react';
import { useInView } from '../hooks/useInView';
import {
  calculateEstimate,
  complexityOptions,
  formatPriceRange,
  frameOptions,
  lippanSizes,
  paintingArtforms,
  resinProducts,
  serviceTypes,
  sizeOptions,
  workshopFormats,
  workshopTypes,
} from '../data/pricingData';
import './PriceEstimator.css';

const defaultState = {
  serviceType: 'resin',
  resinProduct: 'wall-medium',
  paintingArtform: 'madhubani',
  size: 'medium',
  complexity: 'standard',
  framing: 'none',
  lippanSize: 'panel-medium',
  workshopType: 'resin-workshop',
  workshopFormat: 'online',
};

const PriceEstimator = () => {
  const [ref, inView] = useInView();
  const [form, setForm] = useState(defaultState);

  const estimate = useMemo(() => calculateEstimate(form), [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const contactHref = '#contact';

  return (
    <section id="estimator" className="price-estimator section-block" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${inView ? 'in-view' : ''}`}>
          <h2 className="section-heading">Price Estimator</h2>
          <p className="section-subheading">
            Get a quick cost range for resin art, paintings, Lippan, commissions, and workshops
          </p>
        </div>

        <div className={`price-estimator__layout reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}>
          <form className="price-estimator__form" onSubmit={(e) => e.preventDefault()}>
            <label className="price-estimator__field">
              <span>Service Type</span>
              <select name="serviceType" value={form.serviceType} onChange={handleChange}>
                {serviceTypes.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </label>

            {form.serviceType === 'resin' && (
              <>
                <label className="price-estimator__field">
                  <span>Resin Product</span>
                  <select name="resinProduct" value={form.resinProduct} onChange={handleChange}>
                    {resinProducts.map((p) => (
                      <option key={p.id} value={p.id}>{p.label}</option>
                    ))}
                  </select>
                </label>
                <label className="price-estimator__field">
                  <span>Finish Level</span>
                  <select name="complexity" value={form.complexity} onChange={handleChange}>
                    {complexityOptions.map((c) => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </label>
              </>
            )}

            {(form.serviceType === 'painting' || form.serviceType === 'commission') && (
              <>
                <label className="price-estimator__field">
                  <span>Artform</span>
                  <select name="paintingArtform" value={form.paintingArtform} onChange={handleChange}>
                    {paintingArtforms.map((a) => (
                      <option key={a.id} value={a.id}>{a.label}</option>
                    ))}
                  </select>
                </label>
                <label className="price-estimator__field">
                  <span>Size</span>
                  <select name="size" value={form.size} onChange={handleChange}>
                    {sizeOptions.map((s) => (
                      <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                </label>
                <label className="price-estimator__field">
                  <span>Detail Level</span>
                  <select name="complexity" value={form.complexity} onChange={handleChange}>
                    {complexityOptions.map((c) => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </label>
                <label className="price-estimator__field">
                  <span>Framing</span>
                  <select name="framing" value={form.framing} onChange={handleChange}>
                    {frameOptions.map((f) => (
                      <option key={f.id} value={f.id}>{f.label}</option>
                    ))}
                  </select>
                </label>
              </>
            )}

            {form.serviceType === 'lippan' && (
              <>
                <label className="price-estimator__field">
                  <span>Panel Size</span>
                  <select name="lippanSize" value={form.lippanSize} onChange={handleChange}>
                    {lippanSizes.map((p) => (
                      <option key={p.id} value={p.id}>{p.label}</option>
                    ))}
                  </select>
                </label>
                <label className="price-estimator__field">
                  <span>Mirror &amp; Detail Level</span>
                  <select name="complexity" value={form.complexity} onChange={handleChange}>
                    {complexityOptions.map((c) => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </label>
              </>
            )}

            {form.serviceType === 'workshop' && (
              <>
                <label className="price-estimator__field">
                  <span>Workshop</span>
                  <select name="workshopType" value={form.workshopType} onChange={handleChange}>
                    {workshopTypes.map((w) => (
                      <option key={w.id} value={w.id}>{w.label}</option>
                    ))}
                  </select>
                </label>
                <label className="price-estimator__field">
                  <span>Format</span>
                  <select name="workshopFormat" value={form.workshopFormat} onChange={handleChange}>
                    {workshopFormats.map((f) => (
                      <option key={f.id} value={f.id}>{f.label}</option>
                    ))}
                  </select>
                </label>
              </>
            )}
          </form>

          <aside className="price-estimator__result">
            <p className="price-estimator__result-label">Estimated Range</p>
            <p className="price-estimator__result-price">
              {formatPriceRange(estimate.min, estimate.max)}
            </p>
            <p className="price-estimator__result-note">{estimate.note}</p>

            <ul className="price-estimator__breakdown">
              {estimate.breakdown.map((item) => (
                <li key={`${item.label}-${item.value}`}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>

            <div className="price-estimator__highlights">
              <span>Artist-direct pricing</span>
              <span>Certificate included</span>
              <span>Pan-India shipping</span>
            </div>

            <a href={contactHref} className="price-estimator__cta">
              Get Exact Quote
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;
