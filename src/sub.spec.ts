import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the difference when subtracting a negative number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return zero when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should return the negative of a number when subtracting from zero', () => {
    expect(sub(0, 5)).toBe(-5);
  });

  it('should return zero when both numbers are the same', () => {
    expect(sub(5, 5)).toBe(0);
  });
});
