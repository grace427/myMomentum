const todoList = document.querySelector('.todoList');
const todoInput = document.querySelector('.todoContainer input');
let todoArr = [];

const handleInputTodo = (event) => {
    if(event.code !== 'Enter') {
        return;
    }
    const todo = event.target.value;
    const todoObj = {
        id: todoArr.length + 1,
        text: todo
    }
    todoArr.push(todoObj);
    todoArr.forEach(renderTodoList);
    todoInput.value = "";
}

const renderTodoList = (todoObj) => {
    const checkBox = document.createElement('input');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    checkBox.type = 'checkbox';
    deleteBtn.innerText = "☓"
    span.innerText = todoObj.text;
    li.id = todoObj.id;
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

todoInput.addEventListener('keydown', handleInputTodo);