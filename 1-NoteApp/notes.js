// Notes.js archive

const fs = require('fs')

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json')
        return notesString = JSON.parse(notesString)    
    } catch (e) {
        return []
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))    
}

let addNote = (title, body) => {
    let notes = fetchNotes()
    let note = {
        title,
        body
    }
    let duplicateNotes = notes.filter((note)=> note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    } else {
        console.log('The tittle you provide is already in use')
    }

}

let getAll = () => {
    console.log('Getting all notes')
}

let readNote = (title) => {
    console.log('Reading note', title)
}

let delNote = (title) => {
    let notes = fetchNotes()
    let filteredNotes = notes.filter((notes) => notes.title !== title)
    saveNotes(filteredNotes)
}

module.exports = {
    addNote,
    getAll,
    readNote,
    delNote
}