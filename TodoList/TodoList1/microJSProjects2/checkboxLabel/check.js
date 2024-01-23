let checkboxWithLabelContainer = document.getElementById("checkboxWithLabelContainer");

checkboxWithLabelContainer.classList.add("text-center", "p-5")

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
checkboxWithLabelContainer.appendChild(inputElement);

let labelcontainer = document.createElement("label");
labelcontainer.setAttribute("for", "checkbox");
labelcontainer.id = "checkboxLabel";
labelcontainer.textContent = "Click Me!";
checkboxWithLabelContainer.appendChild(labelcontainer);