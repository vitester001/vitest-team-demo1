import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(1, -1)).toBe(0);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should return the sum of a number and zero', () => {
    expect(sum(5, 0)).toBe(5);
  });

  it('should return the sum of zero and a number', () => {
    expect(sum(0, 5)).toBe(5);
  });
});
