import React from 'react';
import styles from './Academics.module.css';
import academicsImg from '../../assets/img/academics.png'; // image from local storage

const Academics = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Academics</h2>
      <img src={academicsImg} alt="Academics" className={styles.image} />
    </div>
  );
};

export default Academics;
