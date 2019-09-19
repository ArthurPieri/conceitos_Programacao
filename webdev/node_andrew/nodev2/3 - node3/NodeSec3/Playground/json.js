// let obj = {
//     name: "Arthur"
// }

// let stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// let personStr = '{"Name": "Arthur","age":25}'
// let person = JSON.parse(personStr)
// console.log(typeof person)
// console.log(person)

const fs = require('fs')

let originalNote = {
    tittle: 'Titulo',
    body: 'Somebody'
}
let OriginalNoteString = JSON.stringify(originalNote)
//OriginalNoteString

fs.writeFileSync ('notes.json', OriginalNoteString)

let noteString = fs.readFileSync ('notes.json')

let note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.tittle)
console.log(note.body)