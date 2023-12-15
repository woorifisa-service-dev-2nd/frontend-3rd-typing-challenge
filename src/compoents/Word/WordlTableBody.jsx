
import { useWord } from "../../contexts/WordContext";
import Word from "./Word";

const WordlTableBody = () => {
    const words = useWord();


    return (
        <ul className="flex flex-wrap text-3xl gap-4 justify-center items-center container mx-auto max-w-screen-md">
            {words.playWord.map((word, index) => (
                <Word word={word} key={index} />
            ))}
        </ul>
    );
};

export default WordlTableBody;
