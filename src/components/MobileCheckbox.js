import React from "react";

const MobileCheckbox = ({G, GK, GG, GKG, handleCheckboxChange, Mercenary, handleMercenaryChange, Monsters, handleMonstersChange}) => {
    return (
        <div className="checkboxMobile">
                <table>
                    <tbody>
                        <tr>
                            <th style={{ width: "5vw" }}>
                                <input
                                    type="checkbox"
                                    name="Mercenary"
                                    checked={Mercenary}
                                    onChange={handleMercenaryChange}
                                ></input>
                            </th>
                            <th style={{ width: "50vw", textAlign: "left" }}>
                                Czy Najemnicy?
                            </th>
                        </tr>
                        <tr>
                            <th style={{ width: "5vw" }}>
                                <input
                                    type="checkbox"
                                    name="Monsters"
                                    checked={Monsters}
                                    onChange={handleMonstersChange}
                                ></input>
                            </th>
                            <th style={{ width: "50vw", textAlign: "left" }}>
                                Czy Potwory?
                            </th>
                        </tr>
                        <tr>
                            <th style={{ width: "5vw" }}>
                                <input
                                    type="checkbox"
                                    name="G"
                                    checked={G}
                                    onChange={handleCheckboxChange}
                                ></input>
                            </th>
                            <th style={{ width: "50vw", textAlign: "left" }}>
                                Gwardziści
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="GK"
                                    checked={GK}
                                    onChange={handleCheckboxChange}
                                ></input>
                            </th>
                            <th style={{ width: "50vw", textAlign: "left" }}>
                                Gwardziści + Rycerze
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="GG"
                                    checked={GG}
                                    onChange={handleCheckboxChange}
                                ></input>
                            </th>
                            <th style={{ width: "50vw", textAlign: "left" }}>
                                Gwardziści + Gryfy
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="GKG"
                                    checked={GKG}
                                    onChange={handleCheckboxChange}
                                ></input>
                            </th>
                            <th style={{ width: "50vw", textAlign: "left" }}>
                                Gwardziści + Rycerze + Gryfy
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            
    );
};

export default MobileCheckbox;
