const fs = require("fs")
const chalk = require("chalk")

const addNote = (title,body) => {
    const noteList = loadNotes()
    const duplicateNote = noteList.find(note => note.title === title)

    if (!duplicateNote) {
        noteList.push({
            title: title,
            body: body
        })
        saveNotes(noteList)
        console.log(chalk.green.inverse("New note added"))
    } else {
        console.log(chalk.red.inverse(title + " note already exists"))
    }   
}

const removeNote = (title) => {
    const noteList = loadNotes()
    const notesRemaining = noteList.filter(note => note.title !== title)

    saveNotes(notesRemaining)

    if (notesRemaining.length !== noteList.length) {
        console.log(chalk.green.inverse(title + " has been removed"))
    } else {
        console.log(chalk.red.inverse("No such note exists"))
    }
}

const listNotes = () => {
    const noteList = loadNotes()
    console.log(chalk.blueBright.bold("Your notes"))
    noteList.forEach(note => console.log("-", note.title))

}

const readNote = (title) => {
    const noteList = loadNotes()
    const note = noteList.find(elementNote => elementNote.title === title)

    if (note) {
        console.log(chalk.green("title: " + chalk.bold(title) + "\n" + note.body))
    } else {
        console.log(chalk.red.inverse("No such note exists"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}

const loadNotes = () => {
    try {
        const bufferData = fs.readFileSync("notes.json")
        const jsonData = bufferData.toString()
        return JSON.parse(jsonData)
    } catch(e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNotes,
    readNote: readNote
}