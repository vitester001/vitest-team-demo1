import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = sum(5, -3);
    expect(result).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    const result = sum(-4, -6);
    expect(result).toBe(-10);
  });

  it('should return 0 when both numbers are 0', () => {
    const result = sum(0, 0);
    expect(result).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    const result = sum(1000000, 2000000);
    expect(result).toBe(3000000);
  });
});
