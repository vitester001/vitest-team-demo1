import { describe, expect, it } from 'vitest'
import { sub } from './sub'

describe('sub', () => {
  it('should subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract a negative number', () => {
    expect(sub(5, -3)).toBe(8)
  })

  it('should subtract zero', () => {
    expect(sub(5, 0)).toBe(5)
  })

  it('should handle negative result', () => {
    expect(sub(3, 5)).toBe(-2)
  })
})
