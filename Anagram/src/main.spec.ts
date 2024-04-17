import { describe, it, expect } from "vitest"
import { Anagram } from "./main.js"

describe("Default test", () => {
  it("should work", () => {
    const anagram = new Anagram("documenting")
    const result = anagram.getAnagram()

    expect(result).toBe("documenting")
  })
})
