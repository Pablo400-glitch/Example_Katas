import { describe, it, expect } from "vitest"
import { RockPaperScissors } from "./main.js"

describe("RockPaperScissors", () => {
  it("You won the game. Rock vs Scissors", () => {
    const playerElection = "Rock"
    const enemyElection = "Scissors"
    const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
    const result = rockPaperScissors.Game()

    expect(result).toBe("You won!!!")
  })

  it("You lost the game. Scissors vs  Rock", () => {
    const playerElection = "Scissors"
    const enemyElection = "Rock"
    const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
    const result = rockPaperScissors.Game()

    expect(result).toBe("You lose")
  })
})
