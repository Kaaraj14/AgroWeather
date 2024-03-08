import styles from "./Row1.module.css";
import { useEffect, useReducer } from "react";
import PercentageBar from "./PercentageBar";

//Depending on the type of action we need to change the value of the state variables

const Row1 = (props) => {
  const Parameters = props.Parameters;

  const Reducer = (
    state = { Temp: 0, Hum: 0, AQI: 0, Pres: 0, Alt: 0 },
    action,
  ) => {
    console.log(action);
    console.log(String(action.temperature));
    return {  Temp: action.temperature ,Hum: action.humidity, AQI: action.air_quality, Pres: action.pressure, Alt: action.altitude};
  };

  useEffect(() => {
    dispatch(Parameters);
  }, [props.Parameters]);

  const [state, dispatch] = useReducer(Reducer, {
    Temp: 0,
    Hum: 0,
    AQI: 0,
    Pres: 0,
    Alt: 0,
  });

  const TempratureProps = {
    val:state.Temp,symbol: "%"
  }


  return (
    <div className={styles.row1}>
      <PercentageBar Percentage={{val:state.Temp,symbol: "°C"}} />
      <PercentageBar Percentage={{val:state.Hum,symbol: "%"}} />
      <PercentageBar Percentage={{val:state.AQI,symbol: "ppm"}} />
      <PercentageBar Percentage={{val:state.Pres,symbol: "Pa"}} />
      <PercentageBar Percentage={{val:state.Alt,symbol: "m"}} />
    </div>
  );
};

export default Row1;
