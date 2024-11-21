import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('should correctly add two positive numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('should correctly add two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5)
  })

  it('should correctly add a positive and a negative number', () => {
    expect(sum(2, -3)).toBe(-1)
  })

  it('should correctly add zero and a number', () => {
    expect(sum(0, 5)).toBe(5)
    expect(sum(5, 0)).toBe(5)
  })
})
