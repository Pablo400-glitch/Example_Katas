import { describe, it, expect } from "vitest"
import { RockPaperScissors } from "./main.js"

describe("Default test", () => {
  it("should work", () => {
    const playerElection = "Rock"
    const rockPaperScissors = new RockPaperScissors(playerElection)
    const result = rockPaperScissors.Game()

    expect(result).toBe("You won!!!")
  })
})
