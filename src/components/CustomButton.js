import React from "react";

const CustomButton = ({ onClick, children }) => {
  const buttonStyle = {
    position: "relative",
    backgroundColor: "#000000",
    color: "white",
    padding: "10px 25px",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    outline: "none",
    borderRadius: "10px", // Zaokrąglenie narożników
    userSelect: "none",
  };

  const disabledStyle = {
    cursor: "default",
    opacity: "0.7",
  };

  return (
    <div style={{paddingTop:"10px", paddingBottom:"10px"}}>
      <button
        style={buttonStyle}
        onClick={onClick}
        disabled={onClick === undefined}
      >
        {children}
        <span
          style={{
            position: "absolute",
            content: '""',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: "2px solid white",
            borderRadius: "5px", // Zaokrąglenie narożników
          }}
        ></span>
      </button>
    </div>
  );
};

export default CustomButton;
