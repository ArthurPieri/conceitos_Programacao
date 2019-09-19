/* let obj = {
    name: 'Arthur'
}
let stringObj = JSON.stringify(obj)

console.log(typeof obj)
console.log(obj)
console.log(typeof stringObj)
console.log(stringObj) */

/* let personString = '{"Name": "Andrew", "age": 25}'
let person = JSON.parse(personString)
console.log(typeof person)
console.log(person) */

const fs = require('fs')

let originalNote = {
    title: 'Some title',
    body: "Some body"
}
// originalNoteString
let originalNoteString = JSON.stringify(originalNote)
/* console.log(typeof originalNoteString)
console.log(originalNoteString) */
fs.writeFileSync('./Playground/notes.json', originalNoteString)

let noteString = fs.readFileSync('./Playground/notes.json')
let note = JSON.parse(noteString)

console.log(typeof note)
console.log(note)