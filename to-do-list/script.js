const userInput = document.getElementById("userInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const todoList = document.getElementById("todo-list")



function removeTask(event){
    // console.log(event.target.parentElement);
    const target = event.target
    if(target.tagName === "BUTTON"){
        target.parentElement.remove();
    }
}

function addTask(){

    const list = document.createElement('li')
    list.innerText = userInput.value;

    const button = document.createElement('button')
    button.innerText = "Remove";
    list.appendChild(button);

    button.addEventListener('click', (e)=>{
        removeTask(e);
    });

    todoList.appendChild(list);

}




addTaskBtn.addEventListener('click', addTask);