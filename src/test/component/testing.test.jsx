import { render, screen } from "../utils/test-utils";
import Testing from "./testing";

let renderResult;

describe("test", () => {
  it("test2", async () => {
    renderResult = render(<Testing />);

    expect(
      screen.getByRole("textbox", { name: "Has Error" })
    ).toHaveAccessibleErrorMessage();
    expect(
      screen.getByRole("textbox", { name: "Has Error" })
    ).toHaveAccessibleErrorMessage("This field is invalid");
    expect(
      screen.getByRole("textbox", { name: "Has Error" })
    ).toHaveAccessibleErrorMessage(/invalid/i);
    expect(
      screen.getByRole("textbox", { name: "Has Error" })
    ).not.toHaveAccessibleErrorMessage("This field is absolutely correct!");

    // Inputs without Valid Error Messages
    expect(
      screen.getByRole("textbox", { name: "No Error Attributes" })
    ).not.toHaveAccessibleErrorMessage();

    expect(
      screen.getByRole("textbox", { name: "Not Invalid" })
    ).not.toHaveAccessibleErrorMessage();
  });
});
