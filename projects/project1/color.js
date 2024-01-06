let backgroundColor = document.getElementById("colorPickerContainer");
let changeHexCode = document.getElementById("selectedColorHexCode");

function buttonOneClicked() {
    backgroundColor.style.backgroundColor = "#e0e0e0";
    changeHexCode.textContent = "#e0e0e0";
}

function buttonTwoClicked() {
    backgroundColor.style.backgroundColor = "#6fcf97";
    changeHexCode.textContent = "#6fcf97";
}

function buttonThreeClicked() {
    backgroundColor.style.backgroundColor = "#56ccf2";
    changeHexCode.textContent = "#56ccf2";
}

function buttonFourClicked() {
    backgroundColor.style.backgroundColor = "#bb6bd9";
    changeHexCode.textContent = "#bb6bd9";
}