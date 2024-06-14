import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ReturnBar = ({ isOpen, setComponentVisibility }) => {
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
            <th style={thStyle} onClick={() => setComponentVisibility("settingsBar")}>
              <FaArrowLeft />
              <div>Powrót</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ReturnBar;
