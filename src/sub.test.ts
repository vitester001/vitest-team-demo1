import { describe, expect, it } from 'vitest'
import { sub } from './sub'

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract a negative number correctly', () => {
    expect(sub(5, -3)).toBe(8)
  })

  it('should subtract zero correctly', () => {
    expect(sub(5, 0)).toBe(5)
  })

  it('should handle subtracting from zero', () => {
    expect(sub(0, 5)).toBe(-5)
  })

  it('should subtract two negative numbers correctly', () => {
    expect(sub(-5, -3)).toBe(-2)
  })
})
