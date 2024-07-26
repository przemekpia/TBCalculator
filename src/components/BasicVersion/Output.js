import React from "react";
import { useSelector } from "react-redux";

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
  const selectedMonsters = useSelector(
    (state) => state.army.selectedMonsters || []
  );
  const leadership = 10000;

  const handleClick = () => {
    let sortedUnits = selectedUnits
      .map((unit) => ({
        ...unit,
        ratio: unit.attack / unit.leadership,
        amount: 0,
      }))
      .sort((a, b) => b.ratio - a.ratio);

    let currentLeadership = 0;
    while (currentLeadership <= leadership) {
      for (let j = 0; j < sortedUnits.length; j++) {
        if (j + 1 === sortedUnits.length) {
          sortedUnits[j].amount += 1;
          currentLeadership += sortedUnits[j].leadership;
        } else {
          if (
            (sortedUnits[j].amount + 1) * sortedUnits[j].hp <
              sortedUnits[j + 1].amount * sortedUnits[j + 1].hp &&
            currentLeadership + sortedUnits[j].leadership <= leadership
          ) {
            sortedUnits[j].amount += 1;
            currentLeadership += sortedUnits[j].leadership;
            break;
          }
        }
      }
    }

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
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: "5px",
        paddingTop: "5px",
      }}
    >
      <div style={buttonStyle} onClick={handleClick}>
        Oblicz
      </div>
    </div>
  );
};

export default Output;
