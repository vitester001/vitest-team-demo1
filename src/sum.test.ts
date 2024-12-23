import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should add two negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should add a positive number and a negative number correctly', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('should return the same number when adding zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should return zero when adding zero to zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
