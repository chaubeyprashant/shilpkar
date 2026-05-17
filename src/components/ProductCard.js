import React from 'react';
import { formatPrice } from '../data/siteData';
import SafeImage from './SafeImage';
import './ProductCard.css';

const ProductCard = ({ product, className = '' }) => {
  const displayPrice = product.salePrice ?? product.price;
  const hasSale = product.salePrice != null;

  return (
    <article className={`product-card ${className}`}>
      <div className="product-card__media">
        <SafeImage src={product.image} alt={product.title} />
        <button type="button" className="product-card__wishlist" aria-label="Add to wishlist">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <span className={`product-card__badge ${product.status === 'Ready To Ship' ? 'product-card__badge--ready' : ''}`}>
          {product.status}
        </span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__size">{product.size}</p>
        <p className="product-card__artist">Artist — {product.artist}</p>
        <div className="product-card__pricing">
          {hasSale && <span className="product-card__price--old">{formatPrice(product.price)}</span>}
          <span className="product-card__price">{formatPrice(displayPrice)}</span>
        </div>
        <button type="button" className="product-card__cart-btn">Add to inquiry</button>
      </div>
    </article>
  );
};

export default ProductCard;
