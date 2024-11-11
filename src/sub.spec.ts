import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should subtract a positive and a negative number correctly', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should subtract two negative numbers correctly', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should subtract with zero correctly', () => {
    expect(sub(10, 0)).toBe(10);
    expect(sub(0, 5)).toBe(-5);
  });

  it('should subtract resulting in zero correctly', () => {
    expect(sub(5, 5)).toBe(0);
  });
});
