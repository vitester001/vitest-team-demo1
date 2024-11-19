import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 1)).toBe(0)
    expect(sum(0, 0)).toBe(0)
    expect(sum(2.5, 3.5)).toBe(6)
  })
})
