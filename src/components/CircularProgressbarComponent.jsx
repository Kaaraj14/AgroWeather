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
  // Destructure data into titles, values, and maxvalues
  const [titles, values, maxvalues] = data;

  // Function to render circular progress bars for each data point
  const renderProgressBars = () => {
    return titles.map((title, index) => {
      // Parse value to float (for progress) and string (for display)
      const value = parseFloat(values[index]).toFixed(2);
      const parsedMaxValue = parseFloat(maxvalues[index]);

      // **Corrected formatting for text prop:**
      const displayValue = `${value}${symbol(title)}`; // Combine value and symbol directly

      return (
        <div key={index} className={styles["Component"]}>
          <h2>{title}</h2>
          <CircularProgressbar
            value={value}
            maxValue={parsedMaxValue} // Assuming all values are percentages
            text={displayValue}
            
          />
        </div>
      );
    });
  };

  return <div className={styles["CircularBars"]}>{renderProgressBars()}</div>;
};

export default CircularProgressBarComponent;
