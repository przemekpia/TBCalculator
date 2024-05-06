import React from "react";

const DesktopFullTable = ({
    W1,
    W2,
    W3,
    W4,
    W5,
    W6,
    W7,
    Ł1,
    Ł2,
    Ł3,
    Ł4,
    Ł5,
    Ł6,
    Ł7,
    J1,
    J2,
    J3,
    J4,
    J5,
    J6,
    J7,
    R1,
    R2,
    R3,
    R4,
    R5,
    R6,
    R7,
    G5,
    G6,
    G7,
    N5,
    N6,
    N7,
}) => {
    return (
        <div className="fullTable">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Włócznik</th>
                        <th>Łucznik</th>
                        <th>Jeździec</th>
                        <th>Gryf</th>
                        <th>Rycerz</th>
                        <th>Najemnicy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        style={{
                            backgroundColor: "#d6cbb7",
                            color: "black",
                        }}
                    >
                        <th>I</th>
                        <th>{W1}</th>
                        <th>{Ł1}</th>
                        <th>{J1}</th>
                        <th></th>
                        <th>{R1}</th>
                        <th></th>
                    </tr>
                    <tr
                        style={{
                            backgroundColor: "#416b00",
                            color: "black",
                        }}
                    >
                        <th>II</th>
                        <th>{W2}</th>
                        <th>{Ł2}</th>
                        <th>{J2}</th>
                        <th></th>
                        <th>{R2}</th>
                        <th></th>
                    </tr>
                    <tr
                        style={{
                            backgroundColor: "#005b8f",
                            color: "black",
                        }}
                    >
                        <th>III</th>
                        <th>{W3}</th>
                        <th>{Ł3}</th>
                        <th>{J3}</th>
                        <th></th>
                        <th>{R3}</th>
                        <th></th>
                    </tr>
                    <tr
                        style={{
                            backgroundColor: "#470b85",
                            color: "black",
                        }}
                    >
                        <th>IV</th>
                        <th>{W4}</th>
                        <th>{Ł4}</th>
                        <th>{J4}</th>
                        <th></th>
                        <th>{R4}</th>
                        <th></th>
                    </tr>
                    <tr
                        style={{
                            backgroundColor: "#a43700",
                            color: "black",
                        }}
                    >
                        <th>V</th>
                        <th>{W5}</th>
                        <th>{Ł5}</th>
                        <th>{J5}</th>
                        <th>{G5}</th>
                        <th>{R5}</th>
                        <th>{N5}</th>
                    </tr>
                    <tr
                        style={{
                            backgroundColor: "#d20c0b",
                            color: "black",
                        }}
                    >
                        <th>VI</th>
                        <th>{W6}</th>
                        <th>{Ł6}</th>
                        <th>{J6}</th>
                        <th>{G6}</th>
                        <th>{R6}</th>
                        <th>{N6}</th>
                    </tr>
                    <tr
                        style={{
                            backgroundColor: "#cb8700",
                            color: "black",
                        }}
                    >
                        <th>VII</th>
                        <th>{W7}</th>
                        <th>{Ł7}</th>
                        <th>{J7}</th>
                        <th>{G7}</th>
                        <th>{R7}</th>
                        <th>{N7}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DesktopFullTable;
