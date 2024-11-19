import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the difference when subtracting a positive and a negative number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return the difference when subtracting two negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return 0 when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should return a negative result when a smaller number is subtracted from a larger number', () => {
    expect(sub(5, 10)).toBe(-5);
  });
});
