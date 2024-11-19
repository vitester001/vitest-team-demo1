import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct difference for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct difference for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct difference for mixed positive and negative numbers', () => {
    expect(sub(5, -3)).toBe(8);
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return zero when both numbers are equal', () => {
    expect(sub(3, 3)).toBe(0);
  });

  it('should return the negative of the number when subtracting from zero', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(0, -5)).toBe(5);
  });
});
