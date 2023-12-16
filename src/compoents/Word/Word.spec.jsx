import { render, screen } from "../../test/utils/test-utils";
import { describe, expect, it, test, vi } from "vitest";

import Word from "./Word";

let renderResult;
describe("Word", () => {
  it("Props Text Render", async () => {
    renderResult = render(<Word word={"test"} />);

    expect(screen.getByTestId("word")).toHaveTextContent("test");
  });
});
