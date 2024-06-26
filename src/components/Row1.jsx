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

  // const TempratureProps = {
  //   val:state.Temp,symbol: "%"
  // }


  return (
    <div className={styles.row1}>
      <PercentageBar Percentage={{val:state.Temp,symbol: "°C",final:false,title:"Temperature",maxvalue:80}} />
      <PercentageBar Percentage={{val:state.Hum,symbol: "%",final:false,title:"Humidity",maxvalue:100}} />
      <PercentageBar Percentage={{val:state.AQI,symbol: "ppm",final:false,title:"AQI",maxvalue:1023}} />
      
      <PercentageBar Percentage={{val:state.Alt,symbol: "m",final:false,title:"Altitude",maxvalue:9000}} />
      <PercentageBar Percentage={{val:state.Pres,symbol: "hPa",final:false,title:"Pressure",maxvalue:1100}} />
      <PercentageBar Percentage={{val:state.Alt,symbol: "m",final:true,title:""}}/>
    </div>
  );
};

export default Row1;
