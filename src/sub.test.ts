import { describe, it, expect } from 'vitest'
import { sub } from './sub'

describe('sub', () => {
  it('should subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract when first number is smaller', () => {
    expect(sub(3, 5)).toBe(-2)
  })

  it('should subtract zero', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 5)).toBe(-5)
  })

  it('should subtract negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2)
    expect(sub(-3, -5)).toBe(2)
  })

  it('should subtract positive and negative numbers', () => {
    expect(sub(5, -3)).toBe(8)
    expect(sub(-5, 3)).toBe(-8)
  })
})
