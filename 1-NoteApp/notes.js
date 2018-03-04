// Notes.js archive

let addNote = (title, body) => {
    console.log('Adding note', title, body)
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