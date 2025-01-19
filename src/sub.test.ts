import { describe, it, expect } from 'vitest'
import { sub } from './sub'

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract a positive and negative number correctly', () => {
    expect(sub(5, -3)).toBe(8)
  })

  it('should subtract two negative numbers correctly', () => {
    expect(sub(-5, -3)).toBe(-2)
  })

  it('should return zero when subtracting same numbers', () => {
    expect(sub(5, 5)).toBe(0)
  })

  it('should subtract zero correctly', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 5)).toBe(-5)
  })

  it('should handle decimal numbers', () => {
    expect(sub(5.5, 2.2)).toBe(3.3)
  })
})
