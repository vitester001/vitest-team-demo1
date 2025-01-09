import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a number by zero', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 5)).toBe(0);
  });

  it('should multiply two zeros', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply two floating-point numbers', () => {
    expect(multiply(2.5, 4.2)).toBeCloseTo(10.5);
  });

  it('should multiply a positive and a floating-point number', () => {
    expect(multiply(2, 2.5)).toBeCloseTo(5);
  });

  it('should multiply a negative and a floating-point number', () => {
    expect(multiply(-2, 2.5)).toBeCloseTo(-5);
  });
});
