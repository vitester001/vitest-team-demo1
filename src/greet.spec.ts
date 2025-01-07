import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a custom greeting when a greeting is provided', () => {
    const name = 'Alice';
    const greeting = 'Good morning';
    const result = greet(name, greeting);
    expect(result).toBe('Good morning, Alice!');
  });

  it('should return a default greeting when no greeting is provided', () => {
    const name = 'Bob';
    const result = greet(name);
    expect(result).toBe('Hello, Bob!');
  });
});
