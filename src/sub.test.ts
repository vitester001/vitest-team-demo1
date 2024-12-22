import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should subtract a positive and a negative number correctly', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should subtract two negative numbers correctly', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle subtraction resulting in a negative number', () => {
    expect(sub(5, 10)).toBe(-5);
  });
});
