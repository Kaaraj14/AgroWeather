import { useState } from "react";
import styles from "./DynamicContent.module.css";
import LineGraph from "./LineGraph";

export default function DynamicContent({ parameters }) {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const ButtonText = [
    ["Temperature"],
    ["Humidity"],
    ["Pressure"],
    ["Altitude"],
    ["Aqi"],
  ];

  const content = [
    [
      <>
        <LineGraph temperatureValue={parameters.temperatureValue} />
      </>,
    ],
    [
      <>
        <LineGraph temperatureValue={parameters.humidityValue} />
      </>,
    ],
    [
      <>
        <LineGraph temperatureValue={parameters.pressureValue} />
      </>,
    ],
    [
      <>
        <LineGraph temperatureValue={parameters.altitudeValue} />
      </>,
    ],
    [
      <>
        <LineGraph temperatureValue={parameters.airQualityValue} />
      </>,
    ],
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <menu>
          <ul>
            {ButtonText.map((item, index) => (
              <li key={index}>
                <button
                  className={activeContentIndex === index ? "active" : ""}
                  onClick={() => setActiveContentIndex(index)}
                >
                  {item[0]} 
                </button>
              </li>
            ))}
          </ul>
        </menu>
      </div>
      <div className={styles.content}>
        <ul>
          {content[activeContentIndex].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
