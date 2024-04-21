import React from 'react';
import styles from './InfoCard.module.css';

const InfoCard = ({icon , heading ,address , ContactNo}) => {
  return (
    <div className={styles['info-card']}>
      <div className={styles['flag']}>
        <img src={icon} alt= 'icon'/>
        <span>{heading}</span>
      </div>
      <div className={styles.address}>
       {address}
      </div>
      <div className={styles.phone}>
        <span>&#9742;</span> {ContactNo}
      </div>
    </div>
  );
};

export default InfoCard;