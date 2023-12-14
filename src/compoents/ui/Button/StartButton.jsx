import React from "react";
import { useWord, useWordDispath } from "../../../contexts/WordContext";

const StartButton = ({ onClick }) => {

    const dispath = useWordDispath();

    return (
        <button
            onClick={() => {
                dispath({
                    type: "RANDDOM_WORD"
                }),
                    onClick(); // props 내리지 말고 useWord 사용 불가??
            }}
        >
            {" "}
            시작{" "}
        </button>
    );
};

export default StartButton;
