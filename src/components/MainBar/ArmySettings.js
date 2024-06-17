import React from "react";

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

  const handleClick = (rowIndex, colIndex, cell) => {
    if (colIndex === 0 || cell === "") {
      return;
    }
    alert(`Clicked on row ${rowIndex + 1}, column ${colIndex + 1}`);
  };

  const tableStyle = {
    width: "80%",
    margin: "0 auto",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
  };

  const clickableTdStyle = {
    ...thTdStyle,
    cursor: "pointer",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "50px",
        display: isOpen ? "block" : "none",
      }}
    >
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={thTdStyle}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const isHeaderCell = cellIndex === 0;
                const isEmptyCell = cell === "";
                const cellStyle = isHeaderCell || isEmptyCell ? thTdStyle : clickableTdStyle;
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
