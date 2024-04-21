import styles from "./SecondBox.module.css";
import InfoCard from "./InfoCard";
import flagInd from "../../assets/flagInd.png";

export default function SecondBox() {
  return (
    <>
      <div className={styles["box"]}>
        <h2>Connect With AgroWeather</h2>
        <InfoCard
         icon={flagInd}
          heading="India"
          ContactNo={"+91 956035XX86"}
          address={"xxx rohini sector -22 , main street , Delhi -110085"}
        />
      </div>
    </>
  );
}
