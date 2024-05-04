import React from "react";
import ShortTableUnit from "./ShortTableUnit";

const monsterData = [
  ["Żywiołak wody", 1900, 5700, "III"],
  ["Szmaragdowy smok", 4500, 13500, "III"],
  ["Kamienny gargulec", 5200, 15600, "III"],
  ["Odyniec bojowy", 3900, 11700, "III"],
  ["Lodowy feniks", 17000, 51000, "IV"],
  ["Wieloręki strażnik", 13000, 39000, "IV"],
  ["Gorgona meduza", 12000, 36000, "IV"],
  ["Magiczny smok", 15000, 45000, "IV"],
];

const MonsterTable = ({ ZPB, ZPL, BG, BP, MaxHP }) => {
  return (
    <div>
      <table>
        <tbody>
          <ShortTableUnit
            unitCount={Math.floor((MaxHP * (BG/100 + 1))/ (monsterData[0][2] * (BP/100 + 1)))}
            unitName={monsterData[0][0]}
            bColor="#cb8700"
            color="black"
          />
        </tbody>
      </table>
    </div>
  );
};


export default MonsterTable;
