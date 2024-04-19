import { describe, it, expect } from "vitest"
import { LeapYear } from "./main.js"

describe("Default test", () => {
  it("should work", () => {
    const leapYear = new LeapYear(1600)
    const result = leapYear.isLeapYear()

    expect(result).toBe(true)
  })
})
