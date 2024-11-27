import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return 0 when multiplying by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return 0 when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplication with decimal numbers', () => {
    expect(multiply(1.5, 2)).toBe(3);
    expect(multiply(2.5, 2.5)).toBe(6.25);
  });

  it('should handle multiplication with large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });
});
