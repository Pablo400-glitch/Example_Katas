import { describe, it, expect } from "vitest"
import { Anagram, Anagrams } from "./main.js"

describe("Default test", () => {
  it("should work", () => {
    const anagram = new Anagram("documenting")
    const result = anagram.getAnagram()

    const words: Anagrams = {
      first_anagram: "documenting", 
      second_anagram: "documenting"
    }

    expect(result).toStrictEqual(words)
  })
})
