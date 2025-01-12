import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should return the product of two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should return the product of a positive and a negative number", () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it("should return the product of two negative numbers", () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it("should return 0 when one of the numbers is 0", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it("should handle multiplication with large numbers", () => {
    expect(multiply(1_000_000, 2)).toBe(2_000_000);
  });

  it("should handle multiplication with floating-point numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(-1.5, 2)).toBe(-3);
  });
});
