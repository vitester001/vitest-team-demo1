import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct difference when both numbers are positive', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct difference when both numbers are negative', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct difference when subtracting a positive number from a negative number', () => {
    expect(sub(-10, 5)).toBe(-15);
  });

  it('should return the correct difference when subtracting a negative number from a positive number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sub(0, 0)).toBe(0);
  });

  it('should return the same number when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should return the negative of the number when zero is subtracted from it', () => {
    expect(sub(0, 5)).toBe(-5);
  });
});
