import "./App.css";
import { useState } from "react";
import SettingsBar from "./components/SettingsBar";
import ArmySettings from "./components/ArmySettings";
import ArtifactsSettings from "./components/ArtifactsSettings";
import DragonSettings from "./components/DragonSettings";
import HallofFameSettings from "./components/HallofFameSettings";
import Settings from "./components/Settings";
import TalentsSettings from "./components/TalentsSettings";
import TechnologiesSettings from "./components/TechnologiesSettings";
import ReturnBar from "./components/ReturnBar";

function App() {
  const [armySettingsOpen, setArmySettingsOpen] = useState(false);
  const [artifactsSettingsOpen, setArtifactsSettingsOpen] = useState(false);
  const [dragonSettingsOpen, setDragonSettingsOpen] = useState(false);
  const [hallOfFameSettingsOpen, setHallOfFameSettingsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [talentsSettingsOpen, setTalentsSettingsOpen] = useState(false);
  const [technologiesSettingsOpen, setTechnologiesSettingsOpen] = useState(false);
  const [settingsBarOpen, setSettingsBarOpen] = useState(true);
  const [returnBarOpen, setReturnBarOpen] = useState(false);

  // Function to set visibility of components
  const setComponentVisibility = (component) => {
    setArmySettingsOpen(component === "army");
    setArtifactsSettingsOpen(component === "artifacts");
    setDragonSettingsOpen(component === "dragon");
    setHallOfFameSettingsOpen(component === "halloffame");
    setSettingsOpen(component === "settings");
    setTalentsSettingsOpen(component === "talents");
    setTechnologiesSettingsOpen(component === "technologies");
    setSettingsBarOpen(component === "settingsBar");
    setReturnBarOpen(component !== "settingsBar")
  };

  return (
    <div className="App">
      <SettingsBar isOpen={settingsBarOpen} setComponentVisibility={setComponentVisibility} />
      <ReturnBar isOpen={returnBarOpen} setComponentVisibility={setComponentVisibility} /> 
      <ArmySettings isOpen={armySettingsOpen} />
      <ArtifactsSettings isOpen={artifactsSettingsOpen} />
      <DragonSettings isOpen={dragonSettingsOpen} />
      <HallofFameSettings isOpen={hallOfFameSettingsOpen} />
      <Settings isOpen={settingsOpen} />
      <TalentsSettings isOpen={talentsSettingsOpen} />
      <TechnologiesSettings isOpen={technologiesSettingsOpen} />
    </div>
  );
}

export default App;
