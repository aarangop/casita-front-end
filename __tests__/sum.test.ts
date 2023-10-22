import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";

describe("sum module", () => {
  test("adds 1 + 2 equals 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
