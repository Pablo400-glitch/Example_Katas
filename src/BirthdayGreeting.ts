require("dotenv").config()
const nodemailer = require("nodemailer")
import * as fs from 'fs';

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
  html: string
}

export interface BirthdayBoyData {
  last_name: string
  first_name: string
  date_of_birth: Date
  email: Email
}

interface GetBirthdayBoyData {
  getData(filename: string): BirthdayBoyData[]
}

interface BirthdayMailer {
  sendEmail(mailOptions: EmailOptions, birthdaysData: BirthdayBoyData): Promise<string>
}

export class BirthdayBoyDataFile implements GetBirthdayBoyData {
  getData(filename: string): BirthdayBoyData[] {
    const content = fs.readFileSync(filename, 'utf-8');
    const lines = content.split('\n');

    const birthdayBoys: BirthdayBoyData[] = [];

    for (const line of lines) {
      const data = line.split(', ');

      if (data.length >= 4) { // Verifica que haya suficientes elementos en la línea
        const date = new Date(data[2]);
        const formatedDate = date.toISOString();

        const birthdayBoy = {
          last_name: data[0],
          first_name: data[1],
          date_of_birth: new Date(formatedDate),
          email: {
            emailName: data[3],
          },
        };

        birthdayBoys.push(birthdayBoy);
      }
    }

    return birthdayBoys;
  }
}

export class BirthdayGreeting {
  happyBirthday(birthdaysData: BirthdayBoyData) {
    const mail: EmailOptions = {
      from: {
        name: "Birthday",
        address: process.env.EMAIL,
      },
      to: birthdaysData.email.emailName,
      subject: "Happy Birthday", // Subject line
      html: `<p>Happy birthday, dear <strong>${birthdaysData.first_name} ${birthdaysData.last_name}</strong>!</p>`, 
    }
   
    return mail
  }
}

export class DefaultMailer implements BirthdayMailer {
  async sendEmail(mailOptions: EmailOptions, birthdayData: BirthdayBoyData): Promise<string> {
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

    if (birthdayData.date_of_birth.getDate() === new Date().getDate() && 
        birthdayData.date_of_birth.getMonth() === new Date().getMonth()) {
      try {
          await transporter.sendMail(mailOptions)
          return "Email was sent successfully"
      } catch (error) {
          console.error("Error sending email:", error)
          throw new Error("Failed to send email")
      }
    } else {
      throw new Error("Is not your birthday")
    }
  }
}


