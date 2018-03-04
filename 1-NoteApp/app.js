console.log('--------------------')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv

let command = process.argv[2]
console.log('Command: ',command)
console.log('Yargs', argv)

switch(command){
    default:
        console.log('Command not recognized')
        break
    case 'add':
        let note = notes.addNote(argv.title, argv.body)
        if (note) {
            console.log (`--- \n Note Saved \n Title: ${note.title} \n body: ${note.body} \n ---`)
        }
        break
    case 'list':
        notes.getAll()
        break
    case 'read':
        notes.readNote(argv.title)
        break
    case 'remove':
        let noteRemoved = notes.delNote(argv.title)
        let message = noteRemoved ? 'Note was removed' : 'Note not found'
        console.log(message)
        break
}

console.log('------------------')