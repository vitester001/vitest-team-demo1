import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct subtraction result for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct subtraction result for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct subtraction result for mixed positive and negative numbers', () => {
    expect(sub(5, -3)).toBe(8);
    expect(sub(-10, 5)).toBe(-15);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
    expect(sub(-5, -5)).toBe(0);
  });

  it('should return the correct result when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 5)).toBe(-5);
  });
});
