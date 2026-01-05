const userInput = document.getElementById("userInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todo-list");

function getTask() {
  const data = localStorage.getItem("task");
  return data ? JSON.parse(data) : [];
}

function setTask(task) {
  localStorage.setItem("task", JSON.stringify(task));
}

function removeTask(id) {
  let taskList = getTask();
  taskList = taskList.filter((task) => task.id !== id);
  setTask(taskList);
  renderTask();
}

function renderTask() {
  const taskList = getTask();
  todoList.innerHTML = "";

  taskList.forEach((task) => {
    const list = document.createElement("li");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("task-completed");
    list.appendChild(input);

    const span = document.createElement("span");
    span.innerText = task.task;
    list.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "Remove";
    button.dataset.id = task.id;
    list.appendChild(button);

    todoList.appendChild(list);

    userInput.value = "";
  });
}

function addTask(task) {
  let taskList = getTask();

  const newList = {
    id: Date.now(),
    task: task,
  };

  console.log(newList);

  taskList.push(newList);
  setTask(taskList);
  renderTask();
}

addTaskBtn.addEventListener("click", () => {
  addTask(userInput.value);
});

todoList.addEventListener("click", (event) => {
  removeTask(Number(event.target.dataset.id));
});

document.addEventListener("DOMContentLoaded", () => {
  renderTask();
});
