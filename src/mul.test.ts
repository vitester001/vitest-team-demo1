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

  it("should return zero when multiplying any number by zero", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it("should handle multiplication with zero", () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it("should return the number itself when multiplied by one", () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it("should return zero for negative number multiplied by zero", () => {
    expect(multiply(-5, 0)).toBeCloseTo(0, 5);
    expect(multiply(0, -5)).toBeCloseTo(0, 5);
  });

  it("should handle large numbers", () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it("should handle decimal numbers", () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1, 5);
  });
});
