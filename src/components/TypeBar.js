import React from 'react';

const TypeBar = ({ setComponentVisibility }) => {
  const buttonStyle = {
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'block', // Ustawiamy display na block
    borderRadius: '5px',
    textAlign: 'center',
    minWidth: '100px',
  };

  const basicButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green',
  };

  const advancedButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
    display: "none" //TU JEST WYLACZONY TRYB ZAAWANSOWANY
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px', // Odstęp między przyciskami
        justifyContent: 'center',
        paddingBottom: '10px',
        paddingTop: '10px',
      }}
    >
      <div onClick={() => setComponentVisibility('basic')} style={basicButtonStyle}>
        Podstawowy
      </div>
      <div onClick={() => setComponentVisibility('advanced')} style={advancedButtonStyle}>
        Zaawansowany
      </div>
    </div>
  );
};

export default TypeBar;
