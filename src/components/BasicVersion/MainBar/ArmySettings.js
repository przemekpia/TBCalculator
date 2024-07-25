import React from "react";
import { colors } from "../../../assets/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  armyGuardsmenActions,
  armySpecialistsActions,
  armyMonstersActions,
} from "../../../store/counter";

const ArmySettings = ({ isOpen }) => {
  const rowsGuards = [
    ["Tier I", "Włócznik I", "Łucznik I", "Jeździec I", ""],
    ["Tier II", "Włócznik II", "Łucznik II", "Jeździec II", ""],
    ["Tier III", "Włócznik III", "Łucznik III", "Jeździec III", ""],
    ["Tier IV", "Włócznik IV", "Łucznik IV", "Jeździec IV", ""],
    ["Tier V", "Włócznik V", "Łucznik V", "Jeździec V", "Gryf bitewny V"],
    ["Tier VI", "Ciężki halabardnik VI", "Ciężki kusznik VI", "Konny rycerz VI", "Gryf bitewny VI"],
    ["Tier VII", "Ciężki halabardnik VII", "Ciężki kusznik VII", "Konny rycerz VII", "Gryf bitewny VII"],
    ["Tier I", "Egzekutor I", "Czyściciel I", "Destruktor I", "Kruk I"],
    ["Tier II", "Egzekutor II", "Czyściciel II", "Destruktor II", "Kruk II"],
  ];

  const rowsSpecialists = [
    ["Tier I", "Rycerz I", "", "", ""],
    ["Tier II", "Rycerz II", "", "", ""],
    ["Tier III", "Rycerz III", "", "", ""],
    ["Tier IV", "Rycerz IV", "", "", ""],
    ["Tier V", "Rycerz V", "Elitarny Kusznik V", "Jeździec lwów V", "Sęp V"],
    ["Tier VI", "Cięzki Rycerz VI", "Elitarny Kusznik VI", "Jeździec lwów VI", "Sęp VI"],
    ["Tier VII", "Cięzki Rycerz VII", "Elitarny Kusznik VII", "Jeździec lwów VII", "Sęp VII"],
    ["Tier I", "Pojedynkowicz I", "Legitymista I", "Białogrzywy husarz I", "Królewski lew I"],
    ["Tier II", "Pojedynkowicz II", "Legitymista II", "Białogrzywy husarz II", "Królewski lew II"],
  ];

  const rowsMonsters = [
    ["Tier I", "", "", "", ""],
    ["Tier II", "", "", "", ""],
    ["Tier III", "Szmaragdowy smok", "Żywiołak wody", "Kamienny gargulec", "Odyniec bojowy"],
    ["Tier IV", "Magiczny smok", "Lodowy feniks", "Wieloręki strażnik", "Gorgona meduza"],
    ["Tier V", "Pustynny pogromca", "Płonący centaur", "Dwugłowy ogr", "Przerażająca mantykora"],
    ["Tier VI", "Kryształowy smok", "Rubinowy golem", "Jeździec trolli", "Niszczyciel dżungli"],
    ["Tier VII", "Czarny smok", "Pan wiatru", "Niszczycielski kolos", "Prastary potwór"],
    ["Tier I", "Burzyciel I", "Ognisty feniks I", "Kraken I", "Szachraj I"],
    ["Tier II", "Burzyciel II", "Ognisty feniks II", "Kraken II", "Szachraj II"],
  ];

  const dispatch = useDispatch();
  const selectedCellsGuards = useSelector((state) => state.guardsmen.selectedCellsGuards);
  const selectedCellsSpecialists = useSelector((state) => state.specialists.selectedCellsSpecialists);
  const selectedCellsMonsters = useSelector((state) => state.monsters.selectedCellsMonsters);

  const setSelectedCellsGuardsHandler = (cells) => {
    dispatch(armyGuardsmenActions.setSelectedCellsGuards(cells));
  };

  const setSelectedCellsSpecialistsHandler = (cells) => {
    dispatch(armySpecialistsActions.setSelectedCellsSpecialists(cells));
  };

  const setSelectedCellsMonstersHandler = (cells) => {
    dispatch(armyMonstersActions.setSelectedCellsMonsters(cells));
  };

  const handleClick = (rowIndex, colIndex, cell, type) => {
    if (colIndex === 0 || cell === "") {
      return;
    }
    const cellKey = `${rowIndex}-${colIndex}`;
    let updatedCells;

    switch (type) {
      case "guards":
        updatedCells = selectedCellsGuards.includes(cellKey)
          ? selectedCellsGuards.filter((key) => key !== cellKey)
          : [...selectedCellsGuards, cellKey];
        setSelectedCellsGuardsHandler(updatedCells);
        break;
      case "specialists":
        updatedCells = selectedCellsSpecialists.includes(cellKey)
          ? selectedCellsSpecialists.filter((key) => key !== cellKey)
          : [...selectedCellsSpecialists, cellKey];
        setSelectedCellsSpecialistsHandler(updatedCells);
        break;
      case "monsters":
        updatedCells = selectedCellsMonsters.includes(cellKey)
          ? selectedCellsMonsters.filter((key) => key !== cellKey)
          : [...selectedCellsMonsters, cellKey];
        setSelectedCellsMonstersHandler(updatedCells);
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
    border: "0.5px solid #ddd",
    padding: "8px",
    height: "50px",
    //opacity: 0.8,
  };

  const clickableTdStyle = {
    ...thTdStyle,
    cursor: "pointer",
  };

  const selectedTdStyle = {
    ...clickableTdStyle,
    border: "3px solid #000",
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
        color: "black",
        fontWeight: "bold",
      }}
    >
      <div style={tableContainerStyle}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h2 style={{ marginBottom: "10px", color: "white" }}>Gwardziści</h2>
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
            <h2 style={{ marginBottom: "10px", color: "white" }}>Specjaliści</h2>
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
                      const isSelected = selectedCellsSpecialists.includes(cellKey);
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
                            handleClick(rowIndex, cellIndex, cell, "specialists")
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
          <h2 style={{ marginBottom: "10px", color: "white" }}>Potwory</h2>
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
