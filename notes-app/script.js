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

function deleteNotes(id){
    let notes = getNotes();

    notes = notes.filter((note)=> note.id !== id);
    setNotes(notes);
    renderNotes();
}

// function removeNotes(event){
//     // console.log(Number(event.target.dataset.id))

// }

function renderNotes(){
    const notes = getNotes();

    notesList.innerHTML = "";

    notes.forEach((note)=>{
            const list = document.createElement('li');
            list.innerHTML = `<div><h3>${note.title}</h3>
            <p>${note.content}</p></div>`
            
            const button = document.createElement('button');
            button.innerText = "Remove"
            button.dataset.id = note.id
            list.appendChild(button)

    
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

notesList.addEventListener('click', (e)=>{
    // removeNotes(e)
    // console.log(event.target.dataset.id)
        deleteNotes(Number(e.target.dataset.id));

})


document.addEventListener('DOMContentLoaded', ()=>{
    renderNotes();
})