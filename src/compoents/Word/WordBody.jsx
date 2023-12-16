import React, { useEffect, useState } from "react";
import WordBottom from "./WordBottom";
import WordInput from "./WordInput";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import WordModalContext from "./WordModalContext";
import { useWord, useWordDispath } from "../../contexts/WordContext";

import WordlTableBody from "./WordlTableBody";
import Button from "../ui/Button/Button";

const WordBody = () => {
  // const { isPlaying, playWord } = useWord();
  // const dispath = useWordDispath();

  const [isStart, setStart] = useState(false);

  const onClickStart = () => {
    // dispath({
    //   type: "GAME_START",
    // });
    setStart(true);
  };

  return (
    <div className="p-2" data-testid="body-wrap">
      {isStart ? (
        <>
          <WordlTableBody />
          <WordInput />
          <WordBottom />
        </>
      ) : (
        <div
          data-testid="startBtn"
          className="h-[90vh] flex justify-center items-center"
        >
          <Button className={"p-4"} onClick={onClickStart}>
            시작 버튼 {isStart ? "true" : "false"}
          </Button>
        </div>
      )}
      {/* 
      {!isPlaying &&
        playWord.length !== 0 &&
        createPortal(
          <Modal>
            <WordModalContext
              onClose={() => {
                window.close();
              }}
            />
          </Modal>,
          document.body
        )} */}
    </div>
  );
};

export default WordBody;
