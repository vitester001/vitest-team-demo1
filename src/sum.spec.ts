import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should return the sum when adding zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });
});
