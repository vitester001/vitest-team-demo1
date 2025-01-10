import { describe, it, expect } from "vitest"
import { multiply } from "./mul"

describe("multiply", () => {
  it("should return the product of two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6)
  })

  it("should return the product of a positive and a negative number", () => {
    expect(multiply(-2, 3)).toBe(-6)
  })

  it("should return the product of two negative numbers", () => {
    expect(multiply(-2, -3)).toBe(6)
  })

  it("should return 0 when one of the numbers is 0", () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
  })

  it("should return the correct product for large numbers", () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000)
  })

  it("should return the correct product for decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10)
    expect(multiply(-2.5, 4)).toBe(-10)
  })
})
