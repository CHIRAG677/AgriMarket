import React, { useContext } from "react";
import {
  FaHome,
  FaStore,
  FaPhone,
  FaNewspaper,
  FaUser,
  FaComments,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext"; // Import the Language Context
import "./Navbar.css";

function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); // Update the language state
  };

  const translations = {
    en: { home: "Home", products: "Products", ai: "AI Assistance", contact: "Contact", news: "News", profile: "Profile" },
    hi: { home: "होम", products: "उत्पाद", ai: "एआई सहायता", contact: "संपर्क करें", news: "समाचार", profile: "प्रोफ़ाइल" }
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <FaStore className="brand-icon" />
        <span>AgriMarket</span>
      </div>

      <div className="nav-links">
        <Link to="/my-app/farmer" className="nav-link">
          <FaHome className="nav-icon" />
          <span>{translations[language].home}</span>
        </Link>

        <Link to="/my-app/products" className="nav-link">
          <FaStore className="nav-icon" />
          <span>{translations[language].products}</span>
        </Link>

        <Link to="/my-app/ai-assistance" className="nav-link">
          <FaComments className="nav-icon" />
          <span>{translations[language].ai}</span>
        </Link>

        <Link to="/my-app/contact" className="nav-link">
          <FaPhone className="nav-icon" />
          <span>{translations[language].contact}</span>
        </Link>

        <Link to="/my-app/news" className="nav-link">
          <FaNewspaper className="nav-icon" />
          <span>{translations[language].news}</span>
        </Link>
      </div>

      <div className="nav-auth">
        <Link to="/my-app/profile" className="auth-link">
          <FaUser className="auth-icon" />
          <span>{translations[language].profile}</span>
        </Link>

        {/* Language Selector Dropdown */}
        <select className="language-selector" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
