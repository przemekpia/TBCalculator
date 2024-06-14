import "./App.css";
import { useState } from "react";
import SettingsBar from "./components/SettingsBar";
import ArmySettings from "./components/ArmySettings";

function App() {
  return (
    <div className="App">
      <SettingsBar></SettingsBar>
      <ArmySettings></ArmySettings>
    </div>
  );
}

export default App;
