const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const addBtn = document.getElementById("addBtn");
const contactList = document.getElementById("contactList");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editIndex = null;

// INITIAL RENDER
renderContacts();

addBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const phone = phoneInput.value;

  if (name === "" || phone === "") {
    alert("Please fill all fields");
    return;
  }

  if (editIndex === null) {
    contacts.push({ name, phone });
  } else {
    contacts[editIndex] = { name, phone };
    editIndex = null;
    addBtn.textContent = "Add Contact";
  }

  saveToLocalStorage();
  renderContacts();

  nameInput.value = "";
  phoneInput.value = "";
});

function renderContacts() {
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = `${contact.name} - ${contact.phone}`;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => startEdit(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteContact(index);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    contactList.appendChild(li);
  });
}

function deleteContact(index) {
  contacts.splice(index, 1);
  saveToLocalStorage();
  renderContacts();
}

function startEdit(index) {
  nameInput.value = contacts[index].name;
  phoneInput.value = contacts[index].phone;
  editIndex = index;
  addBtn.textContent = "Update Contact";
}

function saveToLocalStorage() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
