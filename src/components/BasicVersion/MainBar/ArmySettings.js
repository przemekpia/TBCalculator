import React from "react";
import { colors } from "../../../assets/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  armyGuardsmenActions,
  armySpecialistsActions,
  armyMonstersActions,
  armyActions,
} from "../../../store/army";

import { rowsMonsters } from "../../../data/MonsterData";
import { rowsGuardsmens } from "../../../data/GuardsmenData";
import { rowsSpecialists } from "../../../data/SpecialistsData";

const ArmySettings = ({ isOpen }) => {
  const dispatch = useDispatch();

  const selectedCellsGuards = useSelector(
    (state) => state.guardsmen.selectedCellsGuards
  );
  const selectedCellsSpecialists = useSelector(
    (state) => state.specialists.selectedCellsSpecialists
  );
  const selectedCellsMonsters = useSelector(
    (state) => state.monsters.selectedCellsMonsters
  );

  const selectedUnitsNames = useSelector(
    (state) => state.army.selectedUnitsNames
  );
  const selectedMonstersNames = useSelector(
    (state) => state.army.selectedMonstersNames
  );

  const setSelectedCellsGuardsHandler = (cells) => {
    dispatch(armyGuardsmenActions.setSelectedCellsGuards(cells));
  };

  const setSelectedCellsSpecialistsHandler = (cells) => {
    dispatch(armySpecialistsActions.setSelectedCellsSpecialists(cells));
  };

  const setSelectedCellsMonstersHandler = (cells) => {
    dispatch(armyMonstersActions.setSelectedCellsMonsters(cells));
  };

  const setSelectedUnitsNamesHandler = (names) => {
    dispatch(armyActions.setSelectedUnitsNames(names));
  };

  const setSelectedMonstersNamesHandler = (names) => {
    dispatch(armyActions.setSelectedMonstersNames(names));
  };

  const handleClick = (rowIndex, colIndex, cell, type) => {
    if (colIndex === 0 || cell === "") {
      return;
    }
    const cellKey = `${rowIndex}-${colIndex}`;
    let updatedCells;
    let updatedNames;

    switch (type) {
      case "guards":
        updatedCells = selectedCellsGuards.includes(cellKey)
          ? selectedCellsGuards.filter((key) => key !== cellKey)
          : [...selectedCellsGuards, cellKey];
        setSelectedCellsGuardsHandler(updatedCells);

        updatedNames = selectedUnitsNames.includes(cell)
          ? selectedUnitsNames.filter((name) => name !== cell)
          : [...selectedUnitsNames, cell];
        setSelectedUnitsNamesHandler(updatedNames);
        break;

      case "specialists":
        updatedCells = selectedCellsSpecialists.includes(cellKey)
          ? selectedCellsSpecialists.filter((key) => key !== cellKey)
          : [...selectedCellsSpecialists, cellKey];
        setSelectedCellsSpecialistsHandler(updatedCells);

        updatedNames = selectedUnitsNames.includes(cell)
          ? selectedUnitsNames.filter((name) => name !== cell)
          : [...selectedUnitsNames, cell];
        setSelectedUnitsNamesHandler(updatedNames);
        break;

      case "monsters":
        updatedCells = selectedCellsMonsters.includes(cellKey)
          ? selectedCellsMonsters.filter((key) => key !== cellKey)
          : [...selectedCellsMonsters, cellKey];
        setSelectedCellsMonstersHandler(updatedCells);

        updatedNames = selectedMonstersNames.includes(cell)
          ? selectedMonstersNames.filter((name) => name !== cell)
          : [...selectedMonstersNames, cell];
        setSelectedMonstersNamesHandler(updatedNames);
        break;

      default:
        break;
    }
    console.log(selectedUnitsNames)
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
                {rowsGuardsmens.map((row, rowIndex) => (
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
            <h2 style={{ marginBottom: "10px", color: "white" }}>
              Specjaliści
            </h2>
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
      <div style={tableContainerStyle}>
        <div>
          <h2 style={{ marginBottom: "10px", color: "white" }}>Armia</h2>
          <table style={tableStyle}>
            <tbody>
              {selectedUnitsNames.map((name, index) => (
                <tr key={index} style={{ backgroundColor: colors.T3 }}>
                  <td style={thTdStyle}>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 style={{ marginBottom: "10px", color: "white" }}>Potwory</h2>
          <table style={tableStyle}>
            <tbody>
              {selectedMonstersNames.map((name, index) => (
                <tr key={index} style={{ backgroundColor: colors.T3 }}>
                  <td style={thTdStyle}>{name}</td>
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
