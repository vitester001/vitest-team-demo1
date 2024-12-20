import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(2, 0)).toBe(0);
    expect(multiply(0, 5)).toBe(0);
  });

  it('should return zero when multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1000, 2000)).toBe(2000000);
  });

  it('should handle fractional results correctly', () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
  });

  it('should return the same number when multiplying by one', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should return the negated number when multiplying by negative one', () => {
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(5, -1)).toBe(-5);
  });

  it('should return the original number when multiplying by one', () => {
    expect(multiply(1, 123456)).toBe(123456);
    expect(multiply(123456, 1)).toBe(123456);
  });

  it('should return the negation of the number when multiplying by negative one', () => {
    expect(multiply(-1, -123456)).toBe(123456);
    expect(multiply(-123456, -1)).toBe(123456);
  });
});
