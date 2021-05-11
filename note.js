const fs = require('fs')
const chalk = require('chalk')
const JSON_FILE_NAME= 'notes.json'

const addNotes = (title, body) => {

    const notes = loadNotes()

    const dublicateNote = notes.find((note)=>  note.title == title)
    
    if (!dublicateNote){

        notes.push({
            title: title,
            body: body
        }
        )
        saveNotes(notes)
        console.log(chalk.green('new note added'))
    }else{
        console.log(chalk.red('Note title taken!'))
    }
}

const saveNotes = (notes)=>{    

    const noteJSON = JSON.stringify(notes)
    console.log(noteJSON)
    fs.writeFileSync(JSON_FILE_NAME,noteJSON)

    return notes
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync(JSON_FILE_NAME)
        const dataJSON = dataBuffer.toString()
         
        return JSON.parse(dataJSON)

    } catch (e) {

        return []
    }

}

const listNotes = () => {
    notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const removeNote = (title) =>{

    notes = loadNotes()

    const dublicateNotes = notes.filter((note)=>{
        return note.title == title
    })

    if (dublicateNotes.length === 0){
        console.log(chalk.red("note does not exist"))
    }else{
        notes = notes.filter((note)=>{
            return note.title != title
        })
        console.log(chalk.green("Note removed successfully title: "+ title))
    }

saveNotes(notes)

}

const readNote = (title)=>{
    notes = loadNotes()
    const note = notes.find((note)=>  note.title == title)    
    if (note){
        console.log(chalk.green("Note exist!"))
        console.log(chalk.green(note.title))
        console.log(chalk.green(note.body))
    }else{
        console.log(chalk.red("Note does not exist!"))
    }
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}