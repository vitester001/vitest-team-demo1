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

  it('should return zero when both numbers are zero', () => {
    expect(sub(0, 0)).toBe(0);
  });

  it('should return the negative value when subtracting a larger number from a smaller one', () => {
    expect(sub(3, 5)).toBe(-2);
  });

  it('should return the same number when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should return the negative of the number when zero is subtracted from it', () => {
    expect(sub(0, 5)).toBe(-5);
  });
});
