import styles from "./Header.module.css";
import image from "../../ass/AgroWeatherLogo-removebg-preview.png";

const Header = () => {
  return (
    <ul className={styles.Header}>
      <li className={styles.header_buttons}>About</li>
      <li className={styles.header_buttons}>Service</li>
      <li className={styles.header_buttons}>Events</li>
      <li className={styles.header_symbols}>
        <a href="/">
          <img
            src= {image}
            alt="AgroWeather"
            width=""
            height="130px"
          />
        </a>
      </li>
      <li className={styles.header_buttons}>Venues</li>
      <li className={styles.header_buttons}>Careers</li>
      <li className={`${styles.header_buttons} ${styles.git}`}>Get In Touch</li>
    </ul>
  );
};

export default Header;
