import React from "react";
import { useWord, useWordDispath } from "../../../contexts/WordContext";

const StartButton = ({ onClick }) => {
  const { isPlaying, playWord } = useWord();
  const dispath = useWordDispath();

  return (
    <button
      onClick={() => {
        dispath({
          type: "RANDDOM_WORD",
        });
        onClick();
      }}
    >
      {" "}
      시작{" "}
    </button>
  );
};

export default StartButton;
