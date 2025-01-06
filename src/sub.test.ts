import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the difference when subtracting a positive and a negative number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return the difference when subtracting zero', () => {
    expect(sub(10, 0)).toBe(10);
  });

  it('should return the difference when both numbers are zero', () => {
    expect(sub(0, 0)).toBe(0);
  });

  it('should return a negative result when the second number is larger', () => {
    expect(sub(5, 10)).toBe(-5);
  });
});
