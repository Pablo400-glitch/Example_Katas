import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

describe("RomanNumeral", () => {
  it("should work", () => {
    const romanNumeral = new RomanNumeral()
    const result = romanNumeral.Convert(1)

    expect(result).toBe('I')
  })
})
