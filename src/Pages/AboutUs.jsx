import { Outlet } from "react-router-dom";
import styles from "./AboutUs.module.css";
import TeamCard from "../components/TeamCard";
import teamData from "../Data/team";
const AboutUs = () => {
  return (
    <>
      <Outlet />
      <div className={styles.aboutus}>
        <div className={styles.content}>
          <h1>About AgroWeather</h1>
          <h3>An Attempt At Easing The Noble Act Of Feeding The Nation</h3>
          <p>
            Imagine a website that helps farmers get the most from their land.
            AgroWeather does just that! It uses tiny sensors, like affordable
            Arduino devices, to measure Physical Parameters.
          </p>
          <button>AgroWeather</button>
        </div>
        <img
          className={styles.img}
          src="../assets/Dashboard.png"
          alt="AgroWeather"
          width="600px"
        />
        <img
          className={styles.PhoneApp}
          src="../assets/PhoneApp1.png"
          alt="PhoneApp"
          width="100px"
        />
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      <div className={styles.af}>
        <div className={styles.icontent}>
          <h2>Mission:</h2>
          <p>
            At AgroWeather InsightHub, our mission is to revolutionize the
            agricultural industry by harnessing the power of data and technology
            to empower farmers, enhance crop productivity, and promote
            sustainable farming practices. We are committed to providing farmers
            with access to accurate, real-time weather and environmental data,
            actionable insights, and innovative tools that enable them to make
            informed decisions, optimize resource utilization, and mitigate
            risks associated with climate variability.
          </p>
        </div>
        <div className={styles.icontent}>
          <h2>Vision:</h2>
          <p>
            Our vision is to create a future where every farmer has the tools
            and knowledge necessary to thrive in a rapidly changing climate. We
            envision a world where agriculture is not only resilient to
            environmental challenges but also contributes to environmental
            sustainability and food security. By leveraging cutting-edge
            technologies, advanced analytics, and collaborative partnerships, we
            aspire to transform the agricultural landscape and pave the way for
            a more prosperous, resilient, and sustainable future for farmers and
            communities worldwide.
          </p>
        </div>
      </div>
      <div className={styles.teams}>
        <h4>Our Team:</h4>
      </div>

      <div className={styles.teams}>
        {teamData.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            position={member.position}
            bio={member.bio}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default AboutUs;
