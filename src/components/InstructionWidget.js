import React, { useState } from "react";
import CustomButton from "./CustomButton";

const InstructionWidget = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <CustomButton onClick={handleClick}>
        {showText ? "Schowaj" : "Pokaż"} Instrukcję
      </CustomButton>
      {showText && (
        <div>
          <div>Siemka Siema</div>
          <div>Siemkaasdas Siema</div>
        </div>
      )}
    </div>
  );
};

export default InstructionWidget;
