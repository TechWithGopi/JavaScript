let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];


let jsonContainer = document.getElementById("jsonContainer");

let bikesContainer = document.createElement("h1");
bikesContainer.textContent = JSON.stringify(bikes);
bikesContainer.classList.add("bikes");
jsonContainer.appendChild(bikesContainer);

let personContainer = document.createElement("h1");
personContainer.textContent = JSON.stringify(person);
personContainer.classList.add("person-list")
jsonContainer.appendChild(personContainer);

let todosContainer = document.createElement("h1");
todosContainer.textContent = JSON.stringify(todos);
todosContainer.classList.add("todos-list")
jsonContainer.appendChild(todosContainer);