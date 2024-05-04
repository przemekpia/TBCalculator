import React from "react";
import ShortTableUnit from "./ShortTableUnit";

const MonsterTierCombo = ({
  ZPB,
  ZPL,
  BG,
  BP,
  MonsterLvl,
  MaxHP,
  MonsterData,
  bColor
}) => {
  const shouldRenderRow = ZPB <= MonsterLvl && MonsterLvl <= ZPL;

  return (
    <div>
      {shouldRenderRow && (
        <>
          <ShortTableUnit
            unitCount={Math.floor(
              (MaxHP * (BG / 100 + 1)) / (MonsterData[0][2] * (BP / 100 + 1))
            )}
            unitName={MonsterData[0][0]}
            bColor={bColor}
            color="black"
          />
          <ShortTableUnit
            unitCount={Math.floor(
              (MaxHP * (BG / 100 + 1)) / (MonsterData[1][2] * (BP / 100 + 1))
            )}
            unitName={MonsterData[1][0]}
            bColor={bColor}
            color="black"
          />
          <ShortTableUnit
            unitCount={Math.floor(
              (MaxHP * (BG / 100 + 1)) / (MonsterData[2][2] * (BP / 100 + 1))
            )}
            unitName={MonsterData[2][0]}
            bColor={bColor}
            color="black"
          />
          <ShortTableUnit
            unitCount={Math.floor(
              (MaxHP * (BG / 100 + 1)) / (MonsterData[3][2] * (BP / 100 + 1))
            )}
            unitName={MonsterData[3][0]}
            bColor={bColor}
            color="black"
          />
        </>
      )}
    </div>
  );
};

export default MonsterTierCombo;
