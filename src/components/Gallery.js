import React from 'react';
import './Gallery.css';

const categories = [
    "Spiritual & Devotional",
    "Traditional Indian Art",
    "Lipan Art Gallery",
    "Modern & Creative"
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section section-padding">
            <div className="container">
                <h2 className="section-title">The Collection</h2>
                <div className="category-filters">
                    {categories.map(cat => (
                        <button key={cat} className="filter-btn">{cat}</button>
                    ))}
                </div>
                <div className="gallery-grid">
                    {/* Placeholder items */}
                    {[1, 2, 3, 4, 5, 6].map(item => (
                        <div key={item} className="gallery-item fade-in">
                            <div className="item-image">
                                <img src={`https://picsum.photos/id/${item + 20}/600/800`} alt="Painting" />
                                <div className="item-overlay">
                                    <button className="inquire-btn">Inquire/Buy</button>
                                </div>
                            </div>
                            <div className="item-info">
                                <h3>Masterpiece {item}</h3>
                                <p>Acrylic on Canvas</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
