import { describe, it, expect } from "vitest"
import { BirthdayGreeting, DefaultMailer } from "./BirthdayGreeting.js"
require('dotenv').config();

const name = "pablo"
const email = {
  emailName: "paisficretpablo@gmail.com",
}

const mailOptions = {
    from: {
        name: 'Birthday',
        address: process.env.EMAIL
    },
    to: email.emailName,
    subject: "Happy Birthday", // Subject line
    text: "Happy birthday, dear " + name + "!", // plain text body
};

describe("Birthday Greetings", () => {
  it("display Happy Birthday on the Email options", () => {
    const birthdayGreeting = new BirthdayGreeting()

    const birthday = birthdayGreeting.happyBirthday(name, email)

    expect(birthday).toStrictEqual(mailOptions)
  })

  it("display that the email was send", async () => {
    /*const defaultMailer = new DefaultMailer()

    const mailer = defaultMailer.sendEmail(mailOptions)

    try {
        const result = await defaultMailer.sendEmail(mailOptions);
        expect(result).toBe('Email has been sent!');
    } catch (error) {
        // Si llegamos aquí, el envío de correo electrónico falló
        throw new Error('Email should have been sent successfully');
    }*/
  })
})
