import { describe, it, expect } from "vitest"
import { Anagram } from "./main.js"

describe("Anagram test", () => {
  it("Create Anagram", () => {
    const anagram = new Anagram("documenting")
    const result = anagram.getAnagram()

    expect(result.first_anagram.length).toBe(11)
    expect(result.second_anagram.length).toBe(11)
  })

  it("Scrambling word", () => {
    const anagram = new Anagram("documenting")
    const result = anagram.scrambleWord(anagram.word)

    expect(result.length).toBe(11)
  })
})
