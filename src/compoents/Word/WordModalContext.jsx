import React from "react";

const WordModalContext = ({ onClose }) => {

  const playAgainHandler = () => {
    // onPlayAgain(); // 게임 리셋되는 함수
    onClose();

  }

  return (
    <>
      <div  >
        <h3 className='my-10 text-7xl text-center'>Challenge Completed!</h3>
        <h4 className='my-16 text-4xl text-center'>Typing Challenge 게임을 다시 하시겠습니까?</h4>
      </div>

      <div className='flex justify-center'>
        <button
          className="m-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"
          onClick={playAgainHandler}>네! 또 할래요!</button>
        <button
          className="m-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-10 border border-blue-500 hover:border-transparent rounded"
          onClick={onClose}>아니오. 안 할래요...</button>
      </div>

    </>
  )
};

export default WordModalContext;
