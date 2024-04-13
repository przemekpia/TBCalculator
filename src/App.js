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
            <th>Potwory</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{backgroundColor: "white", color: "black"}}>
            <th>I</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          <tr style={{backgroundColor: "green", color: "black"}}>
            <th>II</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          <tr style={{backgroundColor: "blue", color: "black"}}>
            <th>III</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          <tr style={{backgroundColor: "purple", color: "black"}}>
            <th>IV</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          <tr style={{backgroundColor: "orange", color: "black"}}>
            <th>V</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          <tr style={{backgroundColor: "red", color: "black"}}>
            <th>VI</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>
          <tr style={{backgroundColor: "yellow", color: "black"}}>
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
  );
}

export default App;
