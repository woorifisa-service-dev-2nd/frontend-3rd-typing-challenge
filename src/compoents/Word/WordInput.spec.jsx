import { render, screen, userEvent } from "../../test/utils/test-utils";
import { describe, expect, it, test, vi } from "vitest";

import WordInput from "./WordInput";

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
      mockObj.dispath(actions);
    },
  };
});

let renderResult;
describe("WordInput", () => {
  it("단어를 입력하고 정답 확인 버튼 클릭", async () => {
    renderResult = render(<WordInput />);

    const input = screen.getByTestId("refInput");

    await userEvent.type(input, "가나{enter}");
    expect(dispathSpy).toHaveBeenCalledWith({ type: "CORRECT", correctId: 0 });

    await userEvent.type(input, "다라{enter}");
    expect(dispathSpy).toHaveBeenCalledWith({ type: "CORRECT", correctId: 1 });

    await userEvent.type(input, "가나2{enter}");
    expect(dispathSpy).not.toHaveBeenCalledWith({ type: "CORRECT" });
  });
});
