import { describe, it, expect, beforeEach } from "vitest"
import { LeapYear } from "./main.js"

describe("Leap Year", () => {
  it("Return true if it is a Leap Year", () => {
    const leapYear = new LeapYear(1600)
    const result = leapYear.isLeapYear()

    expect(result).toBe(true)
  })

  it("Return false if it is not a Leap Year", () => {
    const leapYear = new LeapYear(1997)
    const result = leapYear.isLeapYear()

    expect(result).toBe(false)
  })
})
