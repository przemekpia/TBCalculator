import React from "react";

const Output = () => {
  const buttonStyle = {
    color: "black",
    padding: "10px 20px",
    cursor: "pointer",
    display: "block", 
    borderRadius: "5px",
    textAlign: "center",
    minWidth: "100px",
    backgroundColor: "white",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: "5px",
        paddingTop: "5px",
      }}
    >
      <div style={buttonStyle}>Oblicz</div>
    </div>
  );
};

export default Output;
