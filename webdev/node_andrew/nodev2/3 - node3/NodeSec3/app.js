//console.log("Starting app.js")

//NPM modules
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

//Project modules/archives
const notes = require('./notes.js')

const argv = yargs.argv
let command = process.argv[2]
console.log('Command', command)
// console.log('Process',process.argv)
// console.log('Yargs', argv)

if(command === 'add'){
    let note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Nota adicionada')        
        console.log('---')
        console.log('Tittle:' + note.title)
        console.log('Tittle:' + note.body)
    } 
    else {
        console.log('Titulo em uso')
    } 
        
}else if (command === 'list'){
    let note = notes.getNote(argv.title)
    if (note) {
        console.log('Note')        
        console.log('---')
        console.log('Tittle:' + note.title)
        console.log('Tittle:' + note.body)
    } 
    else {
        console.log('Note not found')
    } 

}else if (command === 'read'){
    let note = notes.readNote (argv.title)
    if (note){
        console.log('Note')        
        console.log('---')
        console.log('Tittle:' + note.title)
        console.log('Tittle:' + note.body)
    }   
    else {
        console.log('Note not found')
    }
    
}else if(command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title)
    let message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)
}else {
    console.log('Command not recognized')
}
