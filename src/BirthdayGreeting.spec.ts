import { describe, it, expect } from "vitest"
import { BirthdayGreeting } from "./BirthdayGreeting.js"

describe("Birthday Greetings", () => {
    it("display Happy Birthday", () => {
      const birthdayGreeting = new BirthdayGreeting()
      
      const birthday = birthdayGreeting.happyBirthday()
  
      expect(birthday).toBe('Happy birthday!')
    })
  })