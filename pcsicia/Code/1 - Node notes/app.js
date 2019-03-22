console.log('\n ------------------------------------------------------------------------------------')
console.log(' Starting app.js at: ', Date())
console.log(' ------------------------------------------------------------------------------------\n')
/* 
----------------------------------------------------------
Require statments
----------------------------------------------------------
 */
const fs = require('fs')
const OS = require('os')
const notes = require('./notes.js')
const _ = require('lodash')
const yargs = require('yargs')
/* 
----------------------------------------------------------
Variables
----------------------------------------------------------
 */
let command = process.argv[2]
// Setting yargs command
const TitleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const BodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}
const argv = yargs
            .command('add', 'Add a new note', {
                title: TitleOptions,
                body: BodyOptions
            })
            .command('list', 'List all notes')
            .command('read', 'Read a note', {
                title: TitleOptions
            })
            .command('remove', 'Remove a note', {
                title: TitleOptions
            })
            .help()
            .argv
/* 
----------------------------------------------------------
Error messages
----------------------------------------------------------
 */
let error404 = ' 404 - Note not Found'
/* 
----------------------------------------------------------
Checking command line arguments
----------------------------------------------------------
 */
// Add
if (command === 'add'){
    let note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log(' Note created')
        notes.logNote(note)
    } else {
        console.log(` Note title already taken`)
    }
}
// List
else if (command === 'list'){
    let allNotes = notes.getAll()
    console.log(` Printing ${allNotes.length} note(s).`)
    allNotes.forEach(note => notes.logNote(note));
}
// Read
else if (command === 'read'){
    let note = notes.getNote(argv.title)
    if (note) {
        console.log(' Note Found!')
        notes.logNote(note)
    } else {
        console.log(error404)
    }
}
// Remove
else if (command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title)
    let message = noteRemoved ? ' Note was removed' : error404
    console.log(message)
}
// Any other command
else {
    console.log(' Command not recognized')
}

console.log('\n ------------------------------------------------------------------------------------')
console.log(' Finished at: ', new Date())
console.log(' ------------------------------------------------------------------------------------\n')