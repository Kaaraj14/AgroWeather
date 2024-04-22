import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BigBox from "./components/BigBox.jsx";
import Header from "./Pages/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Faq from "./Pages/Faq.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Technology from "./Pages/Technology.jsx";
import Analysis from  "./Pages/Analysis.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <section className="main">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/Dashboard" element={<BigBox />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Analysis" element={<Analysis />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </>
  );
}
