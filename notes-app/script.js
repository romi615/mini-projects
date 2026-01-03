const title = document.getElementById("notesTitle")
const content = document.getElementById("notesContent")
const notesBtn = document.getElementById("notesBtn")
const notesList = document.querySelector(".notes-list")

function setNotes(notes){
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotes(){
    const data = localStorage.getItem("notes")
    return data ? JSON.parse(data) : []
}

function renderNotes(){
    const notes = getNotes();

    notesList.innerHTML = "";

    notes.forEach((note)=>{
            const list = document.createElement('li');

            list.innerHTML = `<h3>${note.title}</h3>
                <p>${note.content}</p>`


                notesList.appendChild(list);
    })
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

    renderNotes();


}

notesBtn.addEventListener('click', ()=>{
    addNotes(title.value, content.value)
    title.value = ""
    content.value = ""
})

