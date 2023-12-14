import React, { useEffect, useState } from "react";
import WordBottom from "../Word/wordBottom"
import WordInput from "./WordInput";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import WordModalContext from "./WordModalContext";
import { useWord } from "../../contexts/WordContext";
import StartButton from "../ui/Button/StartButton";
import WordlTableBody from "./WordlTableBody";

const WordBody = () => {
  const { isPlaying, playWord } = useWord();

  const [isOpen, setOpen] = useState(false);
  const [isStart, setStart] = useState(false);

  useEffect(() => {
    if (playWord.length !== 0) {
      setOpen(!isPlaying);
    }
  }, [isPlaying]);

  return (
    <>
      {isStart ? (
        <>
          <WordlTableBody />
          <WordInput />
          <WordBottom />
        </>
      ) : (
        <StartButton onClick={() => setStart(true)} />

      )}

      {isOpen &&
        createPortal(
          <Modal>
            <WordModalContext
              onClose={() => {
                window.close();
              }}
            />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default WordBody;
