// src/components/Welcome/Welcome.jsx
import React from 'react';
import styles from './Welcome.module.css';
import welcome from '../../assets/img/welcome11.png';

const Welcome = () => {
  return (
    <div className={styles.welcomeSection}>
      {/* Left Side: Student Image */}
      <div className={styles.leftContent}>
        <img
          src={welcome} // ✅ apni image ka path lagayen
          alt="Students"
          className={styles.studentImage}
        />
      </div>

      {/* Right Side: Text */}
      <div className={styles.rightContent}>
        <h1>
          <span className={styles.primary}>Welcome to</span><br />
          <span className={styles.highlight}>Echooling LMS Platform</span>
        </h1>
        <p>
          Education is both the act of teaching knowledge to others<br />
          and the act of receiving knowledge from someone else.
        </p>
        <p>
          Have questions? <a href="#" className={styles.link}>Get Free Guide</a>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
