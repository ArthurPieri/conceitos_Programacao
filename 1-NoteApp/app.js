console.log('Starting app.js ')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

console.log ('Result: ', notes.add(8,2))

/*let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} \n`, (err) => {
    if (err) {
        console.log('Unable to write to file')
    }
})
*/
console.log('Finishing app.')