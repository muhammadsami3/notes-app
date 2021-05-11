
const notes = require('./note.js')
const chalk = require('chalk')
const yargs = require('yargs');
// const { type } = require('os');
// const { argv } = require('process');

// console.log(process.argv)
yargs.version = '1.0.1'

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'title of the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {

        title: {
            describe: 'title of the notes',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }

})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {

        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
        notes.listNotes()
    }

})

yargs.parse()
