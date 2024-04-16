import { describe, expect, it } from "vitest"
import { BirthdayGreeting } from "./BirthdayGreeting.js"
import { FakeRepository } from "./birthdayBoyRepositories/FakeRepository.js"
import { RealRepository } from "./birthdayBoyRepositories/RealRepository.js"
import { FakeMailer } from "./birthdayMailers/FakeMailer.js"

describe("Birthday Greetings", () => {
  it("display Happy Birthday on the Email with fake repo", () => {
    const mailer = new FakeMailer()
    const repository = new FakeRepository()
    const birthdayGreeting = new BirthdayGreeting(mailer, repository)
    birthdayGreeting.happyBirthday()
    expect(mailer.getCalls()).toEqual(1)
  })

  it("display Happy Birthday on the Email with read txt repo", () => {
    const mailer = new FakeMailer()
    const repository = new RealRepository("./src/birthdayboys.txt")
    const birthdayGreeting = new BirthdayGreeting(mailer, repository)
    birthdayGreeting.happyBirthday()
    expect(mailer.getCalls()).toEqual(2)
  })
})
