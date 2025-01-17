import { describe, it, expect } from 'vitest'
import { sub } from './sub'

describe('sub', () => {
  it('should subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract with zero', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 5)).toBe(-5)
  })

  it('should subtract negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2)
    expect(sub(5, -3)).toBe(8)
    expect(sub(-5, 3)).toBe(-8)
  })

  it('should handle large numbers', () => {
    expect(sub(1000000, 1)).toBe(999999)
    expect(sub(-1000000, 1)).toBe(-1000001)
  })
})
