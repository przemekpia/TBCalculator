import React from "react";
import {
  GiAbdominalArmor,
  GiAcid,
  GiWingedShield,
  GiHorseHead,
  GiGlowingArtifact,
  GiGuards,
  GiDragonHead,
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
        display: "flex",
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
            <th style={thStyle} onClick={() => setComponentVisibility("hero")}>
              <GiAbdominalArmor style={iconStyle} />
              <div>Bohaterowie i ekwipunek</div>
            </th>
            <th style={thStyle} onClick={() => setComponentVisibility("technologies")}>
              <GiAcid style={iconStyle} />
              <div>Badania</div>
            </th>
            <th style={thStyle} onClick={() => setComponentVisibility("talents")}>
              <GiWingedShield style={iconStyle} />
              <div>Talenty</div>
            </th>
            <th style={thStyle} onClick={() => setComponentVisibility("halloffame")}>
              <GiHorseHead style={iconStyle} />
              <div>Galeria Sław</div>
            </th>
            <th style={thStyle} onClick={() => setComponentVisibility("artifacts")}>
              <GiGlowingArtifact style={iconStyle} />
              <div>Artefakty</div>
            </th>
            <th style={thStyle} onClick={() => setComponentVisibility("dragon")}>
              <GiDragonHead style={iconStyle} />
              <div>Smok</div>
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
