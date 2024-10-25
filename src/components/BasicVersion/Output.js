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

    let armyUnits = sortedUnitsTemp.filter((unit) => unit.category === "army");
    let monsterUnits = sortedUnitsTemp.filter(
      (unit) => unit.category === "monsters"
    );
    let mercenaryUnits = sortedUnitsTemp.filter(
      (unit) => unit.category === "mercenary"
    );
    if(armyUnits.length>0){
      while (currentLeadership < leadership) {
        for (let j = 0; j < armyUnits.length; j++) {
          if (j + 1 === armyUnits.length) {
            armyUnits[j].amount += 1;
            if (armyUnits[j].category === "army") {
              currentLeadership += armyUnits[j].leadership;
            }
          } else {
            if (
              (armyUnits[j].amount + 1) *
                armyUnits[j].hp *
                (armyUnits[j].traits.includes("Gwardzista")
                  ? guardsmanModifier
                  : armyUnits[j].traits.includes("Specjalista")
                  ? specialistsModifier
                  : armyModifier) <=
                armyUnits[j + 1].amount *
                  armyUnits[j + 1].hp *
                  (armyUnits[j + 1].traits.includes("Gwardzista")
                    ? guardsmanModifier
                    : armyUnits[j + 1].traits.includes("Specjalista")
                    ? specialistsModifier
                    : armyModifier) &&
              currentLeadership + armyUnits[j].leadership <= leadership
            ) {
              armyUnits[j].amount += 1;
              if (armyUnits[j].category === "army") {
                currentLeadership += armyUnits[j].leadership;
              }
              break;
            }
          }
        }
      }
  
      const minTotalHP =
        armyUnits[0].amount *
        armyUnits[0].hp *
        (armyUnits[0].traits.includes("Gwardzista")
          ? guardsmanModifier
          : armyUnits[0].traits.includes("Specjalista")
          ? specialistsModifier
          : armyModifier);
  
      for (let i = 0; i < monsterUnits.length; i++) {
        let monster = monsterUnits[i];
        monster.amount = Math.ceil(
          minTotalHP /
            (monster.hp *
              (monster.traits.includes("Gwardzista")
                ? guardsmanModifier
                : monster.traits.includes("Specjalista")
                ? specialistsModifier
                : armyModifier))
        );
      }
  
      for (let i = 0; i < mercenaryUnits.length; i++) {
        let mercenary = mercenaryUnits[i];
        mercenary.amount = Math.ceil(
          minTotalHP /
            (mercenary.hp *
              (mercenary.traits.includes("Gwardzista")
                ? guardsmanModifier
                : mercenary.traits.includes("Specjalista")
                ? specialistsModifier
                : armyModifier))
        );
      }
    }
    

    armyUnits = armyUnits
      .map((unit) => ({ ...unit }))
      .sort((a, b) => b.attack - a.attack);
    monsterUnits = monsterUnits
      .map((unit) => ({ ...unit }))
      .sort((a, b) => b.attack - a.attack);
    mercenaryUnits = mercenaryUnits
      .map((unit) => ({ ...unit }))
      .sort((a, b) => b.attack - a.attack);

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
