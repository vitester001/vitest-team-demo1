import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct result for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct result for mixed positive and negative numbers', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return zero when both numbers are the same', () => {
    expect(sub(3, 3)).toBe(0);
  });

  it('should return the negative of the second number when the first number is zero', () => {
    expect(sub(0, 3)).toBe(-3);
  });

  it('should return the first number when the second number is zero', () => {
    expect(sub(3, 0)).toBe(3);
  });
});
