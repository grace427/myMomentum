const todoList = document.querySelector('.todoList');
const todoInput = document.querySelector('.todoContainer input');
let todoArr = [];

const handleDelete = (event) => {
    event.preventDefault();
    const id = event.target.parentElement.id;
    const li = todoList.querySelector(`li[id='${id}']`);
    let newTodoArr = todoArr.filter(v => +v.id !== +id);
    newTodoArr.length === 0 ? localStorage.removeItem("todoList") : localStorage.setItem("todoList", JSON.stringify(newTodoArr));
    todoArr = newTodoArr;
    todoList.innerHTML = "";
    todoArr.forEach(renderTodoList);
}

const handleCheckBox = (event) => {
    const id = event.target.parentElement.id;
    const li = todoList.querySelector(`li[id='${id}']`);
    const span = li.querySelector('span');
    let todoObj = todoArr.find(v => +v.id === +id);
    if(event.target.checked) {
        span.style.textDecorationLine = 'line-through';
        li.className = 'checked';
        todoObj.checked = true;
    }else {
        console.log("a", id);
        span.style.textDecorationLine = 'none';
        li.className = '';
        todoObj.checked = false;
    }
    localStorage.setItem("todoList", JSON.stringify(todoArr));
}

const handleInputTodo = (event) => {
    let max;
    let maxId;
    if(event.code !== 'Enter') {
        return;
    }

    if(todoArr.length > 0) {
        max = todoArr.reduce( function (a, b) { 
            return a > b ? a : b;
        });
        maxId = +max.id + 1;    
    }else {
        maxId = todoArr.length + 1;
    }
   
    const todoObj = {
        id: maxId,
        checked: false,
        text: event.target.value
    }
    todoArr.push(todoObj);
    localStorage.setItem("todoList", JSON.stringify(todoArr));
    todoList.innerHTML = "";
    todoArr.forEach(renderTodoList);
    todoInput.value = "";
}

const renderTodoList = (todoObj) => {
    const checkBox = document.createElement('input');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    checkBox.type = 'checkbox';
    deleteBtn.innerText = " ✘ ";
    deleteBtn.addEventListener("click", handleDelete);
    checkBox.addEventListener("click", handleCheckBox)
    span.innerText = todoObj.text;
    if(todoObj.checked === true) {
        span.style.textDecorationLine = 'line-through';
        checkBox.checked = 'checked';
        li.className = 'checked';
    } 
    li.id = todoObj.id;
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

todoInput.addEventListener('keydown', handleInputTodo);

const todoInit = () => {
    const storedTodoList = localStorage.getItem("todoList");
    if(storedTodoList) {
        todoList.innerHTML = "";
        todoArr = JSON.parse(storedTodoList);
        todoArr.forEach(renderTodoList);
    }
}

todoInit();