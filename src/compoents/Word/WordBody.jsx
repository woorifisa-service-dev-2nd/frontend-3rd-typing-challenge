import React, { useEffect, useState } from "react";

import WordInput from "./WordInput";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import WordModalContext from "./WordModalContext";
import { useWord, useWordDispath } from "../../contexts/WordContext";
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
