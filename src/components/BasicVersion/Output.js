import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShortTableUnit from "../ShortTableUnit";

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
  
  const leadership = 10000;
  let currentLeadership = 0;
  const [countedLeadership, setCountedLeadership] = useState(0);
  const [sortedUnits, setSortedUnits] = useState([]);

  const handleClick = () => {
    let sortedUnitsTemp = selectedUnits
      .map((unit) => ({
        ...unit,
        ratio: unit.attack / unit.leadership,
        amount: 0,
      }))
      .sort((a, b) => {
        if (b.ratio !== a.ratio) {
          return b.ratio - a.ratio;
        }
        return b.leadership - a.leadership;
      });

    while (currentLeadership < leadership) {
      for (let j = 0; j < sortedUnitsTemp.length; j++) {
        if (j + 1 === sortedUnitsTemp.length) {
          sortedUnitsTemp[j].amount += 1;
          currentLeadership += sortedUnitsTemp[j].leadership;
        } else {
          if ( // Mozna dodac zabezpieczenie co do hp na porownanie jednostek pomiedzy konkretnymi tierami
            (sortedUnitsTemp[j].amount + 1) * sortedUnitsTemp[j].hp <=
              sortedUnitsTemp[j + 1].amount * sortedUnitsTemp[j + 1].hp &&
            currentLeadership + sortedUnitsTemp[j].leadership <= leadership
          ) {
            sortedUnitsTemp[j].amount += 1;
            currentLeadership += sortedUnitsTemp[j].leadership;
            break;
          }
        }
      }
    }
    setCountedLeadership(currentLeadership);
    setSortedUnits(sortedUnitsTemp); 
    alert(
      "Sorted Units: " +
        sortedUnits
          .map((unit) => `${unit.name}: ${unit.amount}`)
          .join(", ")
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Changed from 'row' to 'column'
        alignItems: "center", // Align items to the center
        paddingBottom: "5px",
        paddingTop: "5px",
      }}
    >
      <div style={buttonStyle} onClick={handleClick}>
        Oblicz
      </div>
      <div style={buttonStyle} onClick={handleClick}>
        {countedLeadership}
      </div>
      {sortedUnits.length > 0 && (
        <table
          style={{
            marginTop: "20px",
            borderCollapse: "collapse",
            paddingBottom: "1vh",
          }}
        >
          <tbody>
            {sortedUnits.map((unit, index) => (
              <ShortTableUnit
                key={index}
                unitName={unit.name}
                unitCount={unit.amount}
                unitTier={unit.tier}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Output;
