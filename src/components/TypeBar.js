import React from "react";
import LanguageSelector from "./LanguageSelector";
import { useSelector } from "react-redux";

const TypeBar = ({ setComponentVisibility }) => {
  const selectedLanguage = useSelector(
    (state) => state.settings.selectedLanguage
  );
  const translations = {
    PL: {
      basic: "Podstawowy",
      advanced: "Zaawansowany",
    },
    EN: {
      basic: "Basic",
      advanced: "Advanced",
    },
  };
  const buttonStyle = {
    color: "white",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    textAlign: "center",
    minWidth: "100px",
  };

  const basicButtonStyle = {
    ...buttonStyle,
    backgroundColor: "green",
  };

  const advancedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "red",
    display: "none", // Tryb zaawansowany wyłączony
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "20px",
        paddingTop: "10px",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        <div
          onClick={() => setComponentVisibility("basic")}
          style={basicButtonStyle}
        >
          {translations[selectedLanguage].basic}
        </div>
        <div
          onClick={() => setComponentVisibility("advanced")}
          style={advancedButtonStyle}
        >
          {translations[selectedLanguage].advanced}
        </div>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default TypeBar;
