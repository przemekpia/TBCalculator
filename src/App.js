import "./App.css";
import { useState } from "react";
import TypeBar from "./components/TypeBar";
import MainBasic from "./components/BasicVersion/MainBasic";
import MainAdvanced from "./components/AdvancedVersion/MainAdvaced";


function App() {
  const [basicOpen, setBasicOpen] = useState(true);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const setComponentVisibility = (component) => {
    setBasicOpen(component === "basic");
    setAdvancedOpen(component === "advanced");
  };

  return (
    <div className="App">
      <TypeBar setComponentVisibility={setComponentVisibility}></TypeBar>
      <MainBasic isOpen={basicOpen} ></MainBasic>
      <MainAdvanced isOpen={advancedOpen} ></MainAdvanced>
    </div>
  );
}

export default App;
