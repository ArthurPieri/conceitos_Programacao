let db = require('./db.js')

module.exports.handleSignup = (email, password) => {
    // Check if the email already exist
    db.saveUser({email, password})
    // Send that welcome email
}