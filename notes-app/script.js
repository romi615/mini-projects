const title = document.getElementById("notesTitle")
const content = document.getElementById("notesContent")
const notesBtn = document.getElementById("notesBtn")


function addNotes(title, content){

    const newNotes = {
        id: Date.now(),
        title,
        content,
    }

    
}

notesBtn.addEventListener('click', ()=>{
    addNotes(title.value, content.value)
    title.value = ""
    content.value = ""
})

