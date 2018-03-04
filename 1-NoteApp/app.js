console.log('Starting app.js ')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')

/*console.log(_.isString(true))
console.log(_.isString('Arthur')) */

let filteredArray = _.uniq(['Arthur', 1, 'Arthur', 1, 2, 3, 4])
console.log(filteredArray)

/*console.log ('Result: ', notes.add(8,2))

let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} \n`, (err) => {
    if (err) {
        console.log('Unable to write to file')
    }
})
*/
console.log('Finishing app.')