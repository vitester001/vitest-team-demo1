import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct subtraction of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct subtraction when the result is zero', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should return the correct subtraction of a positive and a negative number', () => {
    expect(sub(5, -5)).toBe(10);
  });

  it('should return the correct subtraction of two negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct subtraction when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should return the correct subtraction when both numbers are zero', () => {
    expect(sub(0, 0)).toBe(0);
  });
});
