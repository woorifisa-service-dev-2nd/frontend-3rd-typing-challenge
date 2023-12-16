import React from "react";

const Word = ({ word }) => {
  return (
    <div
      data-testid="word"
      className=" bg-gray-600 p-5 text-center  rounded-lg shadow-inner text-white"
    >
      {word}
    </div>
  );
};

export default Word;
