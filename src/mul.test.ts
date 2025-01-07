import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive number and zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a positive number and a negative number', () => {
    expect(multiply(4, -5)).toBe(-20);
  });

  it('should multiply zero and zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply a number by one', () => {
    expect(multiply(7, 1)).toBe(7);
    expect(multiply(1, 7)).toBe(7);
  });

  it('should multiply a number by negative one', () => {
    expect(multiply(7, -1)).toBe(-7);
    expect(multiply(-1, 7)).toBe(-7);
  });
});
