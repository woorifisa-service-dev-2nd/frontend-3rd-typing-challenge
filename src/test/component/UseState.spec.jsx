import {
  render,
  screen,
  userEvent,
  waitFor,
} from "../../test/utils/test-utils";
import { beforeAll, describe, expect, vi } from "vitest";
import UseState from "./UseState";

describe("UseState", () => {
  it("버튼 클릭시 게임 시작", async () => {
    render(<UseState />);
    const startBtn = screen.getByTestId("startBtn");
    expect(screen.getByTestId("wrap")).toContainHTML("off");

    userEvent.click(startBtn);

    // re-render 될때 까지 기달린다.
    await waitFor(() => {
      expect(screen.getByTestId("wrap")).not.toContainHTML("off");
    });
  });
});
