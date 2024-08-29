import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
const ReturnBar = ({ isOpen, setComponentVisibility }) => {
  const selectedLanguage = useSelector(
    (state) => state.settings.selectedLanguage
  );
  const translations = {
    PL: {
      return: "Powrót",
    },
    EN: {
      return: "Return",
    },
  };
  const thStyle = {
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.5)", 
    padding: "10px",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "2em", 
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
            <th style={thStyle} onClick={() => setComponentVisibility("settingsBar")}>
              <FaArrowLeft style={iconStyle}/>
              <div>{translations[selectedLanguage].return}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ReturnBar;
