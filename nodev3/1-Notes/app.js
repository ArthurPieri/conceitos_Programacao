const notes = require('./notes')
const ctheme = require('./console-theme') 
const yargs = require('yargs')
ctheme.cInit
// Finishing require

// Variables
const yargsNoteTitle = {
    describe: 'Note title',
    demandOption: true,
    type: 'string',
    alias: 't'
}
const yargsNoteBody = {
    describe: 'Note body',
    demandOption: true,
    type: 'string',
    alias: 'b'
}


// Costumize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: yargsNoteTitle,
        body: yargsNoteBody
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing note',
    builder: {
        title: yargsNoteTitle
    },
    handler: (argv) => notes.removeNote(argv.title)
})

// Create list
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: () => notes.listNotes()
})

// Create read
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: yargsNoteTitle
    },
    handler: (argv) => notes.readNote(argv.title)
})
// add, remove, read, list

yargs.parse()

// Finishing app
console.log(ctheme.cEnd(('\n -----------------------------------------------------\n')))