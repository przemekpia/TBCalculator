import React from "react";

const ShortTableUnit = ({ unitCount, unitName, bColor, color }) => {
  return (
    unitCount !== 0 ? (
      <tr
        style={{
          backgroundColor: bColor,
          color: color,
        }}
      >
        <th className="columnName">{unitName}</th>
        <th className="columnNumber">{unitCount}</th>
      </tr>
    ) : null
  );
};

export default ShortTableUnit;
