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

  const rowsGuards = [
    ["Tier I", "Włócznik I", "Łucznik I", "Jeździec I", ""],
    ["Tier II", "Włócznik II", "Łucznik II", "Jeździec II", ""],
    ["Tier III", "Włócznik III", "Łucznik III", "Jeździec III", ""],
    ["Tier IV", "Włócznik IV", "Łucznik IV", "Jeździec IV", ""],
    ["Tier V", "Włócznik V", "Łucznik V", "Jeździec V", "Gryf bitewny V"],
    [
      "Tier VI",
      "Ciężki halabardnik VI",
      "Ciężki kusznik VI",
      "Konny rycerz VI",
      "Gryf bitewny VI",
    ],
    [
      "Tier VII",
      "Ciężki halabardnik VII",
      "Ciężki kusznik VII",
      "Konny rycerz VII",
      "Gryf bitewny VII",
    ],
    ["Tier I", "Egzekutor I", "Czyściciel I", "Destruktor I", "Kruk I"],
    ["Tier II", "Egzekutor II", "Czyściciel II", "Destruktor II", "Kruk II"],
  ];

  const rowsSpecialists = [
    ["Tier I", "Rycerz I", "", "", ""],
    ["Tier II", "Rycerz II", "", "", ""],
    ["Tier III", "Rycerz III", "", "", ""],
    ["Tier IV", "Rycerz IV", "", "", ""],
    ["Tier V", "Rycerz V", "Elitarny Kusznik V", "Jeździec lwów V", "Sęp V"],
    [
      "Tier VI",
      "Cięzki Rycerz VI",
      "Elitarny Kusznik VI",
      "Jeździec lwów VI",
      "Sęp VI",
    ],
    [
      "Tier VII",
      "Cięzki Rycerz VII",
      "Elitarny Kusznik VII",
      "Jeździec lwów VII",
      "Sęp VII",
    ],
    [
      "Tier I",
      "Pojedynkowicz I",
      "Legitymista I",
      "Białogrzywy husarz I",
      "Królewski lew I",
    ],
    [
      "Tier II",
      "Pojedynkowicz II",
      "Legitymista II",
      "Białogrzywy husarz II",
      "Królewski lew II",
    ],
  ];

  const rowsMonsters = [
    ["Tier I", "", "", "", ""],
    ["Tier II", "", "", "", ""],
    [
      "Tier III",
      "Szmaragdowy smok",
      "Żywiołak wody",
      "Kamienny gargulec",
      "Odyniec bojowy",
    ],
    [
      "Tier IV",
      "Magiczny smok",
      "Lodowy feniks",
      "Wieloręki strażnik",
      "Gorgona meduza",
    ],
    [
      "Tier V",
      "Pustynny pogromca",
      "Płonący centaur",
      "Dwugłowy ogr",
      "Przerażająca mantykora",
    ],
    [
      "Tier VI",
      "Kryształowy smok",
      "Rubinowy golem",
      "Jeździec trolli",
      "Niszczyciel dżungli",
    ],
    [
      "Tier VII",
      "Czarny smok",
      "Pan wiatru",
      "Niszczycielski kolos",
      "Prastary potwór",
    ],
    ["Tier I", "Burzyciel I", "Ognisty feniks I", "Kraken I", "Szachraj I"],
    [
      "Tier II",
      "Burzyciel II",
      "Ognisty feniks II",
      "Kraken II",
      "Szachraj II",
    ],
  ];

  const [selectedCellsGuards, setSelectedCellsGuards] = useState([]);
  const [selectedCellsSpecialists, setSelectedCellsSpecialists] = useState([]);
  const [selectedCellsMonsters, setSelectedCellsMonsters] = useState([]);

  const handleClick = (rowIndex, colIndex, cell, type) => {
    if (colIndex === 0 || cell === "") {
      return;
    }
    const cellKey = `${rowIndex}-${colIndex}`;
    switch (type) {
      case "guards":
        setSelectedCellsGuards((prevSelectedCells) =>
          prevSelectedCells.includes(cellKey)
            ? prevSelectedCells.filter((key) => key !== cellKey)
            : [...prevSelectedCells, cellKey]
        );
        break;
      case "specialists":
        setSelectedCellsSpecialists((prevSelectedCells) =>
          prevSelectedCells.includes(cellKey)
            ? prevSelectedCells.filter((key) => key !== cellKey)
            : [...prevSelectedCells, cellKey]
        );
        break;
      case "monsters":
        setSelectedCellsMonsters((prevSelectedCells) =>
          prevSelectedCells.includes(cellKey)
            ? prevSelectedCells.filter((key) => key !== cellKey)
            : [...prevSelectedCells, cellKey]
        );
        break;
      default:
        break;
    }
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
    border: "1px solid #ddd",
    padding: "8px",
    height: "50px",
    opacity: 0.6,
  };

  const clickableTdStyle = {
    ...thTdStyle,
    cursor: "pointer",
  };

  const selectedTdStyle = {
    ...clickableTdStyle,
    border: "4px solid #FF0000",
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

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        display: isOpen ? "block" : "none",
      }}
    >
      <div style={tableContainerStyle}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h2 style={{ marginBottom: "10px" }}>Gwardziści</h2>
            <table style={tableStyle}>
              <tbody>
                {rowsGuards.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    style={{ backgroundColor: rowColors[rowIndex] }}
                  >
                    {row.map((cell, cellIndex) => {
                      const isHeaderCell = cellIndex === 0;
                      const isEmptyCell = cell === "";
                      const cellKey = `${rowIndex}-${cellIndex}`;
                      const isSelected = selectedCellsGuards.includes(cellKey);
                      const cellStyle = isSelected
                        ? selectedTdStyle
                        : {
                            ...thTdStyle,
                            width: cellIndex === 0 ? "40px" : "100px",
                            cursor:
                              isHeaderCell || isEmptyCell
                                ? "default"
                                : "pointer",
                          };
                      if (cellIndex === 0) {
                        cellStyle.opacity = 1;
                      }
                      return (
                        <td
                          key={cellIndex}
                          style={cellStyle}
                          onClick={() =>
                            handleClick(rowIndex, cellIndex, cell, "guards")
                          }
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
          <div>
            <h2 style={{ marginBottom: "10px" }}>Specjaliści</h2>
            <table style={tableStyle}>
              <tbody>
                {rowsSpecialists.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    style={{ backgroundColor: rowColors[rowIndex] }}
                  >
                    {row.map((cell, cellIndex) => {
                      const isHeaderCell = cellIndex === 0;
                      const isEmptyCell = cell === "";
                      const cellKey = `${rowIndex}-${cellIndex}`;
                      const isSelected =
                        selectedCellsSpecialists.includes(cellKey);
                      const cellStyle = isSelected
                        ? selectedTdStyle
                        : {
                            ...thTdStyle,
                            width: cellIndex === 0 ? "40px" : "100px",
                            cursor:
                              isHeaderCell || isEmptyCell
                                ? "default"
                                : "pointer",
                          };
                      if (cellIndex === 0) {
                        cellStyle.opacity = 1;
                      }
                      return (
                        <td
                          key={cellIndex}
                          style={cellStyle}
                          onClick={() =>
                            handleClick(
                              rowIndex,
                              cellIndex,
                              cell,
                              "specialists"
                            )
                          }
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
        </div>
        <div>
          <h2 style={{ marginBottom: "10px" }}>Potwory</h2>
          <table style={tableStyle}>
            <tbody>
              {rowsMonsters.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{ backgroundColor: rowColors[rowIndex] }}
                >
                  {row.map((cell, cellIndex) => {
                    const isHeaderCell = cellIndex === 0;
                    const isEmptyCell = cell === "";
                    const cellKey = `${rowIndex}-${cellIndex}`;
                    const isSelected = selectedCellsMonsters.includes(cellKey);
                    const cellStyle = isSelected
                      ? selectedTdStyle
                      : {
                          ...thTdStyle,
                          width: cellIndex === 0 ? "40px" : "100px",
                          cursor:
                            isHeaderCell || isEmptyCell ? "default" : "pointer",
                        };
                    if (cellIndex === 0) {
                      cellStyle.opacity = 1;
                    }
                    return (
                      <td
                        key={cellIndex}
                        style={cellStyle}
                        onClick={() =>
                          handleClick(rowIndex, cellIndex, cell, "monsters")
                        }
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
      </div>
    </div>
  );
};

export default ArmySettings;
