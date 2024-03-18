import { BirthdayBoyData } from "../BirthdayBoyRepository.js"
import { BirthdayMailer } from "../BirthdayMailer.js"
const nodemailer = require("nodemailer")

interface EmailOptions {
  from: {
    name: string
    address: any
  }
  to: string
  subject: string
  html: string
}

export class RealMailer implements BirthdayMailer {
  constructor(private readonly mailOptions: EmailOptions) {}

  async sendEmail(birthdayData: BirthdayBoyData): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    if (
      birthdayData.date_of_birth.getDate() === new Date().getDate() &&
      birthdayData.date_of_birth.getMonth() === new Date().getMonth()
    ) {
      try {
        await transporter.sendMail(this.mailOptions)
        console.log("Email was sent successfully")
      } catch (error) {
        console.error("Error sending email:", error)
        throw new Error("Failed to send email")
      }
    } else {
      throw new Error("Is not your birthday")
    }
  }
}
