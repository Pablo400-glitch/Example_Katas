import { describe, it, expect } from "vitest"
import { RockPaperScissors } from "./main.js"

describe("RockPaperScissors", () => {
  describe("You won the game", () => {
    it("Rock vs Scissors", () => {
      const playerElection = "Rock"
      const enemyElection = "Scissors"
      const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
      const result = rockPaperScissors.Game()
  
      expect(result).toBe("You won!!!")
    })

    it("Paper vs Rock", () => {
      const playerElection = "Paper"
      const enemyElection = "Rock"
      const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
      const result = rockPaperScissors.Game()
  
      expect(result).toBe("You won!!!")
    })

    it("Scissors vs Paper", () => {
      const playerElection = "Scissors"
      const enemyElection = "Paper"
      const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
      const result = rockPaperScissors.Game()
  
      expect(result).toBe("You won!!!")
    })
  })

  describe("You lost the game", () => {
    it("Scissors vs Rock", () => {
      const playerElection = "Scissors"
      const enemyElection = "Rock"
      const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
      const result = rockPaperScissors.Game()
  
      expect(result).toBe("You lose")
    })

    it("Rock vs Paper", () => {
      const playerElection = "Rock"
      const enemyElection = "Paper"
      const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
      const result = rockPaperScissors.Game()
  
      expect(result).toBe("You lose")
    })

    it("Paper vs Scissors", () => {
      const playerElection = "Paper"
      const enemyElection = "Scissors"
      const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
      const result = rockPaperScissors.Game()
  
      expect(result).toBe("You lose")
    })
  })

  describe("Draw", () => {
    it("Paper vs Paper", () => {
      const playerElection = "Paper"
      const enemyElection = "Paper"
      const rockPaperScissors = new RockPaperScissors(playerElection, enemyElection)
      const result = rockPaperScissors.Game()
  
      expect(result).toBe("It's a draw")
    })
  })
})
