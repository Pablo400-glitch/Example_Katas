import { BirthdayBoyRepository } from "./BirthdayBoyRepository.js"
import { BirthdayMailer } from "./BirthdayMailer.js"

export class BirthdayGreeting {
  constructor(
    private readonly mailer: BirthdayMailer,
    private readonly repository: BirthdayBoyRepository,
  ) {}

  happyBirthday() {
    const boys = this.repository.getBoys()
    boys.forEach((boy) => this.mailer.sendEmail(boy))
  }
}
