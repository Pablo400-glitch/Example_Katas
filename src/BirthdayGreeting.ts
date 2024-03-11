require("dotenv").config()
const nodemailer = require("nodemailer")

interface Email {
  emailName: string
}

interface EmailOptions {
  from: {
    name: string
    address: any
  }
  to: string
  subject: string
  text: string
}

interface BirthdayBoyData {
  last_name: string
  first_name: string
  date_of_birth: Date
  email: Email
}

interface GetBirthdayBoyData {
  getData(filename: string): BirthdayBoyData
}

interface BirthdayMailer {
  sendEmail(mailOptions: EmailOptions): Promise<string>
}

export class BirthdayGreeting {
  happyBirthday(name: string, email: Email) {
    const mail: EmailOptions = {
      from: {
        name: "Birthday",
        address: process.env.EMAIL,
      },
      to: email.emailName,
      subject: "Happy Birthday", // Subject line
      text: "Happy birthday, dear " + name + "!", // plain text body
    }
    return mail
  }
}

export class DefaultMailer implements BirthdayMailer {
  async sendEmail(mailOptions: EmailOptions): Promise<string> {
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

    try {
      await transporter.sendMail(mailOptions)
      console.log("Email has been sent!")
      return "Email was sent successfully"
    } catch (error) {
      console.error("Error sending email:", error)
      throw new Error("Failed to send email")
    }
  }
}

export class BirthdayBoyDataFile implements GetBirthdayBoyData {
  getData(filename: string): BirthdayBoyData {
    

    const BirthdayBoy = {
      last_name: "González Galván",
      first_name: "Adrián",
      date_of_birth: new Date("2024-03-11T00:00:00.000Z"),
      email: {
        emailName: "paisficretpablo@gmail.com",
      },
    }

    return BirthdayBoy
  }
}
