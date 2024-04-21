import { Outlet } from "react-router-dom";
import FaqItem from "../components/FaqItem";
import styles from "./Faq.module.css";
const Faq = () => {
return (
<>
<Outlet/>
<div className={styles["Heading"]}>
 <h2> Frequently Asked Questions </h2>
</div>
<div className="List" > 

      <FaqItem question="Question 1" answer="Answer 1" />
      <FaqItem question="Question 2" answer="Answer 2" />
      <FaqItem question="Question 3" answer="Answer 3" />
    
</div>
</>



)

}
export  default Faq;