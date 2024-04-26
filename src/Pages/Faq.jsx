import { Outlet } from "react-router-dom";
import FaqItem from "../components/FaqItem";
import styles from "./Faq.module.css";
import faqData from "../Data/faqData";
import DynamicContent from "../components/DynamicContent.jsx";
const Faq = () => {
return (
<>
<Outlet/>
<div className={styles["Heading"]}>
 <h2> Frequently Asked Questions </h2>
</div>
<div className="List" > 

{faqData.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
      

</div>
</>



)

}
export  default Faq;