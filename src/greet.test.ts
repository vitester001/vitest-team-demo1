import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default to "Hello"', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a custom greeting with the provided name', () => {
    const result = greet('Bob', 'Hi');
    expect(result).toBe('Hi, Bob!');
  });

  it('should handle empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle empty name with custom greeting', () => {
    const result = greet('', 'Greetings');
    expect(result).toBe('Greetings, !');
  });
});
