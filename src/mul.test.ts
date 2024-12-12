import { describe, it, expect } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  it('should return the product of a positive number and a negative number', () => {
    expect(multiply(2, -3)).toBe(-6)
  })

  it('should return the product of two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should return zero when one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
  })

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0)
  })

  it('should return the product of a number and one (identity property)', () => {
    expect(multiply(5, 1)).toBe(5)
    expect(multiply(1, 5)).toBe(5)
  })

  it('should handle very large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20)
    expect(multiply(-1e10, 1e10)).toBe(-1e20)
    expect(multiply(1e10, -1e10)).toBe(-1e20)
    expect(multiply(-1e10, -1e10)).toBe(1e20)
  })
})
