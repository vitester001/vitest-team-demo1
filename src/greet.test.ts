import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with "Hello" when no greeting is provided', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the provided greeting', () => {
    const result = greet('Bob', 'Good morning');
    expect(result).toBe('Good morning, Bob!');
  });

  it('should handle an empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with provided greeting', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });
});
