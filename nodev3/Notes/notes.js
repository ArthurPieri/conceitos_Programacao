const fs = require('fs')
const ctheme = require('./console-theme') 

// Aux Functions only used on this module

// Aux function to save notes to file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Aux function to read files from the file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}

// Exported Functions

// Function ADD a new note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatedNote = notes.find((note) => note.title === title)

    if (!duplicatedNote){
        notes.push({
            title,
            body
        })    
        saveNotes(notes)
        console.log(ctheme.success('New note added'))
    }else {
        console.log(ctheme.error('Note title taken'))
    }
}

// Function REMOVE a note
const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note) => note.title !== title)

    if (notes.length === filteredNotes.length){
        console.log(ctheme.error('Note not Found'))
    }else {
        console.log(ctheme.success('Note Removed'))
    }
    
    saveNotes(filteredNotes)
}

// Function LIST all notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(ctheme.cMsg('Your notes: \n'))
    notes.forEach(notes => {
        console.log('- ' + notes.title)
    });
}

// Function READ a note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(ctheme.success('Nota encontrada!\n'))
        console.log(ctheme.cMsg('Titulo:') + ' ' + note.title)
        console.log(ctheme.cMsg('Corpo:') + ' ' + note.body)
    } else {
        console.log(ctheme.error('Nota não encontrada'))
    }
}

// Exporting the functions
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}