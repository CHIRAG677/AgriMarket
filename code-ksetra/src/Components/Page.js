"use client";

import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Page.css";
import { LanguageContext } from "../LanguageContext"; // Import Language Context

function Page() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [text, setText] = useState("AgriMarket");
  const fullText = "Connecting Farmers and Buyers";
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const handleGetStarted = () => {
    navigate("/my-app/products"); // Adjust the route as needed
  };

  const translations = {
    en: {
      subtitle: "Empowering farmers, satisfying buyers, one click at a time.",
      whyChoose: "Why Choose AgriMarket?",
      farmToTable: "Direct Farm-to-Table",
      farmToTableDesc: "Connect directly with local farmers for the freshest produce.",
      fairPrices: "Fair Prices",
      fairPricesDesc: "Transparent pricing that benefits both farmers and buyers.",
      easyLogistics: "Easy Logistics",
      easyLogisticsDesc: "Streamlined delivery process from farm to your doorstep.",
      getStarted: "Get Started",
    },
    hi: {
      subtitle: "किसानों को सशक्त बनाना, खरीदारों को संतुष्ट करना, एक क्लिक में।",
      whyChoose: "अग्रीमार्केट क्यों चुनें?",
      farmToTable: "सीधे खेत से टेबल तक",
      farmToTableDesc: "ताजा उपज के लिए स्थानीय किसानों से सीधे जुड़ें।",
      fairPrices: "उचित मूल्य",
      fairPricesDesc: "पारदर्शी मूल्य निर्धारण जो किसानों और खरीदारों दोनों को लाभ पहुंचाता है।",
      easyLogistics: "आसान लॉजिस्टिक्स",
      easyLogisticsDesc: "फार्म से आपके दरवाजे तक सुव्यवस्थित डिलीवरी प्रक्रिया।",
      getStarted: "शुरू करें",
    },
  };

  return (
    <div className="page">
      <Navbar />
      <div className="content-wrapper">
        <div className="hero-section">
          <div className="logo-container">
            <div className="logo">AgriMarket</div> {/* Keeps "AgriMarket" title */}
          </div>
          <div className="main-content">
            <h1 className="animated-text">{text}</h1> {/* Keeps animation */}
            <div className="hands-container">
              <div className="hand farmer-hand">🧑‍🌾</div>
              <div className="hand buyer-hand">🛒</div>
            </div>
          </div>
          <p className="subtitle">{translations[language].subtitle}</p>
          
          <Link to="/my-app/products">
            <button className="cta-button" onClick={handleGetStarted}>
              {translations[language].getStarted}
            </button>
          </Link>

          {/* Language Selector Dropdown */}
          <select className="language-selector" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>

        </div>
      </div>
      
      <div className="features-section">
        <h2>{translations[language].whyChoose}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🌾</span>
            <h3>{translations[language].farmToTable}</h3>
            <p>{translations[language].farmToTableDesc}</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3>{translations[language].fairPrices}</h3>
            <p>{translations[language].fairPricesDesc}</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🚚</span>
            <h3>{translations[language].easyLogistics}</h3>
            <p>{translations[language].easyLogisticsDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
