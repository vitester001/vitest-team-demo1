import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the difference when the first number is negative', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return the difference when the second number is negative', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return zero when both numbers are equal', () => {
    expect(sub(3, 3)).toBe(0);
  });

  it('should return the correct difference with zero', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });
});
