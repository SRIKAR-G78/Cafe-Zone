import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fas fa-envelope"></i> info@cafezone.com</p>
          <p><i className="fas fa-phone"></i> (555) 123-4567</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Coffee Street, Brew City</p>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p><i className="far fa-clock"></i> Monday - Friday: 7am - 8pm</p>
          <p><i className="far fa-clock"></i> Saturday - Sunday: 8am - 6pm</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Cafe Zone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 