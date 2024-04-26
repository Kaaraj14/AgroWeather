import React from 'react';

import styles from './TeamCard.module.css'; // Import CSS styles for the component

const TeamCard = ({ name, position, bio, imageUrl }) => {
  return (
    <div className={styles.teamCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
};



export default TeamCard;
