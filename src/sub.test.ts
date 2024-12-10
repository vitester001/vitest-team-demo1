import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct subtraction of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct subtraction when the second number is larger', () => {
    expect(sub(3, 5)).toBe(-2);
  });

  it('should return the correct subtraction for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct subtraction when subtracting a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return zero when subtracting zero from a number', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should return the negative of a number when subtracting it from zero', () => {
    expect(sub(0, 5)).toBe(-5);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });
});
