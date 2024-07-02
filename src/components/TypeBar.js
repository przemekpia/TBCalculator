import React from 'react';

const TypeBar = ({ setComponentVisibility }) => {
  const buttonStyle = {
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '5px',
    textAlign: 'center',
    minWidth: '100px',
  };

  const basicButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green'
  };

  const advancedButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red'
  };

  return (
    <div style={{paddingBottom: "10px", paddingTop: "10px"}}>
      <div
        onClick={() => setComponentVisibility("basic")}
        style={basicButtonStyle}
      >
        Podstawowy
      </div>
      <div
        onClick={() => setComponentVisibility("advanced")}
        style={advancedButtonStyle}
      >
        Zaawansowany
      </div>
    </div>
  );
};

export default TypeBar;
