import React from "react";

const Word = ({ word }) => {
    return (
        <div className=" p-5 text-center border-solid border-2 border-indigo-600 rounded-lg shadow-inner">
            {word}
        </div>
    );
};

export default Word;
