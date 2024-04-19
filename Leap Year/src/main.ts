export class LeapYear{
  private year: number

  constructor(year: number) {
    this.year = year
  }

  isLeapYear(): boolean {
    if (this.year % 4 === 0) 
      return true
    else
      return false
  }
}
