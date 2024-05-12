import React from "react";
import styles from "./PercentageBar.module.css";
import { CiCirclePlus } from "react-icons/ci";
import { FaWind, FaMountain, FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";

const PercentageBar = (props) => {
  const icon = () => {
    switch (props.Percentage.symbol) {
      case "°C":
        return <FaTemperatureHigh className={styles.icon} />;
      case "%":
        return <WiHumidity className={styles.icon} />;
      case "ppm":
        return <FaWind className={styles.icon} />;
      case "hPa":
        return <GiPressureCooker className={styles.icon} />;
      case "m":
        return <FaMountain className={styles.icon} />;
      default:
        return null;
    }
  };

  if (props.Percentage.final) {
    return (
      <div className={styles.percentage}>
        <CiCirclePlus size={35} />
      </div>
    );
  } else {
    return (
      <div className={styles.percentage}>
        {icon()}
        <div className={styles.title}>{props.Percentage.title}</div>
        <div className={styles.number}>
          {props.Percentage.val}
          {props.Percentage.symbol}
        </div>
        <div className={styles.percentage_bar}>
          {props.Percentage.val ? (
            <progress
              value={props.Percentage.val}
              max={props.Percentage.maxvalue}
            />
          ) : (
            <progress value={null} />
          )}
        </div>
      </div>
    );
  }
};

export default PercentageBar;
