import React from "react";

const BonusSettings = ({isOpen}) => {
  return <div style={{ display: isOpen ? "block" : "none" }}>BonusSettings</div>;
};

export default BonusSettings;
