import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should multiply a positive number and a negative number correctly', () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should multiply a number by zero correctly', () => {
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 4)).toBe(0);
  });

  it('should multiply zero by zero correctly', () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
