import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShortTableUnit from "./components/ShortTableUnit";
import MonsterTable from "./components/MonsterTable";
import CustomButton from "./components/CustomButton";
import DesktopInput from "./components/DesktopInput";
import MobileInput from "./components/MobileInput";
import DesktopCheckbox from "./components/DesktopCheckbox";
import MobileCheckbox from "./components/MobileCheckbox";
import DesktopFullTable from "./components/DesktopFullTable";
import InstructionWidget from "./components/InstructionWidget";

function App() {
  const key = 1.03;

  const rows = 7;
  const columns = 6;

  let size = Array.from({ length: rows }, () => Array(columns).fill(0));
  let HPTotal = Array.from({ length: rows }, () => Array(columns).fill(0));

  const [MaxHP, setMaxHP] = useState(0);

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

  const [N5, setN5] = useState(0);
  const [N6, setN6] = useState(0);
  const [N7, setN7] = useState(0);

  const [ZGB, setZGB] = useState(0);
  const [ZGL, setZGL] = useState(0);
  const [ZRB, setZRB] = useState(0);
  const [ZRL, setZRL] = useState(0);
  const [ZPB, setZPB] = useState(0);
  const [ZPL, setZPL] = useState(0);
  const [P, setP] = useState(0);
  const [BG, setBG] = useState(0);
  const [BR, setBR] = useState(0);
  const [BP, setBP] = useState(0);

  const [G, setG] = useState(true);
  const [GK, setGK] = useState(false);
  const [GG, setGG] = useState(false);
  const [GKG, setGKG] = useState(false);
  const [Mercenary, setMercenary] = useState(false);
  const [Monsters, setMonsters] = useState(false);

  let ValidateGuards = false;
  let ValidateKnights = false;
  let ValidateMonsters = false;

  const handleZGBInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZGB(tmp);
    } else {
      setZGB("");
    }
  };

  const handleZGLInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZGL(tmp);
    } else {
      setZGL("");
    }
  };

  const handleZRBInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZRB(tmp);
    } else {
      setZRB("");
    }
  };

  const handleZRLInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZRL(tmp);
    } else {
      setZRL("");
    }
  };

  const handleZPBInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZPB(tmp);
    } else {
      setZPB("");
    }
  };

  const handleZPLInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setZPL(tmp);
    } else {
      setZPL("");
    }
  };

  const handlePInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setP(tmp);
    } else {
      setP("");
    }
  };

  const handleBGInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setBG(tmp);
    } else {
      setBG("");
    }
  };

  const handleBRInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setBR(tmp);
    } else {
      setBR("");
    }
  };

  const handleBPInputChange = (event) => {
    resetArmy();
    let tmp = parseInt(event.target.value);
    if (!isNaN(tmp)) {
      setBP(tmp);
    } else {
      setBP("");
    }
  };

  const handleCheckboxChange = (event) => {
    //console.log(event.name);
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

  const handleMercenaryChange = (event) => {
    resetArmy();
    setMercenary(!Mercenary);
  };

  const handleMonstersChange = (event) => {
    resetArmy();
    setMonsters(!Monsters);
  };

  const HP = [
    [150, 150, 300, 0, 150, 0],
    [270, 270, 540, 0, 270, 0],
    [480, 480, 960, 0, 480, 0],
    [870, 870, 1740, 0, 870, 0],
    [1560, 1560, 3150, 30000, 1560, 3150],
    [2820, 2820, 5700, 57000, 2820, 6090],
    [5100, 5100, 10200, 102000, 5100, 11220],
  ];
  const command = [
    [1, 1, 2, 20, 1, 1],
    [1, 1, 2, 20, 1, 1],
    [1, 1, 2, 20, 1, 1],
    [1, 1, 2, 20, 1, 1],
    [1, 1, 2, 20, 1, 1],
    [1, 1, 2, 20, 1, 1],
    [1, 1, 2, 20, 1, 1],
  ];

  const resetArmy = () => {
    size = Array.from({ length: rows }, () => Array(columns).fill(0));
    HPTotal = Array.from({ length: rows }, () => Array(columns).fill(0));
    setArmy();
    setMaxHP(0);
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

    setN5(size[4][5]);
    setN6(size[5][5]);
    setN7(size[6][5]);
  };

  const validateAll = () => {
    if (ZGB <= ZGL && 1 <= ZGB && ZGL <= 8) {
      ValidateGuards = true;
    } else {
      ValidateGuards = false;
    }

    if (ZRB <= ZRL && 1 <= ZRB && ZRL <= 8) {
      ValidateKnights = true;
    } else {
      ValidateKnights = false;
    }

    if (ZPB <= ZPL && 3 <= ZPB && ZPL <= 7) {
      ValidateMonsters = true;
    } else {
      ValidateMonsters = false;
    }
  };

  const calculateArmy = () => {
    resetArmy();
    validateAll();

    if (G && ValidateGuards) {
      calculateOnlyGuardsmen();
    } else if (GK && ValidateGuards && ValidateKnights) {
      calculateGuardsmenAndKnights();
    } else if (GG && ValidateGuards) {
    } else if (GKG && ValidateGuards && ValidateKnights) {
    } else {
    }
  };

  const calculateMercenary = () => {
    let tmp = calculateMaxHP();
    //console.log({MaxHP})
    size[4][5] = Math.floor(tmp / HP[4][5]);
    size[5][5] = Math.floor(tmp / HP[5][5]);
    size[6][5] = Math.floor(tmp / HP[6][5]);
  };

  const calculateMaxHP = () => {
    setMaxHP(size[ZGL - 1][2] * HP[ZGL - 1][2]);
    return size[ZGL - 1][2] * HP[ZGL - 1][2];
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

    calculateMercenary();
    setArmy();
  };

  const calculateGuardsmenAndKnights = () => {
    let lowG = ZGB - 1;
    let highG = ZGL - 1;

    let lowR = ZRB - 1;
    let highR = ZRL - 1;

    //console.log(lowR);
    //console.log(highR);

    const ratio = (BG / 100 + 1) / (BR / 100 + 1);

    let iter = 0;
    while (iter < P) {
      chunkLoop: for (let i = highG; i >= lowG; i--) {
        for (let j = 4; j >= 0; j--) {
          if (j === 3) {
          } else {
            if (j === 4) {
              if (lowR <= i && i <= highR) {
                if (i === lowR) {
                  let min = size[lowR][0] * HP[lowR][0];
                  for (let k = 1; k <= 2; k++) {
                    if (min > size[lowR][k] * HP[lowR][k]) {
                      min = size[lowR][k] * HP[lowR][k];
                    }
                  }
                  if (min * ratio > size[lowR][4] * HP[lowR][4]) {
                    size[lowR][4]++;
                    iter = iter + command[lowR][4];
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

    calculateMercenary();
    setArmy();
  };

  return (
    <div className="App">
      <InstructionWidget></InstructionWidget>

      <DesktopInput
        ZGB={ZGB}
        ZGL={ZGL}
        BG={BG}
        ZRB={ZRB}
        ZRL={ZRL}
        BR={BR}
        ZPB={ZPB}
        ZPL={ZPL}
        BP={BP}
        P={P}
        handleZGBInputChange={handleZGBInputChange}
        handleZGLInputChange={handleZGLInputChange}
        handleBGInputChange={handleBGInputChange}
        handleZRBInputChange={handleZRBInputChange}
        handleZRLInputChange={handleZRLInputChange}
        handleBRInputChange={handleBRInputChange}
        handleZPBInputChange={handleZPBInputChange}
        handleZPLInputChange={handleZPLInputChange}
        handleBPInputChange={handleBPInputChange}
        handlePInputChange={handlePInputChange}
      ></DesktopInput>

      <MobileInput
        ZGB={ZGB}
        ZGL={ZGL}
        BG={BG}
        ZRB={ZRB}
        ZRL={ZRL}
        BR={BR}
        ZPB={ZPB}
        ZPL={ZPL}
        BP={BP}
        P={P}
        handleZGBInputChange={handleZGBInputChange}
        handleZGLInputChange={handleZGLInputChange}
        handleBGInputChange={handleBGInputChange}
        handleZRBInputChange={handleZRBInputChange}
        handleZRLInputChange={handleZRLInputChange}
        handleBRInputChange={handleBRInputChange}
        handleZPBInputChange={handleZPBInputChange}
        handleZPLInputChange={handleZPLInputChange}
        handleBPInputChange={handleBPInputChange}
        handlePInputChange={handlePInputChange}
        Monsters={Monsters}
      ></MobileInput>

      <DesktopCheckbox
        G={G}
        GK={GK}
        GG={GG}
        GKG={GKG}
        handleCheckboxChange={handleCheckboxChange}
      ></DesktopCheckbox>

      <MobileCheckbox
        G={G}
        GK={GK}
        GG={GG}
        GKG={GKG}
        handleCheckboxChange={handleCheckboxChange}
        Mercenary={Mercenary}
        handleMercenaryChange={handleMercenaryChange}
        Monsters={Monsters}
        handleMonstersChange={handleMonstersChange}
      ></MobileCheckbox>

      <CustomButton onClick={calculateArmy}>Oblicz</CustomButton>

      <DesktopFullTable
        W1={W1}
        W2={W2}
        W3={W3}
        W4={W4}
        W5={W5}
        W6={W6}
        W7={W7}
        Ł1={Ł1}
        Ł2={Ł2}
        Ł3={Ł3}
        Ł4={Ł4}
        Ł5={Ł5}
        Ł6={Ł6}
        Ł7={Ł7}
        J1={J1}
        J2={J2}
        J3={J3}
        J4={J4}
        J5={J5}
        J6={J6}
        J7={J7}
        R1={R1}
        R2={R2}
        R3={R3}
        R4={R4}
        R5={R5}
        R6={R6}
        R7={R7}
        G5={G5}
        G6={G6}
        G7={G7}
        N5={N5}
        N6={N6}
        N7={N7}
      ></DesktopFullTable>

      <div className="shortTable">
        {Mercenary ? (
          <table style={{ paddingBottom: "1vh" }}>
            <tbody>
              <ShortTableUnit
                unitCount={N7}
                unitName="Łowca Epickich Potworów VII"
                bColor="#cb8700"
                color="black"
              />
              <ShortTableUnit
                unitCount={N6}
                unitName="Łowca Epickich Potworów VI"
                bColor="#d20c0b"
                color="black"
              />
              <ShortTableUnit
                unitCount={N5}
                unitName="Łowca Epickich Potworów V"
                bColor="#a43700"
                color="black"
              />
            </tbody>
          </table>
        ) : null}
        {Monsters ? (
          <MonsterTable
            ZPB={ZPB}
            ZPL={ZPL}
            BG={BG}
            BP={BP}
            MaxHP={MaxHP}
          ></MonsterTable>
        ) : null}

        <table>
          <tbody>
            <ShortTableUnit
              unitCount={J7}
              unitName="Jeździec VII"
              bColor="#cb8700"
              color="black"
            />

            <ShortTableUnit
              unitCount={J6}
              unitName="Jeździec VI"
              bColor="#d20c0b"
              color="black"
            />

            <ShortTableUnit
              unitCount={Ł7}
              unitName="Łucznik VII"
              bColor="#cb8700"
              color="black"
            />

            <ShortTableUnit
              unitCount={W7}
              unitName="Włócznik VII"
              bColor="#cb8700"
              color="black"
            />

            <ShortTableUnit
              unitCount={R7}
              unitName="Rycerz VII"
              bColor="#cb8700"
              color="black"
            />

            <ShortTableUnit
              unitCount={J5}
              unitName="Jeździec V"
              bColor="#a43700"
              color="black"
            />

            <ShortTableUnit
              unitCount={Ł6}
              unitName="Łucznik VI"
              bColor="#d20c0b"
              color="black"
            />

            <ShortTableUnit
              unitCount={R6}
              unitName="Rycerz VI"
              bColor="#d20c0b"
              color="black"
            />

            <ShortTableUnit
              unitCount={J4}
              unitName="Jeździec IV"
              bColor="#470b85"
              color="black"
            />

            <ShortTableUnit
              unitCount={Ł5}
              unitName="Łucznik V"
              bColor="#a43700"
              color="black"
            />

            <ShortTableUnit
              unitCount={W5}
              unitName="Włócznik V"
              bColor="#a43700"
              color="black"
            />

            <ShortTableUnit
              unitCount={R5}
              unitName="Rycerz V"
              bColor="#a43700"
              color="black"
            />

            <ShortTableUnit
              unitCount={J3}
              unitName="Jeździec III"
              bColor="#005b8f"
              color="black"
            />

            <ShortTableUnit
              unitCount={Ł4}
              unitName="Łucznik IV"
              bColor="#470b85"
              color="black"
            />

            <ShortTableUnit
              unitCount={W4}
              unitName="Włócznik IV"
              bColor="#470b85"
              color="black"
            />

            <ShortTableUnit
              unitCount={R4}
              unitName="Rycerz IV"
              bColor="#470b85"
              color="black"
            />

            <ShortTableUnit
              unitCount={J2}
              unitName="Jeździec II"
              bColor="#416b00"
              color="black"
            />

            <ShortTableUnit
              unitCount={Ł3}
              unitName="Łucznik III"
              bColor="#005b8f"
              color="black"
            />

            <ShortTableUnit
              unitCount={W3}
              unitName="Włócznik III"
              bColor="#005b8f"
              color="black"
            />

            <ShortTableUnit
              unitCount={R3}
              unitName="Rycerz III"
              bColor="#005b8f"
              color="black"
            />
            <ShortTableUnit
              unitCount={J1}
              unitName="Jeździec I"
              bColor="#d6cbb7"
              color="black"
            />
            <ShortTableUnit
              unitCount={Ł2}
              unitName="Łucznik II"
              bColor="#416b00"
              color="black"
            />
            <ShortTableUnit
              unitCount={W2}
              unitName="Włócznik II"
              bColor="#416b00"
              color="black"
            />
            <ShortTableUnit
              unitCount={R2}
              unitName="Rycerz II"
              bColor="#416b00"
              color="black"
            />
            <ShortTableUnit
              unitCount={Ł1}
              unitName="Łucznik I"
              bColor="#d6cbb7"
              color="black"
            />
            <ShortTableUnit
              unitCount={W1}
              unitName="Włócznik I"
              bColor="#d6cbb7"
              color="black"
            />
            <ShortTableUnit
              unitCount={R1}
              unitName="Rycerz I"
              bColor="#d6cbb7"
              color="black"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
