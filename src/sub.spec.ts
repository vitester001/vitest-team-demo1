import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct difference of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct difference when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 5)).toBe(-5);
  });

  it('should return the correct difference of two negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct difference when subtracting a negative number', () => {
    expect(sub(5, -5)).toBe(10);
    expect(sub(-5, 5)).toBe(-10);
  });

  it('should return zero when both numbers are equal', () => {
    expect(sub(5, 5)).toBe(0);
  });
});
