import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return zero when multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
