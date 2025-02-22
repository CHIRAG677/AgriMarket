import React, { useState } from "react";
import Navbar from "./Navbar";
import './Ai.css'

function Ai() {
  const [isPremium, setIsPremium] = useState(false);
  const [scanStarted, setScanStarted] = useState(false);

  const handleScan = () => {
    if (!isPremium) {
      alert("You have to buy a premium for this because your limits are already exceeded.");
    } else {
      setScanStarted(true);
    }
  };

  return (
    <div className="ai-container">
      <Navbar />
      <div className="scanner-box">
        {scanStarted ? (
          <div className="scanning-animation">
            Scanning Crop...
          </div>
        ) : (
          <div className="camera-placeholder">
            <p>Camera Preview</p>
          </div>
        )}
      </div>
      <button className="scan-button" onClick={handleScan}>Start Scan</button>
    </div>
  );
}

export default Ai;
