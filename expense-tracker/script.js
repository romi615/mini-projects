
const title = document.getElementById("expenseName")
const amount = document.getElementById("amountName")
const addBtn = document.getElementById("addBtn")
const removeBtn = document.querySelector(".removeBtn")
const expenseList = document.getElementById("expense-list")


function deleteExpense(id) {
    const expenses = getExpense();
    expenses = expenses.filter((exp.id) !== id);
    setExpense(expenses);
    renderExpense()

}


function removeExpense(e){
    console.log(e)
    // const id = Number(e.target.id);
    // deleteExpense(id);
}

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
        const div = document.createElement('div');
        div.classList.add("expenseBox")
        div.style.textTransform = "uppercase"

        const button = document.createElement('button');

        div.innerHTML = `<span>${expense.title}</span><span>$${expense.amount}</span>`


        /*if(expense.title !== ""){
            const span = document.createElement('span');
            span.innerText = expense.title;
            div.appendChild(span);

        }

        if(expense.amount !== "") {
            // div.innerHTML = `<span>$${expense.amount}</span>`
            const span = document.createElement('span');
            span.innerText = expense.amount;
            div.appendChild(span);
        }*/

        list.appendChild(div)


        button.innerText = "Remove"
        button.dataset.id = expense.id;
        button.classList.add("removeBtn");
        list.appendChild(button);

        removeBtn.addEventListener('click', (e)=>{
    // removeExpense(e);
    console.log(e);
})

        

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



