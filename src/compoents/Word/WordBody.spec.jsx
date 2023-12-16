import { render, screen, userEvent } from "../../test/utils/test-utils";
import { describe, expect, it, test, vi } from "vitest";

import WordBody from "./WordBody";

const mockObj = {
  dispath: vi.fn((actions) => {}),
};
const dispathSpy = vi.spyOn(mockObj, "dispath");

vi.mock("../../contexts/WordContext", () => {
  const wordContext = vi.importActual("../../contexts/WordContext");

  return {
    ...wordContext,
    useWord: () => ({
      originalData: [1, 2, 3, 4, 5],
      playWord: ["가나", "다라", "마바", "자차"],
      playWordNumber: 4,
      correctCount: 0,
      isPlaying: false,
    }),
    useWordDispath: () => (actions) => {
      console.log(actions);
      mockObj.dispath(actions);
    },
  };
});

let renderResult;
describe("WordBody", () => {
  it("시작 버튼 클릭시 게임시작", async () => {
    renderResult = render(<WordBody />);

    await userEvent.click(screen.getByText(/시작 버튼/));
    expect(dispathSpy).toHaveBeenCalledWith({ type: "GAME_START" });

    expect(screen.getByTestId("body-wrap")).not.toHaveTextContent(/시작 버튼/);
  });
});
