import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub", () => {
  it("should return the correct subtraction of two positive numbers", () => {
    expect(sub(10, 5)).toBe(5);
  });

  it("should return the correct subtraction when the result is negative", () => {
    expect(sub(5, 10)).toBe(-5);
  });

  it("should return the correct subtraction with negative numbers", () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it("should return the correct subtraction when one number is zero", () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });

  it("should return zero when both numbers are zero", () => {
    expect(sub(0, 0)).toBe(0);
  });
});
