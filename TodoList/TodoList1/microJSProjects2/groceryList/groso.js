let groceryList = ["Apples", "Boost Drink",
    "Butterscotch Ice Cream", "Tomato Ketchup",
    "Dairy Milk Chocolates", "Pasta"
];

let groceryListContainer = document.getElementById("groceryListContainer");

let mainHeading = document.createElement("h1");
mainHeading.textContent = "Grocery List";
mainHeading.classList.add("main-heading");
groceryListContainer.appendChild(mainHeading);

let listContainer = document.createElement("ul");
listContainer.classList.add("list-container");
groceryListContainer.appendChild(listContainer);

for (let eachListItem of groceryList) {
    let listElements = document.createElement("li");

    listElements.textContent = eachListItem;
    listContainer.appendChild(listElements);
}