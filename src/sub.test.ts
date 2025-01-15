import { describe, expect, it } from 'vitest'
import { sub } from './sub'

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract zero correctly', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 5)).toBe(-5)
  })

  it('should subtract negative numbers correctly', () => {
    expect(sub(-5, -3)).toBe(-2)
    expect(sub(5, -3)).toBe(8)
    expect(sub(-5, 3)).toBe(-8)
  })

  it('should handle decimal numbers correctly', () => {
    expect(sub(5.5, 2.2)).toBe(3.3)
    expect(sub(-5.5, 2.2)).toBe(-7.7)
  })
})
