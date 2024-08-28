import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statsActions } from "../../../store/statistics";
import CustomInput from "../../CustomInput";

const BonusSettings = ({ isOpen }) => {
  const dispatch = useDispatch();

  const armyBonus = useSelector((state) => state.stats.armyBonus);
  const guardsmanBonus = useSelector((state) => state.stats.guardsmanBonus);
  const specialistsBonus = useSelector((state) => state.stats.specialistsBonus);
  const leadership = useSelector((state) => state.stats.leadership);

  const styles = {
    container: {
      display: isOpen ? "flex" : "none",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.container}>
      <CustomInput
        name={"Bonus Gwardzistów"}
        amount={guardsmanBonus}
        actionModify={statsActions.modifyGuardsmanBonus}
        actionReset={statsActions.resetGuardsmanBonus}
        type={"modifier"}
      />
      <CustomInput
        name={"Bonus Specjalistów"}
        amount={specialistsBonus}
        actionModify={statsActions.modifySpecialistBonus}
        actionReset={statsActions.resetSpecialistBonus}
        type={"modifier"}
      />
      <CustomInput
        name={"Bonus Armii"}
        amount={armyBonus}
        actionModify={statsActions.modifyArmyBonus}
        actionReset={statsActions.resetArmyBonus}
        type={"modifier"}
      />
      <CustomInput
        name={"Dowodzenie"}
        amount={leadership}
        actionModify={statsActions.modifyLeadership}
        actionReset={statsActions.resetLeadership}
      />
    </div>
  );
};

export default BonusSettings;
