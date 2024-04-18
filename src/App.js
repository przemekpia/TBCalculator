import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const key = 1.03;

  const rows = 7;
  const columns = 6;

  let size = Array.from({ length: rows }, () => Array(columns).fill(0));
  let HPTotal = Array.from({ length: rows }, () => Array(columns).fill(0));

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

  const [G, setG] = useState(true);
  const [GK, setGK] = useState(false);
  const [GG, setGG] = useState(false);
  const [GKG, setGKG] = useState(false);

  const handleZGBInputChange = (event) => {
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZGB(tmp);
    } else {
      setZGB("");
    }
  };

  const handleZGLInputChange = (event) => {
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZGL(tmp);
    } else {
      setZGL("");
    }
  };

  const handleZRBInputChange = (event) => {
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZRB(tmp);
    } else {
      setZRB("");
    }
  };

  const handleZRLInputChange = (event) => {
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZRL(tmp);
    } else {
      setZRL("");
    }
  };

  const handlePInputChange = (event) => {
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setP(tmp);
    } else {
      setP("");
    }
  };

  const handleBGInputChange = (event) => {
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setBG(tmp);
    } else {
      setBG("");
    }
  };

  const handleBRInputChange = (event) => {
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setBR(tmp);
    } else {
      setBR("");
    }
  };

  const handleCheckboxChange = (event) => {
    console.log(event.name);
    if (event.target.name === "G") {
      setG(true);
      setGK(false);
      setGG(false);
      setGKG(false);
    } else if (event.target.name === "GK") {
      setG(false);
      setGK(true);
      setGG(false);
      setGKG(false);
    } else if (event.target.name === "GG") {
      setG(false);
      setGK(false);
      setGG(true);
      setGKG(false);
    } else {
      setG(false);
      setGK(false);
      setGG(false);
      setGKG(true);
    }
  };

  const HP = [
    [150, 150, 300, 0, 150],
    [270, 270, 540, 0, 270],
    [480, 480, 960, 0, 480],
    [870, 870, 1740, 0, 870],
    [1560, 1560, 3150, 30000, 1560],
    [2820, 2820, 5700, 57000, 2820],
    [5100, 5100, 10200, 102000, 5100],
  ];
  const command = [
    [1, 1, 2, 20, 1],
    [1, 1, 2, 20, 1],
    [1, 1, 2, 20, 1],
    [1, 1, 2, 20, 1],
    [1, 1, 2, 20, 1],
    [1, 1, 2, 20, 1],
    [1, 1, 2, 20, 1],
  ];

  const resetArmy = () => {
    size = Array.from({ length: rows }, () => Array(columns).fill(0));
    HPTotal = Array.from({ length: rows }, () => Array(columns).fill(0));
  };

  const setArmy = () => {
    setW1(size[0][0]);
    setW2(size[1][0]);
    setW3(size[2][0]);
    setW4(size[3][0]);
    setW5(size[4][0]);
    setW6(size[5][0]);
    setW7(size[6][0]);

    setŁ1(size[0][1]);
    setŁ2(size[1][1]);
    setŁ3(size[2][1]);
    setŁ4(size[3][1]);
    setŁ5(size[4][1]);
    setŁ6(size[5][1]);
    setŁ7(size[6][1]);

    setJ1(size[0][2]);
    setJ2(size[1][2]);
    setJ3(size[2][2]);
    setJ4(size[3][2]);
    setJ5(size[4][2]);
    setJ6(size[5][2]);
    setJ7(size[6][2]);

    setG5(size[0][3]);
    setG6(size[1][3]);
    setG7(size[2][3]);

    setR1(size[0][4]);
    setR2(size[1][4]);
    setR3(size[2][4]);
    setR4(size[3][4]);
    setR5(size[4][4]);
    setR6(size[5][4]);
    setR7(size[6][4]);

    setN1(size[0][5]);
    setN2(size[1][5]);
    setN3(size[2][5]);
    setN4(size[3][5]);
    setN5(size[4][5]);
    setN6(size[5][5]);
    setN7(size[6][5]);
  };

  const calculateArmy = () => {
    resetArmy();
    if (G) {
      calculateOnlyGuardsmen();
    } else if (GK) {
      calculateGuardsmenAndKnights();
    } else if (GG) {
    } else if (GKG) {
    } else {
    }
  };

  const calculateOnlyGuardsmen = () => {
    let lowG = ZGB - 1;
    let highG = ZGL - 1;

    //console.log(lowG)
    //console.log(highG)

    let iter = 0;
    while (iter < P) {
      chunkLoop: for (let i = highG; i >= lowG; i--) {
        for (let j = 2; j >= 0; j--) {
          if (i === lowG) {
            if (j === 0) {
              size[i][j]++;
              iter = iter + command[i][j];
              break chunkLoop;
            } else {
              if (
                size[i][j] * command[i][j] <
                  size[i][j - 1] * command[i][j - 1] &&
                iter + command[i][j] <= P
              ) {
                size[i][j]++;
                iter = iter + command[i][j];
                break chunkLoop;
              }
            }
          } else {
            let min = size[i - 1][0] * HP[i - 1][0];
            for (let k = 1; k <= 2; k++) {
              if (min > size[i - 1][k] * HP[i - 1][k]) {
                min = size[i - 1][k] * HP[i - 1][k];
              }
            }
            if (min > (size[i][j] + 1) * HP[i][j] * key) {
              size[i][j]++;
              iter = iter + command[i][j];
              break chunkLoop;
            }
          }
        }
      }
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        HPTotal[i][j] = size[i][j] * HP[i][j];
      }
    }

    //console.log(size);
    //console.log(HPTotal);
    setArmy();
  };

  const calculateGuardsmenAndKnights = () => {
    let lowG = ZGB - 1;
    let highG = ZGL - 1;

    let lowR = ZRB - 1;
    let highR = ZRL - 1;

    console.log(lowR);
    console.log(highR);

    const ratio = (BG / 100 + 1) / (BR / 100 + 1);

    let iter = 0;
    while (iter < P) {
      chunkLoop: for (let i = highG; i >= lowG; i--) {
        for (let j = 4; j >= 0; j--) {
          if (j === 3) {
          } else {
            if (j === 4) {
              if (lowR <= i && i <= highR) {
                if (i === 0) {
                  let min = size[0][0] * HP[0][0];
                  for (let k = 1; k <= 2; k++) {
                    if (min > size[0][k] * HP[0][k]) {
                      min = size[0][k] * HP[0][k];
                    }
                  }
                  if (min * ratio > size[0][4] * HP[0][4]) {
                    size[0][4]++;
                    iter = iter + command[0][4];
                    break chunkLoop;
                  }
                } else {
                  let min = size[i - 1][0] * HP[i - 1][0];
                  for (let k = 1; k <= 2; k++) {
                    if (min > size[i - 1][k] * HP[i - 1][k]) {
                      min = size[i - 1][k] * HP[i - 1][k];
                    }
                  }
                  if (min * ratio > size[i][j] * HP[i][j] * key) {
                    size[i][j]++;
                    iter = iter + command[i][j];
                    break chunkLoop;
                  }
                }
              }
            } else {
              if (i === lowG) {
                if (j === 0) {
                  size[i][j]++;
                  iter = iter + command[i][j];
                  break chunkLoop;
                } else {
                  if (
                    size[i][j] * command[i][j] <
                      size[i][j - 1] * command[i][j - 1] &&
                    iter + command[i][j] <= P
                  ) {
                    size[i][j]++;
                    iter = iter + command[i][j];
                    break chunkLoop;
                  }
                }
              } else {
                let min = size[i - 1][0] * HP[i - 1][0];
                for (let k = 1; k <= 2; k++) {
                  if (min > size[i - 1][k] * HP[i - 1][k]) {
                    min = size[i - 1][k] * HP[i - 1][k];
                  }
                }
                if (min > (size[i][j] + 1) * HP[i][j] * key) {
                  size[i][j]++;
                  iter = iter + command[i][j];
                  break chunkLoop;
                }
              }
            }
          }
        }
      }
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (j === 4) {
          HPTotal[i][j] = size[i][j] * HP[i][j];
        } else {
          HPTotal[i][j] = Math.round(size[i][j] * HP[i][j] * ratio);
        }
      }
    }

    console.log(size);
    console.log(HPTotal);
    setArmy();
  };

  return (
    <div className="App">
      <div className="inputDesktop">
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
      <div className="inputMobile">
        <table>
          <tbody>
            <tr>
              <th style={{ width: "40vw" }}>Zakres gwardzistów:</th>
              <th>
                <input value={ZGB} onChange={handleZGBInputChange}></input>
              </th>
              <th>
                <input value={ZGL} onChange={handleZGLInputChange}></input>
              </th>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
      <div className="checkboxDesktop">
        <input
          type="checkbox"
          name="G"
          checked={G}
          onChange={handleCheckboxChange}
        ></input>{" "}
        Gwardziści{" "}
        <input
          type="checkbox"
          name="GK"
          checked={GK}
          onChange={handleCheckboxChange}
        ></input>{" "}
        Gwardziści + Rycerze{" "}
        <input
          type="checkbox"
          name="GG"
          checked={GG}
          onChange={handleCheckboxChange}
        ></input>{" "}
        Gwardziści + Gryfy{" "}
        <input
          type="checkbox"
          name="GKG"
          checked={GKG}
          onChange={handleCheckboxChange}
        ></input>{" "}
        Gwardziści + Rycerze + Gryfy
      </div>
      <div className="checkboxMobile">
        <table>
          <tbody>
            <tr>
              <th style={{ width: "5vw" }}>
                <input
                  type="checkbox"
                  name="G"
                  checked={G}
                  onChange={handleCheckboxChange}
                ></input>
              </th>
              <th style={{ width: "50vw", textAlign: "left" }}>Gwardziści</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="GK"
                  checked={GK}
                  onChange={handleCheckboxChange}
                ></input>
              </th>
              <th style={{ width: "50vw", textAlign: "left" }}>
                Gwardziści + Rycerze
              </th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="GG"
                  checked={GG}
                  onChange={handleCheckboxChange}
                ></input>
              </th>
              <th style={{ width: "50vw", textAlign: "left" }}>
                Gwardziści + Gryfy
              </th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="GKG"
                  checked={GKG}
                  onChange={handleCheckboxChange}
                ></input>
              </th>
              <th style={{ width: "50vw", textAlign: "left" }}>
                Gwardziści + Rycerze + Gryfy
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={calculateArmy}>Oblicz</button>
      </div>
      <div className="fullTable">
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
            <tr
              style={{
                backgroundColor: "#d6cbb7",
                color: "black",
              }}
            >
              <th>I</th>
              <th>{W1}</th>
              <th>{Ł1}</th>
              <th>{J1}</th>
              <th></th>
              <th>{R1}</th>
              <th>{N1}</th>
            </tr>
            <tr
              style={{
                backgroundColor: "#416b00",
                color: "black",
              }}
            >
              <th>II</th>
              <th>{W2}</th>
              <th>{Ł2}</th>
              <th>{J2}</th>
              <th></th>
              <th>{R2}</th>
              <th>{N2}</th>
            </tr>
            <tr
              style={{
                backgroundColor: "#005b8f",
                color: "black",
              }}
            >
              <th>III</th>
              <th>{W3}</th>
              <th>{Ł3}</th>
              <th>{J3}</th>
              <th></th>
              <th>{R3}</th>
              <th>{N3}</th>
            </tr>
            <tr
              style={{
                backgroundColor: "#470b85",
                color: "black",
              }}
            >
              <th>IV</th>
              <th>{W4}</th>
              <th>{Ł4}</th>
              <th>{J4}</th>
              <th></th>
              <th>{R4}</th>
              <th>{N4}</th>
            </tr>
            <tr
              style={{
                backgroundColor: "#a43700",
                color: "black",
              }}
            >
              <th>V</th>
              <th>{W5}</th>
              <th>{Ł5}</th>
              <th>{J5}</th>
              <th>{G5}</th>
              <th>{R5}</th>
              <th>{N5}</th>
            </tr>
            <tr
              style={{
                backgroundColor: "#d20c0b",
                color: "black",
              }}
            >
              <th>VI</th>
              <th>{W6}</th>
              <th>{Ł6}</th>
              <th>{J6}</th>
              <th>{G6}</th>
              <th>{R6}</th>
              <th>{N6}</th>
            </tr>
            <tr
              style={{
                backgroundColor: "#cb8700",
                color: "black",
              }}
            >
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
      <div className="shortTable">
        <table>
          <tbody>
          {J7 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#cb8700",
                  color: "black",
                }}
              >
                <th className="columnName">Jeździec VII</th>
                <th className="columnNumber">{J7}</th>
              </tr>
            ) : null}
            {J6 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#d20c0b",
                  color: "black",
                }}
              >
                <th className="columnName">Jeździec VI</th>
                <th className="columnNumber">{J6}</th>
              </tr>
            ) : null}
            {Ł7 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#cb8700",
                  color: "black",
                }}
              >
                <th className="columnName">Łucznik VII</th>
                <th className="columnNumber">{Ł7}</th>
              </tr>
            ) : null}
            {W7 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#cb8700",
                  color: "black",
                }}
              >
                <th className="columnName">Włócznik VII</th>
                <th className="columnNumber">{W7}</th>
              </tr>
            ) : null}
            {R7 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#cb8700",
                  color: "black",
                }}
              >
                <th className="columnName">Rycerz VII</th>
                <th className="columnNumber">{R7}</th>
              </tr>
            ) : null}
            {J5 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#a43700",
                  color: "black",
                }}
              >
                <th className="columnName">Jeździec V</th>
                <th className="columnNumber">{J5}</th>
              </tr>
            ) : null}
            {Ł6 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#d20c0b",
                  color: "black",
                }}
              >
                <th className="columnName">Łucznik VI</th>
                <th className="columnNumber">{Ł6}</th>
              </tr>
            ) : null}
            {W6 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#d20c0b",
                  color: "black",
                }}
              >
                <th className="columnName">Włócznik VI</th>
                <th className="columnNumber">{W6}</th>
              </tr>
            ) : null}
            {R6 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#d20c0b",
                  color: "black",
                }}
              >
                <th className="columnName">Rycerz VI</th>
                <th className="columnNumber">{R6}</th>
              </tr>
            ) : null}
            {J4 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#470b85",
                  color: "black",
                }}
              >
                <th className="columnName">Jeździec IV</th>
                <th className="columnNumber">{J4}</th>
              </tr>
            ) : null}
            {Ł5 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#a43700",
                  color: "black",
                }}
              >
                <th className="columnName">Łucznik V</th>
                <th className="columnNumber">{Ł5}</th>
              </tr>
            ) : null}
            {W5 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#a43700",
                  color: "black",
                }}
              >
                <th className="columnName">Włócznik V</th>
                <th className="columnNumber">{W5}</th>
              </tr>
            ) : null}
            {R5 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#a43700",
                  color: "black",
                }}
              >
                <th className="columnName">Rycerz V</th>
                <th className="columnNumber">{R5}</th>
              </tr>
            ) : null}
            {J3 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#005b8f",
                  color: "black",
                }}
              >
                <th className="columnName">Jeździec III</th>
                <th className="columnNumber">{J3}</th>
              </tr>
            ) : null}
            {Ł4 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#470b85",
                  color: "black",
                }}
              >
                <th className="columnName">Łucznik IV</th>
                <th className="columnNumber">{Ł4}</th>
              </tr>
            ) : null}
            {W4 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#470b85",
                  color: "black",
                }}
              >
                <th className="columnName">Włócznik IV</th>
                <th className="columnNumber">{W4}</th>
              </tr>
            ) : null}
            {R4 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#470b85",
                  color: "black",
                }}
              >
                <th className="columnName">Rycerz IV</th>
                <th className="columnNumber">{R4}</th>
              </tr>
            ) : null}
            {J2 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#416b00",
                  color: "black",
                }}
              >
                <th className="columnName">Jeździec II</th>
                <th className="columnNumber">{J2}</th>
              </tr>
            ) : null}
            {Ł3 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#005b8f",
                  color: "black",
                }}
              >
                <th className="columnName">Łucznik III</th>
                <th className="columnNumber">{Ł3}</th>
              </tr>
            ) : null}
            {W3 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#005b8f",
                  color: "black",
                }}
              >
                <th className="columnName">Włócznik III</th>
                <th className="columnNumber">{W3}</th>
              </tr>
            ) : null}
            {R3 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#005b8f",
                  color: "black",
                }}
              >
                <th className="columnName">Rycerz III</th>
                <th className="columnNumber">{R3}</th>
              </tr>
            ) : null}
            {J1 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#d6cbb7",
                  color: "black",
                }}
              >
                <th className="columnName">Jeździec I</th>
                <th className="columnNumber">{J1}</th>
              </tr>
            ) : null}
            {Ł2 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#416b00",
                  color: "black",
                }}
              >
                <th className="columnName">Łucznik II</th>
                <th className="columnNumber">{Ł2}</th>
              </tr>
            ) : null}
            {W2 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#416b00",
                  color: "black",
                }}
              >
                <th className="columnName">Włócznik II</th>
                <th className="columnNumber">{W2}</th>
              </tr>
            ) : null}
            {R2 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#416b00",
                  color: "black",
                }}
              >
                <th className="columnName">Rycerz II</th>
                <th className="columnNumber">{R2}</th>
              </tr>
            ) : null}
            {Ł1 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#d6cbb7",
                  color: "black",
                }}
              >
                <th className="columnName">Łucznik I</th>
                <th className="columnNumber">{Ł1}</th>
              </tr>
            ) : null}
            {W1 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#d6cbb7",
                  color: "black",
                }}
              >
                <th className="columnName">Włócznik I</th>
                <th className="columnNumber">{W1}</th>
              </tr>
            ) : null}
            {R1 !== 0 ? (
              <tr
                style={{
                  backgroundColor: "#d6cbb7",
                  color: "black",
                }}
              >
                <th className="columnName">Rycerz I</th>
                <th className="columnNumber">{R1}</th>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
