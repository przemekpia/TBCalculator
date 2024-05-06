import React from "react";

const DesktopInput = ({ ZGB, ZGL, BG, ZRB, ZRL, BR, ZPB, ZPL, BP, P, handleZGBInputChange, handleZGLInputChange, handleBGInputChange, handleZRBInputChange, handleZRLInputChange, handleBRInputChange, handleZPBInputChange, handleZPLInputChange, handleBPInputChange, handlePInputChange}) => {
    return (
        <div className="inputDesktop">
            <table>
                <tbody>
                    <tr>
                        <th>Zakres gwardzistów:</th>
                        <th>
                            <input
                                value={ZGB}
                                onChange={handleZGBInputChange}
                            ></input>
                        </th>
                        <th>
                            <input
                                value={ZGL}
                                onChange={handleZGLInputChange}
                            ></input>
                        </th>
                        <th>Bonus gwardzistów:</th>
                        <th>
                            <input
                                value={BG}
                                onChange={handleBGInputChange}
                            ></input>
                        </th>
                    </tr>
                    <tr>
                        <th>Zakres rycerzy:</th>
                        <th>
                            <input
                                value={ZRB}
                                onChange={handleZRBInputChange}
                            ></input>
                        </th>
                        <th>
                            <input
                                value={ZRL}
                                onChange={handleZRLInputChange}
                            ></input>
                        </th>
                        <th>Bonus rycerzy:</th>
                        <th>
                            <input
                                value={BR}
                                onChange={handleBRInputChange}
                            ></input>
                        </th>
                    </tr>
                    <tr>
                        <th>Zakres potworów:</th>
                        <th>
                            <input
                                value={ZPB}
                                onChange={handleZPBInputChange}
                            ></input>
                        </th>
                        <th>
                            <input
                                value={ZPL}
                                onChange={handleZPLInputChange}
                            ></input>
                        </th>
                        <th>Bonus potworów:</th>
                        <th>
                            <input
                                value={BP}
                                onChange={handleBPInputChange}
                            ></input>
                        </th>
                    </tr>
                    <tr>
                        <th>Pojemnosc:</th>
                        <th>
                            <input
                                value={P}
                                onChange={handlePInputChange}
                            ></input>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DesktopInput;
