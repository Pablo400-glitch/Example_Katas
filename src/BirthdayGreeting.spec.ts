import { describe, it, expect } from "vitest"
import { BirthdayGreeting, DefaultMailer, BirthdayBoyDataFile} from "./BirthdayGreeting.js"
require('dotenv').config();

const filename = './src/birthdayboys.txt'

const birthdayBoy = new BirthdayBoyDataFile()
const birthdayBoys = birthdayBoy.getData(filename)

describe("Birthday Greetings", () => {
  it("display Happy Birthday on the Email options", () => {
    const birthdayGreeting = new BirthdayGreeting()

    birthdayBoys.map((boy) => {
      const birthday = birthdayGreeting.happyBirthday(boy)
      const mailOptions = {
        from: {
            name: 'Birthday',
            address: process.env.EMAIL
        },
        to: boy.email.emailName,
        subject: "Happy Birthday", // Subject line
        html: `<p>Happy birthday, dear <strong>${boy.first_name} ${boy.last_name}</strong>!</p>`,
      };

      expect(birthday).toStrictEqual(mailOptions)
    })
  })

  it("display that the email was send", async () => {
    const defaultMailer = new DefaultMailer()
    const emailPromises: Promise<string>[] = [];

    birthdayBoys.forEach(async (boy) => {
      const mailOptions = {
        from: {
          name: 'Birthday',
          address: process.env.EMAIL
        },
        to: boy.email.emailName,
        subject: "Happy Birthday", // Subject line
        html: `<p>Happy birthday, dear <strong>${boy.first_name} ${boy.last_name}</strong>!</p>`,
      };
        
      const promise = defaultMailer.sendEmail(mailOptions, boy)
      .then(result => {
        expect(result).toBe("Email was sent successfully");
        return result;
      })
      .catch(error => {
        throw error;
      });

      emailPromises.push(promise);
    });

    try {
      const results = await Promise.all(emailPromises);
  
      expect(results.every(result => result === "Email was sent successfully")).toBe(true);
    } catch (error) {
      expect(error instanceof Error).toBe(true);
    }
  })

  it("display BirthDayBoyData", () => {
    const birthdayGreeting = new BirthdayBoyDataFile()

    const birthday = birthdayGreeting.getData(filename)

    expect(birthday).toStrictEqual(birthdayBoys)
  })
})
