import React from "react";
import ShortTableUnit from "./ShortTableUnit";

const UnitTable = ({ title, units, specialistsBonus, guardsmanBonus, armyBonus }) => {
  if (!units || units.length === 0) return null;

  return (
    <div
      style={{
        paddingTop: "2vh",
        paddingBottom: "2vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>{title}</h2>
      <table
        style={{
          marginTop: "20px",
          borderCollapse: "separate",
          paddingBottom: "1vh",
        }}
        cellSpacing="3"
      >
        <tbody>
          {units.map((unit, index) => (
            <ShortTableUnit
              key={index}
              unit={unit}
              specialistsBonus={specialistsBonus}
              guardsmanBonus={guardsmanBonus}
              armyBonus={armyBonus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitTable;
