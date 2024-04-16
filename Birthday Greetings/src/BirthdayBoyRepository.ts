export interface Email {
  emailName: string
}

export interface BirthdayBoyData {
  last_name: string
  first_name: string
  date_of_birth: Date
  email: Email
}

export interface BirthdayBoyRepository {
  getBoys(): BirthdayBoyData[]
}
