require('dotenv').config();

interface Email {
    emailName: string
}

interface BirthdayMailer {
    sendEmail(emailString : string) : string
}

export class DefaultMailer implements BirthdayMailer {
    sendEmail(emailString : string) : string {
        const email : Email = {
            emailName: emailString
        };
        return 'Email was send'
    }
}

export class BirthdayGreeting {
    happyBirthday(name: string, email: Email) {
        const mail = {
            from: {
                name: 'Birthday',
                address: process.env.EMAIL
            },
            to: email.emailName,
            subject: "Happy Birthday", // Subject line
            text: "Happy birthday, dear" + name + "!", // plain text body
        };
        return mail
    }
}