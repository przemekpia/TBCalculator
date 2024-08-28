import React from "react";
import { useDispatch } from "react-redux";

const CustomInput = ({ amount, name, actionModify, actionReset, type }) => {
  const dispatch = useDispatch();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      width: "40%",
      borderRadius: "10px",
      border: "2px solid #ddd",
    },
    table: {
      textAlign: "center",
      fontSize: "1.5rem",
    },
    tableCell: {
      padding: "10px",
      //backgroundColor: "#f79b39", //
      borderRadius: "5px",
    },
    buttonsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "10px",
      justifyContent: "center",
    },
    button: {
      padding: "10px",
      width: "80px",
      fontSize: "1.2rem",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      display: "inline-block",
      textAlign: "center",
    },
    buttonSmall: {
      backgroundColor: "#4bc44d",
    },
    buttonMedium: {
      backgroundColor: "#fae81e",
    },
    buttonLarge: {
      backgroundColor: "#fbbc04",
    },
    buttonExtraLarge: {
      backgroundColor: "#ea4335",
    },
    resetButton: {
      padding: "5px 10px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#004085",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      display: "inline-block",
      textAlign: "center",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <tbody>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>{name}</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>{amount}</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.buttonsContainer}>
              <button
                style={{ ...styles.button, ...styles.buttonExtraLarge }}
                onClick={() =>
                  dispatch(actionModify(type === "modifier" ? -100 : -1000))
                }
              >
                {type === "modifier" ? -100 : -1000}
              </button>
              <button
                style={{ ...styles.button, ...styles.buttonLarge }}
                onClick={() => dispatch(actionModify(type === "modifier" ? -10 : -100))}
              >
                {type === "modifier" ? -10 : -100}
              </button>
              <button
                style={{ ...styles.button, ...styles.buttonMedium }}
                onClick={() => dispatch(actionModify(type === "modifier" ? -1 : -10))}
              >
                {type === "modifier" ? -1 : -10}
              </button>
              <button
                style={{ ...styles.button, ...styles.buttonSmall }}
                onClick={() => dispatch(actionModify(type === "modifier" ? -0.1 : -1))}
              >
                {type === "modifier" ? -0.1 : -1}
              </button>
              <button
                style={{ ...styles.button, ...styles.buttonSmall }}
                onClick={() => dispatch(actionModify(type === "modifier" ? 0.1 : 1))}
              >
                {type === "modifier" ? "+0.1" : "+1"}
              </button>
              <button
                style={{ ...styles.button, ...styles.buttonMedium }}
                onClick={() => dispatch(actionModify(type === "modifier" ? 1 : 10))}
              >
                {type === "modifier" ? "+1" : "+10"}
              </button>
              <button
                style={{ ...styles.button, ...styles.buttonLarge }}
                onClick={() => dispatch(actionModify(type === "modifier" ? 10 : 100))}
              >
                {type === "modifier" ? "+10" : "+100"}
              </button>
              <button
                style={{ ...styles.button, ...styles.buttonExtraLarge }}
                onClick={() => dispatch(actionModify(type === "modifier" ? 100 : 1000))}
              >
                {type === "modifier" ? "+100" : "+1000"}
              </button>
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <td colSpan="2">
              <button
                style={styles.resetButton}
                onClick={() => dispatch(actionReset())}
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomInput;
