import React, { useRef, useEffect, useState } from "react";
import { useWord, useWordDispath } from "../../contexts/WordContext";
import InputOne from "../ui/Input/InputOne";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";

const WordInput = () => {
  const inputRef = useRef(null);

  const { playWord } = useWord();
  const wordDispath = useWordDispath();

  const [toast, setToast] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const checkWord = (word) => {
    if (playWord.length === 0) return;

    const findIndex = playWord.findIndex((v) => v.trim() === word.trim());

    if (findIndex !== -1) {
      wordDispath({ type: "CORRECT", correctId: findIndex });
    } else {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 1000);
    }

    inputRef.current.focus();
    inputRef.current.value = "";
  };

  const keyboardDownHandloer = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.code === "Enter" || e.keyCode === 13) {
      checkWord(inputRef.current.value);
    }
  };

  return (
    <>
      <InputOne
        btnText={"입력"}
        inputRef={inputRef}
        onClickIcon={() => checkWord(inputRef.current.value)}
        onKeyDown={keyboardDownHandloer}
      >
        단어를 입력해 주세요.
      </InputOne>

      {toast &&
        createPortal(
          <Modal>
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="text-5xl">다시 입력하세요</h1>
            </div>
          </Modal>,
          document.body
        )}
    </>
  );
};

export default WordInput;
