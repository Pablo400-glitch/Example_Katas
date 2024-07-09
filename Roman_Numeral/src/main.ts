export class RomanNumeral {
  private amount: number
  private numberToRoman: { [key: number]: string } = { 
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    9: 'IX', 
    10: 'X', 
    50: 'L', 
    100: 'C', 
    500: 'D', 
    1000: 'M' 
  }

  private romanToNumber: { [key: string]: number } = {
    'I': 1,
    'II': 2,
    'III': 3,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  constructor(amount: number) {
    this.amount = amount
  }

  Convert(): string {
    let result: string = '';

    if (this.amount === this.romanToNumber[this.numberToRoman[this.amount]])
      result = this.numberToRoman[this.amount]
    else {
      const keys = Object.keys(this.numberToRoman).map(Number); // Obtiene todas las claves como números y las guarda en un array

      for (const key in keys) {
        if (parseInt(key) > this.amount) {
          console.log(key)
          break
        }
      }
    }
        
    return result
  }
}