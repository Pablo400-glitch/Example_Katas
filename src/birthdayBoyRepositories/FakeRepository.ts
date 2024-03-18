import { BirthdayBoyData, BirthdayBoyRepository } from "../BirthdayBoyRepository.js"

export class FakeRepository implements BirthdayBoyRepository {
  constructor() {}

  getBoys(): BirthdayBoyData[] {
    return [
      {
        date_of_birth: new Date(),
        email: { emailName: "taltaltal" },
        first_name: "cualcualcual",
        last_name: "nosequenoseque",
      },
    ]
  }
}
