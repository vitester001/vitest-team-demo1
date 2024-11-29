import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the correct product of two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should return the correct product of a positive and a negative number', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  it('should return the correct product of two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should return zero when one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should return the correct product for large numbers', () => {
    expect(multiply(1000, 2000)).toBe(2000000);
  });
});
