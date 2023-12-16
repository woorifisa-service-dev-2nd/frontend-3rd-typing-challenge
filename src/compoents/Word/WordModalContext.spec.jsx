import { render, screen, userEvent } from "../../test/utils/test-utils";
import { describe, expect, it, test, vi } from "vitest";

import WordModalContext from "./WordModalContext";

const mockObj = {
  onClose: vi.fn(),
  dispath: vi.fn((aciton) => {}),
};

vi.mock("../../contexts/WordContext", () => {
  const wordContext = vi.importActual("../../contexts/WordContext");

  return {
    ...wordContext,
    useWord: () => ({}),
    useWordDispath: () => (aciton) => {
      console.log(aciton);
      mockObj.dispath(aciton);
    },
  };
});

let renderResult;
describe("test", () => {
  it("아니오 버튼 누를시 close ", async () => {
    const onCloseSpy = vi.spyOn(mockObj, "onClose");

    renderResult = render(<WordModalContext onClose={mockObj.onClose} />);
    expect(onCloseSpy).not.toHaveBeenCalled();

    await userEvent.click(screen.getByText(/아니오/));

    expect(onCloseSpy).toHaveBeenCalled();
  });
  it("네 버튼 누를시 게임시작", async () => {
    renderResult = render(<WordModalContext onClose={mockObj.onClose} />);
    const dispathSpy = vi.spyOn(mockObj, "dispath");

    expect(dispathSpy).not.toBeCalled();

    await userEvent.click(screen.getByText(/네/));
    expect(dispathSpy).toBeCalled();
    expect(dispathSpy).toHaveBeenCalledWith({ type: "GAME_START" });
  });
});
