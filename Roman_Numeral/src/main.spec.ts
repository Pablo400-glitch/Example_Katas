import { describe, it, expect } from "vitest"
import { RomanNumeral } from "./main.js"

describe("RomanNumeral", () => {

  describe("Main Roman Numbers", () => {
    it("should return I", () => {
      const romanNumeral = new RomanNumeral(1)
      const result = romanNumeral.Convert()
  
      expect(result).toBe('I')
    })
  
    it("should return V", () => {
      const romanNumeral = new RomanNumeral(5)
      const result = romanNumeral.Convert()
  
      expect(result).toBe('V')
    })
  
    it("should return X", () => {
      const romanNumeral = new RomanNumeral(10)
      const result = romanNumeral.Convert()
  
      expect(result).toBe('X')
    })
  
    it("should return L", () => {
      const romanNumeral = new RomanNumeral(50)
      const result = romanNumeral.Convert()
  
      expect(result).toBe('L')
    })
  
    it("should return C", () => {
      const romanNumeral = new RomanNumeral(100)
      const result = romanNumeral.Convert()
  
      expect(result).toBe('C')
    })
  
    it("should return D", () => {
      const romanNumeral = new RomanNumeral(500)
      const result = romanNumeral.Convert()
  
      expect(result).toBe('D')
    })
  
    it("should return M", () => {
      const romanNumeral = new RomanNumeral(1000)
      const result = romanNumeral.Convert()
  
      expect(result).toBe('M')
    })
  })
})
