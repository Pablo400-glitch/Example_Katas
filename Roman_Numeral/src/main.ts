export class RomanNumeral {
  private amount: number
  private numberToRoman: { [key: number]: string } = { 
    1: 'I',
    2: 'II',
    3: 'III',
    5: 'V', 
    10: 'X', 
    50: 'L', 
    100: 'C', 
    500: 'D', 
    1000: 'M' 
  }

  constructor(amount: number) {
    this.amount = amount
  }

  Convert(): string {
    return this.numberToRoman[this.amount]
  }
}