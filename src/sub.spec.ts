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
    expect(sub(0, 10)).toBe(-10);
  });

  it('should return zero when subtracting the same numbers', () => {
    expect(sub(5, 5)).toBe(0);
  });
});
