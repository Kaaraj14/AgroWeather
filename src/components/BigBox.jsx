import React from "react";
import styles from "./BigBox.module.css";
import RightBox from "./RightBox.jsx";
import AppWidget from "./AppWidget.jsx";

const BigBox = () => {
  return (
    <div className={styles.bigbox}>
      <AppWidget/>
      <RightBox />
    </div>
  );
};

export default BigBox;
