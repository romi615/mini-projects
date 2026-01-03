const title = document.getElementById("notesTitle")
const content = document.getElementById("notesContent")
const notesBtn = document.getElementById("notesBtn")

function setNotes(notes){
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotes(){
    const data = localStorage.getItem("notes")
    return data ? JSON.parse(data) : []
}

function addNotes(title, content){


    const notes = getNotes();

    const newNotes = {
        id: Date.now(),
        title,
        content,
    }

    notes.push(newNotes);
    setNotes(notes);


}

notesBtn.addEventListener('click', ()=>{
    addNotes(title.value, content.value)
    title.value = ""
    content.value = ""
})

