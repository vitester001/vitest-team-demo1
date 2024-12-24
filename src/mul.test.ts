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

  it('should multiply zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply very large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should multiply floating-point numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
  });

  it('should handle multiplication with Infinity', () => {
    expect(multiply(Infinity, 1)).toBe(Infinity);
    expect(multiply(-Infinity, 1)).toBe(-Infinity);
    expect(multiply(Infinity, 0)).toBeNaN();
  });

  it('should multiply numbers resulting in a negative zero', () => {
    expect(multiply(-0, 5)).toBe(-0);
    expect(multiply(5, -0)).toBe(-0);
  });
});
