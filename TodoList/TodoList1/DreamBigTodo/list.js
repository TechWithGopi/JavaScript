let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let todoList = [{
        text: "Learn a High-Paying Skill",
        uniqueNo: 1
    },
    {
        text: "Build a 7 Crore worth of House",
        uniqueNo: 2
    },
    {
        text: "Marry a great partner",
        uniqueNo: 3
    }
];

let todoLength = todoList.length;

function onTodoStatusChange(checkboxId, labelId) {
    let checkboxIdElement = document.getElementById(checkboxId);
    let labelIdElement = document.getElementById(labelId);
    labelIdElement.classList.toggle("cross");
    // toggle simply makes easy to achieve the operation // 
}

/*  Instead of the above code, we can use the following code 
    if (checkboxIdElement.checked === true) {
         labelIdElement.classList.add("cross");
     } 
     else {
         labelIdElement.classList.remove("cross");
     } */
function onDltIcon(todoId) {
    let removeTodo = document.getElementById(todoId);
    todoItemsContainer.removeChild(removeTodo);
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;
    // we should use unique numbers for achieve specific operations // 

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    // why we use the onclick() here, because the operation is functioning on the input. // 
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDltIcon(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onAddTodo() {
    let userInputElement = document.getElementById('todoUserInput');
    let userInputValue = userInputElement.value;
    todoLength = todoLength + 1;
    if (userInputValue === "") {
        alert('Enter valid Text');
        return;
    }

    let newTodo = {
        text: userInputValue,
        uniqueNo: todoLength,
    }
    createAndAppendTodo(newTodo)
    userInputElement.value = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
}