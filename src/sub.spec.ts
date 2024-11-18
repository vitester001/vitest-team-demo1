import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct subtraction of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct subtraction of a positive and a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return the correct subtraction of two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should return a negative result when the second number is larger', () => {
    expect(sub(3, 5)).toBe(-2);
  });
});
