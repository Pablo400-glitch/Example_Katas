import { describe, it, expect } from "vitest"
import { BirthdayGreeting, DefaultMailer } from "./BirthdayGreeting.js"
require('dotenv').config();

describe("Birthday Greetings", () => {
  it("display Happy Birthday on the Email options", () => {
    const birthdayGreeting = new BirthdayGreeting()
    const name = "pablo"
    const email = {
      emailName: "paisficretpablo@gmail.com",
    }

    const mail = {
        from: {
            name: 'Birthday',
            address: process.env.EMAIL
        },
        to: email.emailName,
        subject: "Happy Birthday", // Subject line
        text: "Happy birthday, dear" + name + "!", // plain text body
    };

    const birthday = birthdayGreeting.happyBirthday(name, email)

    expect(birthday).toStrictEqual(mail)
  })
  it("display that the email was send", () => {
    const defaultMailer = new DefaultMailer()
    const email = "paisficretpablo@gmail.com"

    const mailer = defaultMailer.sendEmail(email)

    expect(mailer).toBe("Email was send")
  })
})
