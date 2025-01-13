import { describe, it, expect } from "vitest";
import { greet } from "./greet";

describe("greet", () => {
  it("should return a greeting with 'Hello' when no custom greeting is provided", () => {
    const result = greet("Alice");
    expect(result).toBe("Hello, Alice!");
  });

  it("should return a greeting with the custom greeting when provided", () => {
    const result = greet("Bob", "Hi");
    expect(result).toBe("Hi, Bob!");
  });
});
