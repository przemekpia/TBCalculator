import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [W1, setW1] = useState(0);
  const [W2, setW2] = useState(0);
  const [W3, setW3] = useState(0);
  const [W4, setW4] = useState(0);
  const [W5, setW5] = useState(0);
  const [W6, setW6] = useState(0);
  const [W7, setW7] = useState(0);

  const [Ł1, setŁ1] = useState(0);
  const [Ł2, setŁ2] = useState(0);
  const [Ł3, setŁ3] = useState(0);
  const [Ł4, setŁ4] = useState(0);
  const [Ł5, setŁ5] = useState(0);
  const [Ł6, setŁ6] = useState(0);
  const [Ł7, setŁ7] = useState(0);

  const [J1, setJ1] = useState(0);
  const [J2, setJ2] = useState(0);
  const [J3, setJ3] = useState(0);
  const [J4, setJ4] = useState(0);
  const [J5, setJ5] = useState(0);
  const [J6, setJ6] = useState(0);
  const [J7, setJ7] = useState(0);

  const [G5, setG5] = useState(0);
  const [G6, setG6] = useState(0);
  const [G7, setG7] = useState(0);

  const [R1, setR1] = useState(0);
  const [R2, setR2] = useState(0);
  const [R3, setR3] = useState(0);
  const [R4, setR4] = useState(0);
  const [R5, setR5] = useState(0);
  const [R6, setR6] = useState(0);
  const [R7, setR7] = useState(0);

  const [N1, setN1] = useState(0);
  const [N2, setN2] = useState(0);
  const [N3, setN3] = useState(0);
  const [N4, setN4] = useState(0);
  const [N5, setN5] = useState(0);
  const [N6, setN6] = useState(0);
  const [N7, setN7] = useState(0);

  const [ZGB, setZGB] = useState();
  const [ZGL, setZGL] = useState();
  const [ZRB, setZRB] = useState();
  const [ZRL, setZRL] = useState();
  const [P, setP] = useState();
  const [BG, setBG] = useState();
  const [BR, setBR] = useState();

  const handleZGBInputChange = (event) => {
    setZGB(event.target.value);
  };

  const handleZGLInputChange = (event) => {
    setZGL(event.target.value);
  };

  const handleZRBInputChange = (event) => {
    setZRB(event.target.value);
  };

  const handleZRLInputChange = (event) => {
    setZRL(event.target.value);
  };

  const handlePInputChange = (event) => {
    setP(event.target.value);
  };

  const handleBGInputChange = (event) => {
    setBG(event.target.value);
  };

  const handleBRInputChange = (event) => {
    setBR(event.target.value);
  };

  const calculateArmy = () => {
    
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "15vh",
        }}
      >
        <table>
          <tbody>
            <tr>
              <th>Zakres gwardzistów:</th>
              <th>
                <input value={ZGB} onChange={handleZGBInputChange}></input>
              </th>
              <th>
                <input value={ZGL} onChange={handleZGLInputChange}></input>
              </th>
              <th>Bonus gwardzistów:</th>
              <th>
                <input value={BG} onChange={handleBGInputChange}></input>
              </th>
            </tr>
            <tr>
              <th>Zakres rycerzy:</th>
              <th>
                <input value={ZRB} onChange={handleZRBInputChange}></input>
              </th>
              <th>
                <input value={ZRL} onChange={handleZRLInputChange}></input>
              </th>
              <th>Bonus rycerzy:</th>
              <th>
                <input value={BR} onChange={handleBRInputChange}></input>
              </th>
            </tr>
            <tr>
              <th>Pojemnosc:</th>
              <th>
                <input value={P} onChange={handlePInputChange}></input>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <button onClick={calculateArmy}>Oblicz</button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Włócznik</th>
              <th>Łucznik</th>
              <th>Jeździec</th>
              <th>Gryf</th>
              <th>Rycerz</th>
              <th>Najemnicy</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#d6cbb7", color: "black" }}>
              <th>I</th>
              <th>{W1}</th>
              <th>{Ł1}</th>
              <th>{J1}</th>
              <th></th>
              <th>{R1}</th>
              <th>{N1}</th>
            </tr>
            <tr style={{ backgroundColor: "#416b00", color: "black" }}>
              <th>II</th>
              <th>{W2}</th>
              <th>{Ł2}</th>
              <th>{J2}</th>
              <th></th>
              <th>{R2}</th>
              <th>{N2}</th>
            </tr>
            <tr style={{ backgroundColor: "#005b8f", color: "black" }}>
              <th>III</th>
              <th>{W3}</th>
              <th>{Ł3}</th>
              <th>{J3}</th>
              <th></th>
              <th>{R3}</th>
              <th>{N3}</th>
            </tr>
            <tr style={{ backgroundColor: "#470b85", color: "black" }}>
              <th>IV</th>
              <th>{W4}</th>
              <th>{Ł4}</th>
              <th>{J4}</th>
              <th></th>
              <th>{R4}</th>
              <th>{N4}</th>
            </tr>
            <tr style={{ backgroundColor: "#a43700", color: "black" }}>
              <th>V</th>
              <th>{W5}</th>
              <th>{Ł5}</th>
              <th>{J5}</th>
              <th>{G5}</th>
              <th>{R5}</th>
              <th>{N5}</th>
            </tr>
            <tr style={{ backgroundColor: "#d20c0b", color: "black" }}>
              <th>VI</th>
              <th>{W6}</th>
              <th>{Ł6}</th>
              <th>{J6}</th>
              <th>{G6}</th>
              <th>{R6}</th>
              <th>{N6}</th>
            </tr>
            <tr style={{ backgroundColor: "#cb8700", color: "black" }}>
              <th>VII</th>
              <th>{W7}</th>
              <th>{Ł7}</th>
              <th>{J7}</th>
              <th>{G7}</th>
              <th>{R7}</th>
              <th>{N7}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
