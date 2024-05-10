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
          <th style={{width:"45vw"}}>{unitName}</th>
          <th style={{width:"45vw"}}>{unitCount}</th>
        </tr>
      ) : null
  );
};

export default ShortTableUnit;
