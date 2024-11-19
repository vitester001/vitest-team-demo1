import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should subtract two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should subtract a positive and a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should subtract a negative and a positive number', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return zero when subtracting zero from zero', () => {
    expect(sub(0, 0)).toBe(0);
  });

  it('should handle subtracting zero from a number', () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(-5, 0)).toBe(-5);
  });

  it('should handle subtracting a number from zero', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(0, -5)).toBe(5);
  });
});
