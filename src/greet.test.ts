import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet function', () => {
  it('should return a greeting with the default message when no custom greeting is provided', () => {
    const name = 'John';
    const result = greet(name);
    expect(result).toBe('Hello, John!');
  });

  it('should return a greeting with the custom message when a custom greeting is provided', () => {
    const name = 'Jane';
    const customGreeting = 'Hi';
    const result = greet(name, customGreeting);
    expect(result).toBe('Hi, Jane!');
  });
});
