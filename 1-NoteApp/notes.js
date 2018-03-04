// Notes.js archive

const fs = require('fs')

let addNote = (title, body) => {
    let notes = []
    let note = {
        title,
        body
    }

    try {
        let notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)    
    } catch (e) {
        console.log('File does not exist')
        console.log('Creating File')
    }

    let duplicateNotes = notes.filter((note)=> note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))    
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
    console.log('Removing note', title)
}

module.exports = {
    addNote,
    getAll,
    readNote,
    delNote
}