import React from "react";
import { useWordDispath } from "../../contexts/WordContext";
import Button from "../ui/Button/Button";

const WordModalContext = ({ onClose }) => {
  const wordDispath = useWordDispath();
  const onPlayAgain = () => {
    wordDispath({
      type: "RANDDOM_WORD",
    });
  };

  const playAgainHandler = () => {
    onPlayAgain(); // 게임 리셋되는 함수
  };

  return (
    <>
      <div>
        <h2 className="my-10 text-lg font-bold text-center">Challenge Completed!</h2>
        <h3 className="my-16 text-sm text-center">
          Typing Challenge 게임을 다시 하시겠습니까?
        </h3>
      </div>
      <div className="flex justify-center gap-5">
        <Button className="p-2 text-[0.7rem]" onClick={playAgainHandler}>네! 또 할래요!</Button>
        <Button className="p-2 text-[0.7rem]" onClick={onClose}>아니오. 안 할래요...</Button>
      </div>
    </>
  );
};

export default WordModalContext;
