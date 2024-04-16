import { BirthdayBoyData } from "./BirthdayBoyRepository.js"

export interface BirthdayMailer {
  sendEmail(birthdaysData: BirthdayBoyData): Promise<void>
}
