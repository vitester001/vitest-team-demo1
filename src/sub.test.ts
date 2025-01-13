import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub", () => {
  it("should subtract two positive numbers", () => {
    expect(sub(10, 5)).toBe(5);
  });

  it("should subtract two negative numbers", () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it("should subtract a positive and a negative number", () => {
    expect(sub(10, -5)).toBe(15);
  });

  it("should subtract zero from a number", () => {
    expect(sub(10, 0)).toBe(10);
  });

  it("should subtract a number from zero", () => {
    expect(sub(0, 10)).toBe(-10);
  });

  it("should return zero when subtracting a number from itself", () => {
    expect(sub(10, 10)).toBe(0);
  });
});
