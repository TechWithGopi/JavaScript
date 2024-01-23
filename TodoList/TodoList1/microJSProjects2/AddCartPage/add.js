let inputId = document.getElementById("cartItemTextInput");
let listContainerElement = document.getElementById("cartItemContainer");


function onAddCart() {
    let valueOfInput = inputId.value;
    let listElements = document.createElement("li");
    listElements.textContent = valueOfInput;

    inputId.value = "";
    listContainerElement.appendChild(listElements);
}