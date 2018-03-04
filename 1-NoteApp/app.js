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
        notes.addNote(argv.title, argv.body)
        break
    case 'list':
        notes.getAll()
        break
    case 'read':
        notes.readNote(argv.title)
        break
    case 'remove':
        notes.delNote(argv.title)
        break
}

console.log('------------------')