import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import image from "../../assets/AgroWeatherLogo.jpg";

const Header = () => {
  const navLinkClass = ({ isActive }) => {
    return {
      textdecoration: isActive ? "" : "underline",
    };
  };

  return (
    <ul className={styles.Header}>
      <li className={styles.header_buttons}>
        <NavLink to="/" className={navLinkClass}>
          About
        </NavLink>
      </li>
      <li className={styles.header_buttons}>
        <NavLink to="/Dashboard">Dashboard</NavLink>
      </li>
      <li className={styles.header_buttons}>
        <NavLink to="/Analysis">Analysis</NavLink>
      </li>
      <li className={styles.header_symbols}>
        <a href="/">
          <img src={image} alt="AgroWeather" width="" height="120px" />
        </a>
      </li>
      <li className={styles.header_buttons}>
        <NavLink to="/Technology">Technology</NavLink>
      </li>
      <li className={styles.header_buttons}>
        <NavLink to="/Faq">Faq</NavLink>
      </li>
      <li className={`${styles.header_buttons} ${styles.git}`}>
        <NavLink to="/ContactUs">Contact Us</NavLink>
      </li>
    </ul>
  );
};

export default Header;
