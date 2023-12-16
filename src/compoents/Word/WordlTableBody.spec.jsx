import { render, screen } from "../../test/utils/test-utils";
import { describe, expect, it, test, vi } from "vitest";
import WordlTableBody from "./WordlTableBody";

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
describe("test", () => {
  it("test2", async () => {
    renderResult = render(<WordlTableBody />);
    // 성공
    // const html = await screen.getByTestId("ui").innerHTML;
    // expect(html);

    expect(screen.getByText("가나")).toBeInTheDocument();
  });
});
