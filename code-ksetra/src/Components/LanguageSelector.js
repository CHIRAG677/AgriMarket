import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import axios from "axios";

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div style={{ padding: "10px", textAlign: "right" }}>
      <label>Select Language: </label>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
