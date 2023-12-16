import { describe } from "vitest";
import DefaultLayout from "./DefaultLayout";
import { render } from "../test/utils/test-utils";

describe("<DefaultLayout />", () => {
  it("render", () => {
    render(<DefaultLayout />);
  });
});
