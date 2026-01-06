const title = document.getElementById("expenseName");
const amount = document.getElementById("amountName");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expense-list");
const totalExpense = document.getElementById("totalExpense");



function setExpense(expenses) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function getExpense() {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
}


function calculateTotalExpense(){
  let expense = getExpense()
  expense = expense.reduce((acc, curr)=>{
    return acc+curr.amount;
  }, 0)

  totalExpense.innerText = `Total: $${expense}`;
}

function deleteExpense(id) {
  let expenses = getExpense();
  expenses = expenses.filter(exp=> exp.id !== id);
  setExpense(expenses);
  renderExpense();
}

function renderExpense() {
  const expenses = getExpense();
  expenseList.innerHTML = "";

  expenses.forEach((expense) => {
    const list = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("expenseBox");
    div.style.textTransform = "uppercase";

    
    div.innerHTML = `<span>${expense.title}</span><span>$${expense.amount}</span>`;
    list.appendChild(div);

    const button = document.createElement("button");
    button.innerText = "Remove";
    button.dataset.id = expense.id;
    button.classList.add("removeBtn");
    list.appendChild(button);
    expenseList.appendChild(list);
  });

  calculateTotalExpense();

}

function addExpense(title, amount) {
  const expenses = getExpense();

  const newExpenses = {
    id: Date.now(),
    title,
    amount: Number(amount),
  };

  expenses.push(newExpenses);
  setExpense(expenses);
  renderExpense();
}

addBtn.addEventListener("click", () => {
  addExpense(title.value, amount.value);
  title.value = "";
  amount.value = "";
});

expenseList.addEventListener('click', (e)=>{
    deleteExpense(Number(e.target.dataset.id));
})

document.addEventListener('DOMContentLoaded', ()=>{
    renderExpense()
})

