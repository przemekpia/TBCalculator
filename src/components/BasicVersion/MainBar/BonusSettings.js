import React from "react";
import { useSelector } from "react-redux";
import { statsActions } from "../../../store/statistics";
import CustomInput from "../../CustomInput";

const BonusSettings = ({ isOpen }) => {
  const selectedLanguage = useSelector(
    (state) => state.settings.selectedLanguage
  );
  const translations = {
    PL: {
      guardsmanBonus: "Bonus Gwardzistów",
      specialistsBonus: "Bonus Specjalistów",
      armyBonus: "Bonus Armii",  
      leadership: "Dowodzenie",
    },
    EN: {
      guardsmanBonus: "Guardsman Bonus",
      specialistsBonus: "Specialists Bonus",
      armyBonus: "Army Bonus",  
      leadership: "Leadership",
    },
  };
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
        name={translations[selectedLanguage].guardsmanBonus}
        amount={guardsmanBonus}
        actionModify={statsActions.modifyGuardsmanBonus}
        actionReset={statsActions.resetGuardsmanBonus}
        type={"modifier"}
      />
      <CustomInput
        name={translations[selectedLanguage].specialistsBonus}
        amount={specialistsBonus}
        actionModify={statsActions.modifySpecialistBonus}
        actionReset={statsActions.resetSpecialistBonus}
        type={"modifier"}
      />
      <CustomInput
        name={translations[selectedLanguage].armyBonus}
        amount={armyBonus}
        actionModify={statsActions.modifyArmyBonus}
        actionReset={statsActions.resetArmyBonus}
        type={"modifier"}
      />
      <CustomInput
        name={translations[selectedLanguage].leadership}
        amount={leadership}
        actionModify={statsActions.modifyLeadership}
        actionReset={statsActions.resetLeadership}
      />
    </div>
  );
};

export default BonusSettings;
