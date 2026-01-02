
const title = document.getElementById("expenseName")
const amount = document.getElementById("amountName")
const addBtn = document.getElementById("addBtn")

function setExpense(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function getExpense(){
    const data = localStorage.getItem('expenses')
    return data ? JSON.parse(data) : [];
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
}


addBtn.addEventListener('click', ()=>{
    addExpense(title.value, amount.value);
    title.value = "";
    amount.value = "";
})

