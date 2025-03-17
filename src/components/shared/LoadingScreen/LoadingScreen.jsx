import React, { useState, useEffect } from "react";
import netflixLogo from "../../../assets/netflix-logo.png"; // Add your Netflix logo in `assets` folder

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 5000); 
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <img src={netflixLogo} alt="Netflix Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
