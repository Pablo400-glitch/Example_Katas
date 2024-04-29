export class LeapYear{
  private year: number

  constructor(year: number) {
    this.year = year
  }

  isLeapYear(): boolean {
    if (this.year % 100 === 0 && this.year % 400 != 0)
      return false
    else if (this.year % 4 != 0)
      return false
    else if (this.year % 4 === 0)
      return true
    else if (this.year % 400 === 0)
      return true
    else
    return false
  }
}
