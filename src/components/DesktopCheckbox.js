import React from "react";

const DesktopCheckbox = ({G, GK, GG, GKG, handleCheckboxChange}) => {
    return (
        <div className="checkboxDesktop">
                <input
                    type="checkbox"
                    name="G"
                    checked={G}
                    onChange={handleCheckboxChange}
                ></input>{" "}
                Gwardziści{" "}
                <input
                    type="checkbox"
                    name="GK"
                    checked={GK}
                    onChange={handleCheckboxChange}
                ></input>{" "}
                Gwardziści + Rycerze{" "}
                <input
                    type="checkbox"
                    name="GG"
                    checked={GG}
                    onChange={handleCheckboxChange}
                ></input>{" "}
                Gwardziści + Gryfy{" "}
                <input
                    type="checkbox"
                    name="GKG"
                    checked={GKG}
                    onChange={handleCheckboxChange}
                ></input>{" "}
                Gwardziści + Rycerze + Gryfy
            </div>
    );
};

export default DesktopCheckbox;
