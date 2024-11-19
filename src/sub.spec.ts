import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct difference for positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct difference for negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct difference when subtracting a positive and a negative number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return the correct difference when subtracting zero', () => {
    expect(sub(10, 0)).toBe(10);
    expect(sub(0, 10)).toBe(-10);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(10, 10)).toBe(0);
  });
});
