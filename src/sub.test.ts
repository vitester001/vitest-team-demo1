import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the difference of a positive and a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return the difference of two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return zero when subtracting zero from zero', () => {
    expect(sub(0, 0)).toBe(0);
  });

  it('should handle subtracting zero from a positive number', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should handle subtracting zero from a negative number', () => {
    expect(sub(-5, 0)).toBe(-5);
  });

  it('should handle subtracting a positive number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle subtracting a negative number from itself', () => {
    expect(sub(-5, -5)).toBe(0);
  });
});
