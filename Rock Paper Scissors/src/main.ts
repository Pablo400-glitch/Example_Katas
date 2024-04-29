export class RockPaperScissors {
  private election: string

  constructor(election: string) {
    this.election = election
  }

  Game() {
    if (this.election === "Rock")
      return "I have chosen rock"
  }
}