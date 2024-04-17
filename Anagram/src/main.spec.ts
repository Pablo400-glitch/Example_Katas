import { describe, it, expect } from "vitest"
import { Anagram, Anagrams } from "./main.js"

describe("Anagram test", () => {
  it("Create Anagram", () => {
    const anagram = new Anagram("documenting")
    const result = anagram.getAnagram()

    const words: Anagrams = {
      first_anagram: "documenting", 
      second_anagram: "documenting"
    }

    expect(result).toStrictEqual(words)
  })

  it("Scrambling word", () => {
    const anagram = new Anagram("documenting")
    const result = anagram.scrambleWord(anagram.word)

    const words: Anagrams = {
      first_anagram: "documenting", 
      second_anagram: "documenting"
    }

    expect(result).toBe(words)
  })
})
