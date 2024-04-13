import logo from "./logo.svg";
import "./App.css";

function App() {
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
          paddingTop:"15vh"
        }}
      >
        <table>
          <tbody>
            <tr>
              <th>Zakres gwardzistów:</th>
              <th>
                <input></input>
              </th>
              <th>
                <input></input>
              </th>
              <th>Bonus gwardzistów:</th>
              <th>
                <input></input>
              </th>
            </tr>
            <tr>
              <th>Zakres rycerzy:</th>
              <th>
                <input></input>
              </th>
              <th>
                <input></input>
              </th>
              <th>Bonus rycerzy:</th>
              <th>
                <input></input>
              </th>
            </tr>
            <tr>
              <th>Pojemnosc:</th>
              <th>
                <input></input>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <button>Oblicz</button>
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
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
            <tr style={{ backgroundColor: "#416b00", color: "black" }}>
              <th>II</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
            <tr style={{ backgroundColor: "#005b8f", color: "black" }}>
              <th>III</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
            <tr style={{ backgroundColor: "#470b85", color: "black" }}>
              <th>IV</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
            <tr style={{ backgroundColor: "#a43700", color: "black" }}>
              <th>V</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
            <tr style={{ backgroundColor: "#d20c0b", color: "black" }}>
              <th>VI</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
            <tr style={{ backgroundColor: "#cb8700", color: "black" }}>
              <th>VII</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
