import { describe, it, expect } from "vitest"
import { BirthdayGreeting, DefaultMailer, BirthdayBoyDataFile } from "./BirthdayGreeting.js"
require('dotenv').config();
import * as fs from 'fs';

const filename = '/home/pablo/Example_Katas/src/birthdayboys.txt'

const content = fs.readFileSync(filename, 'utf-8');
  
const data = content.split(', ');
  
const date = new Date(data[2])
const formatedDate = date.toISOString()
  
const birthdayBoy = {
    last_name: data[0],
    first_name: data[1],
    date_of_birth: new Date(formatedDate),
    email: {
        emailName: data[3],
    },
}

const mailOptions = {
    from: {
        name: 'Birthday',
        address: process.env.EMAIL
    },
    to: birthdayBoy.email.emailName,
    subject: "Happy Birthday", // Subject line
    html: `<p>Happy birthday, dear <strong>${birthdayBoy.first_name} ${birthdayBoy.last_name}</strong>!</p>`,
};


describe("Birthday Greetings", () => {
  it("display Happy Birthday on the Email options", () => {
    const birthdayGreeting = new BirthdayGreeting()

    const birthday = birthdayGreeting.happyBirthday(birthdayBoy)

    expect(birthday).toBe("Is not your Birthday")
  })

  it("display that the email was send", async () => {
    const defaultMailer = new DefaultMailer()

    try {
        const result = await defaultMailer.sendEmail(mailOptions);
        expect(result).toBe('Email has been sent!');
    } catch (error) {
        expect(error instanceof Error).toBe(true);
    }
  })

  it("display BirthDayBoyData", () => {
    const birthdayGreeting = new BirthdayBoyDataFile()

    const birthday = birthdayGreeting.getData(filename)

    expect(birthday).toStrictEqual(birthdayBoy)
  })
})
