import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    const result = multiply(3, 4);
    expect(result).toBe(12);
  });

  it('should multiply a positive and a negative number correctly', () => {
    const result = multiply(3, -4);
    expect(result).toBe(-12);
  });

  it('should multiply two negative numbers correctly', () => {
    const result = multiply(-3, -4);
    expect(result).toBe(12);
  });

  it('should return zero when multiplying by zero', () => {
    const result1 = multiply(0, 4);
    const result2 = multiply(3, 0);
    expect(result1).toBe(0);
    expect(result2).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    const result = multiply(0, 0);
    expect(result).toBe(0);
  });
});
