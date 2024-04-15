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
        setZGB(parseInt(event.target.value));
    };

    const handleZGLInputChange = (event) => {
        setZGL(parseInt(event.target.value));
    };

    const handleZRBInputChange = (event) => {
        setZRB(parseInt(event.target.value));
    };

    const handleZRLInputChange = (event) => {
        setZRL(parseInt(event.target.value));
    };

    const handlePInputChange = (event) => {
        setP(parseInt(event.target.value));
    };

    const handleBGInputChange = (event) => {
        setBG(parseInt(event.target.value));
    };

    const handleBRInputChange = (event) => {
        setBR(parseInt(event.target.value));
    };

    const handleCheckboxChange = (event) => {
      //setBR(parseInt(event.target.value));
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
        calculateOnlyGuardsmen();
        //calculateGuardsmenAndKnights();
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
                                if (
                                    size[i][j] * HP[i][j] <
                                    size[i][0] * HP[i][0] * ratio
                                ) {
                                    size[i][j]++;
                                    iter = iter + command[i][j];
                                    break chunkLoop;
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
                                        size[i][j - 1] * command[i][j - 1]
                                    ) {
                                        size[i][j]++;
                                        iter = iter + command[i][j];
                                        break chunkLoop;
                                    }
                                }
                            } else {
                                if (
                                    size[i - 1][j] * HP[i - 1][j] >
                                    (size[i][j] + 1) * HP[i][j]
                                ) {
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
                                <input
                                    value={ZGB}
                                    onChange={handleZGBInputChange}
                                ></input>
                            </th>
                            <th>
                                <input
                                    value={ZGL}
                                    onChange={handleZGLInputChange}
                                ></input>
                            </th>
                            <th>Bonus gwardzistów:</th>
                            <th>
                                <input
                                    value={BG}
                                    onChange={handleBGInputChange}
                                ></input>
                            </th>
                        </tr>
                        <tr>
                            <th>Zakres rycerzy:</th>
                            <th>
                                <input
                                    value={ZRB}
                                    onChange={handleZRBInputChange}
                                ></input>
                            </th>
                            <th>
                                <input
                                    value={ZRL}
                                    onChange={handleZRLInputChange}
                                ></input>
                            </th>
                            <th>Bonus rycerzy:</th>
                            <th>
                                <input
                                    value={BR}
                                    onChange={handleBRInputChange}
                                ></input>
                            </th>
                        </tr>
                        <tr>
                            <th>Pojemnosc:</th>
                            <th>
                                <input
                                    value={P}
                                    onChange={handlePInputChange}
                                ></input>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <input type="checkbox" checked={G} onChange={handleCheckboxChange}></input> Gwardziści <input type="checkbox" checked={GK} onChange={handleCheckboxChange}></input> Gwardziści + Rycerze <input type="checkbox" checked={GG} onChange={handleCheckboxChange}></input> Gwardziści + Gryfy <input type="checkbox" value={GKG} onChange={handleCheckboxChange}></input> Gwardziści + Rycerze + Gryfy 
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
        </div>
    );
}

export default App;
