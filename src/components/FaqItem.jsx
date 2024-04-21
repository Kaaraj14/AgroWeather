import React, { useState } from 'react';
import styles from "./FaqItem.module.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles['container']}>
     <div className={styles['faq-item']}>
     <div className={styles['question']} onClick={toggleCollapse}>
  <span className={styles['icon']}>{isOpen ? '-' : '+'}</span>
  <div className={styles['question-text']}>{question}</div>
  
</div>

      {isOpen && (
        <div className={`${styles['answer']} ${isOpen ? styles['open'] : ''}`}>
        {answer}
      </div>
      )}
     </div>
    </div>
  );
};

export default FaqItem;
