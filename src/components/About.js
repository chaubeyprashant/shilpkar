import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <h2 className="section-title fade-in">The Artist's Journey</h2>
                <div className="about-grid">
                    <div className="about-text fade-in">
                        <p>
                            With over 10 years of professional experience, Shilpi Pandey is a visionary artist dedicated to capturing the essence of spirituality and tradition. Her work is a fusion of ancient Indian techniques and modern creative expression.
                        </p>
                        <p>
                            From the intricate patterns of Mandalas and Lipan Art to the divine scenes of traditional Indian paintings like Madhubani and Pichwai, Shilpi's portfolio is a testament to her versatile talent and deep cultural roots.
                        </p>
                        <div className="experience-badge">
                            <span>10+</span>
                            <p>Years of Artistry</p>
                        </div>
                    </div>
                    <div className="about-image fade-in">
                        <div className="image-frame">
                            <img src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=1000" alt="Artist at work" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
