import React from "react";
import { colors } from "../assets/colors";

const ShortTableUnit = ({ unitCount, unitName, unitTier }) => {
  return unitCount !== 0 ? (
    <tr
      style={{
        backgroundColor:
          unitTier === 1
            ? colors.T1
            : unitTier === 2
            ? colors.T2
            : unitTier === 3
            ? colors.T3
            : unitTier === 4
            ? colors.T4
            : unitTier === 5
            ? colors.T5
            : unitTier === 6
            ? colors.T6
            : unitTier === 7
            ? colors.T7
            : unitTier === 8
            ? colors.T1
            : unitTier === 9
            ? colors.T2
            : "pink",
        color:
          unitTier === 1
            ? "white"
            : unitTier === 2
            ? "white"
            : unitTier === 3
            ? "white"
            : unitTier === 4
            ? "white"
            : unitTier === 5
            ? "white"
            : unitTier === 6
            ? "white"
            : unitTier === 7
            ? "white"
            : unitTier === 8
            ? "white"
            : unitTier === 9
            ? "white"
            : "pink",
      }}
    >
      <th style={{ width: "45vw" }}>{unitName}</th>
      <th style={{ width: "45vw" }}>{unitCount}</th>
    </tr>
  ) : null;
};

export default ShortTableUnit;
