import { createContext, useContext, useReducer } from "react";
import { DEMY_WORD, PLAY_WORD_NUMBER } from "../constants/word";
import React from "react";
import { shuffleByArray } from "../utils/array";

const WordContext = createContext();
const WordDisPathContext = createContext();

const reducerWord = (state, action) => {
  switch (action.type) {
    case "RANDDOM_WORD": {
      const copy = state.originalData;
      const playWord = shuffleByArray(copy);

      return {
        ...state,
        playWord: playWord.splice(0, state.playWordNumber),
        isPlaying: true,
        correctCount: 0,
      };
    }
    case "CORRECT": {
      if (state.correctCount >= state.playWordNumber) {
        return {
          ...state,
        };
      }
      const correctId = action.correctId;
      state.playWord[correctId] = "🎃";

      const correctCount = state.correctCount + 1;

      return {
        ...state,
        correctCount,
        isPlaying: correctCount === state.playWordNumber ? false : true,
      };
    }

    default:
      break;
  }
};

//////////////////////////////////////////////////////////////////////////////////

const WordProvider = ({ children }) => {
  const [words, wordDispath] = useReducer(reducerWord, {
    originalData: DEMY_WORD,
    playWord: [],
    playWordNumber: PLAY_WORD_NUMBER,
    correctCount: 0,
    isPlaying: false,
  });

  return (
    <WordContext.Provider value={words}>
      <WordDisPathContext.Provider value={wordDispath}>
        {children}
        <div className="border-2n"></div>
      </WordDisPathContext.Provider>
    </WordContext.Provider>
  );
};

export default WordProvider;


export const useWord = () => useContext(WordContext);
export const useWordDispath = () => useContext(WordDisPathContext);
