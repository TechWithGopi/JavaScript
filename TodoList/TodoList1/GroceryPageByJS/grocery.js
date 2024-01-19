let bgContainerElement = document.createElement("div");
bgContainerElement.classList.add("bg-container");
document.body.appendChild(bgContainerElement);

let headingElement = document.createElement("h1");
headingElement.textContent = "Grocery List";
headingElement.classList.add("heading");
bgContainerElement.appendChild(headingElement);

let listContainerElement = document.createElement("ul");
listContainerElement.classList.add("list-container");
bgContainerElement.appendChild(listContainerElement);

let groceryArray = ["Milk", "Peanut Butter", "choco chips", "Tomato Sauce",
    "Cup Cakes", "Noodles"];

for (let eachItems of groceryArray) {
    let listElement = document.createElement("li");
    listElement.textContent = eachItems;
    listContainerElement.appendChild(listElement);
}

let checkboxElement = document.createElement('input'); 
checkboxElement.type = "checkbox"; 
checkboxElement.id = "deliveryMode"; 
bgContainerElement.appendChild(checkboxElement);

let labelElement = document.createElement("label"); 
labelElement.setAttribute("for", "deliveryMode"); 
labelElement.classList.add("label-style", "pl-1"); 
labelElement.textContent = "Need Home Delivery"; 
bgContainerElement.appendChild(labelElement); 

let breakElement = document.createElement("br"); 
bgContainerElement.appendChild(breakElement);

let buttonElement = document.createElement("button"); 
buttonElement.textContent = "Proceed to pay"; 
buttonElement.classList.add("btn", "btn-primary"); 
bgContainerElement.appendChild(buttonElement);