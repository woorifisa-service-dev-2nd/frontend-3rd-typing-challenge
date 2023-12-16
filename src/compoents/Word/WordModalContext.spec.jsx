import { render, screen, userEvent } from "../../test/utils/test-utils";
import { describe, expect, it, test, vi } from "vitest";

import WordModalContext from "./WordModalContext";

const mockObj = {
  onClose: vi.fn(),
  onGameStart: vi.fn(),
};
const gamStartSpy = vi.spyOn(mockObj, "onGameStart");

vi.mock("../../contexts/WordContext", () => {
  const wordContext = vi.importActual("../../contexts/WordContext");

  return {
    ...wordContext,
    useWord: () => ({}),
    useWordDispath: (as) => (da) => {
      console.log(as, da);
      mockObj.onGameStart();
    },
  };
});

let renderResult;
describe("test", () => {
  it("아니오 버튼 누를시 close ", async () => {
    const dispathSpy = vi.spyOn(mockObj, "onClose");

    renderResult = render(<WordModalContext onClose={mockObj.onClose} />);
    expect(dispathSpy).not.toHaveBeenCalled();

    await userEvent.click(screen.getByText(/아니오/));

    expect(dispathSpy).toHaveBeenCalled();
  });
  it("네 버튼 누를시 게임시작", async () => {
    renderResult = render(<WordModalContext onClose={mockObj.onClose} />);
    expect(gamStartSpy).not.toBeCalled();

    await userEvent.click(screen.getByText(/네/));
    expect(gamStartSpy).toBeCalled();
  });
});
