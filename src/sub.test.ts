import { describe, it, expect } from "vitest"
import { sub } from "./sub"

describe("sub", () => {
  it("should correctly subtract two positive numbers", () => {
    expect(sub(10, 5)).toBe(5)
  })

  it("should correctly subtract two negative numbers", () => {
    expect(sub(-10, -5)).toBe(-5)
  })

  it("should correctly subtract a positive and a negative number", () => {
    expect(sub(10, -5)).toBe(15)
  })

  it("should correctly subtract a number and zero", () => {
    expect(sub(10, 0)).toBe(10)
    expect(sub(0, 10)).toBe(-10)
  })

  it("should correctly subtract zero and zero", () => {
    expect(sub(0, 0)).toBe(0)
  })
})
