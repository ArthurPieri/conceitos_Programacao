const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey)

sgMail.send({
    to: 'arthurpieri@gmail.com',
    from: 'arthur@arthurpieri.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you'
})