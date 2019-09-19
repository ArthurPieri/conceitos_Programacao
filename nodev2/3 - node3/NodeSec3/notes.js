//    console.log('addNote')

const fs = require('fs')

let fetchNotes = () => {
    try {
        let notesStr = fs.readFileSync('notes-data.json')
        return JSON.parse(notesStr)    
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
let duplicateNotes = notes.filter((note => note.title === title))

    if (duplicateNotes.length === 0){
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title)
    return filteredNotes[0]
}

let readNote = (title) => {
    console.log('reading note', title)
}

let removeNote = (title) => {
    let notes = fetchNotes(title)
    let filteredNotes = notes.filter((note) => note.title !== title)
    saveNotes(filteredNotes)    

    return notes.length !== filteredNotes.length
}
module.exports = {
    addNote: addNote,
    //A mesma coisa que getAll : getAll
    getAll,
    getNote,
    readNote,
    removeNote
}
