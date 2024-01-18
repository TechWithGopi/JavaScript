let todoContainer = document.getElementById("todoItemsContainer"); 

let todoList = [
    {
        text: "Learn HTML"
        
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
    
    ];

function createAndAppendToDo(todo) {
            let todoElement = document.createElement("li"); 
            todoElement.classList.add("todo-items-container", "d-flex", "flex-row"); 
            todoContainer.appendChild(todoElement); 
            
            
            let todoInputElement = document.createElement("input"); 
            todoInputElement.type = "checkbox"; 
            todoInputElement.id = "checkboxInput"; 
            todoInputElement.classList.add("checkbox-input"); 
            todoElement.appendChild(todoInputElement);
            
            let labelContainer = document.createElement("div"); 
            labelContainer.classList.add("label-container", "d-flex", "flex-row"); 
            todoElement.appendChild(labelContainer); 
            
            let labelElement =  document.createElement("label"); 
            labelElement.setAttribute("for", "checkboxInput"); 
            labelElement.classList.add("checkbox-label"); 
            labelElement.textContent = todo.text;
            labelContainer.appendChild(labelElement);
            
            let dlIconContainer = document.createElement("div"); 
            dlIconContainer.classList.add("delete-icon-container");
            labelContainer.appendChild(dlIconContainer); 
            
            let delIcon = document.createElement("i"); 
            delIcon.classList.add("far", "fa-trash-alt", "delete-icon"); 
            dlIconContainer.appendChild(delIcon);
}

for (let todo of todoList) {
    createAndAppendToDo(todo);
}
