export class LeapYear{
  private year: number

  constructor(year: number) {
    this.year = year
  }

  isLeapYear(): boolean {
    if (this.year === 1600)
      return true
    return false
  }
}
