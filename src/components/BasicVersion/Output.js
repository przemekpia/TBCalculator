import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShortTableUnit from "../ShortTableUnit";

const Output = ({isOpen}) => {
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
  const guardsmanBonus = useSelector((state) => state.stats.guardsmanBonus || 0);
  const specialistsBonus = useSelector((state) => state.stats.specialistsBonus || 0);
  const armyBonus = useSelector((state) => state.stats.armyBonus || 0);
  const leadership = useSelector((state) => state.stats.leadership || 0);

  //const leadership = 15486;
  //let guardsmanBonus = 1 + 1.568;
  //let specialistsBonus = 1 + 2.403;
  //let armyBonus = 1 + 1.5;

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
        if (b.tier !== a.tier) {
          return b.tier - a.tier;
        }
        return b.leadership - a.leadership;
      });

    while (currentLeadership < leadership) {
      for (let j = 0; j < sortedUnitsTemp.length; j++) {
        if (j + 1 === sortedUnitsTemp.length) {
          sortedUnitsTemp[j].amount += 1;
          if (sortedUnitsTemp[j].category === "army") {
            currentLeadership += sortedUnitsTemp[j].leadership;
          }
        } else {
          if (
            // Mozna dodac zabezpieczenie co do hp na porownanie jednostek pomiedzy konkretnymi tierami
            (sortedUnitsTemp[j].amount + 1) *
              sortedUnitsTemp[j].hp *
              (sortedUnitsTemp[j].traits.includes("Gwardzista")
                ? guardsmanBonus
                : sortedUnitsTemp[j].traits.includes("Specjalista")
                ? specialistsBonus
                : armyBonus) <=
              sortedUnitsTemp[j + 1].amount *
                sortedUnitsTemp[j + 1].hp *
                (sortedUnitsTemp[j + 1].traits.includes("Gwardzista")
                  ? guardsmanBonus
                  : sortedUnitsTemp[j + 1].traits.includes("Specjalista")
                  ? specialistsBonus
                  : armyBonus) &&
            currentLeadership + sortedUnitsTemp[j].leadership <= leadership
          ) {
            sortedUnitsTemp[j].amount += 1;
            if (sortedUnitsTemp[j].category === "army") {
              currentLeadership += sortedUnitsTemp[j].leadership;
            }
            break;
          }
        }
      }
    }
    sortedUnitsTemp = sortedUnitsTemp
      .map((unit) => ({
        ...unit,
      }))
      .sort((a, b) => {
        return b.attack - a.attack;
      });
    setCountedLeadership(currentLeadership);
    setSortedUnits(sortedUnitsTemp);
    alert(
      "Sorted Units: " +
        sortedUnits.map((unit) => `${unit.name}: ${unit.amount}`).join(", ")
    );
  };

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
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
                unit={unit}
                specialistsBonus={specialistsBonus}
                guardsmanBonus={guardsmanBonus}
                armyBonus={armyBonus}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Output;
