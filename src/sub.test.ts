import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the difference of two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the difference of a positive and a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return the difference of a negative and a positive number', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return 0 when both numbers are the same', () => {
    expect(sub(3, 3)).toBe(0);
  });

  it('should return the negative of the number when subtracting from 0', () => {
    expect(sub(0, 5)).toBe(-5);
  });

  it('should return the number itself when subtracting 0', () => {
    expect(sub(5, 0)).toBe(5);
  });
});
