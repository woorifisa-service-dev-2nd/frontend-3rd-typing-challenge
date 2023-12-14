import React from 'react'
import { useWord, useWordDispath } from '../../../contexts/WordContext';

const StartButton = () => {

    const { isPlaying, playWord } = useWord();
    const dispath = useWordDispath()
    console.log(isPlaying);
    return (
        <button onClick={() => dispath({
            type: "RANDDOM_WORD"
        })}> 시작 </button>
    )
}

export default StartButton