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
  const selectedLanguage = useSelector(
    (state) => state.settings.selectedLanguage
  );
  const setSelectedUnitsHandler = (units) => {
    dispatch(armyActions.setSelectedUnits(units));
  };

  const getTierRows = (rows, tierName) => {
    return rows.filter((row) => row[0] === tierName);
  };

  const handleTierClick = (tierName, rows) => {
    const tierRows = getTierRows(rows, tierName);
    const tierUnits = tierRows.flatMap((row) =>
      row.slice(1).filter((cell) => cell && cell.name)
    );
    const tierUnitNames = tierUnits.map((unit) => unit.name[selectedLanguage]);
    const allSelected = tierUnits.every((unit) =>
      selectedUnits.some((selected) => selected.name[selectedLanguage] === unit.name[selectedLanguage])
    );

    if (allSelected) {
      // Deselect all units in the tier
      const updatedUnits = selectedUnits.filter(
        (unit) => !tierUnitNames.includes(unit.name[selectedLanguage])
      );
      setSelectedUnitsHandler(updatedUnits);
    } else {
      // Select all units in the tier
      const newUnits = tierUnits.filter(
        (unit) => !selectedUnits.some((selected) => selected.name[selectedLanguage] === unit.name[selectedLanguage])
      );
      const updatedUnits = [...selectedUnits, ...newUnits];
      setSelectedUnitsHandler(updatedUnits);
    }
  };

  const handleCellClick = (rowIndex, colIndex, cell, rows) => {
    if (colIndex === 0) {
      // Handle tier header click
      handleTierClick(cell, rows);
    } else if (cell && cell.name[selectedLanguage]) {
      // Handle regular cell click (only if cell has a name)
      const updatedUnits = selectedUnits.find((unit) => unit.name[selectedLanguage] === cell.name[selectedLanguage])
        ? selectedUnits.filter((unit) => unit.name[selectedLanguage] !== cell.name[selectedLanguage])
        : [...selectedUnits, cell];
      setSelectedUnitsHandler(updatedUnits);
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
    height: "70px",
    width: "130px", // Set a fixed width for table cells
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

  const MAX_COLUMNS = 9;

  const splitRows = (rows) => {
    const newRows = [];

    rows.forEach((row) => {
      const headerCell = row[0]; // Pierwsza kolumna z nazwą tieru
      const remainingCells = row.slice(1); // Pozostałe kolumny

      for (let i = 0; i < remainingCells.length; i += MAX_COLUMNS - 1) {
        const newRow = [
          headerCell,
          ...remainingCells.slice(i, i + MAX_COLUMNS - 1),
        ];
        newRows.push(newRow);
      }
    });

    return newRows;
  };

  const getRowColor = (tierIndex, categoryType) => {
    const guardsSpecialistsColors = [
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

    const monstersColors = [
      colors.T3,
      colors.T4,
      colors.T5,
      colors.T6,
      colors.T7,
      colors.T1,
      colors.T2,
    ];

    const mercenariesColors = [colors.T5, colors.T6, colors.T7, colors.T2];

    if (categoryType === "guards" || categoryType === "specialists") {
      return guardsSpecialistsColors[tierIndex];
    } else if (categoryType === "monsters") {
      return monstersColors[tierIndex];
    } else if (categoryType === "mercenaries") {
      return mercenariesColors[tierIndex];
    }
  };

  const renderTable = (rows, type) => {
    const splitRowData = splitRows(rows);
    const tierNames = [...new Set(splitRowData.map((row) => row[0]))];
  
    return (
      <table style={tableStyle}>
        <tbody>
          {splitRowData.map((row, rowIndex) => {
            const tierIndex = tierNames.indexOf(row[0]);
  
            return (
              <tr
                key={rowIndex}
                style={{
                  backgroundColor: getRowColor(tierIndex, type),
                }}
              >
                {row.map((cell, cellIndex) => {
                  const isHeaderCell = cellIndex === 0;
                  const isEmptyCell = !cell || !cell.name || !cell.name[selectedLanguage];
                  const isSelected = !isEmptyCell && selectedUnits.find(
                    (unit) => unit.name[selectedLanguage] === cell.name[selectedLanguage]
                  );
  
                  const cellStyle = isSelected
                    ? selectedTdStyle
                    : {
                        ...thTdStyle,
                        width: isHeaderCell ? "40px" : "100px",
                        cursor: isHeaderCell || isEmptyCell ? "default" : "pointer",
                      };
  
                  if (cellIndex === 0) {
                    cellStyle.opacity = 1;
                  }
  
                  return (
                    <td
                      key={cellIndex}
                      style={cellStyle}
                      onClick={() =>
                        handleCellClick(rowIndex, cellIndex, cell, splitRowData)
                      }
                    >
                      {cellIndex === 0 ? cell : isEmptyCell ? '' : cell.name[selectedLanguage]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  

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
            <h2 style={{ marginBottom: "10px", color: "white" }}>
              Specjaliści
            </h2>
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
