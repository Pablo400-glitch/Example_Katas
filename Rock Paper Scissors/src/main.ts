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
    if (this.playerElection === "Rock" && this.enemyElection === "Scissors")
      return "You won!!!"
    if (this.playerElection === "Paper" && this.enemyElection === "Rock")
      return "You won!!!"
    if (this.playerElection === "Scissors" && this.enemyElection === "Paper")
      return "You won!!!"
    if (this.playerElection === this.enemyElection)
      return "It's a draw"
    
    return "You lose"
  }
}