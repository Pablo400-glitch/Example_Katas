import { describe, it, expect } from "vitest"
import { FizzBuzz } from "./main.js"

describe("FizzBuzz test", () => {
  it("return Fizz", () => {
    const result = FizzBuzz(3)

    expect(result).toBe("Fizz")
  })

  it("return Buzz", () => {
    const result = FizzBuzz(5)

    expect(result).toBe("Buzz")
  })

  it("return FizzBuzz", () => {
    const result = FizzBuzz(15)

    expect(result).toBe("FizzBuzz")
  })

  it("return number", () => {
    const result = FizzBuzz(7)

    expect(result).toBe(7)
  })
})
