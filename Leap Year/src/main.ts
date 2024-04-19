export class LeapYear{
  private year: number

  constructor(year: number) {
    this.year = year
  }

  isLeapYear(): boolean {
    if (this.year % 100 === 0 && this.year % 400 != 0)
      return false

    if (this.year % 4 != 0)
      return false

    if (this.year % 4 === 0)
      return true

    if (this.year % 400 === 0)
      return true

    return false
  }
}
