import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct difference of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct difference when subtracting a larger number from a smaller number', () => {
    expect(sub(5, 10)).toBe(-5);
  });

  it('should return zero when both numbers are the same', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should return the correct difference when one number is zero', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });

  it('should return the correct difference of two negative numbers', () => {
    expect(sub(-5, -10)).toBe(5);
  });

  it('should return the correct difference when subtracting a positive number from a negative number', () => {
    expect(sub(-5, 10)).toBe(-15);
  });

  it('should return the correct difference when subtracting a negative number from a positive number', () => {
    expect(sub(10, -5)).toBe(15);
  });
});
