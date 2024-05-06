import React from "react";

const MobileInput = ({
    ZGB,
    ZGL,
    BG,
    ZRB,
    ZRL,
    BR,
    ZPB,
    ZPL,
    BP,
    P,
    handleZGBInputChange,
    handleZGLInputChange,
    handleBGInputChange,
    handleZRBInputChange,
    handleZRLInputChange,
    handleBRInputChange,
    handleZPBInputChange,
    handleZPLInputChange,
    handleBPInputChange,
    handlePInputChange,
    Monsters,
}) => {
    return (
        <div className="inputMobile">
            <table>
                <tbody>
                    <tr>
                        <th style={{ width: "40vw" }}>Zakres gwardzistów:</th>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
                        <th>Bonus rycerzy:</th>
                        <th>
                            <input
                                value={BR}
                                onChange={handleBRInputChange}
                            ></input>
                        </th>
                    </tr>
                    {Monsters && (
                        <>
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
                            </tr>
                            <tr>
                                <th>Bonus potworów:</th>
                                <th>
                                    <input
                                        value={BP}
                                        onChange={handleBPInputChange}
                                    ></input>
                                </th>
                            </tr>
                        </>
                    )}

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

export default MobileInput;
