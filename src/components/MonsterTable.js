import React from "react";
import ShortTableUnit from "./ShortTableUnit";
import MonsterTierCombo from "./MonsterTierCombo";

const monsterDataTier3 = [
  ["Kamienny gargulec", 5200, 15600],
  ["Szmaragdowy smok", 4500, 13500],
  ["Odyniec bojowy", 3900, 11700],
  ["Żywiołak wody", 1900, 5700],
];

const monsterDataTier4 = [
  ["Lodowy feniks", 17000, 51000],
  ["Magiczny smok", 15000, 45000],
  ["Wieloręki strażnik", 13000, 39000],
  ["Gorgona meduza", 12000, 36000],
];

const monsterDataTier5 = [
  ["Dwugłowy ogr", 48000, 144000],
  ["Przerażająca mantykora", 46000, 138000],
  ["Płonący centaur", 44000, 132000],
  ["Pustynny pogromca", 42000, 126000],
];

const MonsterTable = ({ ZPB, ZPL, BG, BP, MaxHP }) => {
  return (
    <div>
      <table>
        <tbody>
          <MonsterTierCombo
            ZPB={ZPB}
            ZPL={ZPL}
            BG={BG}
            BP={BP}
            MonsterLvl={5}
            MaxHP={MaxHP}
            MonsterData={monsterDataTier5}
            bColor={"#a43700"}
          ></MonsterTierCombo>
          <MonsterTierCombo
            ZPB={ZPB}
            ZPL={ZPL}
            BG={BG}
            BP={BP}
            MonsterLvl={3}
            MaxHP={MaxHP}
            MonsterData={monsterDataTier4}
            bColor={"#470b85"}
          ></MonsterTierCombo>
          <MonsterTierCombo
            ZPB={ZPB}
            ZPL={ZPL}
            BG={BG}
            BP={BP}
            MonsterLvl={4}
            MaxHP={MaxHP}
            MonsterData={monsterDataTier3}
            bColor={"#005b8f"}
          ></MonsterTierCombo>
        </tbody>
      </table>
    </div>
  );
};

export default MonsterTable;
