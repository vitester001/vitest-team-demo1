import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result for positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct result for negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct result for mixed positive and negative numbers', () => {
    expect(sub(10, -5)).toBe(15);
    expect(sub(-10, 5)).toBe(-15);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle zero correctly', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });
});
