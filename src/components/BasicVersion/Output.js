import React from "react";
import { useSelector } from "react-redux";

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

  
  const selectedUnits = useSelector((state) => state.army.selectedUnits || []);
  const selectedMonsters = useSelector((state) => state.army.selectedMonsters || []);
  const leadership = 10000
  
  const handleClick = () => {
    const sortedUnits = selectedUnits
      .map(unit => ({
        ...unit,
        ratio: unit.attack / unit.leadership
      }))
      .sort((a, b) => b.ratio - a.ratio);


    console.log("Sorted Units:", sortedUnits);

    alert("Sorted Units: " + sortedUnits.map(unit => `${unit.name}: ${unit.ratio.toFixed(2)}`).join(", "));
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
      <div style={buttonStyle} onClick={handleClick}>
        Oblicz
      </div>
    </div>
  );
};

export default Output;
