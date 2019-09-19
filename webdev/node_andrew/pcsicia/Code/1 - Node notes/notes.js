// console.log ('Starting notes.js')
/* 
 -------------------------------------------------------------------------------
 Require statments
 -------------------------------------------------------------------------------
 */ 
// File system module
 const fs = require('fs')
/* 
-------------------------------------------------------------------------------
 Notes.js auxiliar functions
 -------------------------------------------------------------------------------
 */ 
let fetchNotes = () => {
    try {
        let noteString = fs.readFileSync('./notes-data.json')
        return notes = JSON.parse(noteString)
    } catch (e) {
        console.log(' File not found. \n Creating file: notes-data.json')
        return []
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))    
}

/*  
-------------------------------------------------------------------------------
 Exported functions
-------------------------------------------------------------------------------
 */
// Add Note
 let addNote = (title, body) => {
    let notes = fetchNotes()
    let note = {
        title,
        body
    }
    let duplicateNotes = notes.filter( (note) => note.title === title )

    if (duplicateNotes.length === 0){
        notes.push(note)
        saveNotes(notes)
        return note
    }
    else {
        console.log(' Duplicated Title')
    }
}

// Remove note
 let removeNote = (title) => {
    let notes = fetchNotes()
    let filteredNotes = notes.filter( (note) => note.title !== title )
    saveNotes(filteredNotes)

    return notes.length !== filteredNotes.length
}

// List all notes
let getAll = () => {
    return fetchNotes()
}

// List a single note
let getNote = (title) => {

    let notes = fetchNotes()
    let filteredNotes = notes.filter( (note) => note.title === title )
    
    return filteredNotes[0]
}

// Log notes
let logNote = (note) => {
//  debugger
    console.log(' ---')
    console.log(` Title: ${note.title}`)
    console.log(` Body: ${note.body}`)
    console.log(' ---')
}

// Exports
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}