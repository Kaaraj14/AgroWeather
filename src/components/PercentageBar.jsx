import styles from "./PercentageBar.module.css";

const PercentageBar = (props) => {
  //Here I need to add a state value using useReducer to the div with
  //number class
  return (
    <div className={styles.percentage}>
      <div className={styles.number}>{props.Percentage.val}{props.Percentage.symbol}</div>
      <div className={styles.percentage_bar}>
        <div className={styles.percent}></div>
      </div>
    </div>
  );
};

export default PercentageBar;
