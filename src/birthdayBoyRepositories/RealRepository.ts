import fs from "fs"
import { BirthdayBoyData, BirthdayBoyRepository } from "../BirthdayBoyRepository.js"

export class RealRepository implements BirthdayBoyRepository {
  constructor(private readonly filename: string) {}

  getBoys(): BirthdayBoyData[] {
    const content = fs.readFileSync(this.filename, "utf-8")
    const lines = content.split("\n")

    const birthdayBoys: BirthdayBoyData[] = []

    for (const line of lines) {
      const data = line.split(", ")

      if (data.length >= 4) {
        // Verifica que haya suficientes elementos en la línea
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

        birthdayBoys.push(birthdayBoy)
      }
    }

    return birthdayBoys
  }
}
