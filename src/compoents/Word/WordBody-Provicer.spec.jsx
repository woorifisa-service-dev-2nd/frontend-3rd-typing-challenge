import { render, screen, userEvent } from "../../test/utils/test-utils";
import { describe, expect, it, test, vi } from "vitest";

import WordBody from "./WordBody";
import WordProvider from "../../contexts/WordContext";

vi.mock("../../utils/array", () => {
  return {
    shuffleByArray: () => ["감", "나무"],
  };
});

let renderResult;
describe("WordBody", () => {
  it("시작 버튼 클릭시 게임시작", async () => {
    renderResult = render(
      <WordProvider>
        <WordBody />
      </WordProvider>
    );

    await userEvent.click(screen.getByText(/시작 버튼/));

    expect(screen.getByTestId("body-wrap")).not.toHaveTextContent(/시작 버튼/);
  });

  it("단어를 다맞출시 게임끝", async () => {
    renderResult = render(
      <WordProvider>
        <WordBody />
      </WordProvider>
    );

    await userEvent.click(screen.getByText(/시작 버튼/));

    expect(screen.getByTestId("body-wrap")).not.toHaveTextContent(/시작 버튼/);

    expect(screen.getByTestId("refInput"));

    expect(screen.getByText("감")).toBeInTheDocument();

    await userEvent.type(screen.getByTestId("refInput"), "감{enter}");
    // 못찾을때 에러 핸들링
    expect(() => screen.getByText("감")).toThrowError();

    expect(screen.getByText("🎃"));
    await userEvent.type(screen.getByTestId("refInput"), "나무{enter}");

    expect(screen.getByText("Challenge Completed!")).toBeInTheDocument();
  });
});
