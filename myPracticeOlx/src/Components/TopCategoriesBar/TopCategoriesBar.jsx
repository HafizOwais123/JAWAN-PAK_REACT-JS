import React from 'react';
import styles from './TopCategoriesBar.module.css';

const TopCategoriesBar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.dropdown}><strong>All Categories</strong> ▼</li>
        <li>Mobile Phones</li>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Houses</li>
        <li>Video-Audios</li>
        <li>Tablets</li>
        <li>Land & Plots</li>
      </ul>
    </div>
  );
};

export default TopCategoriesBar;
