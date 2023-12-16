import {
  render,
  screen,
  userEvent,
  waitFor,
} from "../../test/utils/test-utils";
import { describe, expect } from "vitest";
import WordBody from "./WordBody";

// let modifiedData = {
//   originalData: [1, 2, 3, 4, 5],
//   playWord: ["가나", "다라", "마바", "자차"],
//   playWordNumber: 4,
//   correctCount: 0,
//   isPlaying: true,
// };

// vi.mock("../../contexts/WordContext", async () => {
//   return {
//     ...vi.importActual("../../contexts/WordContext"),
//     useWord: () => modifiedData,
//     useWordDispath: () => {
//       console.log("adad");
//     },
//   };
// });

describe("WordBody", () => {
  it("버튼 클릭시 게임 시작", async () => {
    render(<WordBody />);

    const startBtn = screen.getByTestId("startBtn");
    expect(screen.getByTestId("body-wrap")).toContainHTML("시작 버튼");

    userEvent.click(startBtn);

    // // re-render 될때 까지 기달린다.
    await waitFor(() => {
      expect(screen.getByTestId("body-wrap")).not.toContainHTML("시작 버튼");
    });
  });
});
