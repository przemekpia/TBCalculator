import React from "react";

const CustomButton = ({ onClick, children }) => {
  const buttonStyle = {
    backgroundColor: "#000000",
    color: "white",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "2px solid",
    padding: "10px 25px",
    outline: "none",
    borderRadius: "10px", 
  };


  return (
    <div style={{paddingTop:"10px", paddingBottom:"10px"}}>
      <button
        style={buttonStyle}
        onClick={onClick}
      >
        {children}
        
      </button>
    </div>
  );
};

export default CustomButton;
