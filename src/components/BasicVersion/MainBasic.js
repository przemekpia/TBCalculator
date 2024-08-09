import { useState } from "react";
import ArmySettings from "./MainBar/ArmySettings";
import BonusSettings from "./MainBar/BonusSettings";
import Settings from "./MainBar/Settings";
import SettingsBar from "./MainBar/SettingsBar";
import ReturnBar from "./MainBar/ReturnBar";
import Output from "./Output";

const MainBasic = ({ isOpen }) => {
  const [armySettingsOpen, setArmySettingsOpen] = useState(false);
  const [bonusSettingsOpen, setBonusSettingsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsBarOpen, setSettingsBarOpen] = useState(true);
  const [returnBarOpen, setReturnBarOpen] = useState(false);

  const setComponentVisibility = (component) => {
    setArmySettingsOpen(component === "army");
    setBonusSettingsOpen(component === "bonus");
    setSettingsOpen(component === "settings");
    setSettingsBarOpen(component === "settingsBar");
    setReturnBarOpen(component !== "settingsBar");
  };

  return (
    <div style={{display: isOpen ? "block" : "none",}}>
      <SettingsBar
        isOpen={settingsBarOpen}
        setComponentVisibility={setComponentVisibility}
      />
      <ReturnBar
        isOpen={returnBarOpen}
        setComponentVisibility={setComponentVisibility}
      />
      <ArmySettings isOpen={armySettingsOpen} />
      <BonusSettings isOpen={bonusSettingsOpen} />
      <Settings isOpen={settingsOpen} />
      <Output isOpen={settingsBarOpen}/>
    </div>
  );
};

export default MainBasic;
