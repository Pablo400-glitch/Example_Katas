import { describe, it, expect } from "vitest"
import { BirthdayGreeting, DefaultMailer } from "./BirthdayGreeting.js"

describe("Birthday Greetings", () => {
    it("display Happy Birthday", () => {
      const birthdayGreeting = new BirthdayGreeting()
      
      const birthday = birthdayGreeting.happyBirthday()
  
      expect(birthday).toBe('Happy birthday!')
    })
    it("display that the email was send", () => {
        const defaultMailer = new DefaultMailer()
        const email = 'paisficretpablo@gmail.com'
        
        const mailer = defaultMailer.sendEmail(email)
    
        expect(mailer).toBe('Email was send')
      })
  })