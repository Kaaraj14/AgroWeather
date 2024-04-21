import React from 'react';
import style from './Footer.module.css'; // Import CSS for footer styling

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={style["container"]}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
