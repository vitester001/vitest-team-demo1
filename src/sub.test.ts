import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct subtraction of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct subtraction of two negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct subtraction of a positive and a negative number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return the correct subtraction of a negative and a positive number', () => {
    expect(sub(-10, 5)).toBe(-15);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });
});
