import React from 'react';
import styles from './TechPanel.module.css'; // Import your CSS file

const TechPanel = ({ id, title, information, image }) => {
  return (
    <div className={styles.card} key ={id}>
      <div className={styles.card__image}>
        <img src={image} alt="Tech Image" className={styles.image} />
      </div>
      <div className={styles.card__content}>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__description}>{information}</p>
      </div>
    </div>
  );
};

export default TechPanel;
