
const title = document.getElementById("expenseName")
const amount = document.getElementById("amountName")
const addBtn = document.getElementById("addBtn")
const expenseList = document.getElementById("expense-list")



function setExpense(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function getExpense(){
    const data = localStorage.getItem('expenses')
    return data ? JSON.parse(data) : [];
}

function renderExpense(){
    const expenses = getExpense();
    expenseList.innerHTML = "";
    
    expenses.forEach(expense => {
        const list = document.createElement('li');

        if(expense.title !== ""){
            const span = document.createElement('span');
            span.innerText = expense.title;
            list.appendChild(span)

        }

        if(expense.amount !== "") {
            const span = document.createElement('span');
            span.innerText = expense.amount;
            list.appendChild(span)
        }

        expenseList.appendChild(list);

    });

    
}

function addExpense(title, amount){

    const expenses = getExpense()

    const newExpenses = {
        id: Date.now(),
        title,
        amount: Number(amount),
    }

    expenses.push(newExpenses)
    setExpense(expenses);
    renderExpense();
}


addBtn.addEventListener('click', ()=>{
    addExpense(title.value, amount.value);
    title.value = "";
    amount.value = "";
})

