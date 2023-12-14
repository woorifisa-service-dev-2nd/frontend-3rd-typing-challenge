import React, { useEffect, useRef, useState } from "react";
import { useWord, useWordDispath } from "../../contexts/WordContext";
import InputOne from "../ui/Input/InputOne";

const WordInput = () => {
  const inputRef = useRef(null);

  const { playWord } = useWord();
  const wordDispath = useWordDispath();

  const checkWord = (word) => {
    if (playWord.length === 0) return;

    const findIndex = playWord.findIndex((v) => v.trim() === word.trim());

    if (findIndex !== -1) {
      wordDispath({ type: "CORRECT", correctId: findIndex });
    }

    inputRef.current.focus();
    inputRef.current.value = "";
  };

  const keyboardDownHandloer = (e) => {
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
        여기에 단어를 입력해 주세요.
      </InputOne>
    </>
  );
};

export default WordInput;
