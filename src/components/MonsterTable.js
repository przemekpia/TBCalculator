import React from "react";
import MonsterTierCombo from "./MonsterTierCombo";
import { monsterDataTier3, monsterDataTier4, monsterDataTier5, monsterDataTier6, monsterDataTier7} from "../data/MonsterData";

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
            MonsterLvl={7}
            MaxHP={MaxHP}
            MonsterData={monsterDataTier7}
            bColor={"#cb8700"}
          ></MonsterTierCombo>
          <MonsterTierCombo
            ZPB={ZPB}
            ZPL={ZPL}
            BG={BG}
            BP={BP}
            MonsterLvl={6}
            MaxHP={MaxHP}
            MonsterData={monsterDataTier6}
            bColor={"#d20c0b"}
          ></MonsterTierCombo>
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
