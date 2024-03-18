import { BirthdayBoyData } from "../BirthdayBoyRepository.js"
import { BirthdayMailer } from "../BirthdayMailer.js"

export class FakeMailer implements BirthdayMailer {
  private ammountOfCalls = 0

  async sendEmail(birthdayData: BirthdayBoyData): Promise<void> {
    console.log(`Happy birthday to email of: ${birthdayData}`)
    this.ammountOfCalls++
  }

  getCalls() {
    return this.ammountOfCalls
  }
}
