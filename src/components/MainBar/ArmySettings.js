import React, { useState } from "react";
import { colors } from "../../assets/colors";

const ArmySettings = ({ isOpen }) => {
  const columns = [
    "",
    "Piechota",
    "Jednostka Strzelecka",
    "Jeździec",
    "Jednostka latająca",
  ];

  const rows = [
    ["Tier I", "Włócznik I", "Łucznik I", "Jeździec I", ""],
    ["Tier II", "Włócznik II", "Łucznik II", "Jeździec II", ""],
    ["Tier III", "Włócznik III", "Łucznik III", "Jeździec III", ""],
    ["Tier IV", "Włócznik IV", "Łucznik IV", "Jeździec IV", ""],
    ["Tier V", "Włócznik V", "Łucznik V", "Jeździec V", "Gryf bitewny V"],
    ["Tier VI", "Ciężki halabardnik VI", "Ciężki kusznik VI", "Konny rycerz VI", "Gryf bitewny VI"],
    ["Tier VII", "Ciężki halabardnik VII", "Ciężki kusznik VII", "Konny rycerz VII", "Gryf bitewny VII"],
    ["Tier I", "Egzekutor I", "Czyściciel I", "Destruktor I", "Kruk I"],
    ["Tier II", "Egzekutor II", "Czyściciel II", "Destruktor II", "Kruk II"]
  ];

  const [selectedCells, setSelectedCells] = useState([]);

  const handleClick = (rowIndex, colIndex, cell) => {
    if (colIndex === 0 || cell === "") {
      return;
    }
    const cellKey = `${rowIndex}-${colIndex}`;
    setSelectedCells((prevSelectedCells) =>
      prevSelectedCells.includes(cellKey)
        ? prevSelectedCells.filter((key) => key !== cellKey)
        : [...prevSelectedCells, cellKey]
    );
  };

  const tableStyle = {
    margin: "0 auto",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    height: "50px",
    opacity: 0.6, // Set the default opacity to 0.6
  };

  const clickableTdStyle = {
    ...thTdStyle,
    cursor: "pointer",
  };

  const selectedTdStyle = {
    ...clickableTdStyle,
    border: "4px solid #fff",
    opacity: 1, // Set opacity to 1 for selected cells
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

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        display: isOpen ? "block" : "none",
      }}
    >
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={{ ...thTdStyle, width: index === 0 ? "70px" : "100px", opacity: 1 }}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ backgroundColor: rowColors[rowIndex] }}>
              {row.map((cell, cellIndex) => {
                const isHeaderCell = cellIndex === 0;
                const isEmptyCell = cell === "";
                const cellKey = `${rowIndex}-${cellIndex}`;
                const isSelected = selectedCells.includes(cellKey);
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
                    onClick={() => handleClick(rowIndex, cellIndex, cell)}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArmySettings;
