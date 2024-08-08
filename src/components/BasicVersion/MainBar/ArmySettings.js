import React from "react";
import { colors } from "../../../assets/colors";
import { useDispatch, useSelector } from "react-redux";
import { armyActions } from "../../../store/army";

import { guardsmens } from "../../../data/GuardsmenData";
import { specialists } from "../../../data/SpecialistsData";
import { monsters } from "../../../data/MonsterData";
import { mercenary } from "../../../data/MercenaryData"; 

const ArmySettings = ({ isOpen }) => {
  const dispatch = useDispatch();

  const selectedUnits = useSelector((state) => state.army.selectedUnits || []); 

  const setSelectedUnitsHandler = (units) => {
    dispatch(armyActions.setSelectedUnits(units));
  };

  const handleClick = (rowIndex, colIndex, cell, type) => {
    if (colIndex === 0 || !cell) {
      return;
    }
    let updatedUnits;

    updatedUnits = selectedUnits.find((unit) => unit.name === cell.name)
      ? selectedUnits.filter((unit) => unit.name !== cell.name)
      : [...selectedUnits, cell];

    setSelectedUnitsHandler(updatedUnits);
  };

  const tableContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const tableStyle = {
    margin: "0 10px",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "0.5px solid #ddd",
    padding: "8px",
    height: "50px",
  };

  const clickableTdStyle = {
    ...thTdStyle,
    cursor: "pointer",
  };

  const selectedTdStyle = {
    ...clickableTdStyle,
    boxShadow: "0 0 0 3px #000 inset", // Add internal border effect
    opacity: 1,
  };

  const rowColors = [
    colors.T1,
    colors.T2,
    colors.T3,
    colors.T4,
    colors.T5,
    colors.T6,
    colors.T7,
    colors.T1,
    colors.T2,
  ];

  const renderTable = (rows, type) => (
    <table style={tableStyle}>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} style={{ backgroundColor: rowColors[rowIndex] }}>
            {row.map((cell, cellIndex) => {
              const isHeaderCell = cellIndex === 0;
              const isEmptyCell = !cell;
              const isSelected =
                selectedUnits.find((unit) => unit.name === cell.name);
              const cellStyle = isSelected
                ? selectedTdStyle
                : {
                    ...thTdStyle,
                    width: cellIndex === 0 ? "40px" : "100px",
                    cursor: isHeaderCell || isEmptyCell ? "default" : "pointer",
                  };
              if (cellIndex === 0) {
                cellStyle.opacity = 1;
              }
              return (
                <td
                  key={cellIndex}
                  style={cellStyle}
                  onClick={() => handleClick(rowIndex, cellIndex, cell, type)}
                >
                  {cellIndex === 0 ? cell : cell.name}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        display: isOpen ? "block" : "none",
        color: "black",
        fontWeight: "bold",
      }}
    >
      <div style={tableContainerStyle}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h2 style={{ marginBottom: "10px", color: "white" }}>Gwardziści</h2>
            {renderTable(guardsmens, "guards")}
          </div>
          <div>
            <h2 style={{ marginBottom: "10px", color: "white" }}>Specjaliści</h2>
            {renderTable(specialists, "specialists")}
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: "10px", color: "white" }}>Potwory</h2>
          {renderTable(monsters, "monsters")}
        </div>
        <div>
          <h2 style={{ marginBottom: "10px", color: "white" }}>Najemnicy</h2>
          {renderTable(mercenary, "mercenaries")}
        </div>
      </div>
    </div>
  );
};

export default ArmySettings;
