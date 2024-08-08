import React from "react";
import { colors } from "../assets/colors";

const ShortTableUnit = ({ unit }) => {
  return unit.amount !== 0 ? (
    <tr
      style={{
        backgroundColor:
          unit.tier === 1
            ? colors.T1
            : unit.tier === 2
            ? colors.T2
            : unit.tier === 3
            ? colors.T3
            : unit.tier === 4
            ? colors.T4
            : unit.tier === 5
            ? colors.T5
            : unit.tier === 6
            ? colors.T6
            : unit.tier === 7
            ? colors.T7
            : unit.tier === 8
            ? colors.T1
            : unit.tier === 9
            ? colors.T2
            : "pink",
        color:
          unit.tier === 1
            ? "white"
            : unit.tier === 2
            ? "white"
            : unit.tier === 3
            ? "white"
            : unit.tier === 4
            ? "white"
            : unit.tier === 5
            ? "white"
            : unit.tier === 6
            ? "white"
            : unit.tier === 7
            ? "white"
            : unit.tier === 8
            ? "white"
            : unit.tier === 9
            ? "white"
            : "pink",
      }}
    >
      <th style={{ width: "45vw" }}>{unit.name}</th>
      <th style={{ width: "45vw" }}>{unit.amount}</th>
      <th style={{ width: "5vw" }}>{unit.amount*unit.hp}</th>
    </tr>
  ) : null;
};

export default ShortTableUnit;
