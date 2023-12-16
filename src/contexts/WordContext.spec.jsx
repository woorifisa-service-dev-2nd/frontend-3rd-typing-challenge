import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, test, vi } from "vitest";
import WordProvider, { useWord, useWordDispath } from "./WordContext";
import userEvent from "@testing-library/user-event";

vi.mock("../constants/word", () => {
  const mockImport = vi.importActual("../constants/word");

  return {
    ...mockImport,
    DEMY_WORD: ["a", "b", "c", "d", "e", "f", "g"],
    PLAY_WORD_NUMBER: 2,
  };
});

const Children = () => {
  const word = useWord();
  const dispath = useWordDispath();
  return (
    <div>
      <div data-testid="game-wrap">
        {word.playWord.length > 0 && <p>단어 배치됨</p>}
        <div>
          <span>카운터 :</span>
          <span data-testid="correctCount">{word.correctCount}</span>
        </div>
        <button onClick={() => dispath({ type: "GAME_START" })}>dispath</button>
        <button onClick={() => dispath({ type: "CORRECT", correctId: 0 })}>
          CORRECT
        </button>
        <button onClick={() => dispath({ type: "asdsafa" })}>other</button>
      </div>
    </div>
  );
};

let renderResult;
describe("< WordContext />", () => {
  test("Game 시작", async () => {
    renderResult = render(
      <WordProvider>
        <Children />
      </WordProvider>
    );
    expect(screen.getByTestId("game-wrap")).not.toContainHTML("단어 배치됨");

    await userEvent.click(screen.getByText(/dispath/));
    expect(screen.getByTestId("game-wrap")).toContainHTML("단어 배치됨");
  });

  test("단어 맞출시 카운터 증가 단어 2개이상은 카운터 증가 x", async () => {
    renderResult = render(
      <WordProvider>
        <Children />
      </WordProvider>
    );

    expect(screen.getByTestId("correctCount")).toHaveTextContent(0);

    await userEvent.click(screen.getByText(/CORRECT/));

    expect(screen.getByTestId("correctCount")).toHaveTextContent(1);
    await userEvent.click(screen.getByText(/CORRECT/));

    expect(screen.getByTestId("correctCount")).toHaveTextContent(2);

    // 단어 다맞춤
    await userEvent.click(screen.getByText(/CORRECT/));
    expect(screen.getByTestId("correctCount")).toHaveTextContent(2);
  });

  test("지정 되지 않은 type 호출", async () => {
    renderResult = render(
      <WordProvider>
        <Children />
      </WordProvider>
    );

    await userEvent.click(screen.getByText(/other/));
  });
});
