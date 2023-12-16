import React from "react";
import { useWord } from "../../contexts/WordContext";

const WordBottom = () => {
  const { isPlaying } = useWord();

  const isSpin = isPlaying ? "" : "animate-spin";
  return (
    <div className=" flex justify-center items-center overflow-hidden ">
      {[...Array(10)].map((_, index) => (
        <img
          data-testid="spin-el"
          key={index}
          className={` ${isSpin} w-44 h-auto object-cover `}
          src="https://st.depositphotos.com/8684932/55795/v/450/depositphotos_557958734-stock-illustration-keyboard-button-mascot-doing-thumbs.jpg"
          alt=""
        />
      ))}
    </div>
  );
};

export default WordBottom;
