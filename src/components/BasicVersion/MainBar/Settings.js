import React from "react";
import CustomInput from "../../customInput";

const Settings = ({isOpen}) => {
  return <div style={{ display: isOpen ? "block" : "none" }}><CustomInput name={"XD"} amount={"XD"}></CustomInput></div>;

};

export default Settings;
