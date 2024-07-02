import React from "react";
import {
  GiGuards,
} from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";

const SettingsBar = ({ isOpen, setComponentVisibility }) => {
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
        paddingBottom: "50px",
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
              <div>Armia</div>
            </th>
            <th style={thStyle} onClick={() => setComponentVisibility("bonus")}>
              <GiGuards style={iconStyle} />
              <div>Bonusy</div>
            </th>
            
            <th style={thStyle} onClick={() => setComponentVisibility("settings")}>
              <IoIosSettings style={iconStyle} />
              <div>Ustawienia</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default SettingsBar;
