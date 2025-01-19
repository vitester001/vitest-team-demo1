import { describe, expect, it } from 'vitest'
import { sub } from './sub'

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract when first number is smaller', () => {
    expect(sub(2, 5)).toBe(-3)
  })

  it('should subtract zero correctly', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 5)).toBe(-5)
  })

  it('should subtract negative numbers correctly', () => {
    expect(sub(-2, -3)).toBe(1)
    expect(sub(-2, 3)).toBe(-5)
    expect(sub(2, -3)).toBe(5)
  })
})
