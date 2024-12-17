import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should add a positive and negative number correctly', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should add two negative numbers correctly', () => {
    expect(sum(-2, -4)).toBe(-6);
  });

  it('should add zero correctly', () => {
    expect(sum(10, 0)).toBe(10);
    expect(sum(0, 10)).toBe(10);
  });

  it('should handle decimal numbers', () => {
    expect(sum(1.5, 2.7)).toBeCloseTo(4.2);
  });
});
