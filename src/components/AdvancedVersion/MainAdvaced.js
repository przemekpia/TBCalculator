import { useState } from "react";
import SettingsBar from "./MainBar/SettingsBar";
import ArmySettings from "./MainBar/ArmySettings";
import ArtifactsSettings from "./MainBar/ArtifactsSettings";
import DragonSettings from "./MainBar/DragonSettings";
import HallofFameSettings from "./MainBar/HallofFameSettings";
import HeroEquipmentSettings from "./MainBar/HeroEquipmentSettings";
import Settings from "./MainBar/Settings";
import TalentsSettings from "./MainBar/TalentsSettings";
import TechnologiesSettings from "./MainBar/TechnologiesSettings";
import ReturnBar from "./MainBar/ReturnBar";

const MainAdvanced = ({ isOpen }) => {
  const [armySettingsOpen, setArmySettingsOpen] = useState(false);
  const [artifactsSettingsOpen, setArtifactsSettingsOpen] = useState(false);
  const [dragonSettingsOpen, setDragonSettingsOpen] = useState(false);
  const [hallOfFameSettingsOpen, setHallOfFameSettingsOpen] = useState(false);
  const [heroOpen, setHeroOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [talentsSettingsOpen, setTalentsSettingsOpen] = useState(false);
  const [technologiesSettingsOpen, setTechnologiesSettingsOpen] =
    useState(false);
  const [settingsBarOpen, setSettingsBarOpen] = useState(true);
  const [returnBarOpen, setReturnBarOpen] = useState(false);

  // Function to set visibility of components
  const setComponentVisibility = (component) => {
    setArmySettingsOpen(component === "army");
    setArtifactsSettingsOpen(component === "artifacts");
    setDragonSettingsOpen(component === "dragon");
    setHallOfFameSettingsOpen(component === "halloffame");
    setHeroOpen(component === "hero");
    setSettingsOpen(component === "settings");
    setTalentsSettingsOpen(component === "talents");
    setTechnologiesSettingsOpen(component === "technologies");
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
      <ArtifactsSettings isOpen={artifactsSettingsOpen} />
      <DragonSettings isOpen={dragonSettingsOpen} />
      <HallofFameSettings isOpen={hallOfFameSettingsOpen} />
      <HeroEquipmentSettings isOpen={heroOpen}></HeroEquipmentSettings>
      <Settings isOpen={settingsOpen} />
      <TalentsSettings isOpen={talentsSettingsOpen} />
      <TechnologiesSettings isOpen={technologiesSettingsOpen} />
    </div>
  );
};

export default MainAdvanced;
