export enum Elections {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors"
}

export class RockPaperScissors {
  private playerElection: string
  private enemyElection: string

  constructor(playerElection: string, enemyElection: string) {
    if (this.isValidElection(playerElection))
      this.playerElection = playerElection
    else 
      this.playerElection = " "

    if (this.isValidElection(enemyElection))
      this.enemyElection = enemyElection
    else 
      this.enemyElection = " "
  }

  isValidElection(choice: any): choice is Elections {
    return Object.values(Elections).includes(choice);
  }

  Game() {
    this.enemyElection = "Scissors"
    if (this.playerElection === "Rock" && this.enemyElection === "Scissors")
      return "You won!!!"
    else 
      return "You lose"
  }
}