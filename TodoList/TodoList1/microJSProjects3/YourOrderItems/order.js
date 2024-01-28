let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];

let orderedItemsContainerElement = document.getElementById("orderedItemsContainer");
let listContainerElement = document.getElementById("listContainer");

function onDeleteItem(itemId) {
let itemElement = document.getElementById(itemId);
listContainerElement.removeChild(itemElement);
}

function onCancelItems(item) {
let itemId = "item" + item.uniqueNo;
let buttonId = "button" + item.uniqueNo;

let listElement = document.createElement("li");
listElement.classList.add("list-style", "mb-3");
listElement.id = itemId;
listElement.textContent = item.itemName;
listContainerElement.appendChild(listElement);

let buttonElement = document.createElement("button");
buttonElement.classList.add("btn", "btn-danger", "ml-3");
buttonElement.textContent = "Cancel";
buttonElement.id = buttonId;
buttonElement.onclick = function() {
    onDeleteItem(itemId);
}
listElement.appendChild(buttonElement);
}


for (let item of itemList) {
onCancelItems(item);
}