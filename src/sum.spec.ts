import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-3, -4)).toBe(-7);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return the correct sum when one number is zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(7, 0)).toBe(7);
  });
});
