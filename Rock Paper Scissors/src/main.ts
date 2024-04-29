export class RockPaperScissors {
  private election: string
  private enemyElection: string[] = ["Rock", "Paper", "Scissors"]

  constructor(election: string) {
    this.election = election
  }

  Game() {
    if (this.election === "Rock")
      return "I have chosen rock"
  }
}