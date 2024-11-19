import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct result for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct result when the result is zero', () => {
    expect(sub(3, 3)).toBe(0);
  });

  it('should return the correct result when subtracting from zero', () => {
    expect(sub(0, 5)).toBe(-5);
  });

  it('should return the correct result when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
  });
});
