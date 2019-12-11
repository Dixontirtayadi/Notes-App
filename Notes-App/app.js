const validator = require("validator")
const getNotes = require("./notes.js")
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
    handler: function (argv) {
        console.log("Adding " + argv.body + " to " + argv.title)
    }
} )

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log("Removing note...")
    }
} )

//Create list command
yargs.command({
    command: "list",
    describe: "list the notes",
    handler: function () {
        console.log("Here are the notes")
    }
} )

//Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading note...")
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