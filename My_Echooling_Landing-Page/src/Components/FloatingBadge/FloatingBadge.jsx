// src/components/FloatingBadge/FloatingBadge.jsx
import React from 'react';
import styles from './FloatingBadge.module.css';

const FloatingBadge = () => {
  return (
    <div className={styles.badgeContainer}>
      <img
        src="/assets/img/badge.png" // <-- Change to your badge path
        alt="College Badge"
        className={styles.floatingBadge}
      />
    </div>
  );
};

export default FloatingBadge;
