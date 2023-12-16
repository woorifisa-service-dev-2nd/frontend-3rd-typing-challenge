import { render, screen } from "../../test/utils/test-utils";
import { describe, expect, vi } from "vitest";
import WordBottom from "./WordBottom";

let modifiedData = {
  isPlaying: false,
};

vi.mock("../../contexts/WordContext", async () => {
  return {
    ...vi.importActual("../../contexts/WordContext"),
    useWord: () => modifiedData,
  };
});

describe("WordBottom", () => {
  test("게임이 끝나면 spin ", () => {
    render(<WordBottom />);

    expect(screen.getAllByTestId("spin-el")[0]).toHaveClass("animate-spin");
  });
});
