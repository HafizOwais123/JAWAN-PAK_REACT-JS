
import React from 'react';
import styles from './Astah.module.css';

const Astah = () => {
  return (
    // <div className={styles.container}>
    //   <input
    //     type="text"
    //     placeholder="Search 1 (40%)"
    //     className={styles.searchBox1}
    //   />


    <div className={styles.container}>
  <input
    type="text"
    defaultValue="Pakistan"
    placeholder="Search 1 (40%)"
    className={styles.searchBox1}
  />


      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="find Cars,Mobile Phones and more.."
          className={styles.searchBox2}
        />
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default Astah;
