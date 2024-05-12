import styles from "./AppWidget.module.css";
import axios from "axios";
import { useState } from "react";
import { AppWidgetKey } from "../../apiSecrets";
const AppWidget = () => {
  const [Data, setData] = useState({});
  const [Location, setLocation] = useState("");
  const key = AppWidgetKey ;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${key}`;

  const changeLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
    setLocation("");
  };
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.top}>
          <input
            type="text"
            placeholder="Enter Location"
            className={styles.input}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={changeLocation}
           style={{ width: "100%" }}
          />
          <div className={styles.location}>
            {Data.name ? <p> {Data.name} </p> : <p>Dallas</p>}
          </div>
          <div className={styles.temp}>
            {Data.main ? (
              <h1> {Math.floor(Data.main.temp - 273)}°C </h1>
            ) : (
              <h1>20°C</h1>
            )}
            <div className={styles.description}>
              {Data.weather ? <p> {Data.weather[0].main} </p> : <p>Clouds</p>}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.feels}>
          {Data.main ? (
              <p> {Math.floor(Data.main.temp - 273)}°C </p>
            ) : (
              <p>20°C</p>
            )}
            <p>Feels Like</p>
          </div>
          <div className={styles.humidity}>
          {Data.main ? (
              <p> {Math.floor(Data.main.humidity)}% </p>
            ) : (
              <p>20%</p>
            )}
            <p>Humidity</p>
          </div>
          <div className={styles.wind}>
          {Data.main ? (
              <p> {(Data.wind.speed)}mph </p>
            ) : (
              <p>13mph</p>
            )}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWidget;
