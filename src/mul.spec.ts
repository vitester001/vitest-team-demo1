import { describe, it, expect } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6)
  })

  it('should return the product of two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
  })

  it('should return zero when multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0)
  })
})