console.log('--------------------')

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes.js')

let command = process.argv[2]
console.log(command)

switch(command){
    default:
        console.log('Command not recognized')
        break
    case 'add':
        console.log('Adding new Note')
        break
    case 'list':
        console.log('Listing all notes')
        break
    case 'read':
        console.log('Reading note')
        break
    case 'remove':
        console.log('Removing note')
        break
}

console.log('------------------')