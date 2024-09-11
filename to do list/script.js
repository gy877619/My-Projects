const inputBox = document.querySelector("#inputbox");
const addBtn = document.querySelector("#button");
const todoList = document.querySelector("#todolist");

let editTodo = null;

//Funtion to add to do
const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("you must write something in your to do");
    return false;
  }

  if (addBtn.value === "Edit") {
    editLocalTodos( editTodo.target.previousElementSibling.innerHTML);
    editTodo.target.previousElementSibling.innerHTML = inputText; 
    addBtn.value = "Add";
    inputBox.value = "";
    
  } else {
    // createing p
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    //creating edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    //creating delete
    const deletBtn = document.createElement("button");
    deletBtn.innerText = "Remove";
    deletBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deletBtn);

    todoList.appendChild(li);
    inputBox.value = "";

    saveLocatTodos(inputText);
  }
};

//funtion to update: (Edit/Delete) to do
const updateTodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
    deleteLoacalTodos(e.target.parentElement);
  }

  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};

const saveLocatTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = todo;
        li.appendChild(p);
    
        //creating edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);
    
        //creating delete
        const deletBtn = document.createElement("button");
        deletBtn.innerText = "Remove";
        deletBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deletBtn);
    
        todoList.appendChild(li);
        });
    };
};

const deleteLoacalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }

    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos",JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);

