import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <h4>Popular Categories</h4>
          <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>

        <div>
          <h4>Trending Searches</h4>
          <ul>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
        </div>

        <div>
          <h4>About Us</h4>
          <ul>
            <li>About Dubizzle Group</li>
            <li>OLX Blog</li>
            <li>Contact Us</li>
            <li>OLX for Businesses</li>
          </ul>
        </div>

        <div>
          <h4>OLX</h4>
          <ul>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <span>🕊️</span>
            <span>🔵</span>
            <span>▶️</span>
            <span>📸</span>
          </div>
          <button className={styles.backToTop}>⬆ Back to top</button>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p><strong>Classifieds in Pakistan.</strong> © 2006–2025 OLX</p>
      </div>
    </footer>
  );
};

export default Footer;
