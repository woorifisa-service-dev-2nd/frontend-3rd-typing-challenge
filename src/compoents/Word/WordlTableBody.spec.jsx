import { render, screen } from "../../test/utils/test-utils";
import { describe, expect, it, test, vi } from "vitest";
import WordlTableBody from "./WordlTableBody";

const mockObj = {
  onGameStart: vi.fn(),
  corrent: vi.fn(),
};
const gamStartSpy = vi.spyOn(mockObj, "onGameStart");

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
  };
});

let renderResult;
describe("Word Table Body", () => {
  it("render 확인", async () => {
    renderResult = render(<WordlTableBody />);

    expect(screen.getByText(/가나/)).toBeInTheDocument();
    expect(screen.getByText(/다라/)).toBeInTheDocument();
    expect(screen.getByText(/마바/)).toBeInTheDocument();
    expect(screen.getByText(/자차/)).toBeInTheDocument();
  });
});
