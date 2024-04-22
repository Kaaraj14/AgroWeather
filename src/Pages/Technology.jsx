import { Outlet } from "react-router-dom";
import styles from "./Technology.module.css";
import TechPanel from "../components/TechPanel.jsx";
import techData from "../Data/techData.js";
const Technology = () => {
  return (
    <>
      <Outlet />
      <div className={styles.tech}>
        <div className={styles.grid}>
          {techData.map((sensor) => (
            <TechPanel
              key={sensor.id}
              id={sensor.id}
              title={sensor.title}
              information={sensor.information}
              image={sensor.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Technology;
