import React from "react";
import {
  GiAbdominalArmor,
  GiAcid,
  GiWingedShield,
  GiHorseHead,
  GiGlowingArtifact,
  GiGuards,
} from "react-icons/gi";

import { IoIosSettings } from "react-icons/io";

const SettingsBar = () => {
  const handlePress = (label) => {
    alert(`Pressed: ${label}`);
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
        display: "flex",
        justifyContent: "center",
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
            <th style={thStyle} onClick={() => handlePress("Ekwipunek")}>
              <GiGuards style={iconStyle} />
              <div>Armia</div>
            </th>
            <th style={thStyle} onClick={() => handlePress("Ekwipunek")}>
              <GiAbdominalArmor style={iconStyle} />
              <div>Ekwipunek</div>
            </th>
            <th style={thStyle} onClick={() => handlePress("Badania")}>
              <GiAcid style={iconStyle} />
              <div>Badania</div>
            </th>
            <th style={thStyle} onClick={() => handlePress("Talenty")}>
              <GiWingedShield style={iconStyle} />
              <div>Talenty</div>
            </th>
            <th style={thStyle} onClick={() => handlePress("Galeria Sław")}>
              <GiHorseHead style={iconStyle} />
              <div>Galeria Sław</div>
            </th>
            <th style={thStyle} onClick={() => handlePress("Artefakty")}>
              <GiGlowingArtifact style={iconStyle} />
              <div>Artefakty</div>
            </th>
            <th style={thStyle} onClick={() => handlePress("Artefakty")}>
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
