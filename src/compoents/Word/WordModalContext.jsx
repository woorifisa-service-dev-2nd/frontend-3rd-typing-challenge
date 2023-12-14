import React from "react";

const WordModalContext = ({ onClose }) => {
  
  const playAgainHandler = () => {
    // onPlayAgain(); // 게임 리셋되는 함수
    onClose();

  }

  return (
    <>
      <h3>Challenge Completed!</h3>
      <h4>Typing Callenge 게임을 다시 하시겠습니까?</h4>
      <button onClick={playAgainHandler}>네! 또 할래요!</button>
      <button onClick={onClose}>아니오. 안 할래요...</button>
    </>
  )
};

export default WordModalContext;
