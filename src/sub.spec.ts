import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the difference when subtracting a larger number from a smaller number', () => {
    expect(sub(5, 10)).toBe(-5);
  });

  it('should return 0 when both numbers are equal', () => {
    expect(sub(7, 7)).toBe(0);
  });

  it('should handle negative numbers correctly', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should handle subtraction resulting in a negative number', () => {
    expect(sub(3, 5)).toBe(-2);
  });

  it('should return the correct result when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 5)).toBe(-5);
  });
});
