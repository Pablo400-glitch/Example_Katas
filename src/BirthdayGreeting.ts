interface Email {
    email: string
}

interface BirthdayMailer {
    sendEmail(emailString : string) : string
}

export class DefaultMailer implements BirthdayMailer {
    sendEmail(emailString : string) : string {
        const email : Email = {
            email: emailString
        };
        return 'Email was send'
    }
}

export class BirthdayGreeting {
    happyBirthday() {
        return 'Happy birthday!'
    }
}