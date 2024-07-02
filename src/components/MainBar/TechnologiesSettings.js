import React from "react";

const TechnologiesSettings = ({ isOpen }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        display: isOpen ? "block" : "none",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Akademia</h1>
      <div>
        <h2 style={{ marginBottom: "10px" }}>Modernizacja armi</h2>
        <table>
          <tbody>
            
          </tbody>
        </table>
      </div>
      <div>
        <h2 style={{ marginBottom: "10px" }}>Wzmocnienie potworów</h2>
        <table>
          <tbody></tbody>
        </table>
      </div>
      <div>
        <h2 style={{ marginBottom: "10px" }}>Technologie klanowe</h2>
        <table>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnologiesSettings;
