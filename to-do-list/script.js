const userInput = document.getElementById("userInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const todoList = document.getElementById("todo-list")

// function markTaskCompleted(){

// }

function removeTask(event){
    // console.log(event.target.parentElement);
    }

function addTask(){

    const list = document.createElement('li')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox');
    input.classList.add('task-completed')
    list.appendChild(input);

    const span = document.createElement('span')
    span.innerText = userInput.value;
    // span.classList.add('task-text')
    list.appendChild(span)

    const button = document.createElement('button')
    button.innerText = "Remove";
    button.classList.add('task-btn')
    list.appendChild(button);

    // button.addEventListener('click', (e)=>{
    //     removeTask(e);
    // });

    todoList.appendChild(list);

}




addTaskBtn.addEventListener('click', addTask);


todoList.addEventListener('click', (event)=>{

if(event.target.classList.contains('task-btn')){
    event.target.parentElement.remove();
    return;
}

if(event.target.classList.contains("task-completed"))
{
    event.target.nextElementSibling.classList.toggle('task-text');
}
    
})

