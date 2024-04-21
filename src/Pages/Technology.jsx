import { Outlet } from "react-router-dom";
import styles from "./Technology.module.css";
import TechPanel from "../components/TechPanel.jsx"


const Technology = () =>{
    return(
        <>
        <Outlet/>
        <div className={styles.tech}>
            <div className={styles.grid}>
                <TechPanel/>
                <TechPanel/>
                <TechPanel/>
                <TechPanel/>
                <TechPanel/>
                <TechPanel/>
            </div>
        </div>
        </>
    );
}

export default Technology;