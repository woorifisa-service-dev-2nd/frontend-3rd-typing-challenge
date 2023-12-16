import { expect, test } from "vitest";
import { shuffleByArray } from "./array";

test("shuffleByArray", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const copyArray = [...array];

  expect(array).toEqual(copyArray);

  const shuffleArray = shuffleByArray(copyArray);

  expect(array).not.toEqual(shuffleArray);
});
