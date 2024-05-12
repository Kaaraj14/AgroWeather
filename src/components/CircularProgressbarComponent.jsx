import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./CircularProgressbarComponent.module.css";

function symbol(value) {
  let answer = "";
  switch (value) {
    case "Temperature ":
      answer = "°C";
      break;
    case "Humidity":
      answer = "%";
      break;
    case "Altitude ":
      answer = "m";
      break;
    case "Pressure ":
      answer = "hPa";
      break;
    case "Air Quality value":
      answer = "ppm";
      break;
    default:
      answer = "";
  }
  return answer;
}

const CircularProgressBarComponent = ({ data }) => {
  const [titles, values, maxvalues] = data;

  const renderProgressBars = () => {
    return titles.map((title, index) => {
      const value = parseFloat(values[index]).toFixed(2);
      const parsedMaxValue = parseFloat(maxvalues[index]);

      const displayValue = `${value}${symbol(title)}`;

      return (
        <div key={index} className={styles["Component"]}>
          <h2>{title}</h2>
          <div className={styles["CircleContainer"]}>
            <CircularProgressbar
              value={value}
              maxValue={parsedMaxValue}
              text={displayValue}
              styles={{ text: {
                // Text color
                // fill: 'light-green',
                
                fontSize: '13px',
              }}}
            />
          </div>
        </div>
      );
    });
  };

  return <div className={styles["CircularBars"]}>{renderProgressBars()}</div>;
};

export default CircularProgressBarComponent;
