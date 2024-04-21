import { Outlet } from "react-router-dom";
import Form from "../components/Form.jsx";
import styles from "./ContactUs.module.css";
import image from "../../assets/contact-us-header-img.svg";
import SecondBox from "../components/SecondBox.jsx";
import InfoCard from "../components/InfoCard.jsx";
import worker from "../../assets/worker.png";
export default function Contact() {
  return (
    <>
    <Outlet/>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <h4>GET IN TOUCH</h4>
          <h1>Lets discuss your views on our products and services.</h1>
          <p>
            Feel free to connect with us via email, phone call, or by filling
            out the form below. We'll be in touch promptly to address any
            queries or concerns you may have..
          </p>
        </div>
        <div className={styles["image"]}>
          <img src={image} alt="contact-image" />
        </div>
      </div>
      <div className={styles["formBox"]}>
        <Form />
        <SecondBox />
      </div>
      <div className={styles["bottom-container"]}>
        <InfoCard
          icon={worker}
          heading="Technology"
          address={"Technology@agroweather.com"}
          ContactNo={"9899778XXX"}
        />
        <InfoCard
          icon={worker}
          heading="Sales"
          address={"Sales@agroweather.com"}
          ContactNo={"9780778XXX"}
        />
        <InfoCard
          icon={worker}
          heading="Managment"
          address={"Management@agroweather.com"}
          ContactNo={"7099778XXX"}
        />
      </div>
    </>
  );
}
