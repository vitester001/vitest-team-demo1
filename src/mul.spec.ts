import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-3, -7)).toBe(21);
  });

  it('should return zero when one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(7, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplication with one as a factor', () => {
    expect(multiply(1, 9)).toBe(9);
    expect(multiply(-1, 9)).toBe(-9);
  });
});
