const validator = require("validator")
const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require('yargs')

yargs.version("1.1.0")

//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note content",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
} )

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
} )

//Create list command
yargs.command({
    command: "list",
    describe: "list the notes",
    handler() {
        notes.listNote()
    }
} )

//Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
} )

yargs.parse()



/*
const msg = getNotes()
console.log(msg)

const email = "Dixontirtayadi@gmail.com"

if (validator.isEmail(email)) {
    console.log(chalk.green(email))
} else {
    console.log(chalk.red(email))
}

console.log(chalk.green.inverse("Success!!"))

console.log(process.argv[2])
*/