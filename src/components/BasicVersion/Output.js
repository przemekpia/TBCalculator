import React, { useState } from "react";
import { useSelector } from "react-redux";
import UnitTable from "../UnitTable";

const Output = ({ isOpen }) => {
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
  const selectedLanguage = useSelector(
    (state) => state.settings.selectedLanguage
  );
  const translations = {
    PL: {
      calculate: "Oblicz",
    },
    EN: {
      calculate: "Calculate",
    },
  };
  const selectedUnits = useSelector((state) => state.army.selectedUnits || []);
  const guardsmanModifier = useSelector(
    (state) => state.stats.guardsmanModifier || 0
  );
  const specialistsModifier = useSelector(
    (state) => state.stats.specialistsModifier || 0
  );
  const armyModifier = useSelector((state) => state.stats.armyModifier || 0);
  const leadership = useSelector((state) => state.stats.leadership || 0);

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
            (sortedUnitsTemp[j].amount + 1) *
              sortedUnitsTemp[j].hp *
              (sortedUnitsTemp[j].traits.includes("Gwardzista")
                ? guardsmanModifier
                : sortedUnitsTemp[j].traits.includes("Specjalista")
                ? specialistsModifier
                : armyModifier) <=
              sortedUnitsTemp[j + 1].amount *
                sortedUnitsTemp[j + 1].hp *
                (sortedUnitsTemp[j + 1].traits.includes("Gwardzista")
                  ? guardsmanModifier
                  : sortedUnitsTemp[j + 1].traits.includes("Specjalista")
                  ? specialistsModifier
                  : armyModifier) &&
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

    // Divide the sortedUnitsTemp into three categories
    const armyUnits = sortedUnitsTemp.filter(
      (unit) => unit.category === "army"
    );
    const monsterUnits = sortedUnitsTemp.filter(
      (unit) => unit.category === "monsters"
    );
    const mercenaryUnits = sortedUnitsTemp.filter(
      (unit) => unit.category === "mercenary"
    );

    // alert(
    //   `Sorted Army Units: ${armyUnits
    //     .map((unit) => `${unit.name}: ${unit.amount}`)
    //     .join(", ")}`
    // );

    // alert(
    //   `Sorted Monster Units: ${monsterUnits
    //     .map((unit) => `${unit.name}: ${unit.amount}`)
    //     .join(", ")}`
    // );

    // alert(
    //   `Sorted Mercenary Units: ${mercenaryUnits
    //     .map((unit) => `${unit.name}: ${unit.amount}`)
    //     .join(", ")}`
    // );

    setCountedLeadership(currentLeadership);
    setSortedUnits({ armyUnits, monsterUnits, mercenaryUnits });
  };

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "5px",
        paddingTop: "5px",
      }}
    >
      <div style={buttonStyle} onClick={handleClick}>
      {translations[selectedLanguage].calculate}
      </div>
      {/* <div style={buttonStyle} onClick={handleClick}>
        {countedLeadership}
      </div> */}

      <UnitTable
        title="Najemnicy"
        units={sortedUnits.mercenaryUnits}
        specialistsModifier={specialistsModifier}
        guardsmanModifier={guardsmanModifier}
        armyModifier={armyModifier}
      />

      <UnitTable
        title="Potwory"
        units={sortedUnits.monsterUnits}
        specialistsModifier={specialistsModifier}
        guardsmanModifier={guardsmanModifier}
        armyModifier={armyModifier}
      />

      <UnitTable
        title="Armia"
        units={sortedUnits.armyUnits}
        specialistsModifier={specialistsModifier}
        guardsmanModifier={guardsmanModifier}
        armyModifier={armyModifier}
      />
    </div>
  );
};

export default Output;
