import React from "react";
import {
  GiGuards,
} from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";

const SettingsBar = ({ isOpen, setComponentVisibility }) => {
  const selectedLanguage = useSelector(
    (state) => state.settings.selectedLanguage
  );
  const translations = {
    PL: {
      army: "Armia",
      bonus: "Bonusy",
      settings: "Ustawienia",
    },
    EN: {
      army: "Army",
      bonus: "Bonuses",
      settings: "Settings",
    },
  };
  const thStyle = {
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.5)", // Semi-transparent white border
    padding: "10px",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "2em", // Increase icon size
  };

  return (
    <div
      style={{
        justifyContent: "center",
        paddingBottom: "20px",
        display: isOpen ? "block" : "none",
      }}
    >
      <table
        style={{
          width: "100%",
          tableLayout: "fixed",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle} onClick={() => setComponentVisibility("army")}>
              <GiGuards style={iconStyle} />
              <div>{translations[selectedLanguage].army}</div>
            </th>
            <th style={thStyle} onClick={() => setComponentVisibility("bonus")}>
              <GiGuards style={iconStyle} />
              <div>{translations[selectedLanguage].bonus}</div>
            </th>
            
            <th style={thStyle} onClick={() => setComponentVisibility("settings")}>
              <IoIosSettings style={iconStyle} />
              <div>{translations[selectedLanguage].settings}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default SettingsBar;
