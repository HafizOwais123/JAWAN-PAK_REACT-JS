import React from 'react';
import styles from './CardList.module.css';
import cardData from './CardData';

const CardList = () => {
  return (
    <div className={styles.container}>
      {cardData.map((item) => (
        <div key={item.id} className={styles.card}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
