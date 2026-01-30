import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
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
