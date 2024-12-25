import { describe, it, expect } from "vitest";
import { greet } from "./greet";

describe("greet", () => {
  it("should return a greeting with the default greeting when no custom greeting is provided", () => {
    const result = greet("Alice");
    expect(result).toBe("Hello, Alice!");
  });

  it("should return a greeting with the provided custom greeting", () => {
    const result = greet("Bob", "Good morning");
    expect(result).toBe("Good morning, Bob!");
  });

  it("should handle names with special characters", () => {
    const result = greet("O'Connor");
    expect(result).toBe("Hello, O'Connor!");
  });

  it("should handle empty name string with default greeting", () => {
    const result = greet("");
    expect(result).toBe("Hello, !");
  });

  it("should handle empty name string with custom greeting", () => {
    const result = greet("", "Hi");
    expect(result).toBe("Hi, !");
  });

  it("should handle whitespace in name", () => {
    const result = greet("  Charlie  ");
    expect(result).toBe("Hello,   Charlie  !");
  });
});
