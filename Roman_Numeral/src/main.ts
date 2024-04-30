export class RomanNumeral {
  private amount: number
  private romanNumbers: { [key: number]: string } = { 
    1: 'I', 
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
    return this.romanNumbers[this.amount]
  }
}