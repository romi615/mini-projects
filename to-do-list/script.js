const userInput = document.getElementById("userInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const todoList = document.getElementById("todo-list")

function addTask(){

    const list = document.createElement('li')
    list.innerText = userInput.value;

    todoList.appendChild(list);

}



addTaskBtn.addEventListener('click', addTask);