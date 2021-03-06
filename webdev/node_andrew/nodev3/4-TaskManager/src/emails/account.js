const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arthur@arthurpieri.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}, let me know how you get along with the app`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arthur@arthurpieri.com',
        subject: 'Sorry to see you leave',
        text: `Goodbye ${name}, we are realy sorry that you are leaving, please let us know what we can improve so you come back!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}